> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmappanelsection](https://developer.apple.com/documentation/carplay/cpmappanelsection)

# CPMapPanelSection (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

## Declaration

```swift
class CPMapPanelSection
```

<a id="overview"></a>

## Overview

Each section contains a title, a collection of content items, and an optional item selection handler.

## Topics

### Initializers

- [init(coder:)](cpmappanelsection/init%28coder_%29.md)
- [init(title:items:)](cpmappanelsection/init%28title_items_%29.md): Initializes a section with items conforming to @c CPMapPanelItem. Only items that adopt @c CPMapPanelItem are supported when displaying panel sections on a @c CPMapTemplate.

### Instance Properties

- [items](cpmappanelsection/items.md): The items displayed in this section, or @c nil if the section does not contain items.
- [title](cpmappanelsection/title.md): The title of the section.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

# CPMapPanelSection (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

## Declaration

```objectivec
@interface CPMapPanelSection : NSObject
```

<a id="overview"></a>

## Overview

Each section contains a title, a collection of content items, and an optional item selection handler.

## Topics

### Instance Properties

- [items](cpmappanelsection/items.md): The items displayed in this section, or @c nil if the section does not contain items.
- [title](cpmappanelsection/title.md): The title of the section.

### Instance Methods

- [initWithTitle:items:](cpmappanelsection/init%28title_items_%29.md): Initializes a section with items conforming to @c CPMapPanelItem. Only items that adopt @c CPMapPanelItem are supported when displaying panel sections on a @c CPMapTemplate.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
