> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnelementtype](https://developer.apple.com/documentation/vision/vnelementtype)

# VNElementType (Swift)

**Framework:** Vision  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

An enumeration of the type of element in feature print data.

## Declaration

```swift
enum VNElementType
```

## Topics

### Element Types

- [VNElementType.unknown](vnelementtype/unknown.md): The element type isn’t known.
- [VNElementType.float](vnelementtype/float.md): The elements are floating-point numbers.
- [VNElementType.double](vnelementtype/double.md): The elements are double-precision floating-point numbers.

### Creating an Element Type

- [init(rawValue:)](vnelementtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Determining Types of Feature Prints

- [elementType](vnfeatureprintobservation/elementtype.md): The type of each element in the data.
- [VNElementTypeSize(\_:)](vnelementtypesize%28__%29.md): Returns the size of a feature print element.

# VNElementType (Objective-C)

**Framework:** Vision  
**Kind:** Enumeration

An enumeration of the type of element in feature print data.

## Declaration

```objectivec
enum VNElementType : NSUInteger;
```

## Topics

### Element Types

- [VNElementTypeUnknown](vnelementtype/unknown.md): The element type isn’t known.
- [VNElementTypeFloat](vnelementtype/float.md): The elements are floating-point numbers.
- [VNElementTypeDouble](vnelementtype/double.md): The elements are double-precision floating-point numbers.

## See Also

### Determining Types of Feature Prints

- [elementType](vnfeatureprintobservation/elementtype.md): The type of each element in the data.
- [VNElementTypeSize](vnelementtypesize%28__%29.md): Returns the size of a feature print element.
