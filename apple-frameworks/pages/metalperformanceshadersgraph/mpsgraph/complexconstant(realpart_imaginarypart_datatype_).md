> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/complexconstant(realpart:imaginarypart:datatype:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/complexconstant(realpart:imaginarypart:datatype:))

# complexConstant(realPart:imaginaryPart:dataType:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a complex constant operation and returns the result tensor.

## Declaration

```swift
func complexConstant(realPart: Double, imaginaryPart: Double, dataType: MPSDataType) -> MPSGraphTensor
```

## Parameters

- `realPart`: The real part of the complex scalar to fill the entire tensor values with.
- `imaginaryPart`: The imaginary part of the complex scalar to fill the entire tensor values with.
- `dataType`: The dataType of the constant tensor.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

# constantWithRealPart:imaginaryPart:dataType: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a complex constant operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) constantWithRealPart:(double) realPart imaginaryPart:(double) imaginaryPart dataType:(MPSDataType) dataType;
```

## Parameters

- `realPart`: The real part of the complex scalar to fill the entire tensor values with.
- `imaginaryPart`: The imaginary part of the complex scalar to fill the entire tensor values with.
- `dataType`: The dataType of the constant tensor.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.
