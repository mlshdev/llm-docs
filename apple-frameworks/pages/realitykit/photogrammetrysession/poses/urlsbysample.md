> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/photogrammetrysession/poses/urlsbysample

# urlsBySample

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

Mapping from the sample ID to the image URL in the input folder corresponding to that sample ID. This simplifies the visualization of which image in the input folder corresponds to a given computed pose.

## Declaration

```swift
var urlsBySample: [Int : URL] { get }
```

<a id="discussion"></a>

## Discussion

Note: the dictionary is empty unless a folder of images was used to create this session.  If the session is created from a custom `Sequence` it is expected that the caller has maintained the map from provided sample ID to original image location.
