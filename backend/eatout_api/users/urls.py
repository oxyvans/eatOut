from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('dj_rest_auth.urls')),    
    path('auth/register/', include('dj_rest_auth.registration.urls'))
]