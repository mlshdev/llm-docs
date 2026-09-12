> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextitem/menuconfiguration](https://developer.apple.com/documentation/uikit/uitextitem/menuconfiguration)

# UITextItem.MenuConfiguration (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

An object that describes what type of menu and preview to show for a text item.

## Declaration

```swift
@MainActor class MenuConfiguration
```

<a id="overview"></a>

## Overview

Create and return a menu configuration for a text item in [textView(\_:menuConfigurationFor:defaultMenu:)](../uitextviewdelegate/textview%28__menuconfigurationfor_defaultmenu_%29.md) to provide a custom menu that the system shows when someone interacts with the text item. Provide a custom view for the item’s preview, or specify that the system displays a default preview.

## Topics

### Creating a menu configuration

- [init(preview:menu:)](menuconfiguration/init%28preview_menu_%29.md): Creates a text item menu configuration with the specified menu and preview.
- [UITextItem.MenuConfiguration.Preview](menuconfiguration/preview.md): Constants that indicate what type of preview to display alongside the text item’s menu.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Text actions and menus

- [UITextItem](../uitextitem.md): An object for attaching custom actions and menus to links, text attachments, or other specific text in a text view.
- [UITextViewDelegate](../uitextviewdelegate.md): The methods for receiving editing-related messages for text view objects.

# UITextItemMenuConfiguration (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

An object that describes what type of menu and preview to show for a text item.

## Declaration

```objectivec
@interface UITextItemMenuConfiguration : NSObject
```

<a id="overview"></a>

## Overview

Create and return a menu configuration for a text item in [textView:menuConfigurationForTextItem:defaultMenu:](../uitextviewdelegate/textview%28__menuconfigurationfor_defaultmenu_%29.md) to provide a custom menu that the system shows when someone interacts with the text item. Provide a custom view for the item’s preview, or specify that the system displays a default preview.

## Topics

### Creating a menu configuration

- [configurationWithMenu:](../uitextitemmenuconfiguration/configurationwithmenu_.md): Creates a menu configuration with the specified menu and a default preview.
- [configurationWithPreview:menu:](../uitextitemmenuconfiguration/configurationwithpreview_menu_.md): Creates a menu configuration with the specified menu and custom preview.
- [UITextItemMenuPreview](../uitextitemmenupreview.md): An object representing the preview for a text item.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

## See Also

### Text actions and menus

- [UITextItem](../uitextitem.md): An object for attaching custom actions and menus to links, text attachments, or other specific text in a text view.
- [UITextItemContentType](../uitextitemcontenttype.md): Constants that describe and capture the type of content a text item represents along with a specific related value.
- [UITextViewDelegate](../uitextviewdelegate.md): The methods for receiving editing-related messages for text view objects.
