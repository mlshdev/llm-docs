> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrollview/verticalrulerview](https://developer.apple.com/documentation/appkit/nsscrollview/verticalrulerview)

# verticalRulerView (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The scroll view’s vertical ruler view.

## Declaration

```swift
var verticalRulerView: NSRulerView? { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` when the scroll view has no vertical ruler view.

If the scroll view is set to display a vertical ruler view and doesn’t yet have one, this property creates an instance of the ruler view class set using the class method `setRulerViewClass(_:)`. You can use this property to override the default ruler class set using the class method `setRulerViewClass(_:)`.

Display of rulers is controlled using the [rulersVisible](rulersvisible.md) property.

## See Also

### Managing Rulers

- [rulerViewClass](rulerviewclass.md): Returns the default class to be used for ruler objects in NSScrollViews.
- [hasHorizontalRuler](hashorizontalruler.md): A Boolean that indicates whether the scroll view keeps a horizontal ruler object.
- [horizontalRulerView](horizontalrulerview.md): The scroll view’s horizontal ruler view.
- [hasVerticalRuler](hasverticalruler.md): A Boolean that indicates whether the scroll view keeps a vertical ruler object.
- [rulersVisible](rulersvisible.md): A Boolean that indicates whether the scroll view displays its rulers.

# verticalRulerView (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The scroll view’s vertical ruler view.

## Declaration

```objectivec
@property (strong, nullable) NSRulerView * verticalRulerView;
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` when the scroll view has no vertical ruler view.

If the scroll view is set to display a vertical ruler view and doesn’t yet have one, this property creates an instance of the ruler view class set using the class method `setRulerViewClass(_:)`. You can use this property to override the default ruler class set using the class method `setRulerViewClass(_:)`.

Display of rulers is controlled using the [rulersVisible](rulersvisible.md) property.

## See Also

### Managing Rulers

- [rulerViewClass](rulerviewclass.md): Returns the default class to be used for ruler objects in NSScrollViews.
- [hasHorizontalRuler](hashorizontalruler.md): A Boolean that indicates whether the scroll view keeps a horizontal ruler object.
- [horizontalRulerView](horizontalrulerview.md): The scroll view’s horizontal ruler view.
- [hasVerticalRuler](hasverticalruler.md): A Boolean that indicates whether the scroll view keeps a vertical ruler object.
- [rulersVisible](rulersvisible.md): A Boolean that indicates whether the scroll view displays its rulers.
