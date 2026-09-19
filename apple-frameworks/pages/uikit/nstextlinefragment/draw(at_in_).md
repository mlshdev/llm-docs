> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/nstextlinefragment/draw(at:in:)

# draw(at:in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

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

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

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
