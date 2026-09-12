> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/scaleddotproductattention(query:key:value:descriptor:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/scaleddotproductattention(query:key:value:descriptor:name:))

# scaledDotProductAttention(query:key:value:descriptor:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a scaled dot product attention (SDPA) operation using a descriptor and returns the result tensor.

## Declaration

```swift
func scaledDotProductAttention(query queryTensor: MPSGraphTensor, key keyTensor: MPSGraphTensor, value valueTensor: MPSGraphTensor, descriptor: MPSGraphSDPADescriptor, name: String?) -> MPSGraphTensor
```

## Parameters

- `queryTensor`: A tensor that represents the query projection.
- `keyTensor`: A tensor that represents the key projection.
- `valueTensor`: A tensor that represents the value projection.
- `descriptor`: A descriptor specifying scale and optional features (mask, isCausal, sinks).
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

The descriptor allows configuring an optional attention mask, causal masking, and attention sinks without requiring a separate API method for each combination of features.

# scaledDotProductAttentionWithQueryTensor:keyTensor:valueTensor:descriptor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a scaled dot product attention (SDPA) operation using a descriptor and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) scaledDotProductAttentionWithQueryTensor:(MPSGraphTensor *) queryTensor keyTensor:(MPSGraphTensor *) keyTensor valueTensor:(MPSGraphTensor *) valueTensor descriptor:(MPSGraphSDPADescriptor *) descriptor name:(NSString *) name;
```

## Parameters

- `queryTensor`: A tensor that represents the query projection.
- `keyTensor`: A tensor that represents the key projection.
- `valueTensor`: A tensor that represents the value projection.
- `descriptor`: A descriptor specifying scale and optional features (mask, isCausal, sinks).
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

The descriptor allows configuring an optional attention mask, causal masking, and attention sinks without requiring a separate API method for each combination of features.
