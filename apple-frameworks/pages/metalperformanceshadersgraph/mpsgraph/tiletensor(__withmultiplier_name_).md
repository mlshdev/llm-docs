> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/tiletensor(_:withmultiplier:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/tiletensor(_:withmultiplier:name:))

# tileTensor(\_:withMultiplier:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a tile operation and returns the result tensor.

## Declaration

```swift
func tileTensor(_ tensor: MPSGraphTensor, withMultiplier multiplier: [NSNumber], name: String?) -> MPSGraphTensor
```

## Parameters

- `tensor`: The input tensor
- `multiplier`: An array of numbers that specifies how many copies per dimension MPSGraph produces.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

Creates a tensor which contains multiple copies of the input tensor along each dimension of the tensor.

# tileTensor:withMultiplier:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a tile operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) tileTensor:(MPSGraphTensor *) tensor withMultiplier:(MPSShape *) multiplier name:(NSString *) name;
```

## Parameters

- `tensor`: The input tensor
- `multiplier`: An array of numbers that specifies how many copies per dimension MPSGraph produces.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

Creates a tensor which contains multiple copies of the input tensor along each dimension of the tensor.
