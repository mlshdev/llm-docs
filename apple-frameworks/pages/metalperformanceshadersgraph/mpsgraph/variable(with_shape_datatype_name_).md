> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/variable(with:shape:datatype:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/variable(with:shape:datatype:name:))

# variable(with:shape:dataType:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a variable operation and returns the result tensor.

## Declaration

```swift
func variable(with data: Data, shape: [NSNumber], dataType: MPSDataType, name: String?) -> MPSGraphTensor
```

## Parameters

- `data`: The data for the tensor. The number of bytes should be sizeof(dataType)numberOfElements.
- `shape`: The shape of the output tensor. This has to be statically shaped.
- `dataType`: The dataType of the constant tensor.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

# variableWithData:shape:dataType:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a variable operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) variableWithData:(NSData *) data shape:(MPSShape *) shape dataType:(MPSDataType) dataType name:(NSString *) name;
```

## Parameters

- `data`: The data for the tensor. The number of bytes should be sizeof(dataType)numberOfElements.
- `shape`: The shape of the output tensor. This has to be statically shaped.
- `dataType`: The dataType of the constant tensor.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.
