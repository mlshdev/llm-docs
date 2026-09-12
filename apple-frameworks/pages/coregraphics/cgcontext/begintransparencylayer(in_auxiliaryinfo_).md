> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/begintransparencylayer(in:auxiliaryinfo:)](https://developer.apple.com/documentation/coregraphics/cgcontext/begintransparencylayer(in:auxiliaryinfo:))

# beginTransparencyLayer(in:auxiliaryInfo:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Begins a transparency layer whose contents are bounded by the specified rectangle.

## Declaration

```swift
func beginTransparencyLayer(in rect: CGRect, auxiliaryInfo auxInfo: CFDictionary?)
```

## Parameters

- `rect`: The rectangle, specified in user space, that bounds the transparency layer.
- `auxInfo`: A dictionary that specifies any additional information, or `nil`.

<a id="Discussion"></a>

## Discussion

This function is identical to [beginTransparencyLayer(auxiliaryInfo:)](begintransparencylayer%28auxiliaryinfo_%29.md) except that the content of the transparency layer is within the bounds of the provided rectangle.

## See Also

### Working with Transparency Layers

- [beginTransparencyLayer(auxiliaryInfo:)](begintransparencylayer%28auxiliaryinfo_%29.md): Begins a transparency layer.
- [endTransparencyLayer()](endtransparencylayer%28%29.md): Ends a transparency layer.

# CGContextBeginTransparencyLayerWithRect (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Begins a transparency layer whose contents are bounded by the specified rectangle.

## Declaration

```objectivec
extern void CGContextBeginTransparencyLayerWithRect(CGContextRef c, CGRect rect, CFDictionaryRef auxInfo);
```

## Parameters

- `c`: A graphics context.
- `rect`: The rectangle, specified in user space, that bounds the transparency layer.
- `auxInfo`: A dictionary that specifies any additional information, or `nil`.

<a id="Discussion"></a>

## Discussion

This function is identical to [CGContextBeginTransparencyLayer](begintransparencylayer%28auxiliaryinfo_%29.md) except that the content of the transparency layer is within the bounds of the provided rectangle.

## See Also

### Working with Transparency Layers

- [CGContextBeginTransparencyLayer](begintransparencylayer%28auxiliaryinfo_%29.md): Begins a transparency layer.
- [CGContextEndTransparencyLayer](endtransparencylayer%28%29.md): Ends a transparency layer.
