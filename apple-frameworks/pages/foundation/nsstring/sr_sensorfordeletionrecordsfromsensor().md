> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/sr_sensorfordeletionrecordsfromsensor()](https://developer.apple.com/documentation/foundation/nsstring/sr_sensorfordeletionrecordsfromsensor())

# sr_sensorForDeletionRecordsFromSensor() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0)

> Use deletionRecords(matching request: SRFetchRequest) of SRReader\<Sensor\> class

## Declaration

```swift
func sr_sensorForDeletionRecordsFromSensor() -> SRSensor?
```

<a id="return-value"></a>

## Return Value

May return nil if there is no deletion record available for this sensor

<a id="discussion"></a>

## Discussion

Returns a sensor stream that contains deletion records of the sensor

This sensor stream should only be used for fetching. All other operations will be ignored. Deletion records share the recording and authorization state with their parent sensor.

# sr_sensorForDeletionRecordsFromSensor (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

## Declaration

```objectivec
- (SRSensor) sr_sensorForDeletionRecordsFromSensor;
```

<a id="return-value"></a>

## Return Value

May return nil if there is no deletion record available for this sensor

<a id="discussion"></a>

## Discussion

Returns a sensor stream that contains deletion records of the sensor

This sensor stream should only be used for fetching. All other operations will be ignored. Deletion records share the recording and authorization state with their parent sensor.
