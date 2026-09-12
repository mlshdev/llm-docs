> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/truncate(_:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/truncate(_:name:))

# truncate(\_:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Applies the truncate operation to the input tensor elements.

## Declaration

```swift
func truncate(_ tensor: MPSGraphTensor, name: String?) -> MPSGraphTensor
```

## Parameters

- `tensor`: The input tensor.
- `name`: An optional string which serves as an identifier for the operation.

<a id="return-value"></a>

## Return Value

A valid `MPSGraphTensor` object containing the elementwise result of the applied operation.

<a id="discussion"></a>

## Discussion

This operation applies the floor operation to positive inputs and ceiling operation to negative inputs.

# truncateWithTensor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Applies the truncate operation to the input tensor elements.

## Declaration

```objectivec
- (MPSGraphTensor *) truncateWithTensor:(MPSGraphTensor *) tensor name:(NSString *) name;
```

## Parameters

- `tensor`: The input tensor.
- `name`: An optional string which serves as an identifier for the operation.

<a id="return-value"></a>

## Return Value

A valid `MPSGraphTensor` object containing the elementwise result of the applied operation.

<a id="discussion"></a>

## Discussion

This operation applies the floor operation to positive inputs and ceiling operation to negative inputs.
