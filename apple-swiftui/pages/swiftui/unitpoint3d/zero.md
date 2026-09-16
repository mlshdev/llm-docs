> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/unitpoint3d/zero

# zero

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** visionOS 1.0+

A 3D unit point with all components equal to zero.

## Declaration

```swift
static let zero: UnitPoint3D
```

<a id="discussion"></a>

## Discussion

This point is equivalent to the [origin](origin.md). A view’s origin appears in the top-left-back corner in a left-to-right language environment, with positive x toward the right. It appears in the top-right-back corner in a right-to-left language, with positive x toward the left. Positive y is always toward the bottom of the view, and positive z points toward the front.

## See Also

### Getting the origin

- [origin](origin.md): The origin of a view.
