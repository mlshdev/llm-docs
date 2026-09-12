> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimagerep/draw()](https://developer.apple.com/documentation/appkit/nsimagerep/draw())

# draw() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Implemented by subclasses to draw the image in the current coordinate system.

## Declaration

```swift
func draw() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the image was successfully drawn; otherwise, [false](https://developer.apple.com/documentation/swift/false) if there was a problem. The default version of this method simply returns [true](https://developer.apple.com/documentation/swift/true).

<a id="Discussion"></a>

## Discussion

Subclass override this method to draw the image using the image data. By the time this method is called, the graphics state is already configured for you to draw the image at location (0.0, 0.0) in the current coordinate system.

The standard Application Kit subclasses all draw the image using the `NSCompositeCopy` composite operation defined in the `Constants` section of `NSImage`. Using the copy operator, the image data overwrites the destination without any blending effects. Transparent (alpha) regions in the source image appear black. To use other composite operations, you must place the representation into an `NSImage` object and use its [draw(at:from:operation:fraction:)](../nsimage/draw%28at_from_operation_fraction_%29.md) or [draw(in:from:operation:fraction:)](../nsimage/draw%28in_from_operation_fraction_%29.md) methods.

## See Also

### Drawing Images

- [draw(at:)](draw%28at_%29.md): Draws the image representation’s image data at the specified point in the current coordinate system.
- [draw(in:)](draw%28in_%29.md): Draws the image, scaling it (as needed) to fit the specified rectangle.
- [draw(in:from:operation:fraction:respectFlipped:hints:)](draw%28in_from_operation_fraction_respectflipped_hints_%29.md): Draws all or part of the image in the specified rectangle in the current coordinate system.
- [NSImageRep.HintKey](hintkey.md): Constants for the keys to include in a hints dictionary when drawing the image.

# draw (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Implemented by subclasses to draw the image in the current coordinate system.

## Declaration

```objectivec
- (BOOL) draw;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the image was successfully drawn; otherwise, [false](https://developer.apple.com/documentation/swift/false) if there was a problem. The default version of this method simply returns [true](https://developer.apple.com/documentation/swift/true).

<a id="Discussion"></a>

## Discussion

Subclass override this method to draw the image using the image data. By the time this method is called, the graphics state is already configured for you to draw the image at location (0.0, 0.0) in the current coordinate system.

The standard Application Kit subclasses all draw the image using the `NSCompositeCopy` composite operation defined in the `Constants` section of `NSImage`. Using the copy operator, the image data overwrites the destination without any blending effects. Transparent (alpha) regions in the source image appear black. To use other composite operations, you must place the representation into an `NSImage` object and use its [drawAtPoint:fromRect:operation:fraction:](../nsimage/draw%28at_from_operation_fraction_%29.md) or [drawInRect:fromRect:operation:fraction:](../nsimage/draw%28in_from_operation_fraction_%29.md) methods.

## See Also

### Drawing Images

- [drawAtPoint:](draw%28at_%29.md): Draws the image representation’s image data at the specified point in the current coordinate system.
- [drawInRect:](draw%28in_%29.md): Draws the image, scaling it (as needed) to fit the specified rectangle.
- [drawInRect:fromRect:operation:fraction:respectFlipped:hints:](draw%28in_from_operation_fraction_respectflipped_hints_%29.md): Draws all or part of the image in the specified rectangle in the current coordinate system.
- [NSImageHintKey](hintkey.md): Constants for the keys to include in a hints dictionary when drawing the image.
