# 1. build css and js file for deploying
gulp build

# 2. create new deploy folder
rm -rf deploy
mkdir deploy

# 3. copy index.html and dist folder
cp index.html deploy
cp -rf dist deploy

# 4. go to deploy folder
cd deploy

# 5. git init and do config
git init
git config user.name "sharonchang"
git config user.email "sharon89065@gmail.com"
git remote add origin git@github.com:sharon89065/Social-media-dashboard.git
git branch gh-pages
git checkout gh-pages
git push -u origin gh-pages