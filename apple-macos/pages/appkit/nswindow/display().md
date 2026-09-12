> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/display()](https://developer.apple.com/documentation/appkit/nswindow/display())

# display() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Passes a display message down the window’s view hierarchy, thus redrawing all views within the window.

## Declaration

```swift
func display()
```

<a id="Discussion"></a>

## Discussion

You rarely need to invoke this method. `NSWindow` objects normally record which of their views need displaying and display them automatically on each pass through the event loop.

This method includes the frame view that draws the border, title bar, and other peripheral elements.

## See Also

### Drawing Windows

- [displayIfNeeded()](displayifneeded%28%29.md): Passes a display message down the window’s view hierarchy, thus redrawing all views that need displaying.
- [viewsNeedDisplay](viewsneeddisplay.md): A Boolean value that indicates whether any of the window’s views need to be displayed.
- [allowsConcurrentViewDrawing](allowsconcurrentviewdrawing.md): A Boolean value that indicates whether the window allows multithreaded view drawing.

# display (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Passes a display message down the window’s view hierarchy, thus redrawing all views within the window.

## Declaration

```objectivec
- (void) display;
```

<a id="Discussion"></a>

## Discussion

You rarely need to invoke this method. `NSWindow` objects normally record which of their views need displaying and display them automatically on each pass through the event loop.

This method includes the frame view that draws the border, title bar, and other peripheral elements.

## See Also

### Drawing Windows

- [displayIfNeeded](displayifneeded%28%29.md): Passes a display message down the window’s view hierarchy, thus redrawing all views that need displaying.
- [viewsNeedDisplay](viewsneeddisplay.md): A Boolean value that indicates whether any of the window’s views need to be displayed.
- [allowsConcurrentViewDrawing](allowsconcurrentviewdrawing.md): A Boolean value that indicates whether the window allows multithreaded view drawing.
