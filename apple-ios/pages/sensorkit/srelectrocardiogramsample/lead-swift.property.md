> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srelectrocardiogramsample/lead-swift.property](https://developer.apple.com/documentation/sensorkit/srelectrocardiogramsample/lead-swift.property)

# lead (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

The lead used to record the ECG data.

## Declaration

```swift
var lead: SRElectrocardiogramSample.Lead { get }
```

## See Also

### Accessing ECG data

- [date](date.md): The start date of the ECG sensor data recording, not the start of the session.
- [frequency](frequency.md): The frequency in hertz that the ECG sensor records the data.
- [SRElectrocardiogramSample.Lead](lead-swift.enum.md): The location of the lead that a person uses to record the ECG data.
- [session](session.md): The session where this sample occurs.
- [SRElectrocardiogramSession](../srelectrocardiogramsession.md): An object that represents ECG data that a device records during a period of time.
- [data](data.md): The data that the sensor records.
- [SRElectrocardiogramData](../srelectrocardiogramdata.md): A representation of the ECG data that the sensor records.

# lead (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

The lead used to record the ECG data.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) SRElectrocardiogramLead lead;
```

## See Also

### Accessing ECG data

- [date](date.md): The start date of the ECG sensor data recording, not the start of the session.
- [frequency](frequency.md): The frequency in hertz that the ECG sensor records the data.
- [SRElectrocardiogramLead](lead-swift.enum.md): The location of the lead that a person uses to record the ECG data.
- [session](session.md): The session where this sample occurs.
- [SRElectrocardiogramSession](../srelectrocardiogramsession.md): An object that represents ECG data that a device records during a period of time.
- [data](data.md): The data that the sensor records.
- [SRElectrocardiogramData](../srelectrocardiogramdata.md): A representation of the ECG data that the sensor records.
