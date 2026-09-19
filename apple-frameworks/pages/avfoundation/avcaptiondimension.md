> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcaptiondimension

# AVCaptionDimension (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS

A structure that defines a caption dimension.

## Declaration

```swift
struct AVCaptionDimension
```

## Topics

### Inspecting the dimensions

- [value](avcaptiondimension/value.md): The value of the coordinate or length.
- [units](avcaptiondimension/units.md): The units of the coordinate, such as cells or points.
- [AVCaptionUnitsType](avcaptionunitstype.md): A structure that defines a units for caption formats.

### Initializers

- [init()](avcaptiondimension/init%28%29.md): Creates a caption dimension.
- [init(value:units:)](avcaptiondimension/init%28value_units_%29.md): Creates a caption dimension with a value and unit type.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# AVCaptionDimension (Objective-C)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS

A structure that defines a caption dimension.

## Declaration

```objectivec
typedef struct AVCaptionDimension { ... } AVCaptionDimension;
```

## Topics

### Inspecting the dimensions

- [value](avcaptiondimension/value.md): The value of the coordinate or length.
- [units](avcaptiondimension/units.md): The units of the coordinate, such as cells or points.
- [AVCaptionUnitsType](avcaptionunitstype.md): A structure that defines a units for caption formats.

## See Also

### Accessing dimensions

- [AVCaptionDimensionMake](avcaptiondimensionmake.md): Creates a caption dimension with a value and unit type.
