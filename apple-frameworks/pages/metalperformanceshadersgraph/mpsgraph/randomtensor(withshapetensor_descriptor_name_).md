> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/randomtensor(withshapetensor:descriptor:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/randomtensor(withshapetensor:descriptor:name:))

# randomTensor(withShapeTensor:descriptor:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a Random op of type matching distribution in descriptor and returns random values.

## Declaration

```swift
func randomTensor(withShapeTensor shapeTensor: MPSGraphTensor, descriptor: MPSGraphRandomOpDescriptor, name: String?) -> MPSGraphTensor
```

## Parameters

- `shapeTensor`: 1D Int32 or Int64 tensor. The shape of the tensor generated
- `descriptor`: The descriptor of the distribution. See MPSGraphRandomOpDescriptor.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

An MPSGraphTensor of shape containing random values in the defined range.

<a id="discussion"></a>

## Discussion

Returns a tensor of provided shape of random values in the distribution specified. Uses a random seed value to initalize state. No state is preserved, and subsequent calls are not guaranteed to result in a unique stream of random values.

# randomTensorWithShapeTensor:descriptor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a Random op of type matching distribution in descriptor and returns random values.

## Declaration

```objectivec
- (MPSGraphTensor *) randomTensorWithShapeTensor:(MPSGraphTensor *) shapeTensor descriptor:(MPSGraphRandomOpDescriptor *) descriptor name:(NSString *) name;
```

## Parameters

- `shapeTensor`: 1D Int32 or Int64 tensor. The shape of the tensor generated
- `descriptor`: The descriptor of the distribution. See MPSGraphRandomOpDescriptor.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

An MPSGraphTensor of shape containing random values in the defined range.

<a id="discussion"></a>

## Discussion

Returns a tensor of provided shape of random values in the distribution specified. Uses a random seed value to initalize state. No state is preserved, and subsequent calls are not guaranteed to result in a unique stream of random values.
