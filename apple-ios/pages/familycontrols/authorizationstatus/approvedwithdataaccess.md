> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/familycontrols/authorizationstatus/approvedwithdataaccess](https://developer.apple.com/documentation/familycontrols/authorizationstatus/approvedwithdataaccess)

# AuthorizationStatus.approvedWithDataAccess

**Framework:** Family Controls  
**Kind:** Case  
**Availability:** iOS 26.4+ · iPadOS 26.4+

The person, parent, or guardian approved the request for authorization with access to non-tokenized family activity data.

## Declaration

```swift
case approvedWithDataAccess
```

<a id="discussion"></a>

## Discussion

This status grants everything that [AuthorizationStatus.approved](approved.md) allows, and additionally lets your app use [FamilyActivityData](../familyactivitydata.md) to fetch the actual bundle identifiers of installed applications, domain names of visited websites, and display names of activity categories instead of the opaque, tokenized representations returned under [AuthorizationStatus.approved](approved.md). It also grants access to [activityData(filteredBy:using:)](../../deviceactivity/deviceactivitydata/activitydata%28filteredby_using_%29.md).

Only one app at a time can hold this authorization status on a given device. If a person grants data access to a different app, your app’s status reverts to `.notDetermined`.

You may develop and test an app that achieves this status on devices in all regions by using an Apple-provided provisioning profile. Customer installations of your app can only achieve this status on devices located in the EU that are signed in with an Apple Account with an EU country or region. On devices outside the EU, [authorizationStatus](../authorizationcenter/authorizationstatus.md) never returns `approvedWithDataAccess`, and any attempt to access [FamilyActivityData](../familyactivitydata.md)properties fails with [FamilyControlsError.unavailable](../familycontrolserror/unavailable.md).

> **Important**

> Add the [Family Controls App and Website Usage](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.family-controls.app-and-website-usage) capability to your app before accessing [FamilyActivityData](../familyactivitydata.md). For more information, see [Adding capabilities to your app](https://developer.apple.com/documentation/xcode/adding-capabilities-to-your-app).

## See Also

### Determining the status

- [AuthorizationStatus.notDetermined](notdetermined.md): The app hasn’t requested authorization.
- [AuthorizationStatus.denied](denied.md): The person, parent, or guardian denied the request for authorization.
- [AuthorizationStatus.approved](approved.md): The person, parent, or guardian approved the request for authorization.
