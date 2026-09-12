> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/cast(_:to:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/cast(_:to:name:))

# cast(\_:to:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a cast operation and returns the result tensor.

## Declaration

```swift
func cast(_ tensor: MPSGraphTensor, to type: MPSDataType, name: String?) -> MPSGraphTensor
```

## Parameters

- `tensor`: The input tensor.
- `type`: The datatype to which MPSGraph casts the input.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

Returns the input tensor casted to the specied data type.

# castTensor:toType:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a cast operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) castTensor:(MPSGraphTensor *) tensor toType:(MPSDataType) type name:(NSString *) name;
```

## Parameters

- `tensor`: The input tensor.
- `type`: The datatype to which MPSGraph casts the input.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

Returns the input tensor casted to the specied data type.
