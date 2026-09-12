> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srelectrocardiogramsession](https://developer.apple.com/documentation/sensorkit/srelectrocardiogramsession)

# SRElectrocardiogramSession (Swift)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

An object that represents ECG data that a device records during a period of time.

## Declaration

```swift
class SRElectrocardiogramSession
```

## Topics

### Getting session information

- [identifier](srelectrocardiogramsession/identifier.md): A unique identifier for the ECG session.
- [sessionGuidance](srelectrocardiogramsession/sessionguidance-swift.property.md): The type of session used to record the sample.
- [SRElectrocardiogramSession.SessionGuidance](srelectrocardiogramsession/sessionguidance-swift.enum.md): The type of session guidance used to record a ECG sample.
- [state](srelectrocardiogramsession/state-swift.property.md): The state of the session used to record the sample.
- [SRElectrocardiogramSession.State](srelectrocardiogramsession/state-swift.enum.md): The state of a session used to record a ECG sample.

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
- [data](srelectrocardiogramsample/data.md): The data that the sensor records.
- [SRElectrocardiogramData](srelectrocardiogramdata.md): A representation of the ECG data that the sensor records.

# SRElectrocardiogramSession (Objective-C)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

An object that represents ECG data that a device records during a period of time.

## Declaration

```objectivec
@interface SRElectrocardiogramSession : NSObject
```

## Topics

### Getting session information

- [identifier](srelectrocardiogramsession/identifier.md): A unique identifier for the ECG session.
- [sessionGuidance](srelectrocardiogramsession/sessionguidance-swift.property.md): The type of session used to record the sample.
- [SRElectrocardiogramSessionGuidance](srelectrocardiogramsession/sessionguidance-swift.enum.md): The type of session guidance used to record a ECG sample.
- [state](srelectrocardiogramsession/state-swift.property.md): The state of the session used to record the sample.
- [SRElectrocardiogramSessionState](srelectrocardiogramsession/state-swift.enum.md): The state of a session used to record a ECG sample.

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
- [data](srelectrocardiogramsample/data.md): The data that the sensor records.
- [SRElectrocardiogramData](srelectrocardiogramdata.md): A representation of the ECG data that the sensor records.
