> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cinematic/cndetectiontrack-2bxtd/detectiongroupid

# detectionGroupID

**Framework:** Cinematic  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

The detection group ID of the subject detected by the track.

## Declaration

```swift
var detectionGroupID: CNDetectionGroupID { get }
```

<a id="Discussion"></a>

## Discussion

The detection group ID associates related detections such as the face and torso of the same person.
