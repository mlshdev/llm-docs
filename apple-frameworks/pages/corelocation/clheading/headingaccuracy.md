> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clheading/headingaccuracy](https://developer.apple.com/documentation/corelocation/clheading/headingaccuracy)

# headingAccuracy (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · watchOS 2.0+

The maximum deviation (measured in degrees) between the reported heading and the true geomagnetic heading.

## Declaration

```swift
var headingAccuracy: CLLocationDirection { get }
```

<a id="Discussion"></a>

## Discussion

A positive value in this property represents the potential error between the value reported by the [magneticHeading](magneticheading.md) property and the actual direction of magnetic north. Thus, the lower the value of this property, the more accurate the heading. A negative value means that the reported heading is invalid, which can occur when the device is uncalibrated or there is strong interference from local magnetic fields.

## See Also

### Getting the heading values

- [magneticHeading](magneticheading.md): The heading (measured in degrees) relative to magnetic north.
- [trueHeading](trueheading.md): The heading (measured in degrees) relative to true north.

# headingAccuracy (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · watchOS 2.0+

The maximum deviation (measured in degrees) between the reported heading and the true geomagnetic heading.

## Declaration

```objectivec
@property (nonatomic, readonly) CLLocationDirection headingAccuracy;
```

<a id="Discussion"></a>

## Discussion

A positive value in this property represents the potential error between the value reported by the [magneticHeading](magneticheading.md) property and the actual direction of magnetic north. Thus, the lower the value of this property, the more accurate the heading. A negative value means that the reported heading is invalid, which can occur when the device is uncalibrated or there is strong interference from local magnetic fields.

## See Also

### Getting the heading values

- [magneticHeading](magneticheading.md): The heading (measured in degrees) relative to magnetic north.
- [trueHeading](trueheading.md): The heading (measured in degrees) relative to true north.
