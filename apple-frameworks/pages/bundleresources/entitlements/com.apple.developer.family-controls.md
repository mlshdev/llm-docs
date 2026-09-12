> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.family-controls](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.family-controls)

# Family Controls

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

A Boolean value that indicates whether the app can request or revoke authorization to provide parental controls.

## Details

`com.apple.developer.family-controls`

<a id="Discussion"></a>

## Discussion

You must add the Family Controls entitlement to your app before you call the [AuthorizationCenter](https://developer.apple.com/documentation/familycontrols/authorizationcenter) class’s [requestAuthorization(completionHandler:)](https://developer.apple.com/documentation/familycontrols/authorizationcenter/requestauthorization%28completionhandler:%29) or [revokeAuthorization(completionHandler:)](https://developer.apple.com/documentation/familycontrols/authorizationcenter/revokeauthorization%28completionhandler:%29) methods.

Adding the Family Controls capability to your app automatically sets this entitlement. Before submitting your app to the App Store, you must [request permission](https://developer.apple.com/contact/request/family-controls-distribution) to use the entitlement. For more information, see [Adding capabilities to your app](https://developer.apple.com/documentation/xcode/adding-capabilities-to-your-app).

## See Also

### Family controls

- [Family Controls App and Website Usage](com.apple.developer.family-controls.app-and-website-usage.md): A Boolean value that indicates whether the app may, with the person’s permission, access app and website usage information from the current device.
