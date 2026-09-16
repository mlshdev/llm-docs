> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/worldscalingbehavior/automatic

# automatic

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** visionOS 2.0+

The scaling behavior that is standard for the window’s style.

## Declaration

```swift
static var automatic: WorldScalingBehavior { get }
```

<a id="discussion"></a>

## Discussion

By default, regular [WindowGroup](../windowgroup.md) windows have dynamic scaling, while windows with a [volumetric](../windowstyle/volumetric.md) window style use fixed scaling.
