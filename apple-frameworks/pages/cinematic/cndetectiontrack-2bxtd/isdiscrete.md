> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cndetectiontrack-2bxtd/isdiscrete](https://developer.apple.com/documentation/cinematic/cndetectiontrack-2bxtd/isdiscrete)

# isDiscrete

**Framework:** Cinematic  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

A flag determining if the detection track has discrete detections, otherwise continuous.

## Declaration

```swift
var isDiscrete: Bool { get }
```

<a id="Discussion"></a>

## Discussion

A discrete detection track returns detections only at the specific times a detection occurs. A continuous detection track returns a detection for any requested time and an empty array for time ranges.
