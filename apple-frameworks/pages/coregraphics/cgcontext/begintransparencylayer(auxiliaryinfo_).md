> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/begintransparencylayer(auxiliaryinfo:)](https://developer.apple.com/documentation/coregraphics/cgcontext/begintransparencylayer(auxiliaryinfo:))

# beginTransparencyLayer(auxiliaryInfo:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Begins a transparency layer.

## Declaration

```swift
func beginTransparencyLayer(auxiliaryInfo: CFDictionary?)
```

## Parameters

- `auxiliaryInfo`: A dictionary that specifies any additional information, or `NULL`.

<a id="Discussion"></a>

## Discussion

Until a corresponding call to [endTransparencyLayer()](endtransparencylayer%28%29.md), all subsequent drawing operations in the specified context are composited into a fully transparent backdrop (which is treated as a separate destination buffer from the context).

After a call to `CGContextEndTransparencyLayer`, the result is composited into the context using the global alpha and shadow state of the context. This operation respects the clipping region of the context.

After a call to this function, all of the parameters in the graphics state remain unchanged with the exception of the following:

- The global alpha is set to `1`.
- The shadow is turned off.

Ending the transparency layer restores these parameters to their previous values. Core Graphics maintains a transparency layer stack for each context, and transparency layers may be nested.

> **Tip**

>  For best performance, make sure that you set the smallest possible clipping area for the objects in the transparency layer prior to calling `CGContextBeginTransparencyLayer`.

## See Also

### Working with Transparency Layers

- [beginTransparencyLayer(in:auxiliaryInfo:)](begintransparencylayer%28in_auxiliaryinfo_%29.md): Begins a transparency layer whose contents are bounded by the specified rectangle.
- [endTransparencyLayer()](endtransparencylayer%28%29.md): Ends a transparency layer.

# CGContextBeginTransparencyLayer (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Begins a transparency layer.

## Declaration

```objectivec
extern void CGContextBeginTransparencyLayer(CGContextRef c, CFDictionaryRef auxiliaryInfo);
```

## Parameters

- `c`: A graphics context.
- `auxiliaryInfo`: A dictionary that specifies any additional information, or `NULL`.

<a id="Discussion"></a>

## Discussion

Until a corresponding call to [CGContextEndTransparencyLayer](endtransparencylayer%28%29.md), all subsequent drawing operations in the specified context are composited into a fully transparent backdrop (which is treated as a separate destination buffer from the context).

After a call to `CGContextEndTransparencyLayer`, the result is composited into the context using the global alpha and shadow state of the context. This operation respects the clipping region of the context.

After a call to this function, all of the parameters in the graphics state remain unchanged with the exception of the following:

- The global alpha is set to `1`.
- The shadow is turned off.

Ending the transparency layer restores these parameters to their previous values. Core Graphics maintains a transparency layer stack for each context, and transparency layers may be nested.

> **Tip**

>  For best performance, make sure that you set the smallest possible clipping area for the objects in the transparency layer prior to calling `CGContextBeginTransparencyLayer`.

## See Also

### Working with Transparency Layers

- [CGContextBeginTransparencyLayerWithRect](begintransparencylayer%28in_auxiliaryinfo_%29.md): Begins a transparency layer whose contents are bounded by the specified rectangle.
- [CGContextEndTransparencyLayer](endtransparencylayer%28%29.md): Ends a transparency layer.
