> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextitem](https://developer.apple.com/documentation/uikit/uitextitem)

# UITextItem (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

An object for attaching custom actions and menus to links, text attachments, or other specific text in a text view.

## Declaration

```swift
@MainActor class UITextItem
```

<a id="overview"></a>

## Overview

A text item represents a link with a URL destination, a custom tag for a topic that you specify in your app, or a text attachment in a text view. In your text view’s [UITextViewDelegate](uitextviewdelegate.md), implement [textView(\_:primaryActionFor:defaultAction:)](uitextviewdelegate/textview%28__primaryactionfor_defaultaction_%29.md) to provide a custom action when someone interacts with a text item. Implement [textView(\_:menuConfigurationFor:defaultMenu:)](uitextviewdelegate/textview%28__menuconfigurationfor_defaultmenu_%29.md) to provide a custom menu for a text item.

## Topics

### Specifying the content type

- [content](uitextitem/content-swift.property.md): The content type and related value of the text item.
- [UITextItem.Content](uitextitem/content-swift.enum.md): Constants that describe and capture the type of content a text item represents along with a specific related value.

### Specifying the range

- [range](uitextitem/range.md): The range that delineates the text item in an attributed string.

### Creating a menu

- [UITextItem.MenuConfiguration](uitextitem/menuconfiguration.md): An object that describes what type of menu and preview to show for a text item.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Text actions and menus

- [UITextItem.MenuConfiguration](uitextitem/menuconfiguration.md): An object that describes what type of menu and preview to show for a text item.
- [UITextViewDelegate](uitextviewdelegate.md): The methods for receiving editing-related messages for text view objects.

# UITextItem (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

An object for attaching custom actions and menus to links, text attachments, or other specific text in a text view.

## Declaration

```objectivec
@interface UITextItem : NSObject
```

<a id="overview"></a>

## Overview

A text item represents a link with a URL destination, a custom tag for a topic that you specify in your app, or a text attachment in a text view. In your text view’s [UITextViewDelegate](uitextviewdelegate.md), implement [textView:primaryActionForTextItem:defaultAction:](uitextviewdelegate/textview%28__primaryactionfor_defaultaction_%29.md) to provide a custom action when someone interacts with a text item. Implement [textView:menuConfigurationForTextItem:defaultMenu:](uitextviewdelegate/textview%28__menuconfigurationfor_defaultmenu_%29.md) to provide a custom menu for a text item.

## Topics

### Specifying the content type

- [contentType](uitextitem/contenttype.md): The content type and related value of the text item.

### Specifying the range

- [range](uitextitem/range.md): The range that delineates the text item in an attributed string.

### Creating a menu

- [UITextItemMenuConfiguration](uitextitem/menuconfiguration.md): An object that describes what type of menu and preview to show for a text item.

### Getting the value

- [link](uitextitem/link.md): The URL associated with the link text.
- [textAttachment](uitextitem/textattachment.md): The attachment for with the text item.
- [tagIdentifier](uitextitem/tagidentifier.md): The tag associated with the text item.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Text actions and menus

- [UITextItemContentType](uitextitemcontenttype.md): Constants that describe and capture the type of content a text item represents along with a specific related value.
- [UITextItemMenuConfiguration](uitextitem/menuconfiguration.md): An object that describes what type of menu and preview to show for a text item.
- [UITextViewDelegate](uitextviewdelegate.md): The methods for receiving editing-related messages for text view objects.
