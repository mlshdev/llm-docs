> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnobjecttracker-1n598/continuetracking(at:sourceimage:sourcedisparity:)](https://developer.apple.com/documentation/cinematic/cnobjecttracker-1n598/continuetracking(at:sourceimage:sourcedisparity:))

# continueTracking(at:sourceImage:sourceDisparity:)

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

An object that continues to track an object that you’ve started tracking, and adds a new detection to the detection track you’re building.

## Declaration

```swift
func continueTracking(at time: CMTime, sourceImage: CVPixelBuffer, sourceDisparity: CVPixelBuffer) -> CNBoundsPrediction?
```

## Parameters

- `time`: The presentation time of the first frame in the detection track.
- `sourceImage`: The image buffer containing the image.
- `sourceDisparity`: The disparity buffer containing depth information.

<a id="return-value"></a>

## Return Value

An object representing a prediction of where the object is in the source image.
