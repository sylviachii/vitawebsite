from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def cupons(request):
    return HttpResponse("This is coupon page.")
