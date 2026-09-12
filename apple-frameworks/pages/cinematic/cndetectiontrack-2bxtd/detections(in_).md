> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cndetectiontrack-2bxtd/detections(in:)](https://developer.apple.com/documentation/cinematic/cndetectiontrack-2bxtd/detections(in:))

# detections(in:)

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

Returns the array of detections in the detection track within the given time range.

## Declaration

```swift
func detections(in timeRange: CMTimeRange) -> [CNDetection]
```

## Parameters

- `timeRange`: The time range of interest.

<a id="return-value"></a>

## Return Value

The array of detections in the detection track within the given time range. The return value is only appropriate for discrete detection tracks.
