> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vpowf(_:_:)](https://developer.apple.com/documentation/accelerate/vpowf(_:_:))

# vpowf(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

For each vector element, calculates `X` to the floating-point power of `Y`. The result is more accurate than using exp(log(`X`)\*`Y`).

## Declaration

```swift
func vpowf(_: vFloat, _: vFloat) -> vFloat
```

## See Also

### Power Functions (from vfp.h)

- [vipowf(\_:\_:)](vipowf%28____%29.md): For each vector element, calculates `X` to the integer power of `Y`.

# vpowf (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

For each vector element, calculates `X` to the floating-point power of `Y`. The result is more accurate than using exp(log(`X`)\*`Y`).

## Declaration

```objectivec
extern vFloat vpowf(vFloat , vFloat );
```

## See Also

### Power Functions (from vfp.h)

- [vipowf](vipowf%28____%29.md): For each vector element, calculates `X` to the integer power of `Y`.
