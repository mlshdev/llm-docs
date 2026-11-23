> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistimagerowitemelement

# CPListImageRowItemElement (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An abstract class for an element in a row of a list.

## Declaration

```swift
@MainActor class CPListImageRowItemElement
```

<a id="overview"></a>

## Overview

The `CPListImageRowItemElement ` class is an abstract class that defines the shared behavior for row elements. Use properties of this type to access common information about an element, such as the image it displays. You can also change the state of the item to enable or disable interactions.

Row item elements adopt the [CPPlayableItem](cpplayableitem.md) protocol, which adds media-related metadata to each element. Use this metadata to display playback-related information for each element. For example, add duration and elapsed time details to convey someone’s playback progress.

## Topics

### Getting the element’s content

- [image](cplistimagerowitemelement/image.md): The image associated with the element.
- [maximumImageSize](cplistimagerowitemelement/maximumimagesize.md): The maximum dimensions for the element’s image.

### Describing the image

- [accessibilityLabel](cplistimagerowitemelement/accessibilitylabel.md): Accessibility text to apply to the element’s image.

### Enabling and disabling the element

- [isEnabled](cplistimagerowitemelement/isenabled.md): A Boolean value that indicates whether the item is enabled.

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

## See Also

### Common types

- [CPThumbnailImage](cpthumbnailimage.md): An image that can display overlays and metadata on top of the image.
- [CPSelectableListItem](cpselectablelistitem.md): An interface for responding to selections in list items.
- [CPListTemplateItem](cplisttemplateitem.md): An interface that describes the common properties of all list item types.

# CPListImageRowItemElement (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An abstract class for an element in a row of a list.

## Declaration

```objectivec
@interface CPListImageRowItemElement : NSObject
```

<a id="overview"></a>

## Overview

The `CPListImageRowItemElement ` class is an abstract class that defines the shared behavior for row elements. Use properties of this type to access common information about an element, such as the image it displays. You can also change the state of the item to enable or disable interactions.

Row item elements adopt the [CPPlayableItem](cpplayableitem.md) protocol, which adds media-related metadata to each element. Use this metadata to display playback-related information for each element. For example, add duration and elapsed time details to convey someone’s playback progress.

## Topics

### Getting the element’s content

- [image](cplistimagerowitemelement/image.md): The image associated with the element.
- [maximumImageSize](cplistimagerowitemelement/maximumimagesize.md): The maximum dimensions for the element’s image.

### Describing the image

- [accessibilityLabel](cplistimagerowitemelement/accessibilitylabel.md): Accessibility text to apply to the element’s image.

### Enabling and disabling the element

- [enabled](cplistimagerowitemelement/isenabled.md): A Boolean value that indicates whether the item is enabled.

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

## See Also

### Common types

- [CPThumbnailImage](cpthumbnailimage.md): An image that can display overlays and metadata on top of the image.
- [CPSelectableListItem](cpselectablelistitem.md): An interface for responding to selections in list items.
- [CPListTemplateItem](cplisttemplateitem.md): An interface that describes the common properties of all list item types.
