> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/familycontrols/familyactivitydata](https://developer.apple.com/documentation/familycontrols/familyactivitydata)

# FamilyActivityData

**Framework:** Family Controls  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+

An interface to a person’s family activity data.

## Declaration

```swift
class FamilyActivityData
```

<a id="overview"></a>

## Overview

To fetch a person’s family activity data, use [installedApplications](familyactivitydata/installedapplications.md), [visitedWebDomains](familyactivitydata/visitedwebdomains.md), or [activityCategories](familyactivitydata/activitycategories.md) based on the type of data you need.

<a id="Region-support-authorization-and-entitlement"></a>

### Region support, authorization, and entitlement

You can develop and test an app that uses this class on devices in any region. Customer installations of your app can only use the class on devices located in the EU that are signed in with an Apple Account with an EU country or region.

Your app’s authorization status needs to be [AuthorizationStatus.approvedWithDataAccess](authorizationstatus/approvedwithdataaccess.md) to use this class.

Your app needs the  [Family Controls App and Website Usage](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.family-controls.app-and-website-usage) entitlement to use this class. Enable the capability on your Xcode target to add the entitlement to your app. For more information, see [Adding capabilities to your app](https://developer.apple.com/documentation/xcode/adding-capabilities-to-your-app).

## Topics

### Accessing activity data

- [shared](familyactivitydata/shared.md): A shared instance for accessing a person’s family activity data.
- [activityCategories](familyactivitydata/activitycategories.md): The set of all possible activity categories.
- [installedApplications](familyactivitydata/installedapplications.md): Applications someone installs on a device.
- [visitedWebDomains](familyactivitydata/visitedwebdomains.md): Web domains someone visits on their device.
