> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.messaging-app](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.messaging-app)

# Default Messaging App

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 18.2+ · iPadOS 18.2+

A Boolean value that indicates whether an app can be the default messaging app on someone’s device.

## Details

`com.apple.developer.messaging-app`

<a id="Discussion"></a>

## Discussion

Add the Default Messaging App entitlement to your app by following these steps:

1. In the Xcode project navigator, select your app’s target, and then the Signing & Capabilities tab
2. Add a new capability by clicking the + Capability button and then type “Default Messaging””” in the search field.
3. Double-click the Default Messaging App entry to add the entitlement to your app.

Xcode displays the Default Messaging App entitlement, along with any other entitlements, in the capabilities list under your app’s signing information. For more information on preparing your app to become the default messaging app, see [Preparing your app to be the default messaging app](https://developer.apple.com/documentation/messages/preparing-your-app-to-be-the-default-messaging-app).

## See Also

### Messages

- [Critical Messaging](com.apple.developer.messages.critical-messaging.md): A Boolean value that indicates whether an app can use the Critical Messaging API to send SMS messages.
