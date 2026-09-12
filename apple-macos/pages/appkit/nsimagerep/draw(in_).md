> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimagerep/draw(in:)](https://developer.apple.com/documentation/appkit/nsimagerep/draw(in:))

# draw(in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the image, scaling it (as needed) to fit the specified rectangle.

## Declaration

```swift
func draw(in rect: NSRect) -> Bool
```

## Parameters

- `rect`: The rectangle in the current coordinate system in which to draw the image.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the image was successfully drawn; otherwise, [false](https://developer.apple.com/documentation/swift/false). If the size of the image has not yet been set, this method returns [false](https://developer.apple.com/documentation/swift/false) immediately.

<a id="Discussion"></a>

## Discussion

This method sets the origin of the current coordinate system to the origin of the specified rectangle before invoking the receiver’s [draw()](draw%28%29.md) method. If the rectangle size is different from the image’s native size, this method adjusts the coordinate transform, causing the image to be scaled appropriately.  After the `draw` method returns, the coordinate system changes are undone, restoring the original graphics state.

## See Also

### Drawing Images

- [draw()](draw%28%29.md): Implemented by subclasses to draw the image in the current coordinate system.
- [draw(at:)](draw%28at_%29.md): Draws the image representation’s image data at the specified point in the current coordinate system.
- [draw(in:from:operation:fraction:respectFlipped:hints:)](draw%28in_from_operation_fraction_respectflipped_hints_%29.md): Draws all or part of the image in the specified rectangle in the current coordinate system.
- [NSImageRep.HintKey](hintkey.md): Constants for the keys to include in a hints dictionary when drawing the image.

# drawInRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the image, scaling it (as needed) to fit the specified rectangle.

## Declaration

```objectivec
- (BOOL) drawInRect:(NSRect) rect;
```

## Parameters

- `rect`: The rectangle in the current coordinate system in which to draw the image.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the image was successfully drawn; otherwise, [false](https://developer.apple.com/documentation/swift/false). If the size of the image has not yet been set, this method returns [false](https://developer.apple.com/documentation/swift/false) immediately.

<a id="Discussion"></a>

## Discussion

This method sets the origin of the current coordinate system to the origin of the specified rectangle before invoking the receiver’s [draw](draw%28%29.md) method. If the rectangle size is different from the image’s native size, this method adjusts the coordinate transform, causing the image to be scaled appropriately.  After the `draw` method returns, the coordinate system changes are undone, restoring the original graphics state.

## See Also

### Drawing Images

- [draw](draw%28%29.md): Implemented by subclasses to draw the image in the current coordinate system.
- [drawAtPoint:](draw%28at_%29.md): Draws the image representation’s image data at the specified point in the current coordinate system.
- [drawInRect:fromRect:operation:fraction:respectFlipped:hints:](draw%28in_from_operation_fraction_respectflipped_hints_%29.md): Draws all or part of the image in the specified rectangle in the current coordinate system.
- [NSImageHintKey](hintkey.md): Constants for the keys to include in a hints dictionary when drawing the image.
