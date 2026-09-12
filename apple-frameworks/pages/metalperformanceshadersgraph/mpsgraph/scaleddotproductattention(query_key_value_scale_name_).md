> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/scaleddotproductattention(query:key:value:scale:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/scaleddotproductattention(query:key:value:scale:name:))

# scaledDotProductAttention(query:key:value:scale:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Creates a scaled dot product attention (SDPA) operation (without a mask) and returns the result tensor.

## Declaration

```swift
func scaledDotProductAttention(query queryTensor: MPSGraphTensor, key keyTensor: MPSGraphTensor, value valueTensor: MPSGraphTensor, scale: Float, name: String?) -> MPSGraphTensor
```

## Parameters

- `queryTensor`: A tensor that represents the query projection.
- `keyTensor`: A tensor that represents the key projection.
- `valueTensor`: A tensor that represents the value projection.
- `scale`: A scale that is applied on the result of query and value matrix multiply.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

# scaledDotProductAttentionWithQueryTensor:keyTensor:valueTensor:scale:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Creates a scaled dot product attention (SDPA) operation (without a mask) and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) scaledDotProductAttentionWithQueryTensor:(MPSGraphTensor *) queryTensor keyTensor:(MPSGraphTensor *) keyTensor valueTensor:(MPSGraphTensor *) valueTensor scale:(float) scale name:(NSString *) name;
```

## Parameters

- `queryTensor`: A tensor that represents the query projection.
- `keyTensor`: A tensor that represents the key projection.
- `valueTensor`: A tensor that represents the value projection.
- `scale`: A scale that is applied on the result of query and value matrix multiply.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.
