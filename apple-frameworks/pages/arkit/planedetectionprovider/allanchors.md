> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/planedetectionprovider/allanchors](https://developer.apple.com/documentation/arkit/planedetectionprovider/allanchors)

# allAnchors

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

An array that contains all the plane provider’s anchors.

## Declaration

```swift
final var allAnchors: [PlaneAnchor] { get }
```

## See Also

### Detecting planes

- [init(alignments:)](init%28alignments_%29.md): Creates a plane detection provider for the types of planes you want to detect.
- [anchorUpdates](anchorupdates.md): A sequence of updates to planes a provider detects.
- [requiredAuthorizations](requiredauthorizations.md): The types of authorizations necessary for detecting planes.
- [isSupported](issupported.md): A Boolean value that indicates whether the current runtime environment supports plane detection providers.
