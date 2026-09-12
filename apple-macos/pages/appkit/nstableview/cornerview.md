> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/cornerview](https://developer.apple.com/documentation/appkit/nstableview/cornerview)

# cornerView (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The view used to draw the area to the right of the column headers and above the vertical scroller of the enclosing scroll view.

## Declaration

```swift
var cornerView: NSView? { get set }
```

<a id="return-value"></a>

## Return Value

The view used to draw the area to the right of the column headers and above the vertical scroller of the enclosing `NSScrollView` object.

<a id="Discussion"></a>

## Discussion

The default corner view draws a bezeled rectangle using a blank [NSTableHeaderCell](../nstableheadercell.md) object, but you can replace it with a custom view that displays an image, or with a control that can handle mouse events, such as a Select All button. Your custom corner view should be as wide as a vertical [NSScroller](../nsscroller.md) object and as tall as the header view of the table view.

## See Also

### Setting Auxiliary Views

- [headerView](headerview.md): The view object used to draw headers over columns.

# cornerView (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The view used to draw the area to the right of the column headers and above the vertical scroller of the enclosing scroll view.

## Declaration

```objectivec
@property (strong, nullable) NSView * cornerView;
```

<a id="return-value"></a>

## Return Value

The view used to draw the area to the right of the column headers and above the vertical scroller of the enclosing `NSScrollView` object.

<a id="Discussion"></a>

## Discussion

The default corner view draws a bezeled rectangle using a blank [NSTableHeaderCell](../nstableheadercell.md) object, but you can replace it with a custom view that displays an image, or with a control that can handle mouse events, such as a Select All button. Your custom corner view should be as wide as a vertical [NSScroller](../nsscroller.md) object and as tall as the header view of the table view.

## See Also

### Setting Auxiliary Views

- [headerView](headerview.md): The view object used to draw headers over columns.
