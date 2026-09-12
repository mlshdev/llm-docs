> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/cgimage(forproposedrect:context:hints:)](https://developer.apple.com/documentation/appkit/nsimage/cgimage(forproposedrect:context:hints:))

# cgImage(forProposedRect:context:hints:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns a Core Graphics image based on the contents of the current image object.

## Declaration

```swift
func cgImage(forProposedRect proposedDestRect: UnsafeMutablePointer<NSRect>?, context referenceContext: NSGraphicsContext?, hints: [NSImageRep.HintKey : Any]?) -> CGImage?
```

## Parameters

- `proposedDestRect`: On input, the proposed destination rectangle for drawing the image. If `NULL`, it defaults to the smallest pixel-integral rectangle containing {{0,0}, \[self size\]}.  The `proposedDestRect` is in user space in the reference context.
- `referenceContext`: A graphics context.
- `hints`: A dictionary of hints that provide more context for selecting or generating a `CGImage`, and may override properties of the `referenceContext`.

<a id="return-value"></a>

## Return Value

A `CGImageRef`. This may be an existing `CGImage` if one is available. If not, a new `CGImage` is created.

<a id="Discussion"></a>

## Discussion

An `NSImage` is potentially resolution independent, and may have representations that allow it to draw well in many contexts.  A `CGImage` is more like a single pixel-based representation.   This method produces a snapshot of how the `NSImage` would draw if it was asked to draw in the proposed rectangle in the graphics context.

All input parameters are optional.  They provide hints for how to choose among existing [CGImage](https://developer.apple.com/documentation/coregraphics/cgimage) objects, or how to create one if there isn’t already a [CGImage](https://developer.apple.com/documentation/coregraphics/cgimage) available.  The parameters are only hints.

This method is typically called, not overridden.

# CGImageForProposedRect:context:hints: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns a Core Graphics image based on the contents of the current image object.

## Declaration

```objectivec
- (CGImageRef) CGImageForProposedRect:(NSRect *) proposedDestRect context:(NSGraphicsContext *) referenceContext hints:(NSDictionary<NSString *,id> *) hints;
```

## Parameters

- `proposedDestRect`: On input, the proposed destination rectangle for drawing the image. If `NULL`, it defaults to the smallest pixel-integral rectangle containing {{0,0}, \[self size\]}.  The `proposedDestRect` is in user space in the reference context.
- `referenceContext`: A graphics context.
- `hints`: A dictionary of hints that provide more context for selecting or generating a `CGImage`, and may override properties of the `referenceContext`.

<a id="return-value"></a>

## Return Value

A `CGImageRef`. This may be an existing `CGImage` if one is available. If not, a new `CGImage` is created.

<a id="Discussion"></a>

## Discussion

An `NSImage` is potentially resolution independent, and may have representations that allow it to draw well in many contexts.  A `CGImage` is more like a single pixel-based representation.   This method produces a snapshot of how the `NSImage` would draw if it was asked to draw in the proposed rectangle in the graphics context.

All input parameters are optional.  They provide hints for how to choose among existing [CGImageRef](https://developer.apple.com/documentation/coregraphics/cgimage) objects, or how to create one if there isn’t already a [CGImageRef](https://developer.apple.com/documentation/coregraphics/cgimage) available.  The parameters are only hints.

This method is typically called, not overridden.
