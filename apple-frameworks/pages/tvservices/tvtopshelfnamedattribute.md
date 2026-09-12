> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvtopshelfnamedattribute](https://developer.apple.com/documentation/tvservices/tvtopshelfnamedattribute)

# TVTopShelfNamedAttribute (Swift)

**Framework:** TV Services  
**Kind:** Class  
**Availability:** tvOS 13.0+

An object you use to display additional information.

## Declaration

```swift
class TVTopShelfNamedAttribute
```

<a id="overview"></a>

## Overview

Use [TVTopShelfNamedAttribute](tvtopshelfnamedattribute.md) objects to specify additional information about your content, such as the names of cast or crew members associated with a movie or show. Each named attribute contains the type of information you want to include (the name) and a list of strings (the values) to display for that attribute. For example, you might set the name property to “Starring” and set the value strings to the names of the leading actors.

Create named attributes and assign them to the [namedAttributes](tvtopshelfcarouselitem/namedattributes.md) property of a [TVTopShelfCarouselItem](tvtopshelfcarouselitem.md) object.

## Topics

### Creating a Named Attribute

- [init(name:values:)](tvtopshelfnamedattribute/init%28name_values_%29.md): Creates a new named attribute object with the specified values.

### Getting the Name and Value

- [name](tvtopshelfnamedattribute/name.md): The localized name of the attribute.
- [values](tvtopshelfnamedattribute/values.md): The array of values for the attribute.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Adding Custom Attributes

- [namedAttributes](tvtopshelfcarouselitem/namedattributes.md): Additional information to display for your content, such as a list of leading actors.

# TVTopShelfNamedAttribute (Objective-C)

**Framework:** TV Services  
**Kind:** Class  
**Availability:** tvOS 13.0+

An object you use to display additional information.

## Declaration

```objectivec
@interface TVTopShelfNamedAttribute : NSObject
```

<a id="overview"></a>

## Overview

Use [TVTopShelfNamedAttribute](tvtopshelfnamedattribute.md) objects to specify additional information about your content, such as the names of cast or crew members associated with a movie or show. Each named attribute contains the type of information you want to include (the name) and a list of strings (the values) to display for that attribute. For example, you might set the name property to “Starring” and set the value strings to the names of the leading actors.

Create named attributes and assign them to the [namedAttributes](tvtopshelfcarouselitem/namedattributes.md) property of a [TVTopShelfCarouselItem](tvtopshelfcarouselitem.md) object.

## Topics

### Creating a Named Attribute

- [initWithName:values:](tvtopshelfnamedattribute/init%28name_values_%29.md): Creates a new named attribute object with the specified values.

### Getting the Name and Value

- [name](tvtopshelfnamedattribute/name.md): The localized name of the attribute.
- [values](tvtopshelfnamedattribute/values.md): The array of values for the attribute.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Adding Custom Attributes

- [namedAttributes](tvtopshelfcarouselitem/namedattributes.md): Additional information to display for your content, such as a list of leading actors.
