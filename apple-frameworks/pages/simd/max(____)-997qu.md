> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/simd/max(_:_:)-997qu

# max(\_:\_:)

**Framework:** simd  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · watchOS 11.0+

Vector-scalar maximum.  Each component of the result is the maximum of the corresponding element of the input vector and the scalar.

## Declaration

```swift
func max(_ vector: simd_half4, _ scalar: Float16) -> simd_half4
```
