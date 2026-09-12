> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axbraillemap](https://developer.apple.com/documentation/accessibility/axbraillemap)

# AXBrailleMap (Swift)

**Framework:** Accessibility  
**Kind:** Class  
**Availability:** iOS 15.2+ · iPadOS 15.2+ · Mac Catalyst 15.2+ · macOS 12.1+ · tvOS 15.2+ · visionOS 1.0+ · watchOS 8.2+

A representation of a two-dimensional braille display.

## Declaration

```swift
class AXBrailleMap
```

<a id="overview"></a>

## Overview

A braille map object represents a two-dimensional braille display that’s connected to the current Apple device. By specifying the dot patterns in the braille map, you can change the content the user experiences. To render the data from the braille map to the display, implement [AXBrailleMapRenderer](axbraillemaprenderer.md).

## Topics

### Creating a braille map

- [init(coder:)](axbraillemap/init%28coder_%29.md)

### Getting display dimensions

- [dimensions](axbraillemap/dimensions.md): The number of pins in each dimension of the braille display.

### Accessing dots

- [setHeight(\_:at:)](axbraillemap/setheight%28__at_%29.md): Sets the height of an individual pin on the braille display.
- [height(at:)](axbraillemap/height%28at_%29.md): Retrieves the height of an individual pin on the braille display.
- [subscript(\_:)](axbraillemap/subscript%28__%29.md): Accesses the height of an individual pin on the braille display.

### Displaying images

- [present(\_:)](axbraillemap/present%28__%29.md): Converts the data from the image you specify into the braille map.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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

### Braille maps

- [AXBrailleMapRenderer](axbraillemaprenderer.md): The interface for providing data for a braille map.

# AXBrailleMap (Objective-C)

**Framework:** Accessibility  
**Kind:** Class  
**Availability:** iOS 15.2+ · iPadOS 15.2+ · Mac Catalyst 15.2+ · macOS 12.1+ · tvOS 15.2+ · visionOS 1.0+ · watchOS 8.2+

A representation of a two-dimensional braille display.

## Declaration

```objectivec
@interface AXBrailleMap : NSObject
```

<a id="overview"></a>

## Overview

A braille map object represents a two-dimensional braille display that’s connected to the current Apple device. By specifying the dot patterns in the braille map, you can change the content the user experiences. To render the data from the braille map to the display, implement [AXBrailleMapRenderer](axbraillemaprenderer.md).

## Topics

### Getting display dimensions

- [dimensions](axbraillemap/dimensions.md): The number of pins in each dimension of the braille display.

### Accessing dots

- [setHeight:atPoint:](axbraillemap/setheight%28__at_%29.md): Sets the height of an individual pin on the braille display.
- [heightAtPoint:](axbraillemap/height%28at_%29.md): Retrieves the height of an individual pin on the braille display.

### Displaying images

- [presentImage:](axbraillemap/present%28__%29.md): Converts the data from the image you specify into the braille map.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Braille maps

- [AXBrailleMapRenderer](axbraillemaprenderer.md): The interface for providing data for a braille map.
