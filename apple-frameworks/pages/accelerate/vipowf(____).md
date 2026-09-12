> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vipowf(_:_:)](https://developer.apple.com/documentation/accelerate/vipowf(_:_:))

# vipowf(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

For each vector element, calculates `X` to the integer power of `Y`.

## Declaration

```swift
func vipowf(_: vFloat, _: vSInt32) -> vFloat
```

## See Also

### Power Functions (from vfp.h)

- [vpowf(\_:\_:)](vpowf%28____%29.md): For each vector element, calculates `X` to the floating-point power of `Y`. The result is more accurate than using exp(log(`X`)\*`Y`).

# vipowf (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

For each vector element, calculates `X` to the integer power of `Y`.

## Declaration

```objectivec
extern vFloat vipowf(vFloat , vSInt32 );
```

## See Also

### Power Functions (from vfp.h)

- [vpowf](vpowf%28____%29.md): For each vector element, calculates `X` to the floating-point power of `Y`. The result is more accurate than using exp(log(`X`)\*`Y`).
