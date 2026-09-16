> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/volumeviewpointupdatestrategy/supported

# supported

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** visionOS 2.0+

The action should only be run when the new viewpoint is equivalent to one of the values provided through [supportedVolumeViewpoints(\_:)](../view/supportedvolumeviewpoints%28__%29.md).

## Declaration

```swift
static let supported: VolumeViewpointUpdateStrategy
```

<a id="discussion"></a>

## Discussion

The viewpoint will be equivalent to where the window bar and ornaments are presented for a volume.
