> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsactivation/integerlinearsaturateperchannel(scale:offset:shift:)](https://developer.apple.com/documentation/accelerate/bnnsactivation/integerlinearsaturateperchannel(scale:offset:shift:))

# integerLinearSaturatePerChannel(scale:offset:shift:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS · watchOS 4.0+

Returns an activation function that computes an arithmetic shift, preserving sign for each channel.

> Use the BNNSGraph API instead.

## Declaration

```swift
static func integerLinearSaturatePerChannel(scale: UnsafePointer<Int32>, offset: UnsafePointer<Int32>, shift: UnsafePointer<Int32>) -> BNNSActivation
```

## Parameters

- `scale`: The scale for the activation function.
- `offset`: The offset for the activation function.
- `shift`: The arithmetic shift for the activation function.

## See Also

### Related Documentation

- [BNNSActivationFunctionIntegerLinearSaturatePerChannel](../bnnsactivationfunction/bnnsactivationfunctionintegerlinearsaturateperchannel.md): An activation function that returns an arithmetic shift, preserving sign for each channel.

### Type Methods

- [integerLinearSaturate(scale:offset:shift:)](integerlinearsaturate%28scale_offset_shift_%29.md): Deprecated. Returns an activation function that computes an arithmetic shift, preserving sign.
