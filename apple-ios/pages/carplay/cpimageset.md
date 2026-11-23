> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpimageset

# CPImageSet (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Light and dark representations of an image.

## Declaration

```swift
class CPImageSet
```

<a id="overview"></a>

## Overview

CarPlay is set to dark appearance by default in most vehicles, but does provide the option to automatically switch between dark and light appearance. Use an image set to provide images for both appearances, and CarPlay displays the correct one for the current appearance.

## Topics

### Creating an image set

- [init(lightContentImage:darkContentImage:)](cpimageset/init%28lightcontentimage_darkcontentimage_%29.md): Creates an image set with light and dark versions of an image.

### Getting the images

- [lightContentImage](cpimageset/lightcontentimage.md): The image the system displays when the user interface style is light.
- [darkContentImage](cpimageset/darkcontentimage.md): The image the system displays when the user interface style is dark.

### Initializers

- [init(coder:)](cpimageset/init%28coder_%29.md)

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

## See Also

### Common types

- [CPTemplate](cptemplate.md): An abstract base class for interface templates.
- [CPTextButton](cptextbutton.md): A button that displays a stylized title.
- [CPButton](cpbutton.md): A button that displays an image and invokes a handler when the user taps it.
- [CPPanel](cppanel.md): A type that provides the common behaviors for panels you display on top of your app’s content.
- [CPPanelItem](cppanelitem.md): A type that provides the common behaviors for items you display in a section of a panel.
- [CPPanelButtonConfiguration](cppanelbuttonconfiguration.md): A type that provides the common behaviors for a button layout in a panel.

# CPImageSet (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Light and dark representations of an image.

## Declaration

```objectivec
@interface CPImageSet : NSObject
```

<a id="overview"></a>

## Overview

CarPlay is set to dark appearance by default in most vehicles, but does provide the option to automatically switch between dark and light appearance. Use an image set to provide images for both appearances, and CarPlay displays the correct one for the current appearance.

## Topics

### Creating an image set

- [initWithLightContentImage:darkContentImage:](cpimageset/init%28lightcontentimage_darkcontentimage_%29.md): Creates an image set with light and dark versions of an image.

### Getting the images

- [lightContentImage](cpimageset/lightcontentimage.md): The image the system displays when the user interface style is light.
- [darkContentImage](cpimageset/darkcontentimage.md): The image the system displays when the user interface style is dark.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Common types

- [CPTemplate](cptemplate.md): An abstract base class for interface templates.
- [CPTextButton](cptextbutton.md): A button that displays a stylized title.
- [CPButton](cpbutton.md): A button that displays an image and invokes a handler when the user taps it.
- [CPPanel](cppanel.md): A type that provides the common behaviors for panels you display on top of your app’s content.
- [CPPanelItem](cppanelitem.md): A type that provides the common behaviors for items you display in a section of a panel.
- [CPPanelButtonConfiguration](cppanelbuttonconfiguration.md): A type that provides the common behaviors for a button layout in a panel.
