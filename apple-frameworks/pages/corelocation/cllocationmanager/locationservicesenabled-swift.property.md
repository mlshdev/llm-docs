> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanager/locationservicesenabled-swift.property](https://developer.apple.com/documentation/corelocation/cllocationmanager/locationservicesenabled-swift.property)

# locationServicesEnabled (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** macOS 10.15+ (deprecated in 10.15)

A Boolean value indicating whether location services are enabled on the device.

> Use the [locationServicesEnabled()](locationservicesenabled%28%29.md) class method instead.

## Declaration

```swift
var locationServicesEnabled: Bool { get }
```

<a id="Discussion"></a>

## Discussion

In iOS, the user can enable or disable location services using the controls in Settings \> Location Services. In macOS, the user can enable or disable location services from the Security & Privacy system preference.

If this property contains the value [false](https://developer.apple.com/documentation/swift/false) and you start location updates anyway, the Core Location framework prompts the user with a confirmation alert asking whether location services should be reenabled.

<a id="Special-Considerations"></a>

### Special Considerations

In iOS, this property is declared as `nonatomic`. In macOS, it is declared as `atomic`.

## See Also

### Properties

- [headingAvailable](headingavailable-swift.property.md): Deprecated. A Boolean value indicating whether the location manager is able to generate heading-related events.
- [purpose](purpose.md): Deprecated. An app-provided string that describes the reason for using location services.
- [rangedRegions](rangedregions.md): Deprecated. The set of regions currently being tracked using ranging.

# locationServicesEnabled (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 4.0) · iPadOS 2.0+ (deprecated in 4.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.15+ (deprecated in 10.15)

A Boolean value indicating whether location services are enabled on the device.

> Use the [locationServicesEnabled](locationservicesenabled%28%29.md) class method instead.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL locationServicesEnabled;
```

<a id="Discussion"></a>

## Discussion

In iOS, the user can enable or disable location services using the controls in Settings \> Location Services. In macOS, the user can enable or disable location services from the Security & Privacy system preference.

If this property contains the value [false](https://developer.apple.com/documentation/swift/false) and you start location updates anyway, the Core Location framework prompts the user with a confirmation alert asking whether location services should be reenabled.

<a id="Special-Considerations"></a>

### Special Considerations

In iOS, this property is declared as `nonatomic`. In macOS, it is declared as `atomic`.

## See Also

### Properties

- [headingAvailable](headingavailable-swift.property.md): Deprecated. A Boolean value indicating whether the location manager is able to generate heading-related events.
- [purpose](purpose.md): Deprecated. An app-provided string that describes the reason for using location services.
- [rangedRegions](rangedregions.md): Deprecated. The set of regions currently being tracked using ranging.
