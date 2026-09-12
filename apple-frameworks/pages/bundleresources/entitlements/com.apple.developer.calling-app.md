> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.calling-app](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.calling-app)

# Default Calling App

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · watchOS 11.2+

A Boolean value that indicates whether an app can be the default calling app on someone’s device.

## Details

`com.apple.developer.calling-app`

<a id="Discussion"></a>

## Discussion

Add the Default Calling App entitlement to your app by following these steps:

1. In the Xcode project navigator, select your app’s target, and then the Signing & Capabilities tab.
2. Add a new capability by clicking the + Capability button and then type “Default Calling” in the search field.
3. Double-click the Default Calling App entry to add the entitlement to your app.

Xcode displays the Default Calling App entitlement, along with any other entitlements, in the capabilities list under your app’s signing information. For more information, see [Preparing your app to be the default calling app](../../callkit/preparing-your-app-to-be-the-default-calling-app.md).
