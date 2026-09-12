> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srsensorreaderdelegate/sensorreader(_:stoprecordingfailedwitherror:)](https://developer.apple.com/documentation/sensorkit/srsensorreaderdelegate/sensorreader(_:stoprecordingfailedwitherror:))

# sensorReader(\_:stopRecordingFailedWithError:) (Swift)

**Framework:** SensorKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0)

Provides the delegate with a reason when the reader fails to stop recording.

> Use SRReader\<Sensor\> class

## Declaration

```swift
optional func sensorReader(_ reader: SRSensorReader, stopRecordingFailedWithError error: any Error)
```

## Parameters

- `reader`: The sensor reader that failed to stop recording.
- `error`: An object that describes the cause of failure.

## See Also

### Recording Data

- [sensorReaderWillStartRecording(\_:)](sensorreaderwillstartrecording%28__%29.md): Deprecated. Notifies the delegate when a reader starts recording.
- [sensorReader(\_:startRecordingFailedWithError:)](sensorreader%28__startrecordingfailedwitherror_%29.md): Deprecated. Provides the delegate with a reason when the reader fails to record.
- [sensorReaderDidStopRecording(\_:)](sensorreaderdidstoprecording%28__%29.md): Deprecated. Notifies the delegate when a reader stops recording.

# sensorReader:stopRecordingFailedWithError: (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Provides the delegate with a reason when the reader fails to stop recording.

## Declaration

```objectivec
- (void) sensorReader:(SRSensorReader *) reader stopRecordingFailedWithError:(NSError *) error;
```

## Parameters

- `reader`: The sensor reader that failed to stop recording.
- `error`: An object that describes the cause of failure.

## See Also

### Recording Data

- [sensorReaderWillStartRecording:](sensorreaderwillstartrecording%28__%29.md): Deprecated. Notifies the delegate when a reader starts recording.
- [sensorReader:startRecordingFailedWithError:](sensorreader%28__startrecordingfailedwitherror_%29.md): Deprecated. Provides the delegate with a reason when the reader fails to record.
- [sensorReaderDidStopRecording:](sensorreaderdidstoprecording%28__%29.md): Deprecated. Notifies the delegate when a reader stops recording.
