> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cndetectiontrack-61x7g/detectionsintimerange:](https://developer.apple.com/documentation/cinematic/cndetectiontrack-61x7g/detectionsintimerange:)

# detectionsInTimeRange:

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Returns the array of detections in the detection track within the given time range.

## Declaration

```objectivec
- (NSArray<CNDetection *> *) detectionsInTimeRange:(CMTimeRange) timeRange;
```

## Parameters

- `timeRange`: The time range of interest.

<a id="return-value"></a>

## Return Value

The array of detections in the detection track within the given time range. The return value is only appropriate for discrete detection tracks.
