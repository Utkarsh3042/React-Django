from django.db import models

class Student(models.Model):
    student_name = models.CharField(max_length=50)
    student_email = models.CharField(max_length=100)