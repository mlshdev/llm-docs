> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/coltoim(_:outputshape:descriptor:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/coltoim(_:outputshape:descriptor:name:))

# colToIm(\_:outputShape:descriptor:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a column to image operation and returns the result tensor.

## Declaration

```swift
func colToIm(_ source: MPSGraphTensor, outputShape: [NSNumber], descriptor: MPSGraphImToColOpDescriptor, name: String?) -> MPSGraphTensor
```

## Parameters

- `source`: The tensor containing the source data. Must be of rank 4. The layout is defined by `descriptor.dataLayout`.
- `outputShape`: The result tensor shape.
- `descriptor`: The descriptor object that specifies the parameters of the operation.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object

# colToImWithSourceTensor:outputShape:descriptor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a column to image operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) colToImWithSourceTensor:(MPSGraphTensor *) source outputShape:(MPSShape *) outputShape descriptor:(MPSGraphImToColOpDescriptor *) descriptor name:(NSString *) name;
```

## Parameters

- `source`: The tensor containing the source data. Must be of rank 4. The layout is defined by `descriptor.dataLayout`.
- `outputShape`: The result tensor shape.
- `descriptor`: The descriptor object that specifies the parameters of the operation.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object
