Step to build the project:

Open terminal, for further information visit this https://facebook.github.io/react-native/docs/getting-started.html#content

1. `npm install -g react-native-cli@latest`


2. `cd ~/projects assumed we create new projects folder already`


3. `react-native init TraforiaApp`


4. `cd $_`


5. `git init`


6. `git remote add upstream https://github.com/theredfoxfire/react-native-startup`


7. `git fetch upstream`


8. `git reset --hard upstream/master`


9. `npm install`


10. running android emulator


11. Don't forget to adjust this line with your app name:


```
// file location /android/app/build.gradle

android {
 buildToolsVersion "23.0.1"

 defaultConfig {
     applicationId "com.[change name]"
     minSdkVersion 16
     targetSdkVersion 22
     versionCode 2
```

```
// file location /android/app/src/main/res/values/strings.xml
 <resources>
    <string name="app_name">[change name]</string>
 </resources>

```

```
// file location /android/app/src/main/AndroidManifest.xml

<manifest xmlns:android="http://schemas.android.com/apk/res/android"
 package="com.[change name]">

/android/app/src/main/java/com/contactspro/MainActivity.java

package com.[change name];
```

12.`react-native run-android`
