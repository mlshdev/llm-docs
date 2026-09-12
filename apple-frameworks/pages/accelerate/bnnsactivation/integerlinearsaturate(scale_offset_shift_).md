> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsactivation/integerlinearsaturate(scale:offset:shift:)](https://developer.apple.com/documentation/accelerate/bnnsactivation/integerlinearsaturate(scale:offset:shift:))

# integerLinearSaturate(scale:offset:shift:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS · watchOS 4.0+

Returns an activation function that computes an arithmetic shift, preserving sign.

> Use the BNNSGraph API instead.

## Declaration

```swift
static func integerLinearSaturate(scale: Int32 = 1, offset: Int32 = 0, shift: Int32 = 0) -> BNNSActivation
```

## Parameters

- `scale`: The scale for the activation function.
- `offset`: The offset for the activation function.
- `shift`: The arithmetic shift for the activation function.

## See Also

### Related Documentation

- [BNNSActivationFunctionIntegerLinearSaturate](../bnnsactivationfunction/bnnsactivationfunctionintegerlinearsaturate.md): An activation function that returns an arithmetic shift, preserving sign.

### Type Methods

- [integerLinearSaturatePerChannel(scale:offset:shift:)](integerlinearsaturateperchannel%28scale_offset_shift_%29.md): Deprecated. Returns an activation function that computes an arithmetic shift, preserving sign for each channel.
