> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srsensorreaderdelegate/sensorreaderwillstartrecording(_:)](https://developer.apple.com/documentation/sensorkit/srsensorreaderdelegate/sensorreaderwillstartrecording(_:))

# sensorReaderWillStartRecording(\_:) (Swift)

**Framework:** SensorKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0)

Notifies the delegate when a reader starts recording.

> Use SRReader\<Sensor\> class

## Declaration

```swift
optional func sensorReaderWillStartRecording(_ reader: SRSensorReader)
```

## Parameters

- `reader`: The reader that stopped recording.

## See Also

### Recording Data

- [sensorReader(\_:startRecordingFailedWithError:)](sensorreader%28__startrecordingfailedwitherror_%29.md): Deprecated. Provides the delegate with a reason when the reader fails to record.
- [sensorReaderDidStopRecording(\_:)](sensorreaderdidstoprecording%28__%29.md): Deprecated. Notifies the delegate when a reader stops recording.
- [sensorReader(\_:stopRecordingFailedWithError:)](sensorreader%28__stoprecordingfailedwitherror_%29.md): Deprecated. Provides the delegate with a reason when the reader fails to stop recording.

# sensorReaderWillStartRecording: (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Notifies the delegate when a reader starts recording.

## Declaration

```objectivec
- (void) sensorReaderWillStartRecording:(SRSensorReader *) reader;
```

## Parameters

- `reader`: The reader that stopped recording.

## See Also

### Recording Data

- [sensorReader:startRecordingFailedWithError:](sensorreader%28__startrecordingfailedwitherror_%29.md): Deprecated. Provides the delegate with a reason when the reader fails to record.
- [sensorReaderDidStopRecording:](sensorreaderdidstoprecording%28__%29.md): Deprecated. Notifies the delegate when a reader stops recording.
- [sensorReader:stopRecordingFailedWithError:](sensorreader%28__stoprecordingfailedwitherror_%29.md): Deprecated. Provides the delegate with a reason when the reader fails to stop recording.
