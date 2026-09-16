> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/environmentvalues/layoutdirection

# layoutDirection

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The layout direction associated with the current environment.

## Declaration

```swift
var layoutDirection: LayoutDirection { get set }
```

<a id="discussion"></a>

## Discussion

Use this value to determine or set whether the environment uses a left-to-right or right-to-left direction.

## See Also

### Setting a layout direction

- [layoutDirectionBehavior(\_:)](../view/layoutdirectionbehavior%28__%29.md): Sets the behavior of this view for different layout directions.
- [LayoutDirectionBehavior](../layoutdirectionbehavior.md): A description of what should happen when the layout direction changes.
- [LayoutDirection](../layoutdirection.md): A direction in which SwiftUI can lay out content.
- [LayoutRotationUnaryLayout](../layoutrotationunarylayout.md): A layout that rotates the space containing a view.
