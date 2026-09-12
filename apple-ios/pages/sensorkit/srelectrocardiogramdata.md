> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srelectrocardiogramdata](https://developer.apple.com/documentation/sensorkit/srelectrocardiogramdata)

# SRElectrocardiogramData (Swift)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

A representation of the ECG data that the sensor records.

## Declaration

```swift
class SRElectrocardiogramData
```

## Topics

### Getting electrocardiogram details

- [flags](srelectrocardiogramdata/flags-swift.property.md)
- [SRElectrocardiogramData.Flags](srelectrocardiogramdata/flags-swift.struct.md): Sensor context or events that occur during a sample ECG data reading.
- [value](srelectrocardiogramdata/value.md): The electrocardiogram data in microvolts.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing ECG data

- [date](srelectrocardiogramsample/date.md): The start date of the ECG sensor data recording, not the start of the session.
- [frequency](srelectrocardiogramsample/frequency.md): The frequency in hertz that the ECG sensor records the data.
- [lead](srelectrocardiogramsample/lead-swift.property.md): The lead used to record the ECG data.
- [SRElectrocardiogramSample.Lead](srelectrocardiogramsample/lead-swift.enum.md): The location of the lead that a person uses to record the ECG data.
- [session](srelectrocardiogramsample/session.md): The session where this sample occurs.
- [SRElectrocardiogramSession](srelectrocardiogramsession.md): An object that represents ECG data that a device records during a period of time.
- [data](srelectrocardiogramsample/data.md): The data that the sensor records.

# SRElectrocardiogramData (Objective-C)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

A representation of the ECG data that the sensor records.

## Declaration

```objectivec
@interface SRElectrocardiogramData : NSObject
```

## Topics

### Getting electrocardiogram details

- [flags](srelectrocardiogramdata/flags-swift.property.md)
- [SRElectrocardiogramDataFlags](srelectrocardiogramdata/flags-swift.struct.md): Sensor context or events that occur during a sample ECG data reading.
- [value](srelectrocardiogramdata/value.md): The electrocardiogram data in microvolts.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Accessing ECG data

- [date](srelectrocardiogramsample/date.md): The start date of the ECG sensor data recording, not the start of the session.
- [frequency](srelectrocardiogramsample/frequency.md): The frequency in hertz that the ECG sensor records the data.
- [lead](srelectrocardiogramsample/lead-swift.property.md): The lead used to record the ECG data.
- [SRElectrocardiogramLead](srelectrocardiogramsample/lead-swift.enum.md): The location of the lead that a person uses to record the ECG data.
- [session](srelectrocardiogramsample/session.md): The session where this sample occurs.
- [SRElectrocardiogramSession](srelectrocardiogramsession.md): An object that represents ECG data that a device records during a period of time.
- [data](srelectrocardiogramsample/data.md): The data that the sensor records.
