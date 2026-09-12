> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/planedetectionprovider/init(alignments:)](https://developer.apple.com/documentation/arkit/planedetectionprovider/init(alignments:))

# init(alignments:)

**Framework:** ARKit  
**Kind:** Initializer  
**Availability:** visionOS 1.0+

Creates a plane detection provider for the types of planes you want to detect.

## Declaration

```swift
init(alignments: [PlaneAnchor.Alignment] = [.horizontal, .vertical])
```

## Parameters

- `alignments`: The types of planes you want to detect — horizontal, vertical, or both.

## See Also

### Detecting planes

- [allAnchors](allanchors.md): An array that contains all the plane provider’s anchors.
- [anchorUpdates](anchorupdates.md): A sequence of updates to planes a provider detects.
- [requiredAuthorizations](requiredauthorizations.md): The types of authorizations necessary for detecting planes.
- [isSupported](issupported.md): A Boolean value that indicates whether the current runtime environment supports plane detection providers.
