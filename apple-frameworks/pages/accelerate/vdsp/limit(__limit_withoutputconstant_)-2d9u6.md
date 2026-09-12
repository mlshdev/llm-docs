> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/limit(_:limit:withoutputconstant:)-2d9u6](https://developer.apple.com/documentation/accelerate/vdsp/limit(_:limit:withoutputconstant:)-2d9u6)

# limit(\_:limit:withOutputConstant:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Returns the double-precision vector test limit.

## Declaration

```swift
static func limit<U>(_ vector: U, limit: Double, withOutputConstant outputConstant: Double) -> [Double] where U : AccelerateBuffer, U.Element == Double
```

## See Also

### Limit Operations

- [limit(\_:limit:withOutputConstant:)](limit%28__limit_withoutputconstant_%29-8bj65.md): Returns the single-precision vector test limit.
- [limit(\_:limit:withOutputConstant:result:)](limit%28__limit_withoutputconstant_result_%29-6apdv.md): Calculates the double-precision vector test limit.
- [limit(\_:limit:withOutputConstant:result:)](limit%28__limit_withoutputconstant_result_%29-9v33v.md): Calculates the single-precision vector test limit.
