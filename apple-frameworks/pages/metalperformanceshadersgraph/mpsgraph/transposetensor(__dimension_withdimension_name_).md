> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/transposetensor(_:dimension:withdimension:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/transposetensor(_:dimension:withdimension:name:))

# transposeTensor(\_:dimension:withDimension:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a transpose operation and returns the result tensor.

## Declaration

```swift
func transposeTensor(_ tensor: MPSGraphTensor, dimension dimensionIndex: Int, withDimension dimensionIndex2: Int, name: String?) -> MPSGraphTensor
```

## Parameters

- `tensor`: The tensor to be transposed.
- `dimensionIndex`: The first dimension index to be transposed.
- `dimensionIndex2`: The second dimension index to be transposed.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

Transposes the dimensions `dimensionIndex` and `dimensionIndex2` of the input tensor.

# transposeTensor:dimension:withDimension:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a transpose operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) transposeTensor:(MPSGraphTensor *) tensor dimension:(NSUInteger) dimensionIndex withDimension:(NSUInteger) dimensionIndex2 name:(NSString *) name;
```

## Parameters

- `tensor`: The tensor to be transposed.
- `dimensionIndex`: The first dimension index to be transposed.
- `dimensionIndex2`: The second dimension index to be transposed.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

Transposes the dimensions `dimensionIndex` and `dimensionIndex2` of the input tensor.
