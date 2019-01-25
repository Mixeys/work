import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";

import { CategoryService } from "../../shared/services/category.service";
import { Category } from "../../shared/models/category.model";

@Component({
  selector: "mp-add-category",
  templateUrl: "./add-category.component.html",
  styleUrls: ["./add-category.component.scss"]
})
export class AddCategoryComponent implements OnInit {
  @Output() onCategoryAdd = new EventEmitter<Category>();
  constructor(private categoriesService: CategoryService) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    let { name, capacity } = form.value;
    if (capacity < 0) capacity *= -1;
    const category = new Category(name, capacity);
    this.categoriesService
      .addCategory(category)
      .subscribe((category: Category) => {
        form.reset();
        form.form.patchValue({ capacity: 1 });
        this.onCategoryAdd.emit(category);
      });
  }
}
