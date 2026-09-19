> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmappanelsection

# CPMapPanelSection (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A single section of a map panel that you fill with a title and one or more items.

## Declaration

```swift
class CPMapPanelSection
```

<a id="overview"></a>

## Overview

The `CPMapPanelSection` class organizes a single section of content in a [CPMapPanel](cpmappanel.md) interface. In a navigation app, you use map panels to display relevant information such as route options or the location of charging stations on top of your custom map. Section objects manage one or more related items you want to display. For example, you might use one section to display upcoming charging stations and a different section to display route choices.

Create a `CPMapPanelSection` object and configure it with the section title and a [CPMapPanelItem](cpmappanelitem.md) object for each item you want to display. Add the section to your [CPMapPanel](cpmappanel.md) object before showing the panel from your map template. If you modify a section after the panel is visible, the system updates the section’s contents in your CarPlay interface.

## Topics

### Initializers

- [init(coder:)](cpmappanelsection/init%28coder_%29.md)
- [init(title:items:)](cpmappanelsection/init%28title_items_%29.md): Initializes the section with the specified title and items.

### Instance Properties

- [items](cpmappanelsection/items.md): The items to display in the section.
- [title](cpmappanelsection/title.md): The localized string to display for the section title.

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

A single section of a map panel that you fill with a title and one or more items.

## Declaration

```objectivec
@interface CPMapPanelSection : NSObject
```

<a id="overview"></a>

## Overview

The `CPMapPanelSection` class organizes a single section of content in a [CPMapPanel](cpmappanel.md) interface. In a navigation app, you use map panels to display relevant information such as route options or the location of charging stations on top of your custom map. Section objects manage one or more related items you want to display. For example, you might use one section to display upcoming charging stations and a different section to display route choices.

Create a `CPMapPanelSection` object and configure it with the section title and a [CPMapPanelItem](cpmappanelitem.md) object for each item you want to display. Add the section to your [CPMapPanel](cpmappanel.md) object before showing the panel from your map template. If you modify a section after the panel is visible, the system updates the section’s contents in your CarPlay interface.

## Topics

### Instance Properties

- [items](cpmappanelsection/items.md): The items to display in the section.
- [title](cpmappanelsection/title.md): The localized string to display for the section title.

### Instance Methods

- [initWithTitle:items:](cpmappanelsection/init%28title_items_%29.md): Initializes the section with the specified title and items.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
