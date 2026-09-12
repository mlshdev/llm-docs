> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/biquad/apply(input:)](https://developer.apple.com/documentation/accelerate/vdsp/biquad/apply(input:))

# apply(input:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Applies a single- or double-precision single-channel or multichannel biquad IIR filter, returning the filtered signal.

## Declaration

```swift
mutating func apply<U>(input: U) -> [T] where T == U.Element, U : AccelerateBuffer
```

## See Also

### Instance methods

- [apply(input:output:)](apply%28input_output_%29.md): Applies a single- or double-precision single-channel or multichannel biquad IIR filter, overwriting the supplied output vector.
