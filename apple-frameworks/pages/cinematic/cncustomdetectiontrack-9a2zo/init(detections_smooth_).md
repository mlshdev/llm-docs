> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cncustomdetectiontrack-9a2zo/init(detections:smooth:)](https://developer.apple.com/documentation/cinematic/cncustomdetectiontrack-9a2zo/init(detections:smooth:))

# init(detections:smooth:)

**Framework:** Cinematic  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

Initializes a custom detection track object with an array of detections and optionally applying smoothing.

## Declaration

```swift
init(detections: [CNDetection], smooth applySmoothing: Bool)
```

## Parameters

- `detections`: An array of detections.
- `applySmoothing`: A flag that instructs the framework to apply a smoothing algorithm. The smoothing algorithm used, is the same that’s used for built-in detections during recording. It compensates for some amount of jitter in the disparity measure by smoothing out variability.
