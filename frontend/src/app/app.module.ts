import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';
import { RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from "@angular/common/http";
import { ProjectsComponent } from './projects/projects.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionComponent } from './question/question.component';
import { ProjectComponent } from './project/project.component';
import { NewprojectComponent } from './newproject/newproject.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import {FormsModule} from "@angular/forms";
import { SearchPipe } from './_common/search/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    UserComponent,
    HomeComponent,
    LoginComponent,
    ProjectsComponent,
    QuestionsComponent,
    QuestionComponent,
    ProjectComponent,
    NewprojectComponent,
    NewQuestionComponent,
    SearchPipe
  ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		RouterModule,
		NgbModule,
		FontAwesomeModule,
		HttpClientModule,
		FormsModule

	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
