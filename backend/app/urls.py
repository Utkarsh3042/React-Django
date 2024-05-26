from django.urls import path
from app import views

urlpatterns = [
    path('student/', views.StudentList.as_view())
]
