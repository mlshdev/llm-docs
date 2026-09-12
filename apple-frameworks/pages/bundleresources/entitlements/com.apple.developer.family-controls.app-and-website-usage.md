> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.family-controls.app-and-website-usage](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.family-controls.app-and-website-usage)

# Family Controls App and Website Usage

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 26.4+ · iPadOS 26.4+

A Boolean value that indicates whether the app may, with the person’s permission, access app and website usage information from the current device.

## Details

`com.apple.developer.family-controls.app-and-website-usage`

<a id="Discussion"></a>

## Discussion

You must add this entitlement to your app before you access app and website usage information through the [Family Controls](https://developer.apple.com/documentation/familycontrols) and [Device Activity](https://developer.apple.com/documentation/deviceactivity) frameworks. This includes obtaining the [AuthorizationStatus.approvedWithDataAccess](https://developer.apple.com/documentation/familycontrols/authorizationstatus/approvedwithdataaccess) authorization status, which lets your app use [FamilyActivityData](https://developer.apple.com/documentation/familycontrols/familyactivitydata) to retrieve the actual bundle identifiers of installed applications, domain names of visited websites, and display names of activity categories. Your app requires explicit authorization from the person before it can access any of this data.

Add this entitlement to your app by enabling the Family Controls App And Website Usage on your target in Xcode. For more information, see [Adding capabilities to your app](https://developer.apple.com/documentation/xcode/adding-capabilities-to-your-app).

## See Also

### Family controls

- [Family Controls](com.apple.developer.family-controls.md): A Boolean value that indicates whether the app can request or revoke authorization to provide parental controls.
