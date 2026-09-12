> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srfetchrequest/to](https://developer.apple.com/documentation/sensorkit/srfetchrequest/to)

# to (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Fetches sample information that occurs before this time.

## Declaration

```swift
var to: SRAbsoluteTime { get set }
```

<a id="Discussion"></a>

## Discussion

The framework requires the app to define a value for this property. If an app fails to define this property, the framework responds to the fetch by providing [SRError.Code.fetchRequestInvalid](../srerror/code/fetchrequestinvalid.md) to the reader delegate via [sensorReader(\_:fetching:failedWithError:)](../srsensorreaderdelegate/sensorreader%28__fetching_failedwitherror_%29.md).

## See Also

### Defining the Time Range

- [from](from.md): Fetches sample information that occurs after this time.
- [SRAbsoluteTime](../srabsolutetime.md): A value that describes when the system records the data.
- [current()](../srabsolutetime/current%28%29.md): Provides the current absolute time.
- [toCFAbsoluteTime()](../srabsolutetime/tocfabsolutetime%28%29.md): Converts an absolute time to a core-foundation absolute time.

# to (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Fetches sample information that occurs before this time.

## Declaration

```objectivec
@property (assign) SRAbsoluteTime to;
```

<a id="Discussion"></a>

## Discussion

The framework requires the app to define a value for this property. If an app fails to define this property, the framework responds to the fetch by providing [SRErrorFetchRequestInvalid](../srerror/code/fetchrequestinvalid.md) to the reader delegate via [sensorReader:fetchingRequest:failedWithError:](../srsensorreaderdelegate/sensorreader%28__fetching_failedwitherror_%29.md).

## See Also

### Defining the Time Range

- [from](from.md): Fetches sample information that occurs after this time.
- [SRAbsoluteTime](../srabsolutetime.md): A value that describes when the system records the data.
- [SRAbsoluteTimeGetCurrent](../srabsolutetime/current%28%29.md): Provides the current absolute time.
- [SRAbsoluteTimeFromCFAbsoluteTime](../srabsolutetimefromcfabsolutetime.md): Provides an absolute time equivalent to the argument core-foundation absolute time.
- [SRAbsoluteTimeFromContinuousTime](../srabsolutetimefromcontinuoustime.md): Provides an absolute time equivalent to the argument continuous time.
- [SRAbsoluteTimeToCFAbsoluteTime](../srabsolutetime/tocfabsolutetime%28%29.md): Converts an absolute time to a core-foundation absolute time.
