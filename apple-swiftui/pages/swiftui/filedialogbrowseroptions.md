> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/filedialogbrowseroptions](https://developer.apple.com/documentation/swiftui/filedialogbrowseroptions)

# FileDialogBrowserOptions

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

The way that file dialogs present the file system.

## Declaration

```swift
struct FileDialogBrowserOptions
```

<a id="overview"></a>

## Overview

Apply the options using the [fileDialogBrowserOptions(\_:)](view/filedialogbrowseroptions%28__%29.md) modifier.

## Topics

### Getting browser options

- [displayFileExtensions](filedialogbrowseroptions/displayfileextensions.md): On iOS, configures the `fileExporter`, `fileImporter`, or `fileMover` to show or hide file extensions. Default behavior is to hide them. On macOS, this option has no effect.
- [enumeratePackages](filedialogbrowseroptions/enumeratepackages.md): Allows enumerating packages contents in contrast to the default behavior when packages are represented flatly, similar to files.
- [includeHiddenFiles](filedialogbrowseroptions/includehiddenfiles.md): Displays the files that are hidden by default.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Configuring a file dialog

- [fileDialogBrowserOptions(\_:)](view/filedialogbrowseroptions%28__%29.md): On macOS, configures the `fileExporter`, `fileImporter`, or `fileMover` to provide a refined URL search experience: include or exclude hidden files, allow searching by tag, etc.
- [fileDialogConfirmationLabel(\_:)](view/filedialogconfirmationlabel%28__%29.md): On macOS, configures the `fileExporter`, `fileImporter`, or `fileMover` with a custom confirmation button label.
- [fileDialogCustomizationID(\_:)](view/filedialogcustomizationid%28__%29.md): On macOS, configures the `fileExporter`, `fileImporter`, or `fileMover` to persist and restore the file dialog configuration.
- [fileDialogDefaultDirectory(\_:)](view/filedialogdefaultdirectory%28__%29.md): Configures the `fileExporter`, `fileImporter`, or `fileMover` to open with the specified default directory.
- [fileDialogImportsUnresolvedAliases(\_:)](view/filedialogimportsunresolvedaliases%28__%29.md): On macOS, configures the `fileExporter`, `fileImporter`, or `fileMover` behavior when a user chooses an alias.
- [fileDialogMessage(\_:)](view/filedialogmessage%28__%29.md): On macOS, configures the `fileExporter`, `fileImporter`, or `fileMover` with a custom message that is presented to the user, similar to a title.
- [fileDialogURLEnabled(\_:)](view/filedialogurlenabled%28__%29.md): On macOS, configures the `fileImporter` or `fileMover` to conditionally disable presented URLs.
