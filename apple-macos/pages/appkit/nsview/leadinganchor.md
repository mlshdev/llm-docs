> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/leadinganchor](https://developer.apple.com/documentation/appkit/nsview/leadinganchor)

# leadingAnchor (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

A layout anchor representing the leading edge of the view’s frame.

## Declaration

```swift
var leadingAnchor: NSLayoutXAxisAnchor { get }
```

<a id="Discussion"></a>

## Discussion

Use this anchor to create constraints with the view’s leading edge. You can only combine this anchor with a subset of the [NSLayoutXAxisAnchor](https://developer.apple.com/documentation/uikit/nslayoutxaxisanchor) anchors. You can combine a `leadingAnchor` with another `leadingAnchor`, a `trailingAnchor`, or a `centerXAnchor`. For more information, see [NSLayoutAnchor](https://developer.apple.com/documentation/uikit/nslayoutanchor).

## See Also

### Creating Constraints Using Layout Anchors

- [bottomAnchor](bottomanchor.md): A layout anchor representing the bottom edge of the view’s frame.
- [centerXAnchor](centerxanchor.md): A layout anchor representing the horizontal center of the view’s frame.
- [centerYAnchor](centeryanchor.md): A layout anchor representing the vertical center of the view’s frame.
- [firstBaselineAnchor](firstbaselineanchor.md): A layout anchor representing the baseline for the topmost line of text in the view.
- [heightAnchor](heightanchor.md): A layout anchor representing the height of the view’s frame.
- [lastBaselineAnchor](lastbaselineanchor.md): A layout anchor representing the baseline for the bottommost line of text in the view.
- [leftAnchor](leftanchor.md): A layout anchor representing the left edge of the view’s frame.
- [rightAnchor](rightanchor.md): A layout anchor representing the right edge of the view’s frame.
- [topAnchor](topanchor.md): A layout anchor representing the top edge of the view’s frame.
- [trailingAnchor](trailinganchor.md): A layout anchor representing the trailing edge of the view’s frame.
- [widthAnchor](widthanchor.md): A layout anchor representing the width of the view’s frame.

# leadingAnchor (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

A layout anchor representing the leading edge of the view’s frame.

## Declaration

```objectivec
@property (strong, readonly) NSLayoutXAxisAnchor * leadingAnchor;
```

<a id="Discussion"></a>

## Discussion

Use this anchor to create constraints with the view’s leading edge. You can only combine this anchor with a subset of the [NSLayoutXAxisAnchor](https://developer.apple.com/documentation/uikit/nslayoutxaxisanchor) anchors. You can combine a `leadingAnchor` with another `leadingAnchor`, a `trailingAnchor`, or a `centerXAnchor`. For more information, see [NSLayoutAnchor](https://developer.apple.com/documentation/uikit/nslayoutanchor).

## See Also

### Creating Constraints Using Layout Anchors

- [bottomAnchor](bottomanchor.md): A layout anchor representing the bottom edge of the view’s frame.
- [centerXAnchor](centerxanchor.md): A layout anchor representing the horizontal center of the view’s frame.
- [centerYAnchor](centeryanchor.md): A layout anchor representing the vertical center of the view’s frame.
- [firstBaselineAnchor](firstbaselineanchor.md): A layout anchor representing the baseline for the topmost line of text in the view.
- [heightAnchor](heightanchor.md): A layout anchor representing the height of the view’s frame.
- [lastBaselineAnchor](lastbaselineanchor.md): A layout anchor representing the baseline for the bottommost line of text in the view.
- [leftAnchor](leftanchor.md): A layout anchor representing the left edge of the view’s frame.
- [rightAnchor](rightanchor.md): A layout anchor representing the right edge of the view’s frame.
- [topAnchor](topanchor.md): A layout anchor representing the top edge of the view’s frame.
- [trailingAnchor](trailinganchor.md): A layout anchor representing the trailing edge of the view’s frame.
- [widthAnchor](widthanchor.md): A layout anchor representing the width of the view’s frame.
