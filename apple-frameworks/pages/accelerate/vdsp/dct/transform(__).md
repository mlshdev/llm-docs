> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/dct/transform(_:)](https://developer.apple.com/documentation/accelerate/vdsp/dct/transform(_:))

# transform(\_:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Returns the single-precision real discrete cosine transform.

## Declaration

```swift
func transform<U>(_ vector: U) -> [Float] where U : AccelerateBuffer, U.Element == Float
```

## See Also

### Instance Methods

- [transform(\_:result:)](transform%28__result_%29.md): Computes an out-of-place single-precision real discrete cosine transform.
