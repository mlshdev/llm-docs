> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/sensorkit/srwristtemperaturesession/duration

# duration (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

The number of seconds that the device records the temperature.

## Declaration

```swift
var duration: TimeInterval { get }
```

## See Also

### Getting session information

- [startDate](startdate.md): The time that the device records the wrist temperature.
- [version](version.md): The version of the algorithm that analyzes the temperature.

# duration (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

The number of seconds that the device records the temperature.

## Declaration

```objectivec
@property (nonatomic, readonly) NSTimeInterval duration;
```

## See Also

### Getting session information

- [startDate](startdate.md): The time that the device records the wrist temperature.
- [version](version.md): The version of the algorithm that analyzes the temperature.
