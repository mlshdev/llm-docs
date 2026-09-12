> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentmenuviewcontroller](https://developer.apple.com/documentation/uikit/uidocumentmenuviewcontroller)

# UIDocumentMenuViewController (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A list of all the available document providers for a given file type and mode, in addition to custom menu items that you add.

> Use [UIDocumentPickerViewController](uidocumentpickerviewcontroller.md) instead.

## Declaration

```swift
@MainActor class UIDocumentMenuViewController
```

## Topics

### Creating a document menu

- [init(documentTypes:in:)](uidocumentmenuviewcontroller/init%28documenttypes_in_%29.md): Deprecated. Initializes and returns a document menu to import or open the given file types.
- [init(url:in:)](uidocumentmenuviewcontroller/init%28url_in_%29.md): Deprecated. Initializes and returns a document menu to export or move the given document.
- [init(coder:)](uidocumentmenuviewcontroller/init%28coder_%29.md): Deprecated. Creates a document menu from data in an unarchiver.

### Getting the user-selected document picker

- [delegate](uidocumentmenuviewcontroller/delegate.md): Deprecated. The document menu’s delegate.
- [UIDocumentMenuDelegate](uidocumentmenudelegate.md): Deprecated. A set of methods that you must implement to track user interactions with a document menu view controller.

### Configuring a document menu

- [addOption(withTitle:image:order:handler:)](uidocumentmenuviewcontroller/addoption%28withtitle_image_order_handler_%29.md): Deprecated. Adds a custom menu item to the list of document pickers.
- [UIDocumentMenuOrder](uidocumentmenuorder.md): Deprecated. The insertion point for custom menu items.

### Initializers

- [init(URL:inMode:)](uidocumentmenuviewcontroller/init%28url_inmode_%29.md): Deprecated.
- [init(documentTypes:inMode:)](uidocumentmenuviewcontroller/init%28documenttypes_inmode_%29.md): Deprecated.

## Relationships

### Inherits From

- [UIViewController](uiviewcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIActivityItemsConfigurationProviding](uiactivityitemsconfigurationproviding.md)
- [UIAppearanceContainer](uiappearancecontainer.md)
- [UIContentContainer](uicontentcontainer.md)
- [UIFocusEnvironment](uifocusenvironment.md)
- [UIPasteConfigurationSupporting](uipasteconfigurationsupporting.md)
- [UIResponderStandardEditActions](uiresponderstandardeditactions.md)
- [UIStateRestoring](uistaterestoring.md)
- [UITraitChangeObservable](uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](uitraitenvironment.md)
- [UIUserActivityRestoring](uiuseractivityrestoring.md)

## See Also

### Deprecated classes

- [UIActionSheet](uiactionsheet.md): Deprecated. A view that presents a set of alternatives for how to proceed with a task.
- [UIAlertView](uialertview.md): Deprecated. A view that displays an alert message.
- [UILocalNotification](uilocalnotification.md): Deprecated. A notification that an app can schedule for presentation at a specific date and time.
- [UIMenuController](uimenucontroller.md): Deprecated. The menu interface for the Cut, Copy, Paste, Select, Select All, and Delete commands.
- [UIMenuItem](uimenuitem.md): Deprecated. A custom item in the editing menu managed by the menu controller.
- [UIMutableUserNotificationAction](uimutableusernotificationaction.md): Deprecated. A modifiable version of the user notification action class.
- [UIMutableUserNotificationCategory](uimutableusernotificationcategory.md): Deprecated. Information about custom actions that your app can perform in response to a local or push notification.
- [UIPopoverController](uipopovercontroller.md): Deprecated. An object that manages the presentation of content in a popover.
- [UIPreviewAction](uipreviewaction.md): Deprecated. A preview action, or *peek quick action*, that displays below a peek when a user swipes the peek upward.
- [UIPreviewActionGroup](uipreviewactiongroup.md): Deprecated. A group of one or more child quick actions, each an instance of the preview action class.
- [UISearchDisplayController](uisearchdisplaycontroller.md): Deprecated. An object that manages the display of a search bar, along with a table view that displays search results.
- [UIStoryboardPopoverSegue](uistoryboardpopoversegue.md): Deprecated. A specific type of segue for presenting content in a popover.
- [UIWebView](uiwebview.md): Deprecated. A view that embeds web content in your app.
- [UIUserNotificationAction](uiusernotificationaction.md): Deprecated. A custom action that your app can perform in response to a remote or local notification.
- [UIUserNotificationCategory](uiusernotificationcategory.md): Deprecated. Information about custom actions that your app can perform in response to a local or push notification.

# UIDocumentMenuViewController (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A list of all the available document providers for a given file type and mode, in addition to custom menu items that you add.

> Use [UIDocumentPickerViewController](uidocumentpickerviewcontroller.md) instead.

## Declaration

```objectivec
@interface UIDocumentMenuViewController : UIViewController
```

## Topics

### Creating a document menu

- [initWithDocumentTypes:inMode:](uidocumentmenuviewcontroller/init%28documenttypes_in_%29.md): Deprecated. Initializes and returns a document menu to import or open the given file types.
- [initWithURL:inMode:](uidocumentmenuviewcontroller/init%28url_in_%29.md): Deprecated. Initializes and returns a document menu to export or move the given document.
- [initWithCoder:](uidocumentmenuviewcontroller/init%28coder_%29.md): Deprecated. Creates a document menu from data in an unarchiver.

### Getting the user-selected document picker

- [delegate](uidocumentmenuviewcontroller/delegate.md): Deprecated. The document menu’s delegate.
- [UIDocumentMenuDelegate](uidocumentmenudelegate.md): Deprecated. A set of methods that you must implement to track user interactions with a document menu view controller.

### Configuring a document menu

- [addOptionWithTitle:image:order:handler:](uidocumentmenuviewcontroller/addoption%28withtitle_image_order_handler_%29.md): Deprecated. Adds a custom menu item to the list of document pickers.
- [UIDocumentMenuOrder](uidocumentmenuorder.md): Deprecated. The insertion point for custom menu items.

## Relationships

### Inherits From

- [UIViewController](uiviewcontroller.md)

## See Also

### Deprecated classes

- [UIAcceleration](uiacceleration.md): Deprecated. An acceleration event that represents immediate, three-dimensional acceleration data.
- [UIAccelerometer](uiaccelerometer.md): Deprecated. An object that lets you register to receive acceleration-related data from the onboard hardware.
- [UIActionSheet](uiactionsheet.md): Deprecated. A view that presents a set of alternatives for how to proceed with a task.
- [UIAlertView](uialertview.md): Deprecated. A view that displays an alert message.
- [UILocalNotification](uilocalnotification.md): Deprecated. A notification that an app can schedule for presentation at a specific date and time.
- [UIMenuController](uimenucontroller.md): Deprecated. The menu interface for the Cut, Copy, Paste, Select, Select All, and Delete commands.
- [UIMenuItem](uimenuitem.md): Deprecated. A custom item in the editing menu managed by the menu controller.
- [UIMutableUserNotificationAction](uimutableusernotificationaction.md): Deprecated. A modifiable version of the user notification action class.
- [UIMutableUserNotificationCategory](uimutableusernotificationcategory.md): Deprecated. Information about custom actions that your app can perform in response to a local or push notification.
- [UIPopoverController](uipopovercontroller.md): Deprecated. An object that manages the presentation of content in a popover.
- [UIPreviewAction](uipreviewaction.md): Deprecated. A preview action, or *peek quick action*, that displays below a peek when a user swipes the peek upward.
- [UIPreviewActionGroup](uipreviewactiongroup.md): Deprecated. A group of one or more child quick actions, each an instance of the preview action class.
- [UISearchDisplayController](uisearchdisplaycontroller.md): Deprecated. An object that manages the display of a search bar, along with a table view that displays search results.
- [UIStoryboardPopoverSegue](uistoryboardpopoversegue.md): Deprecated. A specific type of segue for presenting content in a popover.
- [UIWebView](uiwebview.md): Deprecated. A view that embeds web content in your app.
