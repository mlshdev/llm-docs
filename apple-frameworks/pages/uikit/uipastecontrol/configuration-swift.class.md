> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipastecontrol/configuration-swift.class](https://developer.apple.com/documentation/uikit/uipastecontrol/configuration-swift.class)

# UIPasteControl.Configuration (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An object that determines a paste button’s color, corner style, icon, and text.

## Declaration

```swift
@MainActor class Configuration
```

<a id="overview"></a>

## Overview

The paste button ([UIPasteControl](../uipastecontrol.md)) property [configuration](configuration-swift.property.md) is of this type.

## Topics

### Coloring the button

- [baseBackgroundColor](configuration-swift.class/basebackgroundcolor.md): A color for the paste button’s background.
- [baseForegroundColor](configuration-swift.class/baseforegroundcolor.md): A color for the paste button’s icon and text.

### Shaping button corners

- [cornerRadius](configuration-swift.class/cornerradius.md): A value that rounds the edges of a paste button.
- [cornerStyle](configuration-swift.class/cornerstyle.md): A shape for the button among a predetermined set of templates.

### Choosing control icon and text

- [displayMode](configuration-swift.class/displaymode.md): An option that determines whether the paste button composes an icon, textual label, or both.
- [UIPasteControl.DisplayMode](displaymode.md): Options that determine whether a paste button composes an icon, textual label, or both.

### Initializers

- [init(coder:)](configuration-swift.class/init%28coder_%29.md)

### Instance Properties

- [imagePlacement](configuration-swift.class/imageplacement.md)

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../../foundation/nscoding.md)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Pasteboard

- [UIPasteControl](../uipastecontrol.md): A button that a person taps to place pasteboard contents in your app.
- [UIPasteControl.DisplayMode](displaymode.md): Options that determine whether a paste button composes an icon, textual label, or both.
- [UIPasteboard](../uipasteboard.md): An object that helps a user share data from one place to another within your app, and from your app to other apps.
- [UIPasteConfiguration](../uipasteconfiguration.md): The interface that an object implements to declare its ability to accept specific data types for pasting and for drag-and-drop activities.
- [UIPasteConfigurationSupporting](../uipasteconfigurationsupporting.md): The interface that determines whether a responder object supports paste configuration.

# UIPasteControlConfiguration (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An object that determines a paste button’s color, corner style, icon, and text.

## Declaration

```objectivec
@interface UIPasteControlConfiguration : NSObject
```

<a id="overview"></a>

## Overview

The paste button ([UIPasteControl](../uipastecontrol.md)) property [configuration](configuration-swift.property.md) is of this type.

## Topics

### Coloring the button

- [baseBackgroundColor](configuration-swift.class/basebackgroundcolor.md): A color for the paste button’s background.
- [baseForegroundColor](configuration-swift.class/baseforegroundcolor.md): A color for the paste button’s icon and text.

### Shaping button corners

- [cornerRadius](configuration-swift.class/cornerradius.md): A value that rounds the edges of a paste button.
- [cornerStyle](../uipastecontrolconfiguration/cornerstyle.md): A shape for the button among a predetermined set of templates.

### Choosing control icon and text

- [displayMode](configuration-swift.class/displaymode.md): An option that determines whether the paste button composes an icon, textual label, or both.
- [UIPasteControlDisplayMode](displaymode.md): Options that determine whether a paste button composes an icon, textual label, or both.

### Instance Properties

- [imagePlacement](configuration-swift.class/imageplacement.md)

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../../foundation/nssecurecoding.md)

## See Also

### Pasteboard

- [UIPasteControl](../uipastecontrol.md): A button that a person taps to place pasteboard contents in your app.
- [UIPasteControlDisplayMode](displaymode.md): Options that determine whether a paste button composes an icon, textual label, or both.
- [UIPasteboard](../uipasteboard.md): An object that helps a user share data from one place to another within your app, and from your app to other apps.
- [UIPasteConfiguration](../uipasteconfiguration.md): The interface that an object implements to declare its ability to accept specific data types for pasting and for drag-and-drop activities.
- [UIPasteConfigurationSupporting](../uipasteconfigurationsupporting.md): The interface that determines whether a responder object supports paste configuration.
