> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenpanel](https://developer.apple.com/documentation/appkit/nsopenpanel)

# NSOpenPanel (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A panel that prompts the user to select a file to open.

## Declaration

```swift
class NSOpenPanel
```

<a id="overview"></a>

## Overview

Apps use the Open panel as a convenient way to query the user for the name of a file to open. In macOS 10.15 and later, the system always draws Open panels in a separate process, regardless of whether the app is sandboxed. When the user chooses a file to open, macOS adds that file to the app’s sandbox. Prior to macOS 10.15, the system drew the panels in a separate process only for sandboxed apps.

## Topics

### Configuring the Open Panel

- [canChooseFiles](nsopenpanel/canchoosefiles.md): A Boolean that indicates whether the user can choose files in the panel.
- [canChooseDirectories](nsopenpanel/canchoosedirectories.md): A Boolean that indicates whether the user can choose directories in the panel.
- [resolvesAliases](nsopenpanel/resolvesaliases.md): A Boolean that indicates whether the panel resolves aliases.
- [allowsMultipleSelection](nsopenpanel/allowsmultipleselection.md): A Boolean that indicates whether the user may select multiple files and directories.
- [isAccessoryViewDisclosed](nsopenpanel/isaccessoryviewdisclosed.md): A Boolean value that indicates whether the panel’s accessory view is visible.

### Accessing User Selection

- [urls](nsopenpanel/urls.md): An array of URLs, each of which contains the fully specified location of a selected file or directory.

### Supporting iCloud Documents

- [canDownloadUbiquitousContents](nsopenpanel/candownloadubiquitouscontents.md): A Boolean value that indicates how the panel responds to iCloud documents that aren’t fully downloaded locally.
- [canResolveUbiquitousConflicts](nsopenpanel/canresolveubiquitousconflicts.md): A Boolean value that indicates how the panel responds to iCloud documents that have conflicting versions.

### Deprecated

Avoid using deprecated classes and protocols in your apps.

- [Deprecated Symbols](nsopenpanel-deprecated-symbols.md): Review symbols that are no longer supported, and find the replacements to use instead.

## Relationships

### Inherits From

- [NSSavePanel](nssavepanel.md)

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

- [NSSavePanel](nssavepanel.md): A panel that prompts the user for information about where to save a file.
- [NSOpenSavePanelDelegate](nsopensavepaneldelegate.md): A set of methods for managing interactions with an open or save panel.

# NSOpenPanel (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A panel that prompts the user to select a file to open.

## Declaration

```objectivec
@interface NSOpenPanel : NSSavePanel
```

<a id="overview"></a>

## Overview

Apps use the Open panel as a convenient way to query the user for the name of a file to open. In macOS 10.15 and later, the system always draws Open panels in a separate process, regardless of whether the app is sandboxed. When the user chooses a file to open, macOS adds that file to the app’s sandbox. Prior to macOS 10.15, the system drew the panels in a separate process only for sandboxed apps.

## Topics

### Creating an Open Panel

- [openPanel](nsopenpanel/openpanel.md): Creates a new Open panel and initializes it with a default configuration.

### Configuring the Open Panel

- [canChooseFiles](nsopenpanel/canchoosefiles.md): A Boolean that indicates whether the user can choose files in the panel.
- [canChooseDirectories](nsopenpanel/canchoosedirectories.md): A Boolean that indicates whether the user can choose directories in the panel.
- [resolvesAliases](nsopenpanel/resolvesaliases.md): A Boolean that indicates whether the panel resolves aliases.
- [allowsMultipleSelection](nsopenpanel/allowsmultipleselection.md): A Boolean that indicates whether the user may select multiple files and directories.
- [accessoryViewDisclosed](nsopenpanel/isaccessoryviewdisclosed.md): A Boolean value that indicates whether the panel’s accessory view is visible.

### Accessing User Selection

- [URLs](nsopenpanel/urls.md): An array of URLs, each of which contains the fully specified location of a selected file or directory.

### Supporting iCloud Documents

- [canDownloadUbiquitousContents](nsopenpanel/candownloadubiquitouscontents.md): A Boolean value that indicates how the panel responds to iCloud documents that aren’t fully downloaded locally.
- [canResolveUbiquitousConflicts](nsopenpanel/canresolveubiquitousconflicts.md): A Boolean value that indicates how the panel responds to iCloud documents that have conflicting versions.

### Deprecated

Avoid using deprecated classes and protocols in your apps.

- [Deprecated Symbols](nsopenpanel-deprecated-symbols.md): Review symbols that are no longer supported, and find the replacements to use instead.

## Relationships

### Inherits From

- [NSSavePanel](nssavepanel.md)

## See Also

### Open and Save Panels

- [NSSavePanel](nssavepanel.md): A panel that prompts the user for information about where to save a file.
- [NSOpenSavePanelDelegate](nsopensavepaneldelegate.md): A set of methods for managing interactions with an open or save panel.
