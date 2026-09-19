> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cppanelitem

# CPPanelItem (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A type that provides the common behaviors for items you display in a section of a panel.

## Declaration

```swift
class CPPanelItem
```

<a id="overview"></a>

## Overview

The `CPPanelItem` type defines the default behaviors for content you display in a panel. You don’t create this type directly or use it to configure the contents of your panel. Instead, instantiate one of the defined subclasses based on the type of panel you’re configuring. For example, create [CPMapPanelItem](cpmappanelitem.md) objects when configuring the content for a [CPMapPanel](cpmappanel.md) type.

## Topics

### Initializers

- [init(coder:)](cppanelitem/init%28coder_%29.md)
- [init(gridButtons:)](cppanelitem/init%28gridbuttons_%29.md): Initialize the item using one or more grid buttons.
- [init(listItem:)](cppanelitem/init%28listitem_%29.md): Initialize the item using a list item.

### Instance Properties

- [isEnabled](cppanelitem/isenabled.md): A Boolean value that indicates whether the item supports interactions.
- [showsBottomSeparator](cppanelitem/showsbottomseparator.md): A Boolean value that indicates whether a separator line appears at the bottom edge of the item.
- [userInfo](cppanelitem/userinfo.md): Custom information you want to store with the item.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [CPMapPanelItem](cpmappanelitem.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

# CPPanelItem (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A type that provides the common behaviors for items you display in a section of a panel.

## Declaration

```objectivec
@interface CPPanelItem : NSObject
```

<a id="overview"></a>

## Overview

The `CPPanelItem` type defines the default behaviors for content you display in a panel. You don’t create this type directly or use it to configure the contents of your panel. Instead, instantiate one of the defined subclasses based on the type of panel you’re configuring. For example, create [CPMapPanelItem](cpmappanelitem.md) objects when configuring the content for a [CPMapPanel](cpmappanel.md) type.

## Topics

### Instance Properties

- [enabled](cppanelitem/isenabled.md): A Boolean value that indicates whether the item supports interactions.
- [showsBottomSeparator](cppanelitem/showsbottomseparator.md): A Boolean value that indicates whether a separator line appears at the bottom edge of the item.
- [userInfo](cppanelitem/userinfo.md): Custom information you want to store with the item.

### Instance Methods

- [initWithGridButtons:](cppanelitem/init%28gridbuttons_%29.md): Initialize the item using one or more grid buttons.
- [initWithListItem:](cppanelitem/init%28listitem_%29.md): Initialize the item using a list item.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [CPMapPanelItem](cpmappanelitem.md)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
