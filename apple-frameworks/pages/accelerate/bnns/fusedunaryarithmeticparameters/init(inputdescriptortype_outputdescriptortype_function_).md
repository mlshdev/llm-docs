> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/fusedunaryarithmeticparameters/init(inputdescriptortype:outputdescriptortype:function:)](https://developer.apple.com/documentation/accelerate/bnns/fusedunaryarithmeticparameters/init(inputdescriptortype:outputdescriptortype:function:))

# init(inputDescriptorType:outputDescriptorType:function:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Returns a new fused unary arithmetic parameters structure.

> Use the BNNSGraph API instead.

## Declaration

```swift
init(inputDescriptorType: BNNS.DescriptorType, outputDescriptorType: BNNS.DescriptorType, function: BNNS.ArithmeticUnaryFunction)
```

## Parameters

- `inputDescriptorType`: The descriptor type of the input.
- `outputDescriptorType`: The descriptor type of the output.
- `function`: The arithmetic function.
