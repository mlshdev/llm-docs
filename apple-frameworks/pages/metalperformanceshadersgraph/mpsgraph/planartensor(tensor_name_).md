> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/planartensor(tensor:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/planartensor(tensor:name:))

# planarTensor(tensor:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 26.3+ · iPadOS 26.3+ · Mac Catalyst 26.3+ · macOS 26.3+ · tvOS 26.3+ · visionOS 26.3+

Returns a real-valued tensor from a complex-valued tensor with real and imaginary planes separated.

## Declaration

```swift
func planarTensor(tensor: MPSGraphTensor, name: String?) -> MPSGraphTensor
```

## Parameters

- `tensor`: The input tensor.
- `name`: An optional string which serves as an identifier for the operation..

<a id="return-value"></a>

## Return Value

A valid `MPSGraphTensor` object containing the elementwise result of the applied operation.

<a id="discussion"></a>

## Discussion

Creates a complexToPlanar operation and returns the result tensor. In case the input tensor is a complex tensor the result tensor is twice as wide as the input tensor in the last dimension, and its datatype will be the underlying datatype of the input tensor - for example `<3xcomplex<f16>>` becomes `<6xf16>`. In case the input is not complex-valued, this op simply returns the input tensor. For complex input:

```md
{ resultTensor[...,i] = realPart(inputTensor[...,i])
{ resultTensor[...,i+DimSize(inputTensor,-1)] = imagPart(inputTensor[...,i])
```

For real-valued input:

```md
resultTensor = inputTensor
```

# planarTensorWithComplexTensor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 26.3+ · iPadOS 26.3+ · Mac Catalyst 26.3+ · macOS 26.3+ · tvOS 26.3+ · visionOS 26.3+

Returns a real-valued tensor from a complex-valued tensor with real and imaginary planes separated.

## Declaration

```objectivec
- (MPSGraphTensor *) planarTensorWithComplexTensor:(MPSGraphTensor *) tensor name:(NSString *) name;
```

## Parameters

- `tensor`: The input tensor.
- `name`: An optional string which serves as an identifier for the operation..

<a id="return-value"></a>

## Return Value

A valid `MPSGraphTensor` object containing the elementwise result of the applied operation.

<a id="discussion"></a>

## Discussion

Creates a complexToPlanar operation and returns the result tensor. In case the input tensor is a complex tensor the result tensor is twice as wide as the input tensor in the last dimension, and its datatype will be the underlying datatype of the input tensor - for example `<3xcomplex<f16>>` becomes `<6xf16>`. In case the input is not complex-valued, this op simply returns the input tensor. For complex input:

```md
{ resultTensor[...,i] = realPart(inputTensor[...,i])
{ resultTensor[...,i+DimSize(inputTensor,-1)] = imagPart(inputTensor[...,i])
```

For real-valued input:

```md
resultTensor = inputTensor
```
