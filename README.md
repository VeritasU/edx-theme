Overview
========
This directory stores the Veritasu fork of the default theme for an Open edX instance. We are making this the Veritasu theme.

We've organized the tree to mimic the directory structure of the edX
codebase so that it's easy to tell where the files will end up upon
deploy. We'll use a special settings file to set the template and
staticfiles paths properly to point to these files.

Installation
=======
First, make sure to clone this directory into the `/themes` directory of your edx stack. Rename the directory `/themes/veritasu` if you haven't already

Second, edit the lms.env.json to include references to our custom pages (for example, 'features' and 'signup')

```
######################### MARKETING SITE ###############################
...
    "MKTG_URLS": {
        "ABOUT": "about_edx",
        "CONTACT": "contact",
        "FAQ": "help_edx",
        "COURSES": "courses",
        "ROOT": "root",
        "TOS": "tos",
        "HONOR": "honor",
        "PRIVACY": "privacy_edx",
        "JOBS": "jobs",
        "NEWS": "news",
        "PRESS": "press",
        "BLOG": "edx-blog",
        "DONATE": "donate",
        "FEATURES" : "features",
        "SIGNUP" : "signup"
    } 

...
```

Finally, on the devstack, once you have your vagant instance up and running, you'll want to edit `lms.env.json` according to the instructions here: https://github.com/Stanford-Online/edx-theme


License
=======

The code in this repo is licensed under the Apache 2.0 License.
See [LICENSE.txt](LICENSE.txt) for more info.
