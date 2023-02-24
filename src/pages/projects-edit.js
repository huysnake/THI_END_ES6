import { getProject, updateProject } from "../api/project";
import { useEffect, router, useState } from "../lib";

const AdminProjectEditPage = (params ) => {
    const [project, setProject] = useState({});
    useEffect(() => {
        (async () => {
            try {
                setProject(await getProject(params));
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
    useEffect(() => {
        const form = document.querySelector(".form-edit");
        const projectName = document.getElementById("project-name");
        const projectNam = document.querySelector("#project-nam");
        const projectNme = document.querySelector("#project-nme");
        const projectAuthor = document.getElementById("project-author");
        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            try {
                const formData = {
                    id:params,
                    name: projectName.value,
                    nam: projectNam.value,
                    nme: projectNme.value,
                    author: projectAuthor.value,
                };
                await updateProject(formData);
                router.navigate("/admin/projects");
            } catch (error) {
                console.log(error);
            }
        });
    });
    return `<div>
        <div class="container pt-5">
        <h1>Sửa dự án</h1>
            <form action="" class="form-edit">
                <div class="form-group">
                    <label for="" class="form-label">Tên sản phẩm</label>
                    <input type="text" class="form-control" id="project-name" value="${project.name}"/>
                </div>


                <div class="form-group">
                    <label for="" class="form-label">Thương hiệu</label>
                    <input type="text" class="form-control" id="project-nam" value="${project.nam}"/>
                </div>

                <div class="form-group">
                    <label for="" class="form-label">Danh mục</label>
                    <input type="text" class="form-control" id="project-nme" value="${project.nme}"/>
                </div>
              


                <div class="form-group mb-3">
                    <label for="" class="form-label">Note</label>
                    <input type="text" class="form-control" id="project-author" value="${project.author}" />
                </div>
                <button class="btn btn-danger">sửa </button>
            </form>
            </div>
    </div>`;
};

export default AdminProjectEditPage;