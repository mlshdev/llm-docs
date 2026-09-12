> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsbandpart(_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnsbandpart(_:_:_:_:_:))

# BNNSBandPart(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 9.0+ (deprecated in 11.0)

Copies the specified subdiagonals and superdiagonals of a matrix, and sets other elements to zero.

> Use BNNSGraph\* APIs

## Declaration

```swift
func BNNSBandPart(_ num_lower: Int32, _ num_upper: Int32, _ input: UnsafePointer<BNNSNDArrayDescriptor>, _ output: UnsafeMutablePointer<BNNSNDArrayDescriptor>, _ filter_params: UnsafePointer<BNNSFilterParameters>?) -> Int32
```

## Parameters

- `num_lower`: The number of subdiagonals that the function copies. Set to a negative value to copy the entire lower triangle.
- `num_upper`: The number of superdiagonals that the function copies. Set to a negative value to copy the entire upper triangle.
- `input`: A pointer to the input descriptor.
- `output`: A pointer to the output descriptor.
- `filter_params`: The filter runtime parameters.

<a id="Discussion"></a>

## Discussion

Use [BNNSBandPart(\_:\_:\_:\_:\_:)](bnnsbandpart%28__________%29.md) to copy a tensor’s main diagonal and zero or more upper and lower bands. You can specify that the function returns either the entire upper or lower triangle by passing a negative value to the corresponding `num_*` parameter.

For example, given the following 8x8 matrix:

```swift
let matrixValues: [Float] = [ 11, 12, 13, 14, 15, 16, 17, 18,
                              21, 22, 23, 24, 25, 26, 27, 28,
                              31, 32, 33, 34, 35, 36, 37, 38,
                              41, 42, 43, 44, 45, 46, 47, 48,
                              51, 52, 53, 54, 55, 56, 57, 58,
                              61, 62, 63, 64, 65, 66, 67, 68,
                              71, 72, 73, 74, 75, 76, 77, 78,
                              81, 82, 83, 84, 85, 86, 87, 88 ]

var inputDescriptor = BNNSNDArrayDescriptor.allocate(
     initializingFrom: matrixValues,
     shape: .matrixRowMajor(8, 8))
```

The following code selects the upper triangle and sets other elements to zero:

```swift
var outputDescriptor = BNNSNDArrayDescriptor.allocateUninitialized(
    scalarType: Float.self,
    shape: inputDescriptor.shape)

BNNSBandPart(0,  // num_lower
             -1, // num_upper
             &inputDescriptor,
             &outputDescriptor, nil)

printMatrix(outputDescriptor)
```

On return, `outputDescriptor` contains the following values:

```swift
11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0
 0.0, 22.0, 23.0, 24.0, 25.0, 26.0, 27.0, 28.0
 0.0,  0.0, 33.0, 34.0, 35.0, 36.0, 37.0, 38.0
 0.0,  0.0,  0.0, 44.0, 45.0, 46.0, 47.0, 48.0
 0.0,  0.0,  0.0,  0.0, 55.0, 56.0, 57.0, 58.0
 0.0,  0.0,  0.0,  0.0,  0.0, 66.0, 67.0, 68.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 77.0, 78.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 88.0
```

The following code selects the 4 subdiagonals, 1 superdiagonal, and sets other elements to zero:

```swift
var outputDescriptor = BNNSNDArrayDescriptor.allocateUninitialized(
    scalarType: Float.self,
    shape: inputDescriptor.shape)

BNNSBandPart(4, // num_lower
             1, // num_upper
             &inputDescriptor,
             &outputDescriptor, nil)

printMatrix(outputDescriptor)
```

On return, `outputDescriptor` contains the following values:

```swift
11.0, 12.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
21.0, 22.0, 23.0,  0.0,  0.0,  0.0,  0.0,  0.0
31.0, 32.0, 33.0, 34.0,  0.0,  0.0,  0.0,  0.0
41.0, 42.0, 43.0, 44.0, 45.0,  0.0,  0.0,  0.0
51.0, 52.0, 53.0, 54.0, 55.0, 56.0,  0.0,  0.0
 0.0, 62.0, 63.0, 64.0, 65.0, 66.0, 67.0,  0.0
 0.0,  0.0, 73.0, 74.0, 75.0, 76.0, 77.0, 78.0
 0.0,  0.0,  0.0, 84.0, 85.0, 86.0, 87.0, 88.0
```

## See Also

### Errors

- [BNNS.Error](bnns/error.md)
- [BNNSShuffle(\_:\_:\_:\_:)](bnnsshuffle%28________%29.md): Deprecated. Rearranges elements in a tensor according to shuffle type.
- [BNNSShuffleType](bnnsshuffletype.md): Constants that specify a shuffle type.
- [BNNSTile(\_:\_:\_:)](bnnstile%28______%29.md): Deprecated. Generates an output tensor by tiling an input tensor multiple times.
- [BNNSTileBackward(\_:\_:\_:)](bnnstilebackward%28______%29.md): Deprecated. Applies a tile filter backward to generate an input gradient.

