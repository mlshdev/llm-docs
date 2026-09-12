> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsshuffletype](https://developer.apple.com/documentation/accelerate/bnnsshuffletype)

# BNNSShuffleType (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that specify a shuffle type.

## Declaration

```swift
struct BNNSShuffleType
```

## Topics

### Constants

- [init(\_:)](bnnsshuffletype/init%28__%29.md)
- [init(rawValue:)](bnnsshuffletype/init%28rawvalue_%29.md)
- [rawValue](bnnsshuffletype/rawvalue.md)
- [BNNSShuffleTypePixelShuffleNCHW](bnnsshuffletypepixelshufflenchw.md): The pixel shuffle for the NCHW (batch, channels, height, width) format, equivalent to depth-to-space in Column Row Depth (CRD) mode.
- [BNNSShuffleTypePixelUnshuffleNCHW](bnnsshuffletypepixelunshufflenchw.md): The pixel unshuffle for the NCHW (batch, channels, height, width) format, equivalent to space-to-depth in Column Row Depth (CRD) mode.
- [BNNSShuffleTypeDepthToSpaceNCHW](bnnsshuffletypedepthtospacenchw.md)
- [BNNSShuffleTypeSpaceToDepthNCHW](bnnsshuffletypespacetodepthnchw.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Errors

- [BNNS.Error](bnns/error.md)
- [BNNSBandPart(\_:\_:\_:\_:\_:)](bnnsbandpart%28__________%29.md): Deprecated. Copies the specified subdiagonals and superdiagonals of a matrix, and sets other elements to zero.
- [BNNSShuffle(\_:\_:\_:\_:)](bnnsshuffle%28________%29.md): Deprecated. Rearranges elements in a tensor according to shuffle type.
- [BNNSTile(\_:\_:\_:)](bnnstile%28______%29.md): Deprecated. Generates an output tensor by tiling an input tensor multiple times.
- [BNNSTileBackward(\_:\_:\_:)](bnnstilebackward%28______%29.md): Deprecated. Applies a tile filter backward to generate an input gradient.

# BNNSShuffleType (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that specify a shuffle type.

## Declaration

```objectivec
typedef enum { ... } BNNSShuffleType;
```

## Topics

### Constants

- [BNNSShuffleTypePixelShuffleNCHW](bnnsshuffletypepixelshufflenchw.md): The pixel shuffle for the NCHW (batch, channels, height, width) format, equivalent to depth-to-space in Column Row Depth (CRD) mode.
- [BNNSShuffleTypePixelUnshuffleNCHW](bnnsshuffletypepixelunshufflenchw.md): The pixel unshuffle for the NCHW (batch, channels, height, width) format, equivalent to space-to-depth in Column Row Depth (CRD) mode.
- [BNNSShuffleTypeDepthToSpaceNCHW](bnnsshuffletypedepthtospacenchw.md)
- [BNNSShuffleTypeSpaceToDepthNCHW](bnnsshuffletypespacetodepthnchw.md)

## See Also

### Errors

- [BNNSBandPart](bnnsbandpart%28__________%29.md): Deprecated. Copies the specified subdiagonals and superdiagonals of a matrix, and sets other elements to zero.
- [BNNSShuffle](bnnsshuffle%28________%29.md): Deprecated. Rearranges elements in a tensor according to shuffle type.
- [BNNSTile](bnnstile%28______%29.md): Deprecated. Generates an output tensor by tiling an input tensor multiple times.
- [BNNSTileBackward](bnnstilebackward%28______%29.md): Deprecated. Applies a tile filter backward to generate an input gradient.
