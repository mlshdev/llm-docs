> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cndetectiontrack-61x7g/detectionnearesttime:](https://developer.apple.com/documentation/cinematic/cndetectiontrack-61x7g/detectionnearesttime:)

# detectionNearestTime:

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Returns the array of detections in the detection track nearest a given time.

## Declaration

```objectivec
- (CNDetection *) detectionNearestTime:(CMTime) time;
```

## Parameters

- `time`: The time.

<a id="return-value"></a>

## Return Value

A number representing a properly time-stamped detection. The return value is only appropriate for discrete detection tracks.
