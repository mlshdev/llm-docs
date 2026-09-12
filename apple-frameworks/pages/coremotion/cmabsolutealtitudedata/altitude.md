> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmabsolutealtitudedata/altitude](https://developer.apple.com/documentation/coremotion/cmabsolutealtitudedata/altitude)

# altitude (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+ · watchOS 8.0+

The absolute altitude of the device relative to sea level, measured in meters.

## Declaration

```swift
var altitude: Double { get }
```

<a id="Discussion"></a>

## Discussion

This value can be positive or negative.

## See Also

### Accessing Altitude Data

- [accuracy](accuracy.md): The estimated uncertainty of the altimeter in meters, based on one standard deviation.
- [precision](precision.md): The recommended resolution for the altitude, in meters.

# altitude (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+ · watchOS 8.0+

The absolute altitude of the device relative to sea level, measured in meters.

## Declaration

```objectivec
@property (nonatomic, readonly) double altitude;
```

<a id="Discussion"></a>

## Discussion

This value can be positive or negative.

## See Also

### Accessing Altitude Data

- [accuracy](accuracy.md): The estimated uncertainty of the altimeter in meters, based on one standard deviation.
- [precision](precision.md): The recommended resolution for the altitude, in meters.
