> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/tabconfiguration](https://developer.apple.com/documentation/webkit/wkwebextension/tabconfiguration)

# WKWebExtension.TabConfiguration (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

An object that encapsulates configuration options for a tab in an extension.

## Declaration

```swift
@MainActor class TabConfiguration
```

<a id="overview"></a>

## Overview

This class holds various options that influence the behavior and initial state of a tab.

The app retains the discretion to disregard any or all of these options, or even opt not to create a tab.

## Topics

### Instance Properties

- [index](tabconfiguration/index.md): Indicates the position where the tab should be opened within the window.
- [parentTab](tabconfiguration/parenttab.md): Indicates the parent tab with which the tab should be related.
- [shouldAddToSelection](tabconfiguration/shouldaddtoselection.md): Indicates whether the tab should be added to the current tab selection.
- [shouldBeActive](tabconfiguration/shouldbeactive.md): Indicates whether the tab should be the active tab.
- [shouldBeMuted](tabconfiguration/shouldbemuted.md): Indicates whether the tab should be muted.
- [shouldBePinned](tabconfiguration/shouldbepinned.md): Indicates whether the tab should be pinned.
- [shouldReaderModeBeActive](tabconfiguration/shouldreadermodebeactive.md): Indicates whether reader mode in the tab should be active.
- [url](tabconfiguration/url.md): Indicates the initial URL for the tab.
- [window](tabconfiguration/window.md): Indicates the window where the tab should be opened.

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
- [WKWebExtension.Action](action.md): An object that encapsulates the properties for an individual web extension action.
- [WKWebExtension.Command](command.md): An object that encapsulates the properties for an individual web extension command.
- [WKWebExtension.MatchPattern](matchpattern.md): An object that represents a way to specify groups of URLs.
- [WKWebExtension.MessagePort](messageport.md): An object that manages message-based communication with a web extension.
- [WKWebExtension.DataRecord](datarecord.md): An object that represents a record of stored data for a specific web extension context.
- [WKWebExtension.WindowConfiguration](windowconfiguration.md): An object that encapsulates configuration options for a window in an extension.
- [WKWebExtensionController.Configuration](../wkwebextensioncontroller/configuration-swift.class.md): A [WKWebExtensionController.Configuration](../wkwebextensioncontroller/configuration-swift.class.md) object with which to initialize a web extension controller.

# WKWebExtensionTabConfiguration (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

An object that encapsulates configuration options for a tab in an extension.

## Declaration

```objectivec
@interface WKWebExtensionTabConfiguration : NSObject
```

<a id="overview"></a>

## Overview

This class holds various options that influence the behavior and initial state of a tab.

The app retains the discretion to disregard any or all of these options, or even opt not to create a tab.

## Topics

### Instance Properties

- [index](tabconfiguration/index.md): Indicates the position where the tab should be opened within the window.
- [parentTab](tabconfiguration/parenttab.md): Indicates the parent tab with which the tab should be related.
- [shouldAddToSelection](tabconfiguration/shouldaddtoselection.md): Indicates whether the tab should be added to the current tab selection.
- [shouldBeActive](tabconfiguration/shouldbeactive.md): Indicates whether the tab should be the active tab.
- [shouldBeMuted](tabconfiguration/shouldbemuted.md): Indicates whether the tab should be muted.
- [shouldBePinned](tabconfiguration/shouldbepinned.md): Indicates whether the tab should be pinned.
- [shouldReaderModeBeActive](tabconfiguration/shouldreadermodebeactive.md): Indicates whether reader mode in the tab should be active.
- [url](tabconfiguration/url.md): Indicates the initial URL for the tab.
- [window](tabconfiguration/window.md): Indicates the window where the tab should be opened.

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
- [WKWebExtensionAction](action.md): An object that encapsulates the properties for an individual web extension action.
- [WKWebExtensionCommand](command.md): An object that encapsulates the properties for an individual web extension command.
- [WKWebExtensionMatchPattern](matchpattern.md): An object that represents a way to specify groups of URLs.
- [WKWebExtensionMessagePort](messageport.md): An object that manages message-based communication with a web extension.
- [WKWebExtensionDataRecord](datarecord.md): An object that represents a record of stored data for a specific web extension context.
- [WKWebExtensionWindowConfiguration](windowconfiguration.md): An object that encapsulates configuration options for a window in an extension.
- [WKWebExtensionControllerConfiguration](../wkwebextensioncontroller/configuration-swift.class.md): A [WKWebExtensionControllerConfiguration](../wkwebextensioncontroller/configuration-swift.class.md) object with which to initialize a web extension controller.
