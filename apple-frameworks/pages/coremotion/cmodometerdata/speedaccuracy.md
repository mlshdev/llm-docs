> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmodometerdata/speedaccuracy](https://developer.apple.com/documentation/coremotion/cmodometerdata/speedaccuracy)

# speedAccuracy (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 10.0+

The accuracy of the speed value.

## Declaration

```swift
var speedAccuracy: CLLocationSpeedAccuracy { get }
```

<a id="Discussion"></a>

## Discussion

This property measures the accuracy of the [speed](speed.md) property. When this property contains `0` or a positive number, the value in the `speed` property is plus or minus the specified number of meters per second. When this property contains a negative number, the value in the `speed` property is invalid.

## See Also

### Getting the location accuracy

- [verticalAccuracy](verticalaccuracy.md): The validity of the altitude values and their estimated uncertainty, measured in meters.
- [deltaDistanceAccuracy](deltadistanceaccuracy.md): The accuracy of the change in distance value.

# speedAccuracy (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 10.0+

The accuracy of the speed value.

## Declaration

```objectivec
@property (nonatomic, readonly) CLLocationSpeedAccuracy speedAccuracy;
```

<a id="Discussion"></a>

## Discussion

This property measures the accuracy of the [speed](speed.md) property. When this property contains `0` or a positive number, the value in the `speed` property is plus or minus the specified number of meters per second. When this property contains a negative number, the value in the `speed` property is invalid.

## See Also

### Getting the location accuracy

- [verticalAccuracy](verticalaccuracy.md): The validity of the altitude values and their estimated uncertainty, measured in meters.
- [deltaDistanceAccuracy](deltadistanceaccuracy.md): The accuracy of the change in distance value.
