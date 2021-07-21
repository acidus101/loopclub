from django.shortcuts import render

from .serializers import SubscriberSerializer 
from rest_framework import viewsets      
from .models import Subscriber
# Create your views here.

class SubscriberView(viewsets.ModelViewSet):  
    serializer_class = SubscriberSerializer   
    queryset = Subscriber.objects.all()  
