> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/setcontentscrollview(_:)](https://developer.apple.com/documentation/uikit/uiviewcontroller/setcontentscrollview(_:))

# setContentScrollView(\_:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS

Sets the scroll view that bars observe for all edges of the view.

## Declaration

```swift
@MainActor @preconcurrency func setContentScrollView(_ scrollView: UIScrollView?)
```

## Parameters

- `scrollView`: The scroll view to observe.

<a id="Discussion"></a>

## Discussion

Calling this convenience method is identical to calling [setContentScrollView(\_:for:)](setcontentscrollview%28__for_%29.md) and passing [all](../nsdirectionalrectedge/all.md) for the `edge` parameter.

## See Also

### Working with scrolling content

- [setContentScrollView(\_:for:)](setcontentscrollview%28__for_%29.md): Sets the scroll view that bars observe for the specified edge.
- [contentScrollView(for:)](contentscrollview%28for_%29.md): Returns the scroll view the view controller observes for the specified edge.
