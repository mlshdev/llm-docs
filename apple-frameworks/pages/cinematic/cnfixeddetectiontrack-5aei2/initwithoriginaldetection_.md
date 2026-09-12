> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnfixeddetectiontrack-5aei2/initwithoriginaldetection:](https://developer.apple.com/documentation/cinematic/cnfixeddetectiontrack-5aei2/initwithoriginaldetection:)

# initWithOriginalDetection:

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Creates a detection track with fixed focus at the disparity of an existing detection.

## Declaration

```objectivec
- (instancetype) initWithOriginalDetection:(CNDetection *) originalDetection;
```

## Parameters

- `originalDetection`: The fixed detection track, if it exists, based on the original detection.

<a id="return-value"></a>

## Return Value

An object representing a detection track with fixed focus at the disparity of an existing detection.

<a id="Discussion"></a>

## Discussion

This is the way to determine the time and bounds from which the fixed focus originated. This detection isn’t part of the detection track and has a different detection ID or none.

> **Important**

>  To get a detection from the fixed detection track, use detectionAtOrBeforeTime: instead, which returns a properly time-stamped detection.
