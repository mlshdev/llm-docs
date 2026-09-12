> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptionunitstype](https://developer.apple.com/documentation/avfoundation/avcaptionunitstype)

# AVCaptionUnitsType (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS

A structure that defines a units for caption formats.

## Declaration

```swift
enum AVCaptionUnitsType
```

<a id="overview"></a>

## Overview

Some geometry values may use sizing and positioning with different units. In some cases, an object might allow multiple kinds of dimensions varying by units.

## Topics

### Unit types

- [AVCaptionUnitsType.cells](avcaptionunitstype/cells.md): A cell-based unit type.
- [AVCaptionUnitsType.percent](avcaptionunitstype/percent.md): A percentage-based unit type.
- [AVCaptionUnitsType.unspecified](avcaptionunitstype/unspecified.md): An unspecified unit type.

### Initializers

- [init(rawValue:)](avcaptionunitstype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting the dimensions

- [value](avcaptiondimension/value.md): The value of the coordinate or length.
- [units](avcaptiondimension/units.md): The units of the coordinate, such as cells or points.

# AVCaptionUnitsType (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS

A structure that defines a units for caption formats.

## Declaration

```objectivec
enum AVCaptionUnitsType : NSInteger;
```

<a id="overview"></a>

## Overview

Some geometry values may use sizing and positioning with different units. In some cases, an object might allow multiple kinds of dimensions varying by units.

## Topics

### Unit types

- [AVCaptionUnitsTypeCells](avcaptionunitstype/cells.md): A cell-based unit type.
- [AVCaptionUnitsTypePercent](avcaptionunitstype/percent.md): A percentage-based unit type.
- [AVCaptionUnitsTypeUnspecified](avcaptionunitstype/unspecified.md): An unspecified unit type.

## See Also

### Inspecting the dimensions

- [value](avcaptiondimension/value.md): The value of the coordinate or length.
- [units](avcaptiondimension/units.md): The units of the coordinate, such as cells or points.
