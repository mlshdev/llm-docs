> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/screensaver/ssrandomfloatbetween(_:_:)](https://developer.apple.com/documentation/screensaver/ssrandomfloatbetween(_:_:))

# SSRandomFloatBetween(\_:\_:) (Swift)

**Framework:** Screen Saver  
**Kind:** Function  
**Availability:** macOS 10.0+

Returns a random float value.

## Declaration

```swift
func SSRandomFloatBetween(_ a: CGFloat, _ b: CGFloat) -> CGFloat
```

## Parameters

- `a`: The first floating-point value.
- `b`: The second floating-point value.

<a id="return-value"></a>

## Return Value

A random floating-point value between the values `a` and `b`, inclusive.

<a id="Discussion"></a>

## Discussion

The Screen Saver framework automatically seeds the `random()` C function to generate the number.

## See Also

### Utilities

- [SSRandomIntBetween(\_:\_:)](ssrandomintbetween%28____%29.md): Returns a random integer value.
- [SSRandomPointForSizeWithinRect(\_:\_:)](ssrandompointforsizewithinrect%28____%29.md): Returns a random point.
- [SSCenteredRectInRect(\_:\_:)](sscenteredrectinrect%28____%29.md): Returns a rectangle.

# SSRandomFloatBetween (Objective-C)

**Framework:** Screen Saver  
**Kind:** Function  
**Availability:** macOS 10.0+

Returns a random float value.

## Declaration

```objectivec
static CGFloat SSRandomFloatBetween(CGFloat a, CGFloat b);
```

## Parameters

- `a`: The first floating-point value.
- `b`: The second floating-point value.

<a id="return-value"></a>

## Return Value

A random floating-point value between the values `a` and `b`, inclusive.

<a id="Discussion"></a>

## Discussion

The Screen Saver framework automatically seeds the `random()` C function to generate the number.

## See Also

### Utilities

- [SSRandomIntBetween](ssrandomintbetween%28____%29.md): Returns a random integer value.
- [SSRandomPointForSizeWithinRect](ssrandompointforsizewithinrect%28____%29.md): Returns a random point.
- [SSCenteredRectInRect](sscenteredrectinrect%28____%29.md): Returns a rectangle.
