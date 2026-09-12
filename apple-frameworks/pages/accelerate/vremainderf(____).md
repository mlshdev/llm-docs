> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vremainderf(_:_:)](https://developer.apple.com/documentation/accelerate/vremainderf(_:_:))

# vremainderf(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

For each vector element, calculates the remainder of `X`/`Y`, according to the IEEE 754 floating-point standard.

## Declaration

```swift
func vremainderf(_: vFloat, _: vFloat) -> vFloat
```

## See Also

### Remainder Functions (from vfp.h)

- [vfmodf(\_:\_:)](vfmodf%28____%29.md): For each vector element, calculates `X` modulo `Y`.
- [vremquof(\_:\_:\_:)](vremquof%28______%29.md): For each vector element, calculates the remainder of `X`/`Y`, according to the SANE standard. It stores into `QUO` the 7 low-order bits of the integer quotient, such that -127 \<= `QUO` \<= 127.

# vremainderf (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

For each vector element, calculates the remainder of `X`/`Y`, according to the IEEE 754 floating-point standard.

## Declaration

```objectivec
extern vFloat vremainderf(vFloat , vFloat );
```

## See Also

### Remainder Functions (from vfp.h)

- [vfmodf](vfmodf%28____%29.md): For each vector element, calculates `X` modulo `Y`.
- [vremquof](vremquof%28______%29.md): For each vector element, calculates the remainder of `X`/`Y`, according to the SANE standard. It stores into `QUO` the 7 low-order bits of the integer quotient, such that -127 \<= `QUO` \<= 127.
