> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/planedetectionprovider/issupported](https://developer.apple.com/documentation/arkit/planedetectionprovider/issupported)

# isSupported

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** visionOS 1.0+

A Boolean value that indicates whether the current runtime environment supports plane detection providers.

## Declaration

```swift
static var isSupported: Bool { get }
```

## See Also

### Detecting planes

- [init(alignments:)](init%28alignments_%29.md): Creates a plane detection provider for the types of planes you want to detect.
- [allAnchors](allanchors.md): An array that contains all the plane provider’s anchors.
- [anchorUpdates](anchorupdates.md): A sequence of updates to planes a provider detects.
- [requiredAuthorizations](requiredauthorizations.md): The types of authorizations necessary for detecting planes.
