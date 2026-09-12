> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/adsupport](https://developer.apple.com/documentation/adsupport)

# AdSupport (Swift)

**Framework:** AdSupport  
**Kind:** Framework  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 9.0+

Provide apps with access to an advertising identifier.

<a id="overview"></a>

## Overview

Use the AdSupport framework to obtain an advertising identifier. The [advertisingIdentifier](adsupport/asidentifiermanager/advertisingidentifier.md) is an alphanumeric string that’s unique to each device, and which you only use for advertising. On devices running iOS 14.5 and later and iPadOS 14.5 and later, your app must support [App Tracking Transparency](apptrackingtransparency.md) and define the purpose string [NSUserTrackingUsageDescription](bundleresources/information-property-list/nsusertrackingusagedescription.md) before it can get the [advertisingIdentifier](adsupport/asidentifiermanager/advertisingidentifier.md) property.

<a id="Get-an-Advertising-Identifier"></a>

### Get an Advertising Identifier

Before requesting the advertising identifier for the first time, your app must make a one-time call to [requestTrackingAuthorization(completionHandler:)](apptrackingtransparency/attrackingmanager/requesttrackingauthorization%28completionhandler_%29.md). That method presents the app-tracking authorization request to the user. The user chooses whether to allow tracking, but can change your app’s authorization at any time in Settings \> Privacy \> Tracking. You can determine the user’s intent by checking your app’s authorization status with [trackingAuthorizationStatus](apptrackingtransparency/attrackingmanager/trackingauthorizationstatus.md).

To get the advertising identifier, follow these steps:

1. Use the AdSupport framework to call the [shared()](adsupport/asidentifiermanager/shared%28%29.md) class method to retrieve an instance of [ASIdentifierManager](adsupport/asidentifiermanager.md).
2. Use the [advertisingIdentifier](adsupport/asidentifiermanager/advertisingidentifier.md) property to obtain the UUID.

The code below shows how to retrieve the advertising identifier.

```swift
import AdSupport

let sharedASIdentifierManager = ASIdentifierManager.shared()
var adID = sharedASIdentifierManager.advertisingIdentifier

```

The advertising identifier returns either a unique UUID, or all zeros. For more information on the returned value, see [advertisingIdentifier](adsupport/asidentifiermanager/advertisingidentifier.md).

For more information about asking users for permission to track, see [User Privacy and Data Use](https://developer.apple.com/app-store/user-privacy-and-data-use/).

## Topics

### Essentials

- [ASIdentifierManager](adsupport/asidentifiermanager.md): The object that contains the advertising identifier.

# AdSupport (Objective-C)

**Framework:** AdSupport  
**Kind:** Framework  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 9.0+

Provide apps with access to an advertising identifier.

<a id="overview"></a>

## Overview

Use the AdSupport framework to obtain an advertising identifier. The [advertisingIdentifier](adsupport/asidentifiermanager/advertisingidentifier.md) is an alphanumeric string that’s unique to each device, and which you only use for advertising. On devices running iOS 14.5 and later and iPadOS 14.5 and later, your app must support [App Tracking Transparency](apptrackingtransparency.md) and define the purpose string [NSUserTrackingUsageDescription](bundleresources/information-property-list/nsusertrackingusagedescription.md) before it can get the [advertisingIdentifier](adsupport/asidentifiermanager/advertisingidentifier.md) property.

<a id="Get-an-Advertising-Identifier"></a>

### Get an Advertising Identifier

Before requesting the advertising identifier for the first time, your app must make a one-time call to [requestTrackingAuthorizationWithCompletionHandler:](apptrackingtransparency/attrackingmanager/requesttrackingauthorization%28completionhandler_%29.md). That method presents the app-tracking authorization request to the user. The user chooses whether to allow tracking, but can change your app’s authorization at any time in Settings \> Privacy \> Tracking. You can determine the user’s intent by checking your app’s authorization status with [trackingAuthorizationStatus](apptrackingtransparency/attrackingmanager/trackingauthorizationstatus.md).

To get the advertising identifier, follow these steps:

1. Use the AdSupport framework to call the [sharedManager](adsupport/asidentifiermanager/shared%28%29.md) class method to retrieve an instance of [ASIdentifierManager](adsupport/asidentifiermanager.md).
2. Use the [advertisingIdentifier](adsupport/asidentifiermanager/advertisingidentifier.md) property to obtain the UUID.

The code below shows how to retrieve the advertising identifier.

```swift
import AdSupport

let sharedASIdentifierManager = ASIdentifierManager.shared()
var adID = sharedASIdentifierManager.advertisingIdentifier

```

The advertising identifier returns either a unique UUID, or all zeros. For more information on the returned value, see [advertisingIdentifier](adsupport/asidentifiermanager/advertisingidentifier.md).

For more information about asking users for permission to track, see [User Privacy and Data Use](https://developer.apple.com/app-store/user-privacy-and-data-use/).

## Topics

### Essentials

- [ASIdentifierManager](adsupport/asidentifiermanager.md): The object that contains the advertising identifier.
