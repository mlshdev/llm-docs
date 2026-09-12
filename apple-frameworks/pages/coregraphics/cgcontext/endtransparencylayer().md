> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/endtransparencylayer()](https://developer.apple.com/documentation/coregraphics/cgcontext/endtransparencylayer())

# endTransparencyLayer() (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Ends a transparency layer.

## Declaration

```swift
func endTransparencyLayer()
```

## See Also

### Working with Transparency Layers

- [beginTransparencyLayer(in:auxiliaryInfo:)](begintransparencylayer%28in_auxiliaryinfo_%29.md): Begins a transparency layer whose contents are bounded by the specified rectangle.
- [beginTransparencyLayer(auxiliaryInfo:)](begintransparencylayer%28auxiliaryinfo_%29.md): Begins a transparency layer.

# CGContextEndTransparencyLayer (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Ends a transparency layer.

## Declaration

```objectivec
extern void CGContextEndTransparencyLayer(CGContextRef c);
```

## Parameters

- `c`: A graphics context.

## See Also

### Working with Transparency Layers

- [CGContextBeginTransparencyLayerWithRect](begintransparencylayer%28in_auxiliaryinfo_%29.md): Begins a transparency layer whose contents are bounded by the specified rectangle.
- [CGContextBeginTransparencyLayer](begintransparencylayer%28auxiliaryinfo_%29.md): Begins a transparency layer.
