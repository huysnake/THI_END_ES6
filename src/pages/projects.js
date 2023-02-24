import { deleteProject, getProjects } from "../api/project";
import { useEffect, useState } from "../lib";
import axios from "axios";


const AdminProjectsPage = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                setProjects(await getProjects());
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    useEffect(function () {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            btn.addEventListener("click", async () => {
                try {
                    const id = btn.dataset.id;
                    console.log(id);
                    deleteProject(id).then(() => {
                        const newProjects = projects.filter((project) => project.id != id);
                        setProjects(newProjects);
                    });
                } catch (error) {
                    console.log(error);
                }
            });
        }
    });



    return `
    <h1>Quản lý dự án</h1>
    <div class="container pt-5 text-bg-dark p-3">
    
    <table class="table table-bordered text-bg-secondary p-3">
            <thead class="bg-success">
                <tr>
                    <th>#</th>
                    <th>Tên sản phẩm</th>
                    <th>Danh mục</th>
                    <th>Thương hiệu</th>
                    <th>Hình ảnh</th>
                    <th>thao tác</th>
                    <th>thao tác</th>
                </tr>
            </thead>
            <tbody>
            ${projects
                .map((project, index) => {
                    return `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${project.name}</td>
                        <td>${project.nam}</td>
                        <td>${project.nme}</td>
                        <td></td>
                        <td>
                            <button data-name="Dat" data-id="${
                                project.id
                            }"class="btn btn-danger btn-remove">Remove</button>
                           
                        </td>

                        <td> <a class="btn btn-danger btn-edit" href="/admin/projectsEdit/${project.id}">Edit</a></td>
                    </tr>
                `;
                })
                .join("")} 
            
            </tbody>
        </table>
</div>


`;
  
}

export default AdminProjectsPage;