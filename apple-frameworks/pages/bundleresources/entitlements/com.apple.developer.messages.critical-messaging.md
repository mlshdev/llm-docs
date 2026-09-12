> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.messages.critical-messaging](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.messages.critical-messaging)

# Critical Messaging

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · watchOS 11.2+

A Boolean value that indicates whether an app can use the Critical Messaging API to send SMS messages.

## Details

`com.apple.developer.messages.critical-messaging`

<a id="Discussion"></a>

## Discussion

Add the Critical Messaging entitlement to your app by following these steps:

1. In the Xcode project navigator, select your app’s target, and then the Signing & Capabilities tab.
2. Add a new capability by clicking the + Capability button and then type “Critical Messaging” in the search field.
3. Double-click the Critical Messaging entry to add the entitlement to your app.

Xcode displays the Critical Messaging entitlement, along with any other entitlements, in the capabilities list under your app’s signing information. For more information on sending critical SMS messages from your app, see [Sending SMS messages from an app](https://developer.apple.com/documentation/messages/critical-messaging-api).

## See Also

### Messages

- [Default Messaging App](com.apple.developer.messaging-app.md): A Boolean value that indicates whether an app can be the default messaging app on someone’s device.
