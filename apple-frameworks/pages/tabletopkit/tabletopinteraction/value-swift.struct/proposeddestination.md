> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopinteraction/value-swift.struct/proposeddestination](https://developer.apple.com/documentation/tabletopkit/tabletopinteraction/value-swift.struct/proposeddestination)

# proposedDestination

**Framework:** TabletopKit  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

The proposed destination of the main interaction object, computed from the current pose of the object. During a toss simulation, the proposed destination is only updated if there is only one tossed equipment and it is the currently controlled equipment.

## Declaration

```swift
var proposedDestination: TabletopInteraction.Destination? { get }
```

## See Also

### Getting the proposed locations

- [proposedFlip](proposedflip.md): Was the object flipped from the start of this interaction
