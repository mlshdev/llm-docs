> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanager/purpose](https://developer.apple.com/documentation/corelocation/cllocationmanager/purpose)

# purpose (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** macOS 10.7+ (deprecated in 11.0)

An app-provided string that describes the reason for using location services.

> Set the purpose string using the [NSLocationWhenInUseUsageDescription](../../bundleresources/information-property-list/nslocationwheninuseusagedescription.md) key in the app’s `Info.plist` instead.

## Declaration

```swift
var purpose: String? { get set }
```

<a id="Discussion"></a>

## Discussion

If this property isn’t `nil` and the system needs to ask for the user’s consent to use location services, it displays the provided string. You can use this string to explain why your app is using location services.

You must set the value of this property prior to starting any location services. Because the string is ultimately displayed to the user, you should always load it from a localized strings file.

## See Also

### Properties

- [headingAvailable](headingavailable-swift.property.md): Deprecated. A Boolean value indicating whether the location manager is able to generate heading-related events.
- [locationServicesEnabled](locationservicesenabled-swift.property.md): Deprecated. A Boolean value indicating whether location services are enabled on the device.
- [rangedRegions](rangedregions.md): Deprecated. The set of regions currently being tracked using ranging.

# purpose (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 6.0) · iPadOS 3.2+ (deprecated in 6.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 11.0)

An app-provided string that describes the reason for using location services.

> Set the purpose string using the [NSLocationWhenInUseUsageDescription](../../bundleresources/information-property-list/nslocationwheninuseusagedescription.md) key in the app’s `Info.plist` instead.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * purpose;
```

<a id="Discussion"></a>

## Discussion

If this property isn’t `nil` and the system needs to ask for the user’s consent to use location services, it displays the provided string. You can use this string to explain why your app is using location services.

You must set the value of this property prior to starting any location services. Because the string is ultimately displayed to the user, you should always load it from a localized strings file.

## See Also

### Properties

- [headingAvailable](headingavailable-swift.property.md): Deprecated. A Boolean value indicating whether the location manager is able to generate heading-related events.
- [locationServicesEnabled](locationservicesenabled-swift.property.md): Deprecated. A Boolean value indicating whether location services are enabled on the device.
- [rangedRegions](rangedregions.md): Deprecated. The set of regions currently being tracked using ranging.
