> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/screensaver/screensaverview/draw(_:)](https://developer.apple.com/documentation/screensaver/screensaverview/draw(_:))

# draw(\_:) (Swift)

**Framework:** Screen Saver  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Draws the screen saver view.

## Declaration

```swift
func draw(_ rect: NSRect)
```

<a id="Discussion"></a>

## Discussion

[ScreenSaverView](../screensaverview.md) implements [draw(\_:)](draw%28__%29.md) to draw a black background. Subclasses can do their drawing here or in [animateOneFrame()](animateoneframe%28%29.md).

## See Also

### Drawing the view

- [isPreview](ispreview.md): A Boolean value that indicates whether the screen saver view is set to a size suitable for previewing its content.

# drawRect: (Objective-C)

**Framework:** Screen Saver  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Draws the screen saver view.

## Declaration

```objectivec
- (void) drawRect:(NSRect) rect;
```

<a id="Discussion"></a>

## Discussion

[ScreenSaverView](../screensaverview.md) implements [drawRect:](draw%28__%29.md) to draw a black background. Subclasses can do their drawing here or in [animateOneFrame](animateoneframe%28%29.md).

## See Also

### Drawing the view

- [preview](ispreview.md): A Boolean value that indicates whether the screen saver view is set to a size suitable for previewing its content.
