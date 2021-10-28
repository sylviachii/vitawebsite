from django.db import models

class User(models.Model):
    username = models.CharField(max_length = 30,null=False)
    phone_number = models.IntegerField(max_length=10,primary_key=True,null=False,unique=True)
    email = models.EmailField(null=False)
    def __unicode__(self):
        return self.username