# BNNSBandPart (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 9.0+ (deprecated in 11.0)

Copies the specified subdiagonals and superdiagonals of a matrix, and sets other elements to zero.

> Use BNNSGraph\* APIs

## Declaration

```objectivec
int BNNSBandPart(const int num_lower, const int num_upper, const BNNSNDArrayDescriptor *input, BNNSNDArrayDescriptor *output, const BNNSFilterParameters *filter_params);
```

## Parameters

- `num_lower`: The number of subdiagonals that the function copies. Set to a negative value to copy the entire lower triangle.
- `num_upper`: The number of superdiagonals that the function copies. Set to a negative value to copy the entire upper triangle.
- `input`: A pointer to the input descriptor.
- `output`: A pointer to the output descriptor.
- `filter_params`: The filter runtime parameters.

<a id="Discussion"></a>

## Discussion

Use [BNNSBandPart](bnnsbandpart%28__________%29.md) to copy a tensor’s main diagonal and zero or more upper and lower bands. You can specify that the function returns either the entire upper or lower triangle by passing a negative value to the corresponding `num_*` parameter.

For example, given the following 8x8 matrix:

```swift
let matrixValues: [Float] = [ 11, 12, 13, 14, 15, 16, 17, 18,
                              21, 22, 23, 24, 25, 26, 27, 28,
                              31, 32, 33, 34, 35, 36, 37, 38,
                              41, 42, 43, 44, 45, 46, 47, 48,
                              51, 52, 53, 54, 55, 56, 57, 58,
                              61, 62, 63, 64, 65, 66, 67, 68,
                              71, 72, 73, 74, 75, 76, 77, 78,
                              81, 82, 83, 84, 85, 86, 87, 88 ]

var inputDescriptor = BNNSNDArrayDescriptor.allocate(
     initializingFrom: matrixValues,
     shape: .matrixRowMajor(8, 8))
```

The following code selects the upper triangle and sets other elements to zero:

```swift
var outputDescriptor = BNNSNDArrayDescriptor.allocateUninitialized(
    scalarType: Float.self,
    shape: inputDescriptor.shape)

BNNSBandPart(0,  // num_lower
             -1, // num_upper
             &inputDescriptor,
             &outputDescriptor, nil)

printMatrix(outputDescriptor)
```

On return, `outputDescriptor` contains the following values:

```swift
11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0
 0.0, 22.0, 23.0, 24.0, 25.0, 26.0, 27.0, 28.0
 0.0,  0.0, 33.0, 34.0, 35.0, 36.0, 37.0, 38.0
 0.0,  0.0,  0.0, 44.0, 45.0, 46.0, 47.0, 48.0
 0.0,  0.0,  0.0,  0.0, 55.0, 56.0, 57.0, 58.0
 0.0,  0.0,  0.0,  0.0,  0.0, 66.0, 67.0, 68.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 77.0, 78.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 88.0
```

The following code selects the 4 subdiagonals, 1 superdiagonal, and sets other elements to zero:

```swift
var outputDescriptor = BNNSNDArrayDescriptor.allocateUninitialized(
    scalarType: Float.self,
    shape: inputDescriptor.shape)

BNNSBandPart(4, // num_lower
             1, // num_upper
             &inputDescriptor,
             &outputDescriptor, nil)

printMatrix(outputDescriptor)
```

On return, `outputDescriptor` contains the following values:

```swift
11.0, 12.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
21.0, 22.0, 23.0,  0.0,  0.0,  0.0,  0.0,  0.0
31.0, 32.0, 33.0, 34.0,  0.0,  0.0,  0.0,  0.0
41.0, 42.0, 43.0, 44.0, 45.0,  0.0,  0.0,  0.0
51.0, 52.0, 53.0, 54.0, 55.0, 56.0,  0.0,  0.0
 0.0, 62.0, 63.0, 64.0, 65.0, 66.0, 67.0,  0.0
 0.0,  0.0, 73.0, 74.0, 75.0, 76.0, 77.0, 78.0
 0.0,  0.0,  0.0, 84.0, 85.0, 86.0, 87.0, 88.0
```

## See Also

### Errors

- [BNNSShuffle](bnnsshuffle%28________%29.md): Deprecated. Rearranges elements in a tensor according to shuffle type.
- [BNNSShuffleType](bnnsshuffletype.md): Constants that specify a shuffle type.
- [BNNSTile](bnnstile%28______%29.md): Deprecated. Generates an output tensor by tiling an input tensor multiple times.
- [BNNSTileBackward](bnnstilebackward%28______%29.md): Deprecated. Applies a tile filter backward to generate an input gradient.
