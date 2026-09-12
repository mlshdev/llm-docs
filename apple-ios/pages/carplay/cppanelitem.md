> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cppanelitem](https://developer.apple.com/documentation/carplay/cppanelitem)

# CPPanelItem (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

## Declaration

```swift
class CPPanelItem
```

<a id="overview"></a>

## Overview

Subclasses represent items specific to a particular template context (e.g., @c CPMapPanelItem for map templates).

## Topics

### Initializers

- [init(coder:)](cppanelitem/init%28coder_%29.md)
- [init(gridButtons:)](cppanelitem/init%28gridbuttons_%29.md): Initializes a panel item wrapping an array of @c CPGridButton objects.
- [init(listItem:)](cppanelitem/init%28listitem_%29.md): Initializes a panel item wrapping a @c CPListItem.

### Instance Properties

- [isEnabled](cppanelitem/isenabled.md): Whether the item is interactable. Defaults to @c YES.
- [showsBottomSeparator](cppanelitem/showsbottomseparator.md): When @c NO, the bottom separator line below this item is not drawn. Defaults to @c YES.
- [userInfo](cppanelitem/userinfo.md): Any custom user info related to this item.

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

## Declaration

```objectivec
@interface CPPanelItem : NSObject
```

<a id="overview"></a>

## Overview

Subclasses represent items specific to a particular template context (e.g., @c CPMapPanelItem for map templates).

## Topics

### Instance Properties

- [enabled](cppanelitem/isenabled.md): Whether the item is interactable. Defaults to @c YES.
- [showsBottomSeparator](cppanelitem/showsbottomseparator.md): When @c NO, the bottom separator line below this item is not drawn. Defaults to @c YES.
- [userInfo](cppanelitem/userinfo.md): Any custom user info related to this item.

### Instance Methods

- [initWithGridButtons:](cppanelitem/init%28gridbuttons_%29.md): Initializes a panel item wrapping an array of @c CPGridButton objects.
- [initWithListItem:](cppanelitem/init%28listitem_%29.md): Initializes a panel item wrapping a @c CPListItem.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [CPMapPanelItem](cpmappanelitem.md)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
