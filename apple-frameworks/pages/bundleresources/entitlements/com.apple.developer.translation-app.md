> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.translation-app](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.translation-app)

# Translation

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 18.4+ · iPadOS 18.4+

A Boolean value that indicates whether an app can be the default translation app on someone’s device.

## Details

`com.apple.developer.translation-app`

<a id="Discussion"></a>

## Discussion

Add the Translation entitlement to your app by following these steps:

1. In the Xcode project navigator, select your app’s target, and then the Signing & Capabilities tab.
2. Add a new capability by clicking the + Capability button and then type “Translation” in the search field.
3. Double-click the Translation entry to add the entitlement to your app.

Xcode displays the Translation entitlement, along with any other entitlements, in the capabilities list under your app’s signing information.
