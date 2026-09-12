> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsalert](https://developer.apple.com/documentation/appkit/nsalert)

# NSAlert (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A modal dialog or sheet attached to a document window.

## Declaration

```swift
@MainActor class NSAlert
```

<a id="overview"></a>

## Overview

The methods of the [NSAlert](nsalert.md) class let you specify an alert’s urgency, message text, button titles, and a custom icon. The class also supports a help button and other ways to offer contextual help specific to an alert.

To display an alert as a sheet, call the [beginSheetModal(for:completionHandler:)](nsalert/beginsheetmodal%28for_completionhandler_%29.md) method; to display one as an app-modal dialog, use the [runModal()](nsalert/runmodal%28%29.md) method.

By design, each [NSAlert](nsalert.md) object represents a single alert with a specific combination of title, buttons, and other attributes that appear in response to a particular condition. Allocate (`alloc`) and initialize (`init`) an [NSAlert](nsalert.md) object for each alert dialog, customize its attributes as described below, and release it once you’re done. If you need to show a particular alert repeatedly, retain and reuse a single instance instead of creating a new one each time.

[NSAlert](nsalert.md) objects have the following attributes:

- **Type**: The importance or urgency of the alert, as shown to the person viewing it. Specified with the [alertStyle](nsalert/alertstyle.md) property.
- **Message text**: The main message of the alert. Specified with [messageText](nsalert/messagetext.md).
- **Informative text**: Additional information about the alert. Specified with [informativeText](nsalert/informativetext.md).
- **Icon**: An optional, custom icon to display in the alert, used instead of the default app icon. Specified with [icon](nsalert/icon.md).
- **Help**: A help button that a person can click to get more information about the alert. Use [helpAnchor](nsalert/helpanchor.md) and [showsHelp](nsalert/showshelp.md).
- **Response buttons**: By default an alert has one response button: the OK button. You can add more response buttons using the [addButton(withTitle:)](nsalert/addbutton%28withtitle_%29.md) method.
- **Suppression checkbox**: A checkbox that lets a person opt out of seeing this particular alert again. Use [showsSuppressionButton](nsalert/showssuppressionbutton.md).
- **Accessory view**: A custom view, such as a text field for entering contact information, that adds extra content to an alert. Use [accessoryView](nsalert/accessoryview.md) and [layout()](nsalert/layout%28%29.md).

> **Note**

> The `NSAlert` class doesn’t support subclassing.

## Topics

### Creating alerts

- [init(error:)](nsalert/init%28error_%29.md): Returns an alert initialized from information in an error object.

### Configuring alerts

- [layout()](nsalert/layout%28%29.md): Specifies that the alert must do immediate layout instead of lazily just before display.
- [alertStyle](nsalert/alertstyle.md): Indicates the alert’s severity level.
- [NSAlert.Style](nsalert/style.md): The set of alert styles to style alerts in your app.
- [accessoryView](nsalert/accessoryview.md): The alert’s accessory view.
- [showsHelp](nsalert/showshelp.md): Specifies whether the alert has a help button.
- [helpAnchor](nsalert/helpanchor.md): The alert’s HTML help anchor.
- [delegate](nsalert/delegate.md): The alert’s delegate.

### Displaying alerts

- [runModal()](nsalert/runmodal%28%29.md): Runs the alert as an app-modal dialog and returns the constant that identifies the button clicked.
- [beginSheetModal(for:completionHandler:)](nsalert/beginsheetmodal%28for_completionhandler_%29.md): Runs the alert modally as a sheet attached to the specified window.
- [suppressionButton](nsalert/suppressionbutton.md): The alert’s suppression checkbox.
- [showsSuppressionButton](nsalert/showssuppressionbutton.md): Specifies whether the alert includes a suppression checkbox, which you can employ to allow a user to opt out of seeing the alert again.

### Accessing alert text

- [informativeText](nsalert/informativetext.md): The alert’s informative text.
- [messageText](nsalert/messagetext.md): The alert’s message text or title.

### Accessing a custom alert icon

- [icon](nsalert/icon.md): The custom icon displayed in the alert.

### Accessing alert response buttons

- [buttons](nsalert/buttons.md): The array of response buttons for the alert.
- [addButton(withTitle:)](nsalert/addbutton%28withtitle_%29.md): Adds a button with a given title to the alert.
- [NSApplication.ModalResponse](nsapplication/modalresponse.md): A set of button return values for modal dialogs.

### Getting alert windows

- [window](nsalert/window.md): The app-modal panel or document-modal sheet that corresponds to the alert.

### Deprecated

- [beginSheetModal(for:modalDelegate:didEnd:contextInfo:)](nsalert/beginsheetmodal%28for_modaldelegate_didend_contextinfo_%29.md): Deprecated. Runs the alert modally as an alert sheet attached to a specified window.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Related Documentation

- [Dialogs and Special Panels](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Dialog/Dialog.html#//apple_ref/doc/uid/10000071i)

### Alerts

- [NSAlertDelegate](nsalertdelegate.md): A set of optional methods implemented by the delegate of an [NSAlert](nsalert.md) object to respond to a user’s request for help.

# NSAlert (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A modal dialog or sheet attached to a document window.

## Declaration

```objectivec
@interface NSAlert : NSObject
```

<a id="overview"></a>

## Overview

The methods of the [NSAlert](nsalert.md) class let you specify an alert’s urgency, message text, button titles, and a custom icon. The class also supports a help button and other ways to offer contextual help specific to an alert.

To display an alert as a sheet, call the [beginSheetModalForWindow:completionHandler:](nsalert/beginsheetmodal%28for_completionhandler_%29.md) method; to display one as an app-modal dialog, use the [runModal](nsalert/runmodal%28%29.md) method.

By design, each [NSAlert](nsalert.md) object represents a single alert with a specific combination of title, buttons, and other attributes that appear in response to a particular condition. Allocate (`alloc`) and initialize (`init`) an [NSAlert](nsalert.md) object for each alert dialog, customize its attributes as described below, and release it once you’re done. If you need to show a particular alert repeatedly, retain and reuse a single instance instead of creating a new one each time.

[NSAlert](nsalert.md) objects have the following attributes:

- **Type**: The importance or urgency of the alert, as shown to the person viewing it. Specified with the [alertStyle](nsalert/alertstyle.md) property.
- **Message text**: The main message of the alert. Specified with [messageText](nsalert/messagetext.md).
- **Informative text**: Additional information about the alert. Specified with [informativeText](nsalert/informativetext.md).
- **Icon**: An optional, custom icon to display in the alert, used instead of the default app icon. Specified with [icon](nsalert/icon.md).
- **Help**: A help button that a person can click to get more information about the alert. Use [helpAnchor](nsalert/helpanchor.md) and [showsHelp](nsalert/showshelp.md).
- **Response buttons**: By default an alert has one response button: the OK button. You can add more response buttons using the [addButtonWithTitle:](nsalert/addbutton%28withtitle_%29.md) method.
- **Suppression checkbox**: A checkbox that lets a person opt out of seeing this particular alert again. Use [showsSuppressionButton](nsalert/showssuppressionbutton.md).
- **Accessory view**: A custom view, such as a text field for entering contact information, that adds extra content to an alert. Use [accessoryView](nsalert/accessoryview.md) and [layout](nsalert/layout%28%29.md).

> **Note**

> The `NSAlert` class doesn’t support subclassing.

## Topics

### Creating alerts

- [alertWithError:](nsalert/init%28error_%29.md): Returns an alert initialized from information in an error object.

### Configuring alerts

- [layout](nsalert/layout%28%29.md): Specifies that the alert must do immediate layout instead of lazily just before display.
- [alertStyle](nsalert/alertstyle.md): Indicates the alert’s severity level.
- [NSAlertStyle](nsalert/style.md): The set of alert styles to style alerts in your app.
- [accessoryView](nsalert/accessoryview.md): The alert’s accessory view.
- [showsHelp](nsalert/showshelp.md): Specifies whether the alert has a help button.
- [helpAnchor](nsalert/helpanchor.md): The alert’s HTML help anchor.
- [delegate](nsalert/delegate.md): The alert’s delegate.

### Displaying alerts

- [runModal](nsalert/runmodal%28%29.md): Runs the alert as an app-modal dialog and returns the constant that identifies the button clicked.
- [beginSheetModalForWindow:completionHandler:](nsalert/beginsheetmodal%28for_completionhandler_%29.md): Runs the alert modally as a sheet attached to the specified window.
- [suppressionButton](nsalert/suppressionbutton.md): The alert’s suppression checkbox.
- [showsSuppressionButton](nsalert/showssuppressionbutton.md): Specifies whether the alert includes a suppression checkbox, which you can employ to allow a user to opt out of seeing the alert again.

### Accessing alert text

- [informativeText](nsalert/informativetext.md): The alert’s informative text.
- [messageText](nsalert/messagetext.md): The alert’s message text or title.

### Accessing a custom alert icon

- [icon](nsalert/icon.md): The custom icon displayed in the alert.

### Accessing alert response buttons

- [buttons](nsalert/buttons.md): The array of response buttons for the alert.
- [addButtonWithTitle:](nsalert/addbutton%28withtitle_%29.md): Adds a button with a given title to the alert.
- [NSModalResponse](nsapplication/modalresponse.md): A set of button return values for modal dialogs.

### Getting alert windows

- [window](nsalert/window.md): The app-modal panel or document-modal sheet that corresponds to the alert.

### Deprecated

- [beginSheetModalForWindow:modalDelegate:didEndSelector:contextInfo:](nsalert/beginsheetmodal%28for_modaldelegate_didend_contextinfo_%29.md): Deprecated. Runs the alert modally as an alert sheet attached to a specified window.

### Type Methods

- [alertWithMessageText:defaultButton:alternateButton:otherButton:informativeTextWithFormat:](nsalert/alertwithmessagetext_defaultbutton_alternatebutton_otherbutton_informativetextwithformat_.md): Deprecated. Creates an alert compatible with alerts created using the [NSRunAlertPanel](nsrunalertpanel.md) function for display as a warning-style alert.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Related Documentation

- [Dialogs and Special Panels](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Dialog/Dialog.html#//apple_ref/doc/uid/10000071i)

### Alerts

- [NSAlertDelegate](nsalertdelegate.md): A set of optional methods implemented by the delegate of an [NSAlert](nsalert.md) object to respond to a user’s request for help.
