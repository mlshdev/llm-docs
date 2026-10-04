> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cinematic/cndetection-swift.struct/detectionid

# detectionID

**Framework:** Cinematic  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

An unique identifier assigned by the Cinematic script to all detections of the same subject and detection type across time.

## Declaration

```swift
var detectionID: CNDetectionID? { get }
```

<a id="Discussion"></a>

## Discussion

When you build a custom detection tract and add it to the script, the system assigns the detection ID.
