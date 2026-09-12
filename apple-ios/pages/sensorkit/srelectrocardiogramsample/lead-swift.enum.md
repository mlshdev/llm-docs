> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srelectrocardiogramsample/lead-swift.enum](https://developer.apple.com/documentation/sensorkit/srelectrocardiogramsample/lead-swift.enum)

# SRElectrocardiogramSample.Lead (Swift)

**Framework:** SensorKit  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

The location of the lead that a person uses to record the ECG data.

## Declaration

```swift
enum Lead
```

## Topics

### Locations

- [SRElectrocardiogramSample.Lead.leftArmMinusRightArm](lead-swift.enum/leftarmminusrightarm.md): The lead that records the sample is on the right arm.
- [SRElectrocardiogramSample.Lead.rightArmMinusLeftArm](lead-swift.enum/rightarmminusleftarm.md): The lead that records the sample is on the left arm.

### Initializers

- [init(rawValue:)](lead-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing ECG data

- [date](date.md): The start date of the ECG sensor data recording, not the start of the session.
- [frequency](frequency.md): The frequency in hertz that the ECG sensor records the data.
- [lead](lead-swift.property.md): The lead used to record the ECG data.
- [session](session.md): The session where this sample occurs.
- [SRElectrocardiogramSession](../srelectrocardiogramsession.md): An object that represents ECG data that a device records during a period of time.
- [data](data.md): The data that the sensor records.
- [SRElectrocardiogramData](../srelectrocardiogramdata.md): A representation of the ECG data that the sensor records.

# SRElectrocardiogramLead (Objective-C)

**Framework:** SensorKit  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

The location of the lead that a person uses to record the ECG data.

## Declaration

```objectivec
enum SRElectrocardiogramLead : NSInteger;
```

## Topics

### Locations

- [SRElectrocardiogramLeadLeftArmMinusRightArm](lead-swift.enum/leftarmminusrightarm.md): The lead that records the sample is on the right arm.
- [SRElectrocardiogramLeadRightArmMinusLeftArm](lead-swift.enum/rightarmminusleftarm.md): The lead that records the sample is on the left arm.

## See Also

### Accessing ECG data

- [date](date.md): The start date of the ECG sensor data recording, not the start of the session.
- [frequency](frequency.md): The frequency in hertz that the ECG sensor records the data.
- [lead](lead-swift.property.md): The lead used to record the ECG data.
- [session](session.md): The session where this sample occurs.
- [SRElectrocardiogramSession](../srelectrocardiogramsession.md): An object that represents ECG data that a device records during a period of time.
- [data](data.md): The data that the sensor records.
- [SRElectrocardiogramData](../srelectrocardiogramdata.md): A representation of the ECG data that the sensor records.
