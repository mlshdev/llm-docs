> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextlinefragment/draw(at:in:)](https://developer.apple.com/documentation/appkit/nstextlinefragment/draw(at:in:))

# draw(at:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Renders the line fragment contents at the rendering origin.

## Declaration

```swift
func draw(at point: CGPoint, in context: CGContext)
```

## Parameters

- `point`: The origin as a `CGPoint`.
- `context`: The drawing context.

<a id="Discussion"></a>

## Discussion

You can specify the origin as (`NSMinX(typographicBounds) + glyphOrigin.x, NSMinY(typographicBounds) + glyphOrigin.y)` relative to the line fragment group coordinate system.

# drawAtPoint:inContext: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Renders the line fragment contents at the rendering origin.

## Declaration

```objectivec
- (void) drawAtPoint:(CGPoint) point inContext:(CGContextRef) context;
```

## Parameters

- `point`: The origin as a `CGPoint`.
- `context`: The drawing context.

<a id="Discussion"></a>

## Discussion

You can specify the origin as (`NSMinX(typographicBounds) + glyphOrigin.x, NSMinY(typographicBounds) + glyphOrigin.y)` relative to the line fragment group coordinate system.
