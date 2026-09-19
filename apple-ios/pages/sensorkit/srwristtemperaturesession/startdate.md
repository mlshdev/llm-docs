> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/sensorkit/srwristtemperaturesession/startdate

# startDate (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

The time that the device records the wrist temperature.

## Declaration

```swift
var startDate: Date { get }
```

## See Also

### Getting session information

- [duration](duration.md): The number of seconds that the device records the temperature.
- [version](version.md): The version of the algorithm that analyzes the temperature.

# startDate (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

The time that the device records the wrist temperature.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSDate * startDate;
```

## See Also

### Getting session information

- [duration](duration.md): The number of seconds that the device records the temperature.
- [version](version.md): The version of the algorithm that analyzes the temperature.
