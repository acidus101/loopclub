from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from .models import Subscriber

class SubscriberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscriber
        fields = ('id', 'email', 'date')