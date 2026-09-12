> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srabsolutetimefromcfabsolutetime](https://developer.apple.com/documentation/sensorkit/srabsolutetimefromcfabsolutetime)

# SRAbsoluteTimeFromCFAbsoluteTime

**Interface language:** Objective-C

**Framework:** SensorKit  
**Kind:** Function  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Provides an absolute time equivalent to the argument core-foundation absolute time.

## Declaration

```objectivec
extern SRAbsoluteTime SRAbsoluteTimeFromCFAbsoluteTime(CFAbsoluteTime cf);
```

## Parameters

- `cf`: The core-foundation absolute time to convert.

<a id="return-value"></a>

## Return Value

An absolute time equivalent to the argument core-foundatoin absolute time.

## See Also

### Defining the Time Range

- [from](srfetchrequest/from.md): Fetches sample information that occurs after this time.
- [to](srfetchrequest/to.md): Fetches sample information that occurs before this time.
- [SRAbsoluteTime](srabsolutetime.md): A value that describes when the system records the data.
- [SRAbsoluteTimeGetCurrent](srabsolutetime/current%28%29.md): Provides the current absolute time.
- [SRAbsoluteTimeFromContinuousTime](srabsolutetimefromcontinuoustime.md): Provides an absolute time equivalent to the argument continuous time.
- [SRAbsoluteTimeToCFAbsoluteTime](srabsolutetime/tocfabsolutetime%28%29.md): Converts an absolute time to a core-foundation absolute time.
