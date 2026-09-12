> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrollview/hasverticalruler](https://developer.apple.com/documentation/appkit/nsscrollview/hasverticalruler)

# hasVerticalRuler (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the scroll view keeps a vertical ruler object.

## Declaration

```swift
var hasVerticalRuler: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this method is [true](https://developer.apple.com/documentation/swift/true), the scroll view allocates a vertical ruler the first time it’s needed.

Display of rulers is controlled using the [rulersVisible](rulersvisible.md) property.

## See Also

### Managing Rulers

- [rulerViewClass](rulerviewclass.md): Returns the default class to be used for ruler objects in NSScrollViews.
- [hasHorizontalRuler](hashorizontalruler.md): A Boolean that indicates whether the scroll view keeps a horizontal ruler object.
- [horizontalRulerView](horizontalrulerview.md): The scroll view’s horizontal ruler view.
- [verticalRulerView](verticalrulerview.md): The scroll view’s vertical ruler view.
- [rulersVisible](rulersvisible.md): A Boolean that indicates whether the scroll view displays its rulers.

# hasVerticalRuler (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the scroll view keeps a vertical ruler object.

## Declaration

```objectivec
@property BOOL hasVerticalRuler;
```

<a id="Discussion"></a>

## Discussion

When the value of this method is [true](https://developer.apple.com/documentation/swift/true), the scroll view allocates a vertical ruler the first time it’s needed.

Display of rulers is controlled using the [rulersVisible](rulersvisible.md) property.

## See Also

### Managing Rulers

- [rulerViewClass](rulerviewclass.md): Returns the default class to be used for ruler objects in NSScrollViews.
- [hasHorizontalRuler](hashorizontalruler.md): A Boolean that indicates whether the scroll view keeps a horizontal ruler object.
- [horizontalRulerView](horizontalrulerview.md): The scroll view’s horizontal ruler view.
- [verticalRulerView](verticalrulerview.md): The scroll view’s vertical ruler view.
- [rulersVisible](rulersvisible.md): A Boolean that indicates whether the scroll view displays its rulers.
