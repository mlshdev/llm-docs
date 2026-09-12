> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimagerep/draw(at:)](https://developer.apple.com/documentation/appkit/nsimagerep/draw(at:))

# draw(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the image representation’s image data at the specified point in the current coordinate system.

## Declaration

```swift
func draw(at point: NSPoint) -> Bool
```

## Parameters

- `point`: The point in the current coordinate system at which to draw the image.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the image was successfully drawn; otherwise, [false](https://developer.apple.com/documentation/swift/false). If the size of the image has not yet been set, this method returns [false](https://developer.apple.com/documentation/swift/false) immediately

<a id="Discussion"></a>

## Discussion

This method sets the origin of the current coordinate system to the specified point and then invokes the receiver’s `draw` method to draw the image at that point. Upon completion, it restores the current coordinates to their original setting. If `aPoint` is (0.0, 0.0), this method simply invokes the [draw()](draw%28%29.md) method.

## See Also

### Drawing Images

- [draw()](draw%28%29.md): Implemented by subclasses to draw the image in the current coordinate system.
- [draw(in:)](draw%28in_%29.md): Draws the image, scaling it (as needed) to fit the specified rectangle.
- [draw(in:from:operation:fraction:respectFlipped:hints:)](draw%28in_from_operation_fraction_respectflipped_hints_%29.md): Draws all or part of the image in the specified rectangle in the current coordinate system.
- [NSImageRep.HintKey](hintkey.md): Constants for the keys to include in a hints dictionary when drawing the image.

# drawAtPoint: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the image representation’s image data at the specified point in the current coordinate system.

## Declaration

```objectivec
- (BOOL) drawAtPoint:(NSPoint) point;
```

## Parameters

- `point`: The point in the current coordinate system at which to draw the image.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the image was successfully drawn; otherwise, [false](https://developer.apple.com/documentation/swift/false). If the size of the image has not yet been set, this method returns [false](https://developer.apple.com/documentation/swift/false) immediately

<a id="Discussion"></a>

## Discussion

This method sets the origin of the current coordinate system to the specified point and then invokes the receiver’s `draw` method to draw the image at that point. Upon completion, it restores the current coordinates to their original setting. If `aPoint` is (0.0, 0.0), this method simply invokes the [draw](draw%28%29.md) method.

## See Also

### Drawing Images

- [draw](draw%28%29.md): Implemented by subclasses to draw the image in the current coordinate system.
- [drawInRect:](draw%28in_%29.md): Draws the image, scaling it (as needed) to fit the specified rectangle.
- [drawInRect:fromRect:operation:fraction:respectFlipped:hints:](draw%28in_from_operation_fraction_respectflipped_hints_%29.md): Draws all or part of the image in the specified rectangle in the current coordinate system.
- [NSImageHintKey](hintkey.md): Constants for the keys to include in a hints dictionary when drawing the image.
