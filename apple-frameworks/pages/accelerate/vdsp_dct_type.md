> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_dct_type](https://developer.apple.com/documentation/accelerate/vdsp_dct_type)

# vDSP_DCT_Type (Swift)

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that indicate the type for a discrete cosine transform.

## Declaration

```swift
enum vDSP_DCT_Type
```

## Topics

### Discrete Cosine Transform Types

- [vDSP_DCT_Type.II](vdsp_dct_type/ii.md): A constant that specifies a type II discrete cosine transform.
- [vDSP_DCT_Type.III](vdsp_dct_type/iii.md): A constant that specifies a type III discrete cosine transform.
- [vDSP_DCT_Type.IV](vdsp_dct_type/iv.md): A constant that specifies a type IV discrete cosine transform.

### Initializers

- [init(rawValue:)](vdsp_dct_type/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# vDSP_DCT_Type (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that indicate the type for a discrete cosine transform.

## Declaration

```objectivec
enum vDSP_DCT_Type : int;
```

## Topics

### Discrete Cosine Transform Types

- [vDSP_DCT_II](vdsp_dct_type/ii.md): A constant that specifies a type II discrete cosine transform.
- [vDSP_DCT_III](vdsp_dct_type/iii.md): A constant that specifies a type III discrete cosine transform.
- [vDSP_DCT_IV](vdsp_dct_type/iv.md): A constant that specifies a type IV discrete cosine transform.

## See Also

### Discrete Cosine Transforms

- [vDSP_DCT_CreateSetup](vdsp_dct_createsetup.md): Builds a data structure that contains precalculated data to perform a discrete cosine transform.
- [vDSP_DCT_Execute](vdsp_dct_execute.md): Calculates the discrete cosine transform for a vector.
