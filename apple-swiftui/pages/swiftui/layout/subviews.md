> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/layout/subviews](https://developer.apple.com/documentation/swiftui/layout/subviews)

# Layout.Subviews

**Framework:** SwiftUI  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A collection of proxies for the subviews of a layout view.

## Declaration

```swift
typealias Subviews = LayoutSubviews
```

<a id="discussion"></a>

## Discussion

This collection doesn’t store views. Instead it stores instances of [LayoutSubview](../layoutsubview.md), each of which acts as a proxy for one of the views arranged by the layout. Use the proxies to get information about the views, and to tell the views where to appear.

For more information about the behavior of the underlying collection type, see [LayoutSubviews](../layoutsubviews.md).

## See Also

### Sizing the container and placing subviews

- [sizeThatFits(proposal:subviews:cache:)](sizethatfits%28proposal_subviews_cache_%29.md): Returns the size of the composite view, given a proposed size and the view’s subviews.
- [placeSubviews(in:proposal:subviews:cache:)](placesubviews%28in_proposal_subviews_cache_%29.md): Assigns positions to each of the layout’s subviews.
