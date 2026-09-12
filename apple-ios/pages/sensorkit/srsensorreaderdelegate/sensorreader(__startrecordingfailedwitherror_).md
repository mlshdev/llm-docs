> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srsensorreaderdelegate/sensorreader(_:startrecordingfailedwitherror:)](https://developer.apple.com/documentation/sensorkit/srsensorreaderdelegate/sensorreader(_:startrecordingfailedwitherror:))

# sensorReader(\_:startRecordingFailedWithError:) (Swift)

**Framework:** SensorKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0)

Provides the delegate with a reason when the reader fails to record.

> Use SRReader\<Sensor\> class

## Declaration

```swift
optional func sensorReader(_ reader: SRSensorReader, startRecordingFailedWithError error: any Error)
```

## Parameters

- `reader`: The sensor reader that failed to start recording.
- `error`: An object that describes the cause of failure.

## See Also

### Recording Data

- [sensorReaderWillStartRecording(\_:)](sensorreaderwillstartrecording%28__%29.md): Deprecated. Notifies the delegate when a reader starts recording.
- [sensorReaderDidStopRecording(\_:)](sensorreaderdidstoprecording%28__%29.md): Deprecated. Notifies the delegate when a reader stops recording.
- [sensorReader(\_:stopRecordingFailedWithError:)](sensorreader%28__stoprecordingfailedwitherror_%29.md): Deprecated. Provides the delegate with a reason when the reader fails to stop recording.

# sensorReader:startRecordingFailedWithError: (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Provides the delegate with a reason when the reader fails to record.

## Declaration

```objectivec
- (void) sensorReader:(SRSensorReader *) reader startRecordingFailedWithError:(NSError *) error;
```

## Parameters

- `reader`: The sensor reader that failed to start recording.
- `error`: An object that describes the cause of failure.

## See Also

### Recording Data

- [sensorReaderWillStartRecording:](sensorreaderwillstartrecording%28__%29.md): Deprecated. Notifies the delegate when a reader starts recording.
- [sensorReaderDidStopRecording:](sensorreaderdidstoprecording%28__%29.md): Deprecated. Notifies the delegate when a reader stops recording.
- [sensorReader:stopRecordingFailedWithError:](sensorreader%28__stoprecordingfailedwitherror_%29.md): Deprecated. Provides the delegate with a reason when the reader fails to stop recording.
