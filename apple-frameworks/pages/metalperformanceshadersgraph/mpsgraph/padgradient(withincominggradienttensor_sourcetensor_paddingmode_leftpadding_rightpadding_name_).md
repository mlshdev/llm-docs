> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/padgradient(withincominggradienttensor:sourcetensor:paddingmode:leftpadding:rightpadding:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/padgradient(withincominggradienttensor:sourcetensor:paddingmode:leftpadding:rightpadding:name:))

# padGradient(withIncomingGradientTensor:sourceTensor:paddingMode:leftPadding:rightPadding:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a padding gradient operation and returns the result tensor.

## Declaration

```swift
func padGradient(withIncomingGradientTensor incomingGradientTensor: MPSGraphTensor, sourceTensor: MPSGraphTensor, paddingMode: MPSGraphPaddingMode, leftPadding: [NSNumber], rightPadding: [NSNumber], name: String?) -> MPSGraphTensor
```

## Parameters

- `incomingGradientTensor`: The input gradient tensor.
- `sourceTensor`: The input tensor of the forward pass.
- `paddingMode`: The parameter that defines the padding mode.
- `leftPadding`: The parameter that defines how much padding the operation applies to the input tensor before each dimension - must be of size `rank(tensor)`.
- `rightPadding`: The parameter that defines how much padding the operation applies to the input tensor after each dimension - must be of size `rank(tensor)`.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

# padGradientWithIncomingGradientTensor:sourceTensor:paddingMode:leftPadding:rightPadding:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a padding gradient operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) padGradientWithIncomingGradientTensor:(MPSGraphTensor *) incomingGradientTensor sourceTensor:(MPSGraphTensor *) sourceTensor paddingMode:(MPSGraphPaddingMode) paddingMode leftPadding:(MPSShape *) leftPadding rightPadding:(MPSShape *) rightPadding name:(NSString *) name;
```

## Parameters

- `incomingGradientTensor`: The input gradient tensor.
- `sourceTensor`: The input tensor of the forward pass.
- `paddingMode`: The parameter that defines the padding mode.
- `leftPadding`: The parameter that defines how much padding the operation applies to the input tensor before each dimension - must be of size `rank(tensor)`.
- `rightPadding`: The parameter that defines how much padding the operation applies to the input tensor after each dimension - must be of size `rank(tensor)`.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.
