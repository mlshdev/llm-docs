> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnfixeddetectiontrack-5aei2/originaldetection](https://developer.apple.com/documentation/cinematic/cnfixeddetectiontrack-5aei2/originaldetection)

# originalDetection

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

The original detection based on the fixed detection track.

## Declaration

```objectivec
@property (strong, readonly, nullable) CNDetection * originalDetection;
```

<a id="Discussion"></a>

## Discussion

This is the way to determine the time and bounds from which the fixed focus originated. This detection isn’t part of the detection track and has a different detection ID or none.

> **Important**

>  To get a detection from the fixed detection track, use detectionAtOrBeforeTime: instead, which returns a properly time-stamped detection.
