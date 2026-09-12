> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/screensaver/sscenteredrectinrect(_:_:)](https://developer.apple.com/documentation/screensaver/sscenteredrectinrect(_:_:))

# SSCenteredRectInRect(\_:\_:) (Swift)

**Framework:** Screen Saver  
**Kind:** Function  
**Availability:** macOS 10.0+

Returns a rectangle.

## Declaration

```swift
func SSCenteredRectInRect(_ innerRect: NSRect, _ outerRect: NSRect) -> NSRect
```

## Parameters

- `innerRect`: The rectangle to center.
- `outerRect`: The rectangle to contain `innerRect`.

<a id="return-value"></a>

## Return Value

A rectangle that’s the same size as `innerRect`, but is centered inside `outerRect`.

## See Also

### Utilities

- [SSRandomIntBetween(\_:\_:)](ssrandomintbetween%28____%29.md): Returns a random integer value.
- [SSRandomFloatBetween(\_:\_:)](ssrandomfloatbetween%28____%29.md): Returns a random float value.
- [SSRandomPointForSizeWithinRect(\_:\_:)](ssrandompointforsizewithinrect%28____%29.md): Returns a random point.

# SSCenteredRectInRect (Objective-C)

**Framework:** Screen Saver  
**Kind:** Function  
**Availability:** macOS 10.0+

Returns a rectangle.

## Declaration

```objectivec
static NSRect SSCenteredRectInRect(NSRect innerRect, NSRect outerRect);
```

## Parameters

- `innerRect`: The rectangle to center.
- `outerRect`: The rectangle to contain `innerRect`.

<a id="return-value"></a>

## Return Value

A rectangle that’s the same size as `innerRect`, but is centered inside `outerRect`.

## See Also

### Utilities

- [SSRandomIntBetween](ssrandomintbetween%28____%29.md): Returns a random integer value.
- [SSRandomFloatBetween](ssrandomfloatbetween%28____%29.md): Returns a random float value.
- [SSRandomPointForSizeWithinRect](ssrandompointforsizewithinrect%28____%29.md): Returns a random point.
