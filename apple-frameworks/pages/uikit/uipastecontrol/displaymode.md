> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipastecontrol/displaymode](https://developer.apple.com/documentation/uikit/uipastecontrol/displaymode)

# UIPasteControl.DisplayMode (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Options that determine whether a paste button composes an icon, textual label, or both.

## Declaration

```swift
enum DisplayMode
```

<a id="overview"></a>

## Overview

The paste button ([UIPasteControl](../uipastecontrol.md)) property [displayMode](configuration-swift.class/displaymode.md) is of this type.

## Topics

### Choosing a display mode

- [UIPasteControl.DisplayMode.iconAndLabel](displaymode/iconandlabel.md): A display mode for a button that composes an icon and a textual label.
- [UIPasteControl.DisplayMode.iconOnly](displaymode/icononly.md): A display mode for an icon button.
- [UIPasteControl.DisplayMode.labelOnly](displaymode/labelonly.md): A display mode for a textual label.

### Enumeration Cases

- [UIPasteControl.DisplayMode.arrowAndLabel](displaymode/arrowandlabel.md)

### Initializers

- [init(rawValue:)](displaymode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Pasteboard

- [UIPasteControl](../uipastecontrol.md): A button that a person taps to place pasteboard contents in your app.
- [UIPasteControl.Configuration](configuration-swift.class.md): An object that determines a paste button’s color, corner style, icon, and text.
- [UIPasteboard](../uipasteboard.md): An object that helps a user share data from one place to another within your app, and from your app to other apps.
- [UIPasteConfiguration](../uipasteconfiguration.md): The interface that an object implements to declare its ability to accept specific data types for pasting and for drag-and-drop activities.
- [UIPasteConfigurationSupporting](../uipasteconfigurationsupporting.md): The interface that determines whether a responder object supports paste configuration.

# UIPasteControlDisplayMode (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Options that determine whether a paste button composes an icon, textual label, or both.

## Declaration

```objectivec
enum UIPasteControlDisplayMode : NSUInteger;
```

<a id="overview"></a>

## Overview

The paste button ([UIPasteControl](../uipastecontrol.md)) property [displayMode](configuration-swift.class/displaymode.md) is of this type.

## Topics

### Choosing a display mode

- [UIPasteControlDisplayModeIconAndLabel](displaymode/iconandlabel.md): A display mode for a button that composes an icon and a textual label.
- [UIPasteControlDisplayModeIconOnly](displaymode/icononly.md): A display mode for an icon button.
- [UIPasteControlDisplayModeLabelOnly](displaymode/labelonly.md): A display mode for a textual label.

### Enumeration Cases

- [UIPasteControlDisplayModeArrowAndLabel](displaymode/arrowandlabel.md)

## See Also

### Pasteboard

- [UIPasteControl](../uipastecontrol.md): A button that a person taps to place pasteboard contents in your app.
- [UIPasteControlConfiguration](configuration-swift.class.md): An object that determines a paste button’s color, corner style, icon, and text.
- [UIPasteboard](../uipasteboard.md): An object that helps a user share data from one place to another within your app, and from your app to other apps.
- [UIPasteConfiguration](../uipasteconfiguration.md): The interface that an object implements to declare its ability to accept specific data types for pasting and for drag-and-drop activities.
- [UIPasteConfigurationSupporting](../uipasteconfigurationsupporting.md): The interface that determines whether a responder object supports paste configuration.
