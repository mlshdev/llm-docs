> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/fusedternaryarithmeticparameters/init(inputadescriptortype:inputbdescriptortype:inputcdescriptortype:outputdescriptortype:function:)](https://developer.apple.com/documentation/accelerate/bnns/fusedternaryarithmeticparameters/init(inputadescriptortype:inputbdescriptortype:inputcdescriptortype:outputdescriptortype:function:))

# init(inputADescriptorType:inputBDescriptorType:inputCDescriptorType:outputDescriptorType:function:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Returns a new fused ternary arithmetic parameters structure.

> Use the BNNSGraph API instead.

## Declaration

```swift
init(inputADescriptorType: BNNS.DescriptorType, inputBDescriptorType: BNNS.DescriptorType, inputCDescriptorType: BNNS.DescriptorType, outputDescriptorType: BNNS.DescriptorType, function: BNNS.ArithmeticTernaryFunction)
```

## Parameters

- `inputADescriptorType`: The descriptor type of the first input.
- `inputBDescriptorType`: The descriptor type of the second input.
- `inputCDescriptorType`: The descriptor type of the third input.
- `outputDescriptorType`: The descriptor type of the output.
- `function`: The arithmetic function.
