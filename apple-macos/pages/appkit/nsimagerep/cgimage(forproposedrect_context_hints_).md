> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimagerep/cgimage(forproposedrect:context:hints:)](https://developer.apple.com/documentation/appkit/nsimagerep/cgimage(forproposedrect:context:hints:))

# cgImage(forProposedRect:context:hints:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns a Core Graphics image object that captures the drawing of the image.

## Declaration

```swift
func cgImage(forProposedRect proposedDestRect: UnsafeMutablePointer<NSRect>?, context: NSGraphicsContext?, hints: [NSImageRep.HintKey : Any]?) -> CGImage?
```

## Parameters

- `proposedDestRect`: On input, the proposed destination rectangle for drawing the image. If `nil`, it defaults to the smallest pixel-integral rectangle containing `{{0,0}, self.size}`. The `proposedDestRect` is in user space in the reference context.

  On output, the `proposedDestRect` may have been altered. This is because a [CGImage](https://developer.apple.com/documentation/coregraphics/cgimage) is necessarily pixel-integral, while an [NSImage](../nsimage.md) is not. In order to produce a [CGImage](https://developer.apple.com/documentation/coregraphics/cgimage) for rect `(0.5, 0.5, 4.0, 4.0)` without distortion or double-antialiasing, we may have to produce a 5x5 `CGImage`, and also inflate the `proposedDestRect`. Drawing the `CGImage` in the out-value `proposedDestRect` is the same as drawing the [NSImage](../nsimage.md) in the in-value of proposed rect.
- `context`: A graphics context. Can be `nil`.
- `hints`: An optional dictionary of hints that provide more context for selecting or generating the image. See [NSImageRep.HintKey](hintkey.md) for a summary of the possible key-value pairs.

<a id="return-value"></a>

## Return Value

A [CGImage](https://developer.apple.com/documentation/coregraphics/cgimage). This may be an existing [CGImage](https://developer.apple.com/documentation/coregraphics/cgimage) if one is available. If not, a new [CGImage](https://developer.apple.com/documentation/coregraphics/cgimage) is created.

<a id="Discussion"></a>

## Discussion

An [NSImage](../nsimage.md) is potentially resolution independent, and may have representations that allow it to draw well in many contexts. A [CGImage](https://developer.apple.com/documentation/coregraphics/cgimage) is more like a single pixel-based representation. This method produces a snapshot of how the [NSImage](../nsimage.md) would draw if it was asked to draw in the proposed rectangle in the graphics context.

All input parameters are optional. They provide hints for how to choose among existing [CGImage](https://developer.apple.com/documentation/coregraphics/cgimage) objects, or how to create one if there isn’t already a [CGImage](https://developer.apple.com/documentation/coregraphics/cgimage) available. The parameters are only hints.

This method is intended as an override point for image representation subclasses that naturally have a [CGImage](https://developer.apple.com/documentation/coregraphics/cgimage) available. For example, [NSBitmapImageRep](../nsbitmapimagerep.md) overrides it to return the [CGImage](https://developer.apple.com/documentation/coregraphics/cgimage) that naturally backs the representation. You don’t need to override the method except possibly for performance, though. The [NSImageRep](../nsimagerep.md)-level implementation will produce a [CGImage](https://developer.apple.com/documentation/coregraphics/cgimage) by making a buffer and calling [draw()](draw%28%29.md). That’s likely to be the best possible implementation for reps that aren’t naturally [CGImage](https://developer.apple.com/documentation/coregraphics/cgimage)-backed. The [draw()](draw%28%29.md) method remains the only method of [NSImageRep](../nsimagerep.md) that a subclasser really needs to override.

# CGImageForProposedRect:context:hints: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns a Core Graphics image object that captures the drawing of the image.

## Declaration

```objectivec
- (CGImageRef) CGImageForProposedRect:(NSRect *) proposedDestRect context:(NSGraphicsContext *) context hints:(NSDictionary<NSString *,id> *) hints;
```

## Parameters

- `proposedDestRect`: On input, the proposed destination rectangle for drawing the image. If `nil`, it defaults to the smallest pixel-integral rectangle containing `{{0,0}, self.size}`. The `proposedDestRect` is in user space in the reference context.

  On output, the `proposedDestRect` may have been altered. This is because a [CGImageRef](https://developer.apple.com/documentation/coregraphics/cgimage) is necessarily pixel-integral, while an [NSImage](../nsimage.md) is not. In order to produce a [CGImageRef](https://developer.apple.com/documentation/coregraphics/cgimage) for rect `(0.5, 0.5, 4.0, 4.0)` without distortion or double-antialiasing, we may have to produce a 5x5 `CGImage`, and also inflate the `proposedDestRect`. Drawing the `CGImage` in the out-value `proposedDestRect` is the same as drawing the [NSImage](../nsimage.md) in the in-value of proposed rect.
- `context`: A graphics context. Can be `nil`.
- `hints`: An optional dictionary of hints that provide more context for selecting or generating the image. See [NSImageHintKey](hintkey.md) for a summary of the possible key-value pairs.

<a id="return-value"></a>

## Return Value

A [CGImageRef](https://developer.apple.com/documentation/coregraphics/cgimage). This may be an existing [CGImageRef](https://developer.apple.com/documentation/coregraphics/cgimage) if one is available. If not, a new [CGImageRef](https://developer.apple.com/documentation/coregraphics/cgimage) is created.

<a id="Discussion"></a>

## Discussion

An [NSImage](../nsimage.md) is potentially resolution independent, and may have representations that allow it to draw well in many contexts. A [CGImageRef](https://developer.apple.com/documentation/coregraphics/cgimage) is more like a single pixel-based representation. This method produces a snapshot of how the [NSImage](../nsimage.md) would draw if it was asked to draw in the proposed rectangle in the graphics context.

All input parameters are optional. They provide hints for how to choose among existing [CGImageRef](https://developer.apple.com/documentation/coregraphics/cgimage) objects, or how to create one if there isn’t already a [CGImageRef](https://developer.apple.com/documentation/coregraphics/cgimage) available. The parameters are only hints.

This method is intended as an override point for image representation subclasses that naturally have a [CGImageRef](https://developer.apple.com/documentation/coregraphics/cgimage) available. For example, [NSBitmapImageRep](../nsbitmapimagerep.md) overrides it to return the [CGImageRef](https://developer.apple.com/documentation/coregraphics/cgimage) that naturally backs the representation. You don’t need to override the method except possibly for performance, though. The [NSImageRep](../nsimagerep.md)-level implementation will produce a [CGImageRef](https://developer.apple.com/documentation/coregraphics/cgimage) by making a buffer and calling [draw](draw%28%29.md). That’s likely to be the best possible implementation for reps that aren’t naturally [CGImageRef](https://developer.apple.com/documentation/coregraphics/cgimage)-backed. The [draw](draw%28%29.md) method remains the only method of [NSImageRep](../nsimagerep.md) that a subclasser really needs to override.
