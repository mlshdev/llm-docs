> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/displayifneeded()](https://developer.apple.com/documentation/appkit/nswindow/displayifneeded())

# displayIfNeeded() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Passes a display message down the window’s view hierarchy, thus redrawing all views that need displaying.

## Declaration

```swift
func displayIfNeeded()
```

<a id="Discussion"></a>

## Discussion

This method includes the frame view that draws the border, title bar, and other peripheral elements. It’s useful when you want to modify some number of views and then display only the ones that you modified.

You rarely need to invoke this method. `NSWindow` objects normally record which of their views need displaying and display them automatically on each pass through the event loop.

## See Also

### Drawing Windows

- [display()](display%28%29.md): Passes a display message down the window’s view hierarchy, thus redrawing all views within the window.
- [viewsNeedDisplay](viewsneeddisplay.md): A Boolean value that indicates whether any of the window’s views need to be displayed.
- [allowsConcurrentViewDrawing](allowsconcurrentviewdrawing.md): A Boolean value that indicates whether the window allows multithreaded view drawing.

# displayIfNeeded (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Passes a display message down the window’s view hierarchy, thus redrawing all views that need displaying.

## Declaration

```objectivec
- (void) displayIfNeeded;
```

<a id="Discussion"></a>

## Discussion

This method includes the frame view that draws the border, title bar, and other peripheral elements. It’s useful when you want to modify some number of views and then display only the ones that you modified.

You rarely need to invoke this method. `NSWindow` objects normally record which of their views need displaying and display them automatically on each pass through the event loop.

## See Also

### Drawing Windows

- [display](display%28%29.md): Passes a display message down the window’s view hierarchy, thus redrawing all views within the window.
- [viewsNeedDisplay](viewsneeddisplay.md): A Boolean value that indicates whether any of the window’s views need to be displayed.
- [allowsConcurrentViewDrawing](allowsconcurrentviewdrawing.md): A Boolean value that indicates whether the window allows multithreaded view drawing.
