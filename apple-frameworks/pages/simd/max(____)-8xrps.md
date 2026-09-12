> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/max(_:_:)-8xrps](https://developer.apple.com/documentation/simd/max(_:_:)-8xrps)

# max(\_:\_:)

**Framework:** simd  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · watchOS 11.0+

Vector-scalar maximum.  Each component of the result is the maximum of the corresponding element of the input vector and the scalar.

## Declaration

```swift
func max(_ vector: simd_half8, _ scalar: Float16) -> simd_half8
```
