> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/screensaver/ssrandompointforsizewithinrect(_:_:)](https://developer.apple.com/documentation/screensaver/ssrandompointforsizewithinrect(_:_:))

# SSRandomPointForSizeWithinRect(\_:\_:) (Swift)

**Framework:** Screen Saver  
**Kind:** Function  
**Availability:** macOS 10.0+

Returns a random point.

## Declaration

```swift
func SSRandomPointForSizeWithinRect(_ size: NSSize, _ rect: NSRect) -> NSPoint
```

## Parameters

- `size`: The horizontal and vertical amounts to subtract from the rectangle’s size.
- `rect`: The rectangle to contain the point.

<a id="return-value"></a>

## Return Value

A random point within `rect`, constrained within `(rect.size - size)` from `rect`’s origin.

<a id="Discussion"></a>

## Discussion

The Screen Saver framework automatically seeds the `random()` C function to generate the point.

## See Also

### Utilities

- [SSRandomIntBetween(\_:\_:)](ssrandomintbetween%28____%29.md): Returns a random integer value.
- [SSRandomFloatBetween(\_:\_:)](ssrandomfloatbetween%28____%29.md): Returns a random float value.
- [SSCenteredRectInRect(\_:\_:)](sscenteredrectinrect%28____%29.md): Returns a rectangle.

# SSRandomPointForSizeWithinRect (Objective-C)

**Framework:** Screen Saver  
**Kind:** Function  
**Availability:** macOS 10.0+

Returns a random point.

## Declaration

```objectivec
static NSPoint SSRandomPointForSizeWithinRect(NSSize size, NSRect rect);
```

## Parameters

- `size`: The horizontal and vertical amounts to subtract from the rectangle’s size.
- `rect`: The rectangle to contain the point.

<a id="return-value"></a>

## Return Value

A random point within `rect`, constrained within `(rect.size - size)` from `rect`’s origin.

<a id="Discussion"></a>

## Discussion

The Screen Saver framework automatically seeds the `random()` C function to generate the point.

## See Also

### Utilities

- [SSRandomIntBetween](ssrandomintbetween%28____%29.md): Returns a random integer value.
- [SSRandomFloatBetween](ssrandomfloatbetween%28____%29.md): Returns a random float value.
- [SSCenteredRectInRect](sscenteredrectinrect%28____%29.md): Returns a rectangle.
