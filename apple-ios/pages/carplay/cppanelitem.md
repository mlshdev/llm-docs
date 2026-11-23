> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
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

### Initializing the panel

- [init(listItem:)](cppanelitem/init%28listitem_%29.md): Initialize the item using a list item.
- [init(gridButtons:)](cppanelitem/init%28gridbuttons_%29.md): Initialize the item using one or more grid buttons.
- [init(coder:)](cppanelitem/init%28coder_%29.md)

### Configuring the panel’s behavior

- [isEnabled](cppanelitem/isenabled.md): A Boolean value that indicates whether the item supports interactions.
- [showsBottomSeparator](cppanelitem/showsbottomseparator.md): A Boolean value that indicates whether a separator line appears at the bottom edge of the item.

### Accessing app-specific data

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

## See Also

### Common types

- [CPTemplate](cptemplate.md): An abstract base class for interface templates.
- [CPTextButton](cptextbutton.md): A button that displays a stylized title.
- [CPButton](cpbutton.md): A button that displays an image and invokes a handler when the user taps it.
- [CPImageSet](cpimageset.md): Light and dark representations of an image.
- [CPPanel](cppanel.md): A type that provides the common behaviors for panels you display on top of your app’s content.
- [CPPanelButtonConfiguration](cppanelbuttonconfiguration.md): A type that provides the common behaviors for a button layout in a panel.

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

### Initializing the panel

- [initWithListItem:](cppanelitem/init%28listitem_%29.md): Initialize the item using a list item.
- [initWithGridButtons:](cppanelitem/init%28gridbuttons_%29.md): Initialize the item using one or more grid buttons.

### Configuring the panel’s behavior

- [enabled](cppanelitem/isenabled.md): A Boolean value that indicates whether the item supports interactions.
- [showsBottomSeparator](cppanelitem/showsbottomseparator.md): A Boolean value that indicates whether a separator line appears at the bottom edge of the item.

### Accessing app-specific data

- [userInfo](cppanelitem/userinfo.md): Custom information you want to store with the item.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [CPMapPanelItem](cpmappanelitem.md)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Common types

- [CPTemplate](cptemplate.md): An abstract base class for interface templates.
- [CPTextButton](cptextbutton.md): A button that displays a stylized title.
- [CPButton](cpbutton.md): A button that displays an image and invokes a handler when the user taps it.
- [CPImageSet](cpimageset.md): Light and dark representations of an image.
- [CPPanel](cppanel.md): A type that provides the common behaviors for panels you display on top of your app’s content.
- [CPPanelButtonConfiguration](cppanelbuttonconfiguration.md): A type that provides the common behaviors for a button layout in a panel.
