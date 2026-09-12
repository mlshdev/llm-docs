> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vclassifyf(_:)](https://developer.apple.com/documentation/accelerate/vclassifyf(_:))

# vclassifyf(\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

For each vector element, returns the class of the argument (one of the FP\_ … constants defined in math.h).

## Declaration

```swift
func vclassifyf(_: vFloat) -> vUInt32
```

## See Also

### Inquiry Functions (from vfp.h)

- [vsignbitf(\_:)](vsignbitf%28__%29.md): For each vector element, returns a non-zero value if and only if the sign of `arg` is negative. This includes NaNs, infinities and zeros.

# vclassifyf (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

For each vector element, returns the class of the argument (one of the FP\_ … constants defined in math.h).

## Declaration

```objectivec
extern vUInt32 vclassifyf(vFloat );
```

## See Also

### Inquiry Functions (from vfp.h)

- [vsignbitf](vsignbitf%28__%29.md): For each vector element, returns a non-zero value if and only if the sign of `arg` is negative. This includes NaNs, infinities and zeros.
