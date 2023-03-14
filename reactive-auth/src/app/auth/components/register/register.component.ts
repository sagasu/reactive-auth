import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { registerAction } from "../../store/actions";

@Component({
    selector: 'ra-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
    form: FormGroup

    constructor(private fb: FormBuilder, private store: Store) {
        this.form = this.fb.group({});
    }

    ngOnInit(): void{
        this.initializeForm()
    }

    initializeForm(): void {
        this.form = this.fb.group({
            username: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required]
        })
        console.log('initialize form')    
    }

    onSubmit():void{
        console.log('initialize form', this.form.value, this.form.valid)  
        this.store.dispatch(registerAction(this.form.value))
    }
}