> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srsensorreaderdelegate/sensorreaderdidstoprecording(_:)](https://developer.apple.com/documentation/sensorkit/srsensorreaderdelegate/sensorreaderdidstoprecording(_:))

# sensorReaderDidStopRecording(\_:) (Swift)

**Framework:** SensorKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0)

Notifies the delegate when a reader stops recording.

> Use SRReader\<Sensor\> class

## Declaration

```swift
optional func sensorReaderDidStopRecording(_ reader: SRSensorReader)
```

## Parameters

- `reader`: The reader that stopped recording.

## See Also

### Recording Data

- [sensorReaderWillStartRecording(\_:)](sensorreaderwillstartrecording%28__%29.md): Deprecated. Notifies the delegate when a reader starts recording.
- [sensorReader(\_:startRecordingFailedWithError:)](sensorreader%28__startrecordingfailedwitherror_%29.md): Deprecated. Provides the delegate with a reason when the reader fails to record.
- [sensorReader(\_:stopRecordingFailedWithError:)](sensorreader%28__stoprecordingfailedwitherror_%29.md): Deprecated. Provides the delegate with a reason when the reader fails to stop recording.

# sensorReaderDidStopRecording: (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Notifies the delegate when a reader stops recording.

## Declaration

```objectivec
- (void) sensorReaderDidStopRecording:(SRSensorReader *) reader;
```

## Parameters

- `reader`: The reader that stopped recording.

## See Also

### Recording Data

- [sensorReaderWillStartRecording:](sensorreaderwillstartrecording%28__%29.md): Deprecated. Notifies the delegate when a reader starts recording.
- [sensorReader:startRecordingFailedWithError:](sensorreader%28__startrecordingfailedwitherror_%29.md): Deprecated. Provides the delegate with a reason when the reader fails to record.
- [sensorReader:stopRecordingFailedWithError:](sensorreader%28__stoprecordingfailedwitherror_%29.md): Deprecated. Provides the delegate with a reason when the reader fails to stop recording.
