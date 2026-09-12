> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cndetectiontrack-2bxtd/detection(nearest:)](https://developer.apple.com/documentation/cinematic/cndetectiontrack-2bxtd/detection(nearest:))

# detection(nearest:)

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

Returns the array of detections in the detection track nearest a given time.

## Declaration

```swift
func detection(nearest time: CMTime) -> CNDetection?
```

## Parameters

- `time`: The time.

<a id="return-value"></a>

## Return Value

A number representing a properly time-stamped detection. The return value is only appropriate for discrete detection tracks.
