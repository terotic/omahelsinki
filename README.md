# omahelsinki

## Installation

### Development
#### Requirements:
- PostgreSQL
- Python >3
- Virtualenv

#### Setting up
 
- Create Virtualenv env: `virtualenv -p python3 django`
- Navigate to env directory, activate env: `cd django && source bin/activate`
- Clone omahelsinki to env dir: `git clone https://github.com/City-of-Helsinki/omahelsinki.git`
- Go inside oma dir `cd omahelsinki`
- Install dependencies `pip install -r requirements.txt`
- Install dev-dependencies `pip install -r requirements-dev.txt`

#### Bundling/Compile JS assets:

```bash
yarn install
yarn build
```
#### Enable debug mode
- `touch local_settings.py`
- Inside `local_setting.py`, have `DEBUG = True`

If you experience a missing locale error, you can try configuring the locale:

#### Initialize Database (if doesnt exist)
- Check if db service is running
- Create database 

#### Serve build

```
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

#### Navigate to view
- Landing board `http://localhost:8000/`
- Profile UI `/mydata`
- Onboarding `/welcome`
