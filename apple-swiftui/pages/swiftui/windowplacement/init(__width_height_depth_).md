> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/windowplacement/init(_:width:height:depth:)

# init(\_:width:height:depth:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** visionOS 2.0+

Creates a new window placement with an optional position and 3D size. Depth is ignored on scenes or platforms that don’t support it.

## Declaration

```swift
init(_ position: WindowPlacement.Position? = nil, width: CGFloat? = nil, height: CGFloat? = nil, depth: CGFloat? = nil)
```

<a id="discussion"></a>

## Discussion

Any values not provided will use use the default values for the `Scene` that this placement is being applied to.
