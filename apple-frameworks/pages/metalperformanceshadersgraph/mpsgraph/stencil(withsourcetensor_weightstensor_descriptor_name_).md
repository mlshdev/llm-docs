> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/stencil(withsourcetensor:weightstensor:descriptor:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/stencil(withsourcetensor:weightstensor:descriptor:name:))

# stencil(withSourceTensor:weightsTensor:descriptor:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a stencil operation and returns the result tensor.

## Declaration

```swift
func stencil(withSourceTensor source: MPSGraphTensor, weightsTensor weights: MPSGraphTensor, descriptor: MPSGraphStencilOpDescriptor, name: String?) -> MPSGraphTensor
```

## Parameters

- `source`: The tensor containing the source data. Must be of rank 4 or greater.
- `weights`: A 4-D tensor containing the weights data.
- `descriptor`: The descriptor object that specifies the parameters for the stencil operation.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

Performs a weighted reduction operation (See [reductionMode](../mpsgraphstencilopdescriptor/reductionmode.md)) on the last 4 dimensions of the `source` over the window determined by `weights`, according to the value defined in `descriptor`.

```md
   y[i] = reduction{j \in w} ( x[ i + j ]w[j] )
```

# stencilWithSourceTensor:weightsTensor:descriptor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a stencil operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) stencilWithSourceTensor:(MPSGraphTensor *) source weightsTensor:(MPSGraphTensor *) weights descriptor:(MPSGraphStencilOpDescriptor *) descriptor name:(NSString *) name;
```

## Parameters

- `source`: The tensor containing the source data. Must be of rank 4 or greater.
- `weights`: A 4-D tensor containing the weights data.
- `descriptor`: The descriptor object that specifies the parameters for the stencil operation.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

Performs a weighted reduction operation (See [reductionMode](../mpsgraphstencilopdescriptor/reductionmode.md)) on the last 4 dimensions of the `source` over the window determined by `weights`, according to the value defined in `descriptor`.

```md
   y[i] = reduction{j \in w} ( x[ i + j ]w[j] )
```
