> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/planedetectionprovider/anchorupdates](https://developer.apple.com/documentation/arkit/planedetectionprovider/anchorupdates)

# anchorUpdates

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

A sequence of updates to planes a provider detects.

## Declaration

```swift
final var anchorUpdates: AnchorUpdateSequence<PlaneAnchor> { get }
```

<a id="Discussion"></a>

## Discussion

The system adds, updates, or removes plane anchors when this sequence provides updates.

## See Also

### Detecting planes

- [init(alignments:)](init%28alignments_%29.md): Creates a plane detection provider for the types of planes you want to detect.
- [allAnchors](allanchors.md): An array that contains all the plane provider’s anchors.
- [requiredAuthorizations](requiredauthorizations.md): The types of authorizations necessary for detecting planes.
- [isSupported](issupported.md): A Boolean value that indicates whether the current runtime environment supports plane detection providers.
