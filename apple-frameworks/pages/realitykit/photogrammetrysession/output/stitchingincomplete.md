> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysession/output/stitchingincomplete](https://developer.apple.com/documentation/realitykit/photogrammetrysession/output/stitchingincomplete)

# PhotogrammetrySession.Output.stitchingIncomplete

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

The session reconstruction could not fully stitch all images of the object.

## Declaration

```swift
case stitchingIncomplete
```

<a id="discussion"></a>

## Discussion

This may indicate that sections of the reconstructed model (such as the bottom after a flip) are incomplete. This may occur if a non-rigid object is flipped such that its shape subtly changes before and after the flip or if an object is shiny and lighting causes highlight changes across a flip.  It is recommended that users are reminded of proper object and environment selection if this message is output, and that they check their model for potential issues.
