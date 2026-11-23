> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistimagerowitemimagegridelement/shape

# CPListImageRowItemImageGridElement.Shape (Swift)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Shapes you can apply to an element’s image.

## Declaration

```swift
enum Shape
```

<a id="overview"></a>

## Overview

When creating an image grid row element, use the constants in this type to specify the shape to apply to the image in each element.

## Topics

### Enumeration Cases

- [CPListImageRowItemImageGridElement.Shape.circular](shape/circular.md): A circular shape for the element’s image.
- [CPListImageRowItemImageGridElement.Shape.roundedRectangle](shape/roundedrectangle.md): A rounded rectangle shape for the element’s image.

### Initializers

- [init(rawValue:)](shape/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the element’s shape

- [imageShape](imageshape.md): The shape to apply to the current element’s image.

# CPListImageRowItemImageGridElementShape (Objective-C)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+

Shapes you can apply to an element’s image.

## Declaration

```objectivec
enum CPListImageRowItemImageGridElementShape : NSInteger;
```

<a id="overview"></a>

## Overview

When creating an image grid row element, use the constants in this type to specify the shape to apply to the image in each element.

## Topics

### Enumeration Cases

- [CPListImageRowItemImageGridElementShapeCircular](shape/circular.md): A circular shape for the element’s image.
- [CPListImageRowItemImageGridElementShapeRoundedRectangle](shape/roundedrectangle.md): A rounded rectangle shape for the element’s image.

## See Also

### Getting the element’s shape

- [imageShape](imageshape.md): The shape to apply to the current element’s image.
