> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparametersarithmetic/init(arithmetic_function:arithmetic_function_fields:activation:)](https://developer.apple.com/documentation/accelerate/bnnslayerparametersarithmetic/init(arithmetic_function:arithmetic_function_fields:activation:))

# init(arithmetic_function:arithmetic_function_fields:activation:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Returns a new arithmetic layer parameters structure.

> Use BNNSGraph\* APIs

## Declaration

```swift
init(arithmetic_function: BNNSArithmeticFunction, arithmetic_function_fields: UnsafeMutableRawPointer, activation: BNNSActivation)
```

## Parameters

- `arithmetic_function`: The arithmetic function.
- `arithmetic_function_fields`: A pointer to an arithmetic function field structure.
- `activation`: The activation function that the layer applies to the output.
