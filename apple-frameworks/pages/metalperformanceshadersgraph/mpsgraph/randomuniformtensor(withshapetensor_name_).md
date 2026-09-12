> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/randomuniformtensor(withshapetensor:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/randomuniformtensor(withshapetensor:name:))

# randomUniformTensor(withShapeTensor:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a RandomUniform operation and returns random uniform values

## Declaration

```swift
func randomUniformTensor(withShapeTensor shapeTensor: MPSGraphTensor, name: String?) -> MPSGraphTensor
```

## Parameters

- `shapeTensor`: 1D Int32 or Int64 tensor. The shape of the tensor generated
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

An MPSGraphTensor of shape containing random values in the defined range.

<a id="discussion"></a>

## Discussion

Returns a tensor of provided shape of random uniform values in the range \[0.0, 1.0). Uses a random seed value to initalize state. No state is preserved, and subsequent calls are not guaranteed to result in a unique stream of random values.

# randomUniformTensorWithShapeTensor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a RandomUniform operation and returns random uniform values

## Declaration

```objectivec
- (MPSGraphTensor *) randomUniformTensorWithShapeTensor:(MPSGraphTensor *) shapeTensor name:(NSString *) name;
```

## Parameters

- `shapeTensor`: 1D Int32 or Int64 tensor. The shape of the tensor generated
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

An MPSGraphTensor of shape containing random values in the defined range.

<a id="discussion"></a>

## Discussion

Returns a tensor of provided shape of random uniform values in the range \[0.0, 1.0). Uses a random seed value to initalize state. No state is preserved, and subsequent calls are not guaranteed to result in a unique stream of random values.
