> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/screensaver/ssrandomintbetween(_:_:)](https://developer.apple.com/documentation/screensaver/ssrandomintbetween(_:_:))

# SSRandomIntBetween(\_:\_:) (Swift)

**Framework:** Screen Saver  
**Kind:** Function  
**Availability:** macOS 10.0+

Returns a random integer value.

## Declaration

```swift
func SSRandomIntBetween(_ a: Int32, _ b: Int32) -> Int32
```

## Parameters

- `a`: The first integer value.
- `b`: The second integer value.

<a id="Discussion"></a>

## Discussion

The Screen Saver framework automatically seeds the `random()` C function to generate the number.

## See Also

### Utilities

- [SSRandomFloatBetween(\_:\_:)](ssrandomfloatbetween%28____%29.md): Returns a random float value.
- [SSRandomPointForSizeWithinRect(\_:\_:)](ssrandompointforsizewithinrect%28____%29.md): Returns a random point.
- [SSCenteredRectInRect(\_:\_:)](sscenteredrectinrect%28____%29.md): Returns a rectangle.

# SSRandomIntBetween (Objective-C)

**Framework:** Screen Saver  
**Kind:** Function  
**Availability:** macOS 10.0+

Returns a random integer value.

## Declaration

```objectivec
static int SSRandomIntBetween(int a, int b);
```

## Parameters

- `a`: The first integer value.
- `b`: The second integer value.

<a id="Discussion"></a>

## Discussion

The Screen Saver framework automatically seeds the `random()` C function to generate the number.

## See Also

### Utilities

- [SSRandomFloatBetween](ssrandomfloatbetween%28____%29.md): Returns a random float value.
- [SSRandomPointForSizeWithinRect](ssrandompointforsizewithinrect%28____%29.md): Returns a random point.
- [SSCenteredRectInRect](sscenteredrectinrect%28____%29.md): Returns a rectangle.
