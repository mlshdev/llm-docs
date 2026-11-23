> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cppanel

# CPPanel (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A type that provides the common behaviors for panels you display on top of your app’s content.

## Declaration

```swift
class CPPanel
```

<a id="overview"></a>

## Overview

The `CPPanel` type defines the default behaviors for panels you display in your app. You don’t create or present this type directly. Instead, instantiate one of the defined subclasses and present that type from your app’s interface. For example, create a [CPMapPanel](cpmappanel.md) and configure it with navigation-related data, and present it from a [CPMapTemplate](cpmaptemplate.md) to overlay that information on top of your custom map.

## Topics

### Initializing the panel

- [init(coder:)](cppanel/init%28coder_%29.md)

### Adding a close button to the panel

- [showsCloseButton](cppanel/showsclosebutton.md): A Boolean value that indicates whether the panel displays a close button.

### Getting the maximum number of items

- [maximumPanelItemsCount](cppanel/maximumpanelitemscount.md): The maximum number of items the panel is able to display.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [CPMapPanel](cpmappanel.md)

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
- [CPPanelItem](cppanelitem.md): A type that provides the common behaviors for items you display in a section of a panel.
- [CPPanelButtonConfiguration](cppanelbuttonconfiguration.md): A type that provides the common behaviors for a button layout in a panel.

# CPPanel (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A type that provides the common behaviors for panels you display on top of your app’s content.

## Declaration

```objectivec
@interface CPPanel : NSObject
```

<a id="overview"></a>

## Overview

The `CPPanel` type defines the default behaviors for panels you display in your app. You don’t create or present this type directly. Instead, instantiate one of the defined subclasses and present that type from your app’s interface. For example, create a [CPMapPanel](cpmappanel.md) and configure it with navigation-related data, and present it from a [CPMapTemplate](cpmaptemplate.md) to overlay that information on top of your custom map.

## Topics

### Adding a close button to the panel

- [showsCloseButton](cppanel/showsclosebutton.md): A Boolean value that indicates whether the panel displays a close button.

### Getting the maximum number of items

- [maximumPanelItemsCount](cppanel/maximumpanelitemscount.md): The maximum number of items the panel is able to display.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [CPMapPanel](cpmappanel.md)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Common types

- [CPTemplate](cptemplate.md): An abstract base class for interface templates.
- [CPTextButton](cptextbutton.md): A button that displays a stylized title.
- [CPButton](cpbutton.md): A button that displays an image and invokes a handler when the user taps it.
- [CPImageSet](cpimageset.md): Light and dark representations of an image.
- [CPPanelItem](cppanelitem.md): A type that provides the common behaviors for items you display in a section of a panel.
- [CPPanelButtonConfiguration](cppanelbuttonconfiguration.md): A type that provides the common behaviors for a button layout in a panel.
