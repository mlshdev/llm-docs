> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscustomimagerep/init(size:flipped:drawinghandler:)](https://developer.apple.com/documentation/appkit/nscustomimagerep/init(size:flipped:drawinghandler:))

# init(size:flipped:drawingHandler:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.8+

Initializes a representation of an image of the specified size and flipped status, using a block to draw its content.

## Declaration

```swift
init(size: NSSize, flipped drawingHandlerShouldBeCalledWithFlippedContext: Bool, drawingHandler: @escaping (NSRect) -> Bool)
```

## Parameters

- `size`: The size of the image.
- `drawingHandlerShouldBeCalledWithFlippedContext`: [true](https://developer.apple.com/documentation/swift/true) if the drawing handler should be called with a flipped graphics context; otherwise [false](https://developer.apple.com/documentation/swift/false).
- `drawingHandler`: A block that draws the image representation content in the provided graphics context.

  The block may be invoked whenever and on whatever thread the image itself is drawn on. Care should be taken to ensure that all state accessed within the drawingHandler block is done so in a thread safe manner.

  This Block replaces the [lockFocus()](../nsimage/lockfocus%28%29.md) and [unlockFocus()](../nsimage/unlockfocus%28%29.md) technique of creating drawing content. The block is invoked at draw time, the drawing can be adjusted to suit the destination’s pixel density, color space, and other properties.

<a id="return-value"></a>

## Return Value

An initialized [NSCustomImageRep](../nscustomimagerep.md) object, or `nil` if the object could not be initialized.

<a id="Discussion"></a>

## Discussion

Using the this method ensures you’ll get correct results under standard and high resolution.

Like other non-bitmap image rep types, drawing is cached as appropriate for the destination context. Practically speaking, the `drawingHandler` block will be invoked the first time the image is drawn to a particular type of destination (1x or 2x screen, for example). Subsequent drawing operations to the same type of destination will reuse the previously generated bitmap.

## See Also

### Related Documentation

- [drawingHandler](drawinghandler.md): The destination rectangle of the drawing handler block.

### Creating Representations of Images in Custom Formats

- [init(draw:delegate:)](init%28draw_delegate_%29.md): Returns a representation of an image initialized with the specified delegate information.

# initWithSize:flipped:drawingHandler: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Initializes a representation of an image of the specified size and flipped status, using a block to draw its content.

## Declaration

```objectivec
- (instancetype) initWithSize:(NSSize) size flipped:(BOOL) drawingHandlerShouldBeCalledWithFlippedContext drawingHandler:(BOOL (^)(NSRect dstRect)) drawingHandler;
```

## Parameters

- `size`: The size of the image.
- `drawingHandlerShouldBeCalledWithFlippedContext`: [true](https://developer.apple.com/documentation/swift/true) if the drawing handler should be called with a flipped graphics context; otherwise [false](https://developer.apple.com/documentation/swift/false).
- `drawingHandler`: A block that draws the image representation content in the provided graphics context.

  The block may be invoked whenever and on whatever thread the image itself is drawn on. Care should be taken to ensure that all state accessed within the drawingHandler block is done so in a thread safe manner.

  This Block replaces the [lockFocus](../nsimage/lockfocus%28%29.md) and [unlockFocus](../nsimage/unlockfocus%28%29.md) technique of creating drawing content. The block is invoked at draw time, the drawing can be adjusted to suit the destination’s pixel density, color space, and other properties.

<a id="return-value"></a>

## Return Value

An initialized [NSCustomImageRep](../nscustomimagerep.md) object, or `nil` if the object could not be initialized.

<a id="Discussion"></a>

## Discussion

Using the this method ensures you’ll get correct results under standard and high resolution.

Like other non-bitmap image rep types, drawing is cached as appropriate for the destination context. Practically speaking, the `drawingHandler` block will be invoked the first time the image is drawn to a particular type of destination (1x or 2x screen, for example). Subsequent drawing operations to the same type of destination will reuse the previously generated bitmap.

## See Also

### Related Documentation

- [drawingHandler](drawinghandler.md): The destination rectangle of the drawing handler block.

### Creating Representations of Images in Custom Formats

- [initWithDrawSelector:delegate:](init%28draw_delegate_%29.md): Returns a representation of an image initialized with the specified delegate information.
