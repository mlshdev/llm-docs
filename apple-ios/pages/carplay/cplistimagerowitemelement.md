> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplistimagerowitemelement](https://developer.apple.com/documentation/carplay/cplistimagerowitemelement)

# CPListImageRowItemElement (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Abstract superclass for a a row item element object.

## Declaration

```swift
@MainActor class CPListImageRowItemElement
```

## Topics

### Instance Properties

- [accessibilityLabel](cplistimagerowitemelement/accessibilitylabel.md)
- [image](cplistimagerowitemelement/image.md): The image associated with this element.
- [isEnabled](cplistimagerowitemelement/isenabled.md): A Boolean value indicating whether the list element is enabled.

### Type Properties

- [maximumImageSize](cplistimagerowitemelement/maximumimagesize.md): The expected image size for the image in your @c CPListImageRowItemElement. Images provided will be resized to this size.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [CPListImageRowItemCardElement](cplistimagerowitemcardelement.md)
- [CPListImageRowItemCondensedElement](cplistimagerowitemcondensedelement.md)
- [CPListImageRowItemGridElement](cplistimagerowitemgridelement.md)
- [CPListImageRowItemImageGridElement](cplistimagerowitemimagegridelement.md)
- [CPListImageRowItemRowElement](cplistimagerowitemrowelement.md)

### Conforms To

- [CPPlayableItem](cpplayableitem.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# CPListImageRowItemElement (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Abstract superclass for a a row item element object.

## Declaration

```objectivec
@interface CPListImageRowItemElement : NSObject
```

## Topics

### Instance Properties

- [accessibilityLabel](cplistimagerowitemelement/accessibilitylabel.md)
- [image](cplistimagerowitemelement/image.md): The image associated with this element.
- [enabled](cplistimagerowitemelement/isenabled.md): A Boolean value indicating whether the list element is enabled.

### Type Properties

- [maximumImageSize](cplistimagerowitemelement/maximumimagesize.md): The expected image size for the image in your @c CPListImageRowItemElement. Images provided will be resized to this size.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [CPListImageRowItemCardElement](cplistimagerowitemcardelement.md)
- [CPListImageRowItemCondensedElement](cplistimagerowitemcondensedelement.md)
- [CPListImageRowItemGridElement](cplistimagerowitemgridelement.md)
- [CPListImageRowItemImageGridElement](cplistimagerowitemimagegridelement.md)
- [CPListImageRowItemRowElement](cplistimagerowitemrowelement.md)

### Conforms To

- [CPPlayableItem](cpplayableitem.md)
