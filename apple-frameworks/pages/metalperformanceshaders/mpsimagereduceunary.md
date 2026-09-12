> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagereduceunary](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagereduceunary)

# MPSImageReduceUnary (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

The base class for reduction filters that take a single source as input.

## Declaration

```swift
class MPSImageReduceUnary
```

## Topics

### Instance Properties

- [clipRectSource](mpsimagereduceunary/cliprectsource.md)

## Relationships

### Inherits From

- [MPSUnaryImageKernel](mpsunaryimagekernel.md)

### Inherited By

- [MPSImageReduceColumnMax](mpsimagereducecolumnmax.md)
- [MPSImageReduceColumnMean](mpsimagereducecolumnmean.md)
- [MPSImageReduceColumnMin](mpsimagereducecolumnmin.md)
- [MPSImageReduceColumnSum](mpsimagereducecolumnsum.md)
- [MPSImageReduceRowMax](mpsimagereducerowmax.md)
- [MPSImageReduceRowMean](mpsimagereducerowmean.md)
- [MPSImageReduceRowMin](mpsimagereducerowmin.md)
- [MPSImageReduceRowSum](mpsimagereducerowsum.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Image Reduction Filters

- [MPSImageReduceRowMax](mpsimagereducerowmax.md): A filter that returns the maximum value for each row in an image.
- [MPSImageReduceRowMin](mpsimagereducerowmin.md): A filter that returns the minimum value for each row in an image.
- [MPSImageReduceRowSum](mpsimagereducerowsum.md): A filter that returns the sum of all values for a row in an image.
- [MPSImageReduceRowMean](mpsimagereducerowmean.md): A filter that returns the mean value for each row in an image.
- [MPSImageReduceColumnMax](mpsimagereducecolumnmax.md): A filter that returns the maximum value for each column in an image.
- [MPSImageReduceColumnMin](mpsimagereducecolumnmin.md): A filter that returns the minimum value for each column in an image.
- [MPSImageReduceColumnSum](mpsimagereducecolumnsum.md): A filter that returns the sum of all values for a column in an image.
- [MPSImageReduceColumnMean](mpsimagereducecolumnmean.md): A filter that returns the mean value for each column in an image.

# MPSImageReduceUnary (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

The base class for reduction filters that take a single source as input.

## Declaration

```objectivec
@interface MPSImageReduceUnary : MPSUnaryImageKernel
```

## Topics

### Instance Properties

- [clipRectSource](mpsimagereduceunary/cliprectsource.md)

## Relationships

### Inherits From

- [MPSUnaryImageKernel](mpsunaryimagekernel.md)

### Inherited By

- [MPSImageReduceColumnMax](mpsimagereducecolumnmax.md)
- [MPSImageReduceColumnMean](mpsimagereducecolumnmean.md)
- [MPSImageReduceColumnMin](mpsimagereducecolumnmin.md)
- [MPSImageReduceColumnSum](mpsimagereducecolumnsum.md)
- [MPSImageReduceRowMax](mpsimagereducerowmax.md)
- [MPSImageReduceRowMean](mpsimagereducerowmean.md)
- [MPSImageReduceRowMin](mpsimagereducerowmin.md)
- [MPSImageReduceRowSum](mpsimagereducerowsum.md)

## See Also

### Image Reduction Filters

- [MPSImageReduceRowMax](mpsimagereducerowmax.md): A filter that returns the maximum value for each row in an image.
- [MPSImageReduceRowMin](mpsimagereducerowmin.md): A filter that returns the minimum value for each row in an image.
- [MPSImageReduceRowSum](mpsimagereducerowsum.md): A filter that returns the sum of all values for a row in an image.
- [MPSImageReduceRowMean](mpsimagereducerowmean.md): A filter that returns the mean value for each row in an image.
- [MPSImageReduceColumnMax](mpsimagereducecolumnmax.md): A filter that returns the maximum value for each column in an image.
- [MPSImageReduceColumnMin](mpsimagereducecolumnmin.md): A filter that returns the minimum value for each column in an image.
- [MPSImageReduceColumnSum](mpsimagereducecolumnsum.md): A filter that returns the sum of all values for a column in an image.
- [MPSImageReduceColumnMean](mpsimagereducecolumnmean.md): A filter that returns the mean value for each column in an image.
