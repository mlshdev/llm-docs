> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.dialing-app](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.dialing-app)

# Default Dialer App

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A Boolean value that indicates whether an app can be the default dialer app on someone’s device.

## Details

`com.apple.developer.dialing-app`

<a id="Discussion"></a>

## Discussion

Add the Default Dialer App entitlement by following these steps:

1. In the Xcode project navigator, select your app’s target, and then the Signing & Capabilities tab.
2. Add a new capability by clicking the + Capability button and then type “Default Dialer” in the search field.
3. Double-click the Default Dialer App entry to add the entitlement to your app.

Xcode displays the Default Dialer App entitlement, along with any other entitlements, in the capabilities list under your app’s signing information. For more information about becoming the default dialer app, refer to [Preparing your app to be the default dialer app](../../livecommunicationkit/preparing-your-app-to-be-the-default-dialer-app.md).

## See Also

### LiveCommunicationKit

- [Default Calling App](com.apple.developer.calling-app.md): A Boolean value that indicates whether an app can be the default calling app on someone’s device.
