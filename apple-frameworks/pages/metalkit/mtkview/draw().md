> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkview/draw()](https://developer.apple.com/documentation/metalkit/mtkview/draw())

# draw() (Swift)

**Framework:** MetalKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Redraws the view’s contents immediately.

## Declaration

```swift
func draw()
```

<a id="Discussion"></a>

## Discussion

This method manually tells the view to redraw its contents. Calling this method causes the view to call either the [draw(in:)](../mtkviewdelegate/draw%28in_%29.md) method of the view’s [delegate](delegate.md), or the [draw(\_:)](../../uikit/uiview/draw%28__%29.md) method of the [MTKView](../mtkview.md) subclass. Never call this method inside either drawing function.

## See Also

### Configuring Drawing Behavior

- [preferredFramesPerSecond](preferredframespersecond.md): The rate at which the view redraws its contents.
- [isPaused](ispaused.md): A Boolean value that indicates whether the draw loop is paused.
- [enableSetNeedsDisplay](enablesetneedsdisplay.md): A Boolean value that indicates whether the view responds to [setNeedsDisplay()](../../uikit/uiview/setneedsdisplay%28%29.md).
- [presentsWithTransaction](presentswithtransaction.md): A Boolean value that determines whether the view presents its content using a Core Animation transaction.

# draw (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Redraws the view’s contents immediately.

## Declaration

```objectivec
- (void) draw;
```

<a id="Discussion"></a>

## Discussion

This method manually tells the view to redraw its contents. Calling this method causes the view to call either the [drawInMTKView:](../mtkviewdelegate/draw%28in_%29.md) method of the view’s [delegate](delegate.md), or the [drawRect:](../../uikit/uiview/draw%28__%29.md) method of the [MTKView](../mtkview.md) subclass. Never call this method inside either drawing function.

## See Also

### Configuring Drawing Behavior

- [preferredFramesPerSecond](preferredframespersecond.md): The rate at which the view redraws its contents.
- [paused](ispaused.md): A Boolean value that indicates whether the draw loop is paused.
- [enableSetNeedsDisplay](enablesetneedsdisplay.md): A Boolean value that indicates whether the view responds to [setNeedsDisplay](../../uikit/uiview/setneedsdisplay%28%29.md).
- [presentsWithTransaction](presentswithtransaction.md): A Boolean value that determines whether the view presents its content using a Core Animation transaction.
