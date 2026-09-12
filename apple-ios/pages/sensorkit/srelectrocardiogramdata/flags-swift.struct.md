> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srelectrocardiogramdata/flags-swift.struct](https://developer.apple.com/documentation/sensorkit/srelectrocardiogramdata/flags-swift.struct)

# SRElectrocardiogramData.Flags (Swift)

**Framework:** SensorKit  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

Sensor context or events that occur during a sample ECG data reading.

## Declaration

```swift
struct Flags
```

## Topics

### Getting context or events

- [crownTouched](flags-swift.struct/crowntouched.md): The system records the ECG data when the person touches the crown.
- [signalInvalid](flags-swift.struct/signalinvalid.md): An invalid sensor signal occurs in the ECG data.

### Initializing flags

- [init(rawValue:)](flags-swift.struct/init%28rawvalue_%29.md): Initializes an ECG flags structure.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Getting electrocardiogram details

- [flags](flags-swift.property.md)
- [value](value.md): The electrocardiogram data in microvolts.

# SRElectrocardiogramDataFlags (Objective-C)

**Framework:** SensorKit  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

Sensor context or events that occur during a sample ECG data reading.

## Declaration

```objectivec
enum SRElectrocardiogramDataFlags : NSUInteger;
```

## Topics

### Getting context or events

- [SRElectrocardiogramDataFlagsCrownTouched](flags-swift.struct/crowntouched.md): The system records the ECG data when the person touches the crown.
- [SRElectrocardiogramDataFlagsSignalInvalid](flags-swift.struct/signalinvalid.md): An invalid sensor signal occurs in the ECG data.

### Enumeration Cases

- [SRElectrocardiogramDataFlagsNone](../srelectrocardiogramdataflags/srelectrocardiogramdataflagsnone.md): Flag that indicates no context or events occur.

## See Also

### Getting electrocardiogram details

- [flags](flags-swift.property.md)
- [value](value.md): The electrocardiogram data in microvolts.
