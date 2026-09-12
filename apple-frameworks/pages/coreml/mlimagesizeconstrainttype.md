> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlimagesizeconstrainttype](https://developer.apple.com/documentation/coreml/mlimagesizeconstrainttype)

# MLImageSizeConstraintType (Swift)

**Framework:** Core ML  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The modes that determine how the model defines a feature’s image size constraint.

## Declaration

```swift
enum MLImageSizeConstraintType
```

## Topics

### Constraint types

- [MLImageSizeConstraintType.range](mlimagesizeconstrainttype/range.md): The image feature accepts image sizes defined by a range of widths and a range of heights.
- [MLImageSizeConstraintType.enumerated](mlimagesizeconstrainttype/enumerated.md): The image feature accepts image sizes listed in an array.
- [MLImageSizeConstraintType.unspecified](mlimagesizeconstrainttype/unspecified.md): The image size constraint is not configured and should be ignored.

### Creating a constraint type

- [init(rawValue:)](mlimagesizeconstrainttype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Determining relevant constraints

- [type](mlimagesizeconstraint/type.md): Indicator of which properties to inspect for this image size constraint.

# MLImageSizeConstraintType (Objective-C)

**Framework:** Core ML  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The modes that determine how the model defines a feature’s image size constraint.

## Declaration

```objectivec
enum MLImageSizeConstraintType : NSInteger;
```

## Topics

### Constraint types

- [MLImageSizeConstraintTypeRange](mlimagesizeconstrainttype/range.md): The image feature accepts image sizes defined by a range of widths and a range of heights.
- [MLImageSizeConstraintTypeEnumerated](mlimagesizeconstrainttype/enumerated.md): The image feature accepts image sizes listed in an array.
- [MLImageSizeConstraintTypeUnspecified](mlimagesizeconstrainttype/unspecified.md): The image size constraint is not configured and should be ignored.

## See Also

### Determining relevant constraints

- [type](mlimagesizeconstraint/type.md): Indicator of which properties to inspect for this image size constraint.
