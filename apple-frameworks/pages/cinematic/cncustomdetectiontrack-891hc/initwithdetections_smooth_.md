> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cncustomdetectiontrack-891hc/initwithdetections:smooth:](https://developer.apple.com/documentation/cinematic/cncustomdetectiontrack-891hc/initwithdetections:smooth:)

# initWithDetections:smooth:

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Initializes a custom detection track with an array of detections, optionally applying smoothing.

## Declaration

```objectivec
- (instancetype) initWithDetections:(NSArray<CNDetection *> *) detections smooth:(BOOL) applySmoothing;
```

## Parameters

- `detections`: An array of detections.
- `applySmoothing`: A flag that instructs the framework to apply a smoothing algorithm. The smoothing algorithm used, is the same that’s used for built-in detections during recording. It compensates for some amount of jitter in the disparity measure by smoothing out variability.

<a id="return-value"></a>

## Return Value

An object representing a custom detection track with an array of detections, optionally applying smoothing.
