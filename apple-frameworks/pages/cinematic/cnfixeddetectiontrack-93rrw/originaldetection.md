> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnfixeddetectiontrack-93rrw/originaldetection](https://developer.apple.com/documentation/cinematic/cnfixeddetectiontrack-93rrw/originaldetection)

# originalDetection

**Framework:** Cinematic  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

The original detection based on the fixed detection track.

## Declaration

```swift
var originalDetection: CNDetection? { get }
```

<a id="Discussion"></a>

## Discussion

This is the way to determine the time and bounds from which the fixed focus originated. This detection isn’t part of the detection track and has a different detection ID or none.

> **Important**

>  To get a detection from the fixed detection track, use detectionAtOrBeforeTime: instead, which returns a properly time-stamped detection.
