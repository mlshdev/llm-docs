> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/limit(_:limit:withoutputconstant:result:)-9v33v](https://developer.apple.com/documentation/accelerate/vdsp/limit(_:limit:withoutputconstant:result:)-9v33v)

# limit(\_:limit:withOutputConstant:result:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Calculates the single-precision vector test limit.

## Declaration

```swift
static func limit<U, V>(_ vector: U, limit: Float, withOutputConstant outputConstant: Float, result: inout V) where U : AccelerateBuffer, V : AccelerateMutableBuffer, U.Element == Float, V.Element == Float
```

## See Also

### Limit Operations

- [limit(\_:limit:withOutputConstant:)](limit%28__limit_withoutputconstant_%29-2d9u6.md): Returns the double-precision vector test limit.
- [limit(\_:limit:withOutputConstant:)](limit%28__limit_withoutputconstant_%29-8bj65.md): Returns the single-precision vector test limit.
- [limit(\_:limit:withOutputConstant:result:)](limit%28__limit_withoutputconstant_result_%29-6apdv.md): Calculates the double-precision vector test limit.
