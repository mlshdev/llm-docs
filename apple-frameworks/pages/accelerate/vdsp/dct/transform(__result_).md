> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/dct/transform(_:result:)](https://developer.apple.com/documentation/accelerate/vdsp/dct/transform(_:result:))

# transform(\_:result:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Computes an out-of-place single-precision real discrete cosine transform.

## Declaration

```swift
func transform<U, V>(_ vector: U, result: inout V) where U : AccelerateBuffer, V : AccelerateMutableBuffer, U.Element == Float, V.Element == Float
```

## See Also

### Instance Methods

- [transform(\_:)](transform%28__%29.md): Returns the single-precision real discrete cosine transform.
