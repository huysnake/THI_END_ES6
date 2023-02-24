import { addProject } from "../api/project";
import { useEffect, router } from "../lib";

const AdminProjectsAddPage = () => {
    useEffect(() => {
        const form = document.querySelector("#form-add");
        const projectName = document.querySelector("#project-name");
        const projectNam = document.querySelector("#project-nam");
        const projectNme = document.querySelector("#project-nme");
        const projectAuthor = document.querySelector("#project-author");
        // const projectImages = document.querySelector("#project-images");

        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            
            try {
                // Tạo proejct mới
                const formData = {
                    name: projectName.value,
                    nam: projectNam.value,
                    nme: projectNme.value,
                    author: projectAuthor.value,
                };
                await addProject(formData);
                router.navigate("/admin/projects");
            } catch (error) {
                console.log(error);
            }
        });
    });

    // const uploadFlie = (files) => {};
    return `<div class="container pt-5">
        <form action="" id="form-add">
            <div class="form-group mb-3">
                <label for="" class="form-label ">Tên sản phẩm</label>
                <input type="text" class="form-control" id="project-name" />
            </div>
            <div class="form-group mb-3">
                <label for="" class="form-label ">Danh mục</label>
                <input type="text" class="form-control" id="project-nam" />
            </div>
            <div class="form-group mb-3">
                <label for="" class="form-label "> Thương hiệu</label>
                <input type="text" class="form-control" id="project-nme" />
            </div>

            <div class="form-group mb-3">
            <label for="" class="form-label ">ảnh sản phẩm</label>
            <input type="file" class="form-control" multiple id="project-images" />
        </div>
            <div class="form-group mb-3">
                <label for="" class="form-label">Note</label>
                <input type="text" class="form-control" id="project-author" />
            </div>
           
            <button class="btn btn-danger ">Thêm </button>
        </form>
        </div>`;
};

export default AdminProjectsAddPage;