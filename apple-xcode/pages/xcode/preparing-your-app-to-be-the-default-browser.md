> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcode/preparing-your-app-to-be-the-default-browser](https://developer.apple.com/documentation/xcode/preparing-your-app-to-be-the-default-browser)

# Preparing your app to be the default web browser

**Kind:** Article

Configure your browser app so users can set it as the default on their device instead of Safari.

<a id="Overview"></a>

## Overview

In iOS 14 and later, users can select an app to be their default web browser. To make your app a choice, confirm that your app meets the requirements below, then request a managed entitlement.

<a id="Configure-your-app-to-be-a-default-browser"></a>

### Configure your app to be a default browser

The system invokes the default web browser in iOS whenever the user opens an HTTP or HTTPS link. Because this app becomes the user’s primary gateway to the internet, Apple requires that web browsing apps meet specific functional criteria to protect user privacy and ensure proper access to internet resources.

Apps express their capability to be a default web browser by using the [com.apple.developer.web-browser](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.web-browser) managed entitlement.

> **Important**

>  Request the default browser entitlement by filling out the [Default browser entitlement request form](https://developer.apple.com/contact/request/default-browser-entitlement/). In that form you can also request the [com.apple.developer.browser.app-installation](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.browser.app-installation) entitlement. If you do that and your request for the default browser entitlement is accepted you get both the default browser entitlement and the app-installation entitlement for your browser app.

<a id="Fulfill-default-browser-requirements"></a>

### Fulfill default browser requirements

Apps that register as a default web browser option must satisfy the following criteria:

- Your app must specify the HTTP and HTTPS schemes in its `Info.plist` file.
- Your app can’t use [UIWebView](https://developer.apple.com/documentation/uikit/uiwebview).
- On launch, the app must provide a text field for entering a URL, search tools for finding relevant links on the internet, or curated lists of bookmarks.

When opening an HTTP or HTTPS URL in its default configuration:

- The app must navigate directly to the specified destination and render the expected web content. Apps that redirect to unexpected locations or render content not specified in the destination’s source code don’t meet the requirements of a default web browser.
- Apps designed to operate in a parental controls or locked down mode may restrict navigation to comply with those goals.
- Your app may present a “Safe Browsing” or other warning for content suspected of phishing or other problems.
- Your app may offer a native authentication UI for a site that also offers a native web sign-in flow.

<a id="Use-default-browser-capabilities"></a>

### Use default browser capabilities

Apps that use the [com.apple.developer.web-browser](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.web-browser) managed entitlement can:

- Be an option for the user to choose as their default browser.
- Load pages from all domains with full script access.
- Use Service Workers in [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview) instances.
- Offer the Add to Home Screen action in a share sheet by including the current [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview) in the `activityItems` array when creating a [UIActivityViewController](https://developer.apple.com/documentation/uikit/uiactivityviewcontroller).

<a id="Adhere-to-browser-restrictions"></a>

### Adhere to browser restrictions

Apps that have the [com.apple.developer.web-browser](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.web-browser) managed entitlement may not claim to respond to Universal Links for specific domains. The system will ignore any such claims. Apps with the entitlement can still open Universal Links to other apps as usual.

Because of their privileged position in a user’s web browsing, browser apps should avoid unnecessary access to personal data. Apps that use any of the following `Info.plist` keys while using the [com.apple.developer.web-browser](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.web-browser) managed entitlement will be rejected:

- [NSPhotoLibraryUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nsphotolibraryusagedescription) — For saving images, your app should only specify [NSPhotoLibraryAddUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nsphotolibraryaddusagedescription). [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview) can still upload photos and files without your app needing access to a user’s entire photo library. To access individual photos your app should use [PHPickerViewController](https://developer.apple.com/documentation/photosui/phpickerviewcontroller) which doesn’t require [NSPhotoLibraryUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nsphotolibraryusagedescription), instead of [UIImagePickerController](https://developer.apple.com/documentation/uikit/uiimagepickercontroller).
- [NSLocationAlwaysUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nslocationalwaysusagedescription), [NSLocationAlwaysAndWhenInUseUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nslocationalwaysandwheninuseusagedescription) — For determining the user’s location, request while in-use authorization instead ([NSLocationWhenInUseUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nslocationwheninuseusagedescription)). Browsers are restricted from always-on location access.
- [NSHomeKitUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nshomekitusagedescription) — Browsers can’t access the user’s HomeKit database.
- [NSBluetoothAlwaysUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nsbluetoothalwaysusagedescription) — Browsers can’t poll for Bluetooth devices when the app is in the background. Browsers should use `NSBluetoothWhileInUseUsageDescription` for Bluetooth features.
- [NSHealthShareUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nshealthshareusagedescription), [NSHealthUpdateUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nshealthupdateusagedescription) — Browsers can’t access the user’s health database.

> **Note**

> [NSLocationAlwaysUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nslocationalwaysusagedescription) was deprecated in iOS 10. For more information, see [Choosing the  Location Services Authorization to Request](https://developer.apple.com/documentation/bundleresources/choosing-the-location-services-authorization-to-request).

<a id="Check-if-your-app-is-the-default-browser"></a>

### Check if your app is the default browser

To test whether someone configured your app as the default browser in iOS, call [isDefault(\_:)](https://developer.apple.com/documentation/uikit/uiapplication/isdefault%28_:%29) (Swift) or [defaultStatusForCategory:error:](https://developer.apple.com/documentation/uikit/uiapplication/defaultstatusforcategory:error:) (Objective-C), with the category [UIApplication.Category.webBrowser](https://developer.apple.com/documentation/uikit/uiapplication/category/webbrowser).

This method is rate-limited: if your app calls it too frequently, the method throws an error. The value for the key [retryAvailableDateErrorKey](https://developer.apple.com/documentation/uikit/uiapplication/categorydefaulterror/retryavailabledateerrorkey) in the error’s user info dictionary is the date at which your app can next check whether it’s the default browser.

<a id="Ship-an-alternative-browser-engine"></a>

### Ship an alternative browser engine

If your iOS browser app includes an alternative browser engine, which includes using a version of WebKit other than the framework supplied in the operating system, you need to design your browser as an app that hosts extensions to access system resources and process untrusted data. For more information, see [BrowserEngineKit](https://developer.apple.com/documentation/browserenginekit).
