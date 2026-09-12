> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssavepanel](https://developer.apple.com/documentation/appkit/nssavepanel)

# NSSavePanel (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A panel that prompts the user for information about where to save a file.

## Declaration

```swift
@MainActor class NSSavePanel
```

<a id="overview"></a>

## Overview

The Save panel provides an interface for specifying the location to save a file and the name of that file. You present this panel when the user attempts to save a new document, or when the user saves a copy of an existing document to a new location. The panel includes UI for browsing the file system, selecting a directory, and specifying the new name for the file. You can also add custom UI for your app using an accessory view.

An [NSSavePanel](nssavepanel.md) object reports user interactions to its associated [delegate](nssavepanel/delegate.md) object, which must adopt the [NSOpenSavePanelDelegate](nsopensavepaneldelegate.md) protocol. Use your delegate object to validate the user’s selection and respond to user interactions with the panel.

In macOS 10.15, the system always displays the Save dialog in a separate process, regardless of whether the app is sandboxed. When the user saves the document, macOS adds the saved file to the app’s sandbox (if necessary) so that the app can write to the file. Prior to macOS 10.15, the system used a separate process only for sandboxed apps.

## Topics

### Responding to User Interactions

- [delegate](nssavepanel/delegate.md): A custom object you use to manage interactions with an open or save panel.
- [NSOpenSavePanelDelegate](nsopensavepaneldelegate.md): A set of methods for managing interactions with an open or save panel.

### Showing the Panel

- [beginSheetModal(for:completionHandler:)](nssavepanel/beginsheetmodal%28for_completionhandler_%29.md): Presents the panel as a sheet modal to the specified window.
- [begin(completionHandler:)](nssavepanel/begin%28completionhandler_%29.md): Presents the panel as a modeless window.
- [runModal()](nssavepanel/runmodal%28%29.md): Displays the panel and begins its event loop with the current working (or last-selected) directory as the default starting point.
- [validateVisibleColumns()](nssavepanel/validatevisiblecolumns%28%29.md): Validates and reloads the browser columns visible in the panel.

### Getting the Selected Item

- [url](nssavepanel/url.md): A URL that contains the fully specified location of the targeted file.

### Configuring the Panel’s Appearance

- [title](nssavepanel/title.md): The title of the panel.
- [prompt](nssavepanel/prompt.md): The text to display in the default button.
- [message](nssavepanel/message.md): The message text displayed in the panel.
- [nameFieldLabel](nssavepanel/namefieldlabel.md): The label text displayed in front of the filename text field.
- [nameFieldStringValue](nssavepanel/namefieldstringvalue.md): The user-editable filename currently shown in the name field.
- [directoryURL](nssavepanel/directoryurl.md): The current directory shown in the panel.
- [accessoryView](nssavepanel/accessoryview.md): The custom accessory view for the current app.
- [showsTagField](nssavepanel/showstagfield.md): A Boolean value that indicates whether the panel displays the Tags field.
- [tagNames](nssavepanel/tagnames.md): The tag names that you want to include on a saved file.

### Configuring the Panel’s Behavior

- [canCreateDirectories](nssavepanel/cancreatedirectories.md): A Boolean value that indicates whether the panel displays UI for creating directories.
- [canSelectHiddenExtension](nssavepanel/canselecthiddenextension.md): A Boolean value that indicates whether the panel displays UI for hiding or showing filename extensions.
- [showsHiddenFiles](nssavepanel/showshiddenfiles.md): A Boolean value that indicates whether the panel displays files that are normally hidden from the user.
- [isExtensionHidden](nssavepanel/isextensionhidden.md): A Boolean value that indicates whether to display filename extensions.
- [isExpanded](nssavepanel/isexpanded.md): A Boolean value that indicates whether whether the panel is expanded.
- [Button tags](button-tags.md): Button tags that refer to items on the panel.

### Configuring the File Types

- [allowedContentTypes](nssavepanel/allowedcontenttypes.md): An array of types that specify the files types to which you can save.
- [allowsOtherFileTypes](nssavepanel/allowsotherfiletypes.md): A Boolean value that indicates whether the panel allows the user to save files with a filename extension that’s not in the list of allowed types.
- [treatsFilePackagesAsDirectories](nssavepanel/treatsfilepackagesasdirectories.md): A Boolean value that indicates whether the panel displays file packages as directories.

### Handling Actions

- [ok(\_:)](nssavepanel/ok%28__%29.md): The action method that the panel calls when the user clicks the OK button.
- [cancel(\_:)](nssavepanel/cancel%28__%29.md): The action method that the panel calls when the user clicks the Cancel button.

### Deprecated

Avoid using deprecated classes and protocols in your apps.

- [Deprecated Symbols](nssavepanel-deprecated-symbols.md): Review unsupported symbols and their replacements.

### Instance Properties

- [identifier](nssavepanel/identifier.md): Sets and returns the identifier.
- [currentContentType](nssavepanel/currentcontenttype.md): `NSSavePanel`:The current type. If set to `nil`, resets to the first allowed content type. Returns `nil` if `allowedContentTypes` is empty. `NSOpenPanel`: Not used.
- [showsContentTypes](nssavepanel/showscontenttypes.md): Whether or not to show a popup list for selecting the type of the saved file.

## Relationships

### Inherits From

- [NSPanel](nspanel.md)

### Inherited By

- [NSOpenPanel](nsopenpanel.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityProtocol](nsaccessibilityprotocol.md)
- [NSAnimatablePropertyContainer](nsanimatablepropertycontainer.md)
- [NSAppearanceCustomization](nsappearancecustomization.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSMenuItemValidation](nsmenuitemvalidation.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](nsstandardkeybindingresponding.md)
- [NSTouchBarProvider](nstouchbarprovider.md)
- [NSUserActivityRestoring](nsuseractivityrestoring.md)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [NSUserInterfaceValidations](nsuserinterfacevalidations.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Open and Save Panels

- [NSOpenPanel](nsopenpanel.md): A panel that prompts the user to select a file to open.
- [NSOpenSavePanelDelegate](nsopensavepaneldelegate.md): A set of methods for managing interactions with an open or save panel.

# NSSavePanel (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A panel that prompts the user for information about where to save a file.

## Declaration

```objectivec
@interface NSSavePanel : NSPanel
```

<a id="overview"></a>

## Overview

The Save panel provides an interface for specifying the location to save a file and the name of that file. You present this panel when the user attempts to save a new document, or when the user saves a copy of an existing document to a new location. The panel includes UI for browsing the file system, selecting a directory, and specifying the new name for the file. You can also add custom UI for your app using an accessory view.

An [NSSavePanel](nssavepanel.md) object reports user interactions to its associated [delegate](nssavepanel/delegate.md) object, which must adopt the [NSOpenSavePanelDelegate](nsopensavepaneldelegate.md) protocol. Use your delegate object to validate the user’s selection and respond to user interactions with the panel.

In macOS 10.15, the system always displays the Save dialog in a separate process, regardless of whether the app is sandboxed. When the user saves the document, macOS adds the saved file to the app’s sandbox (if necessary) so that the app can write to the file. Prior to macOS 10.15, the system used a separate process only for sandboxed apps.

## Topics

### Creating a Save Panel

- [savePanel](nssavepanel/savepanel.md): Creates a new Save panel and initializes it with default information.

### Responding to User Interactions

- [delegate](nssavepanel/delegate.md): A custom object you use to manage interactions with an open or save panel.
- [NSOpenSavePanelDelegate](nsopensavepaneldelegate.md): A set of methods for managing interactions with an open or save panel.

### Showing the Panel

- [beginSheetModalForWindow:completionHandler:](nssavepanel/beginsheetmodal%28for_completionhandler_%29.md): Presents the panel as a sheet modal to the specified window.
- [beginWithCompletionHandler:](nssavepanel/begin%28completionhandler_%29.md): Presents the panel as a modeless window.
- [runModal](nssavepanel/runmodal%28%29.md): Displays the panel and begins its event loop with the current working (or last-selected) directory as the default starting point.
- [validateVisibleColumns](nssavepanel/validatevisiblecolumns%28%29.md): Validates and reloads the browser columns visible in the panel.

### Getting the Selected Item

- [URL](nssavepanel/url.md): A URL that contains the fully specified location of the targeted file.

### Configuring the Panel’s Appearance

- [title](nssavepanel/title.md): The title of the panel.
- [prompt](nssavepanel/prompt.md): The text to display in the default button.
- [message](nssavepanel/message.md): The message text displayed in the panel.
- [nameFieldLabel](nssavepanel/namefieldlabel.md): The label text displayed in front of the filename text field.
- [nameFieldStringValue](nssavepanel/namefieldstringvalue.md): The user-editable filename currently shown in the name field.
- [directoryURL](nssavepanel/directoryurl.md): The current directory shown in the panel.
- [accessoryView](nssavepanel/accessoryview.md): The custom accessory view for the current app.
- [showsTagField](nssavepanel/showstagfield.md): A Boolean value that indicates whether the panel displays the Tags field.
- [tagNames](nssavepanel/tagnames.md): The tag names that you want to include on a saved file.

### Configuring the Panel’s Behavior

- [canCreateDirectories](nssavepanel/cancreatedirectories.md): A Boolean value that indicates whether the panel displays UI for creating directories.
- [canSelectHiddenExtension](nssavepanel/canselecthiddenextension.md): A Boolean value that indicates whether the panel displays UI for hiding or showing filename extensions.
- [showsHiddenFiles](nssavepanel/showshiddenfiles.md): A Boolean value that indicates whether the panel displays files that are normally hidden from the user.
- [extensionHidden](nssavepanel/isextensionhidden.md): A Boolean value that indicates whether to display filename extensions.
- [expanded](nssavepanel/isexpanded.md): A Boolean value that indicates whether whether the panel is expanded.
- [Button tags](button-tags.md): Button tags that refer to items on the panel.

### Configuring the File Types

- [allowedContentTypes](nssavepanel/allowedcontenttypes.md): An array of types that specify the files types to which you can save.
- [allowsOtherFileTypes](nssavepanel/allowsotherfiletypes.md): A Boolean value that indicates whether the panel allows the user to save files with a filename extension that’s not in the list of allowed types.
- [treatsFilePackagesAsDirectories](nssavepanel/treatsfilepackagesasdirectories.md): A Boolean value that indicates whether the panel displays file packages as directories.

### Handling Actions

- [ok:](nssavepanel/ok%28__%29.md): The action method that the panel calls when the user clicks the OK button.
- [cancel:](nssavepanel/cancel%28__%29.md): The action method that the panel calls when the user clicks the Cancel button.

### Deprecated

Avoid using deprecated classes and protocols in your apps.

- [Deprecated Symbols](nssavepanel-deprecated-symbols.md): Review unsupported symbols and their replacements.

### Instance Properties

- [identifier](nssavepanel/identifier.md): Sets and returns the identifier.
- [currentContentType](nssavepanel/currentcontenttype.md): `NSSavePanel`:The current type. If set to `nil`, resets to the first allowed content type. Returns `nil` if `allowedContentTypes` is empty. `NSOpenPanel`: Not used.
- [showsContentTypes](nssavepanel/showscontenttypes.md): Whether or not to show a popup list for selecting the type of the saved file.

## Relationships

### Inherits From

- [NSPanel](nspanel.md)

### Inherited By

- [NSOpenPanel](nsopenpanel.md)

## See Also

### Open and Save Panels

- [NSOpenPanel](nsopenpanel.md): A panel that prompts the user to select a file to open.
- [NSOpenSavePanelDelegate](nsopensavepaneldelegate.md): A set of methods for managing interactions with an open or save panel.
