> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/viewsneeddisplay](https://developer.apple.com/documentation/appkit/nswindow/viewsneeddisplay)

# viewsNeedDisplay (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether any of the window’s views need to be displayed.

## Declaration

```swift
var viewsNeedDisplay: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when any of the window’s views need to be displayed; otherwise, [false](https://developer.apple.com/documentation/swift/false). You should rarely need to set this property; the `NSView` method [needsDisplay](../nsview/needsdisplay.md) and similar methods set it automatically.

## See Also

### Drawing Windows

- [display()](display%28%29.md): Passes a display message down the window’s view hierarchy, thus redrawing all views within the window.
- [displayIfNeeded()](displayifneeded%28%29.md): Passes a display message down the window’s view hierarchy, thus redrawing all views that need displaying.
- [allowsConcurrentViewDrawing](allowsconcurrentviewdrawing.md): A Boolean value that indicates whether the window allows multithreaded view drawing.

# viewsNeedDisplay (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether any of the window’s views need to be displayed.

## Declaration

```objectivec
@property BOOL viewsNeedDisplay;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when any of the window’s views need to be displayed; otherwise, [false](https://developer.apple.com/documentation/swift/false). You should rarely need to set this property; the `NSView` method [needsDisplay](../nsview/needsdisplay.md) and similar methods set it automatically.

## See Also

### Drawing Windows

- [display](display%28%29.md): Passes a display message down the window’s view hierarchy, thus redrawing all views within the window.
- [displayIfNeeded](displayifneeded%28%29.md): Passes a display message down the window’s view hierarchy, thus redrawing all views that need displaying.
- [allowsConcurrentViewDrawing](allowsconcurrentviewdrawing.md): A Boolean value that indicates whether the window allows multithreaded view drawing.
