> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/allowsconcurrentviewdrawing](https://developer.apple.com/documentation/appkit/nswindow/allowsconcurrentviewdrawing)

# allowsConcurrentViewDrawing (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

A Boolean value that indicates whether the window allows multithreaded view drawing.

## Declaration

```swift
var allowsConcurrentViewDrawing: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the window allows multithreaded view drawing; otherwise, [false](https://developer.apple.com/documentation/swift/false). The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Drawing Windows

- [display()](display%28%29.md): Passes a display message down the window’s view hierarchy, thus redrawing all views within the window.
- [displayIfNeeded()](displayifneeded%28%29.md): Passes a display message down the window’s view hierarchy, thus redrawing all views that need displaying.
- [viewsNeedDisplay](viewsneeddisplay.md): A Boolean value that indicates whether any of the window’s views need to be displayed.

# allowsConcurrentViewDrawing (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

A Boolean value that indicates whether the window allows multithreaded view drawing.

## Declaration

```objectivec
@property BOOL allowsConcurrentViewDrawing;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the window allows multithreaded view drawing; otherwise, [false](https://developer.apple.com/documentation/swift/false). The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Drawing Windows

- [display](display%28%29.md): Passes a display message down the window’s view hierarchy, thus redrawing all views within the window.
- [displayIfNeeded](displayifneeded%28%29.md): Passes a display message down the window’s view hierarchy, thus redrawing all views that need displaying.
- [viewsNeedDisplay](viewsneeddisplay.md): A Boolean value that indicates whether any of the window’s views need to be displayed.
