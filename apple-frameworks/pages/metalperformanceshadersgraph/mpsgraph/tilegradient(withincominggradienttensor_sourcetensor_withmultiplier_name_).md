> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/tilegradient(withincominggradienttensor:sourcetensor:withmultiplier:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/tilegradient(withincominggradienttensor:sourcetensor:withmultiplier:name:))

# tileGradient(withIncomingGradientTensor:sourceTensor:withMultiplier:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a tile gradient operation and returns the result tensor.

## Declaration

```swift
func tileGradient(withIncomingGradientTensor incomingGradientTensor: MPSGraphTensor, sourceTensor: MPSGraphTensor, withMultiplier multiplier: [NSNumber], name: String?) -> MPSGraphTensor
```

## Parameters

- `incomingGradientTensor`: The input gradient tensor.
- `sourceTensor`: The input tensor of the forward pass.
- `multiplier`: An array of numbers that specifies how many copies per dimension MPSGraph produced in the forward pass.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

# tileGradientWithIncomingGradientTensor:sourceTensor:withMultiplier:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a tile gradient operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) tileGradientWithIncomingGradientTensor:(MPSGraphTensor *) incomingGradientTensor sourceTensor:(MPSGraphTensor *) sourceTensor withMultiplier:(MPSShape *) multiplier name:(NSString *) name;
```

## Parameters

- `incomingGradientTensor`: The input gradient tensor.
- `sourceTensor`: The input tensor of the forward pass.
- `multiplier`: An array of numbers that specifies how many copies per dimension MPSGraph produced in the forward pass.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.
