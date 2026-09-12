> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srelectrocardiogramsample/date](https://developer.apple.com/documentation/sensorkit/srelectrocardiogramsample/date)

# date (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

The start date of the ECG sensor data recording, not the start of the session.

## Declaration

```swift
var date: Date { get }
```

## See Also

### Accessing ECG data

- [frequency](frequency.md): The frequency in hertz that the ECG sensor records the data.
- [lead](lead-swift.property.md): The lead used to record the ECG data.
- [SRElectrocardiogramSample.Lead](lead-swift.enum.md): The location of the lead that a person uses to record the ECG data.
- [session](session.md): The session where this sample occurs.
- [SRElectrocardiogramSession](../srelectrocardiogramsession.md): An object that represents ECG data that a device records during a period of time.
- [data](data.md): The data that the sensor records.
- [SRElectrocardiogramData](../srelectrocardiogramdata.md): A representation of the ECG data that the sensor records.

# date (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

The start date of the ECG sensor data recording, not the start of the session.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSDate * date;
```

## See Also

### Accessing ECG data

- [frequency](frequency.md): The frequency in hertz that the ECG sensor records the data.
- [lead](lead-swift.property.md): The lead used to record the ECG data.
- [SRElectrocardiogramLead](lead-swift.enum.md): The location of the lead that a person uses to record the ECG data.
- [session](session.md): The session where this sample occurs.
- [SRElectrocardiogramSession](../srelectrocardiogramsession.md): An object that represents ECG data that a device records during a period of time.
- [data](data.md): The data that the sensor records.
- [SRElectrocardiogramData](../srelectrocardiogramdata.md): A representation of the ECG data that the sensor records.
