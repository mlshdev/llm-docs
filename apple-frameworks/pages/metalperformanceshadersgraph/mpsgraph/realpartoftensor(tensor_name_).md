> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/realpartoftensor(tensor:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/realpartoftensor(tensor:name:))

# realPartOfTensor(tensor:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Returns the real part of a tensor.

## Declaration

```swift
func realPartOfTensor(tensor: MPSGraphTensor, name: String?) -> MPSGraphTensor
```

## Parameters

- `tensor`: The input tensor.
- `name`: An optional string which serves as an identifier for the operation..

<a id="return-value"></a>

## Return Value

A valid `MPSGraphTensor` object containing the elementwise result of the applied operation.

# realPartOfTensor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Returns the real part of a tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) realPartOfTensor:(MPSGraphTensor *) tensor name:(NSString *) name;
```

## Parameters

- `tensor`: The input tensor.
- `name`: An optional string which serves as an identifier for the operation..

<a id="return-value"></a>

## Return Value

A valid `MPSGraphTensor` object containing the elementwise result of the applied operation.
