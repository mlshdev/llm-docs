> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentbrowseraction](https://developer.apple.com/documentation/uikit/uidocumentbrowseraction)

# UIDocumentBrowserAction (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A custom action that you can create and add to a document browser’s Edit menu or navigation bar.

## Declaration

```swift
class UIDocumentBrowserAction
```

## Mentioned In

- [Adding custom actions and activities](adding-custom-actions-and-activities.md)

<a id="overview"></a>

## Overview

By default, the system provides a number of standard actions (copy, move, rename, delete, and share). To add custom actions, assign an array of [UIDocumentBrowserAction](uidocumentbrowseraction.md) objects to the browser’s [customActions](uidocumentbrowserviewcontroller/customactions.md) property.

Document browser actions can appear in either the navigation bar or the Edit menu.

- *Navigation bar* actions appear in the navigation bar when the user places the browser into the Select mode.
- *Menu* actions appear in the Edit Menu when the user long presses on a document or folder.

When triggered, these actions are passed the URLs of the currently selected items.

## Topics

### Creating and configuring actions

- [init(identifier:localizedTitle:availability:handler:)](uidocumentbrowseraction/init%28identifier_localizedtitle_availability_handler_%29.md): Instantiates and returns a new browser action item.
- [image](uidocumentbrowseraction/image.md): The action’s image displayed in the navigation bar.
- [supportedContentTypes](uidocumentbrowseraction/supportedcontenttypes.md): An array of uniform type identifiers that define the types of documents that the action supports.
- [supportsMultipleItems](uidocumentbrowseraction/supportsmultipleitems.md): A Boolean value that determines whether the action can be triggered on more than one document at a time.

### Accessing activity data

- [identifier](uidocumentbrowseraction/identifier.md): The action’s unique identifier.
- [localizedTitle](uidocumentbrowseraction/localizedtitle.md): The title that appears in the menu or navigation bar.
- [availability](uidocumentbrowseraction/availability-swift.property.md): A value that defines where the action can appear (in the Edit Menu, the navigation bar, or both).
- [UIDocumentBrowserAction.Availability](uidocumentbrowseraction/availability-swift.struct.md): Values that determine where the action can appear in the document browser.

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

## See Also

### Related Documentation

- [UIDocumentBrowserViewController](uidocumentbrowserviewcontroller.md): A view controller for browsing and performing actions on documents that you store locally and in the cloud.

### Adding custom actions

- [customActions](uidocumentbrowserviewcontroller/customactions.md): Custom document browser actions.

# UIDocumentBrowserAction (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A custom action that you can create and add to a document browser’s Edit menu or navigation bar.

## Declaration

```objectivec
@interface UIDocumentBrowserAction : NSObject
```

## Mentioned In

- [Adding custom actions and activities](adding-custom-actions-and-activities.md)

<a id="overview"></a>

## Overview

By default, the system provides a number of standard actions (copy, move, rename, delete, and share). To add custom actions, assign an array of [UIDocumentBrowserAction](uidocumentbrowseraction.md) objects to the browser’s [customActions](uidocumentbrowserviewcontroller/customactions.md) property.

Document browser actions can appear in either the navigation bar or the Edit menu.

- *Navigation bar* actions appear in the navigation bar when the user places the browser into the Select mode.
- *Menu* actions appear in the Edit Menu when the user long presses on a document or folder.

When triggered, these actions are passed the URLs of the currently selected items.

## Topics

### Creating and configuring actions

- [initWithIdentifier:localizedTitle:availability:handler:](uidocumentbrowseraction/init%28identifier_localizedtitle_availability_handler_%29.md): Instantiates and returns a new browser action item.
- [image](uidocumentbrowseraction/image.md): The action’s image displayed in the navigation bar.
- [supportedContentTypes](uidocumentbrowseraction/supportedcontenttypes.md): An array of uniform type identifiers that define the types of documents that the action supports.
- [supportsMultipleItems](uidocumentbrowseraction/supportsmultipleitems.md): A Boolean value that determines whether the action can be triggered on more than one document at a time.

### Accessing activity data

- [identifier](uidocumentbrowseraction/identifier.md): The action’s unique identifier.
- [localizedTitle](uidocumentbrowseraction/localizedtitle.md): The title that appears in the menu or navigation bar.
- [availability](uidocumentbrowseraction/availability-swift.property.md): A value that defines where the action can appear (in the Edit Menu, the navigation bar, or both).
- [UIDocumentBrowserActionAvailability](uidocumentbrowseraction/availability-swift.struct.md): Values that determine where the action can appear in the document browser.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Related Documentation

- [UIDocumentBrowserViewController](uidocumentbrowserviewcontroller.md): A view controller for browsing and performing actions on documents that you store locally and in the cloud.

### Adding custom actions

- [customActions](uidocumentbrowserviewcontroller/customactions.md): Custom document browser actions.
