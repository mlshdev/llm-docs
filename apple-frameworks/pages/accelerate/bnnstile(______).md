> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnstile(_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnstile(_:_:_:))

# BNNSTile(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 9.0+ (deprecated in 11.0)

Generates an output tensor by tiling an input tensor multiple times.

> Use BNNSGraph\* APIs

## Declaration

```swift
func BNNSTile(_ input: UnsafePointer<BNNSNDArrayDescriptor>, _ output: UnsafeMutablePointer<BNNSNDArrayDescriptor>, _ filter_params: UnsafePointer<BNNSFilterParameters>?) -> Int32
```

## Parameters

- `input`: A pointer to the input descriptor.
- `output`: A pointer to the output descriptor.
- `filter_params`: The filter runtime parameters.

<a id="Discussion"></a>

## Discussion

Use [BNNSTile(\_:\_:\_:)](bnnstile%28______%29.md) to tile generate a tensor by repeating tiled copies of the input tensor. The dimensions of the output tensor must be an integer multiple of the corresponding dimension of the input tensor.

For example, the following code tiles a 2 x 3 matrix three times along the first dimension and twice along the second dimension:

```swift
let values: [Float] = [1.0, 2.0, 3.0,
                       4.0, 5.0, 6.0]

var inputDescriptor = BNNSNDArrayDescriptor.allocate(
    initializingFrom: values,
    shape: .matrixRowMajor(2, 3))

var outputDescriptor = BNNSNDArrayDescriptor.allocateUninitialized(
    scalarType: Float.self,
    shape: .matrixRowMajor(6, 6))

BNNSTile(&inputDescriptor, &outputDescriptor, nil)

inputDescriptor.deallocate()
outputDescriptor.deallocate()
```

On return, `outputDescriptor` contains the following values:

```swift
[ 1.0, 2.0, 3.0,  1.0, 2.0, 3.0,
  4.0, 5.0, 6.0,  4.0, 5.0, 6.0,

  1.0, 2.0, 3.0,  1.0, 2.0, 3.0,
  4.0, 5.0, 6.0,  4.0, 5.0, 6.0,

  1.0, 2.0, 3.0,  1.0, 2.0, 3.0,
  4.0, 5.0, 6.0,  4.0, 5.0, 6.0 ]
```

## See Also

### Errors

- [BNNS.Error](bnns/error.md)
- [BNNSBandPart(\_:\_:\_:\_:\_:)](bnnsbandpart%28__________%29.md): Deprecated. Copies the specified subdiagonals and superdiagonals of a matrix, and sets other elements to zero.
- [BNNSShuffle(\_:\_:\_:\_:)](bnnsshuffle%28________%29.md): Deprecated. Rearranges elements in a tensor according to shuffle type.
- [BNNSShuffleType](bnnsshuffletype.md): Constants that specify a shuffle type.
- [BNNSTileBackward(\_:\_:\_:)](bnnstilebackward%28______%29.md): Deprecated. Applies a tile filter backward to generate an input gradient.

# BNNSTile (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 9.0+ (deprecated in 11.0)

Generates an output tensor by tiling an input tensor multiple times.

> Use BNNSGraph\* APIs

## Declaration

```objectivec
int BNNSTile(const BNNSNDArrayDescriptor *input, BNNSNDArrayDescriptor *output, const BNNSFilterParameters *filter_params);
```

## Parameters

- `input`: A pointer to the input descriptor.
- `output`: A pointer to the output descriptor.
- `filter_params`: The filter runtime parameters.

<a id="Discussion"></a>

## Discussion

Use [BNNSTile](bnnstile%28______%29.md) to tile generate a tensor by repeating tiled copies of the input tensor. The dimensions of the output tensor must be an integer multiple of the corresponding dimension of the input tensor.

For example, the following code tiles a 2 x 3 matrix three times along the first dimension and twice along the second dimension:

```swift
let values: [Float] = [1.0, 2.0, 3.0,
                       4.0, 5.0, 6.0]

var inputDescriptor = BNNSNDArrayDescriptor.allocate(
    initializingFrom: values,
    shape: .matrixRowMajor(2, 3))

var outputDescriptor = BNNSNDArrayDescriptor.allocateUninitialized(
    scalarType: Float.self,
    shape: .matrixRowMajor(6, 6))

BNNSTile(&inputDescriptor, &outputDescriptor, nil)

inputDescriptor.deallocate()
outputDescriptor.deallocate()
```

On return, `outputDescriptor` contains the following values:

```swift
[ 1.0, 2.0, 3.0,  1.0, 2.0, 3.0,
  4.0, 5.0, 6.0,  4.0, 5.0, 6.0,

  1.0, 2.0, 3.0,  1.0, 2.0, 3.0,
  4.0, 5.0, 6.0,  4.0, 5.0, 6.0,

  1.0, 2.0, 3.0,  1.0, 2.0, 3.0,
  4.0, 5.0, 6.0,  4.0, 5.0, 6.0 ]
```

## See Also

### Errors

- [BNNSBandPart](bnnsbandpart%28__________%29.md): Deprecated. Copies the specified subdiagonals and superdiagonals of a matrix, and sets other elements to zero.
- [BNNSShuffle](bnnsshuffle%28________%29.md): Deprecated. Rearranges elements in a tensor according to shuffle type.
- [BNNSShuffleType](bnnsshuffletype.md): Constants that specify a shuffle type.
- [BNNSTileBackward](bnnstilebackward%28______%29.md): Deprecated. Applies a tile filter backward to generate an input gradient.
