> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/action](https://developer.apple.com/documentation/webkit/wkwebextension/action)

# WKWebExtension.Action (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

An object that encapsulates the properties for an individual web extension action.

## Declaration

```swift
@MainActor class Action
```

<a id="overview"></a>

## Overview

This class provides access to action properties, such as pop-up, icon, or title, with tab-specific values.

## Topics

### Instance Properties

- [associatedTab](action/associatedtab.md): The tab that this action is associated with, or `nil` if it’s the default action.
- [badgeText](action/badgetext.md): The badge text for the action.
- [hasUnreadBadgeText](action/hasunreadbadgetext.md): A Boolean value indicating whether the badge text is unread.
- [inspectionName](action/inspectionname.md): The name shown when inspecting the pop-up web view.
- [isEnabled](action/isenabled.md): A Boolean value indicating whether the action is enabled.
- [label](action/label.md): The localized display label for the action.
- [menuItems](action/menuitems.md): The menu items provided by the extension for this action.
- [popupPopover](action/popuppopover.md): A popover that presents a web view loaded with the pop-up page for this action, or `nil` if no popup is specified.
- [popupViewController](action/popupviewcontroller.md): A view controller that presents a web view loaded with the pop-up page for this action, or `nil` if no popup is specified.
- [popupWebView](action/popupwebview.md): A web view loaded with the pop-up page for this action, or `nil` if no pop-up is specified.
- [presentsPopup](action/presentspopup.md): A Boolean value indicating whether the action has a pop-up.
- [webExtensionContext](action/webextensioncontext.md): The extension context to which this action is related.

### Instance Methods

- [closePopup()](action/closepopup%28%29.md): Triggers the dismissal process of the pop-up.
- [icon(for:)](action/icon%28for_%29.md): Returns the action icon for the specified size.

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

### Web extensions

- [WKWebExtension](../wkwebextension.md): An object that encapsulates a web extension’s resources that the manifest file defines.
- [WKWebExtensionTab](../wkwebextensiontab.md): A protocol with methods that represent a tab to web extensions.
- [WKWebExtensionWindow](../wkwebextensionwindow.md): A protocol with methods that represent a window to web extensions.
- [WKWebExtensionContext](../wkwebextensioncontext.md): An object that represents the runtime environment for a web extension.
- [WKWebExtensionController](../wkwebextensioncontroller.md): An object that manages a set of loaded extension contexts.
- [WKWebExtensionControllerDelegate](../wkwebextensioncontrollerdelegate.md): A group of methods you use to customize web extension interactions.
- [WKWebExtension.Command](command.md): An object that encapsulates the properties for an individual web extension command.
- [WKWebExtension.MatchPattern](matchpattern.md): An object that represents a way to specify groups of URLs.
- [WKWebExtension.MessagePort](messageport.md): An object that manages message-based communication with a web extension.
- [WKWebExtension.DataRecord](datarecord.md): An object that represents a record of stored data for a specific web extension context.
- [WKWebExtension.TabConfiguration](tabconfiguration.md): An object that encapsulates configuration options for a tab in an extension.
- [WKWebExtension.WindowConfiguration](windowconfiguration.md): An object that encapsulates configuration options for a window in an extension.
- [WKWebExtensionController.Configuration](../wkwebextensioncontroller/configuration-swift.class.md): A [WKWebExtensionController.Configuration](../wkwebextensioncontroller/configuration-swift.class.md) object with which to initialize a web extension controller.

# WKWebExtensionAction (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

An object that encapsulates the properties for an individual web extension action.

## Declaration

```objectivec
@interface WKWebExtensionAction : NSObject
```

<a id="overview"></a>

## Overview

This class provides access to action properties, such as pop-up, icon, or title, with tab-specific values.

## Topics

### Instance Properties

- [associatedTab](action/associatedtab.md): The tab that this action is associated with, or `nil` if it’s the default action.
- [badgeText](action/badgetext.md): The badge text for the action.
- [hasUnreadBadgeText](action/hasunreadbadgetext.md): A Boolean value indicating whether the badge text is unread.
- [inspectionName](action/inspectionname.md): The name shown when inspecting the pop-up web view.
- [enabled](action/isenabled.md): A Boolean value indicating whether the action is enabled.
- [label](action/label.md): The localized display label for the action.
- [menuItems](action/menuitems.md): The menu items provided by the extension for this action.
- [popupPopover](action/popuppopover.md): A popover that presents a web view loaded with the pop-up page for this action, or `nil` if no popup is specified.
- [popupViewController](action/popupviewcontroller.md): A view controller that presents a web view loaded with the pop-up page for this action, or `nil` if no popup is specified.
- [popupWebView](action/popupwebview.md): A web view loaded with the pop-up page for this action, or `nil` if no pop-up is specified.
- [presentsPopup](action/presentspopup.md): A Boolean value indicating whether the action has a pop-up.
- [webExtensionContext](action/webextensioncontext.md): The extension context to which this action is related.

### Instance Methods

- [closePopup](action/closepopup%28%29.md): Triggers the dismissal process of the pop-up.
- [iconForSize:](action/icon%28for_%29.md): Returns the action icon for the specified size.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Web extensions

- [WKWebExtension](../wkwebextension.md): An object that encapsulates a web extension’s resources that the manifest file defines.
- [WKWebExtensionTab](../wkwebextensiontab.md): A protocol with methods that represent a tab to web extensions.
- [WKWebExtensionWindow](../wkwebextensionwindow.md): A protocol with methods that represent a window to web extensions.
- [WKWebExtensionContext](../wkwebextensioncontext.md): An object that represents the runtime environment for a web extension.
- [WKWebExtensionController](../wkwebextensioncontroller.md): An object that manages a set of loaded extension contexts.
- [WKWebExtensionControllerDelegate](../wkwebextensioncontrollerdelegate.md): A group of methods you use to customize web extension interactions.
- [WKWebExtensionCommand](command.md): An object that encapsulates the properties for an individual web extension command.
- [WKWebExtensionMatchPattern](matchpattern.md): An object that represents a way to specify groups of URLs.
- [WKWebExtensionMessagePort](messageport.md): An object that manages message-based communication with a web extension.
- [WKWebExtensionDataRecord](datarecord.md): An object that represents a record of stored data for a specific web extension context.
- [WKWebExtensionTabConfiguration](tabconfiguration.md): An object that encapsulates configuration options for a tab in an extension.
- [WKWebExtensionWindowConfiguration](windowconfiguration.md): An object that encapsulates configuration options for a window in an extension.
- [WKWebExtensionControllerConfiguration](../wkwebextensioncontroller/configuration-swift.class.md): A [WKWebExtensionControllerConfiguration](../wkwebextensioncontroller/configuration-swift.class.md) object with which to initialize a web extension controller.
