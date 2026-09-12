> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/firstbaselineanchor](https://developer.apple.com/documentation/appkit/nsview/firstbaselineanchor)

# firstBaselineAnchor (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

A layout anchor representing the baseline for the topmost line of text in the view.

## Declaration

```swift
var firstBaselineAnchor: NSLayoutYAxisAnchor { get }
```

<a id="Discussion"></a>

## Discussion

For views with multiple lines of text, this anchor represents the baseline of the top row of text. Use this anchor to create constraints with this baseline. You can only combine this anchor with other [NSLayoutYAxisAnchor](https://developer.apple.com/documentation/uikit/nslayoutyaxisanchor) anchors. For more information, see [NSLayoutAnchor](https://developer.apple.com/documentation/uikit/nslayoutanchor).

## See Also

### Creating Constraints Using Layout Anchors

- [bottomAnchor](bottomanchor.md): A layout anchor representing the bottom edge of the view’s frame.
- [centerXAnchor](centerxanchor.md): A layout anchor representing the horizontal center of the view’s frame.
- [centerYAnchor](centeryanchor.md): A layout anchor representing the vertical center of the view’s frame.
- [heightAnchor](heightanchor.md): A layout anchor representing the height of the view’s frame.
- [lastBaselineAnchor](lastbaselineanchor.md): A layout anchor representing the baseline for the bottommost line of text in the view.
- [leadingAnchor](leadinganchor.md): A layout anchor representing the leading edge of the view’s frame.
- [leftAnchor](leftanchor.md): A layout anchor representing the left edge of the view’s frame.
- [rightAnchor](rightanchor.md): A layout anchor representing the right edge of the view’s frame.
- [topAnchor](topanchor.md): A layout anchor representing the top edge of the view’s frame.
- [trailingAnchor](trailinganchor.md): A layout anchor representing the trailing edge of the view’s frame.
- [widthAnchor](widthanchor.md): A layout anchor representing the width of the view’s frame.

# firstBaselineAnchor (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

A layout anchor representing the baseline for the topmost line of text in the view.

## Declaration

```objectivec
@property (strong, readonly) NSLayoutYAxisAnchor * firstBaselineAnchor;
```

<a id="Discussion"></a>

## Discussion

For views with multiple lines of text, this anchor represents the baseline of the top row of text. Use this anchor to create constraints with this baseline. You can only combine this anchor with other [NSLayoutYAxisAnchor](https://developer.apple.com/documentation/uikit/nslayoutyaxisanchor) anchors. For more information, see [NSLayoutAnchor](https://developer.apple.com/documentation/uikit/nslayoutanchor).

## See Also

### Creating Constraints Using Layout Anchors

- [bottomAnchor](bottomanchor.md): A layout anchor representing the bottom edge of the view’s frame.
- [centerXAnchor](centerxanchor.md): A layout anchor representing the horizontal center of the view’s frame.
- [centerYAnchor](centeryanchor.md): A layout anchor representing the vertical center of the view’s frame.
- [heightAnchor](heightanchor.md): A layout anchor representing the height of the view’s frame.
- [lastBaselineAnchor](lastbaselineanchor.md): A layout anchor representing the baseline for the bottommost line of text in the view.
- [leadingAnchor](leadinganchor.md): A layout anchor representing the leading edge of the view’s frame.
- [leftAnchor](leftanchor.md): A layout anchor representing the left edge of the view’s frame.
- [rightAnchor](rightanchor.md): A layout anchor representing the right edge of the view’s frame.
- [topAnchor](topanchor.md): A layout anchor representing the top edge of the view’s frame.
- [trailingAnchor](trailinganchor.md): A layout anchor representing the trailing edge of the view’s frame.
- [widthAnchor](widthanchor.md): A layout anchor representing the width of the view’s frame.
