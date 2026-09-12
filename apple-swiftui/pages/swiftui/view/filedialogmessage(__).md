> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/filedialogmessage(_:)](https://developer.apple.com/documentation/swiftui/view/filedialogmessage(_:))

# fileDialogMessage(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

On macOS, configures the `fileExporter`, `fileImporter`, or `fileMover` with a custom message that is presented to the user, similar to a title.

## Declaration

```swift
@export(implementation) nonisolated func fileDialogMessage(_ messageResource: LocalizedStringResource) -> some View

```

## Parameters

- `messageResource`: The localized string resource to display.

## See Also

### Configuring a file dialog

- [fileDialogBrowserOptions(\_:)](filedialogbrowseroptions%28__%29.md): On macOS, configures the `fileExporter`, `fileImporter`, or `fileMover` to provide a refined URL search experience: include or exclude hidden files, allow searching by tag, etc.
- [fileDialogConfirmationLabel(\_:)](filedialogconfirmationlabel%28__%29.md): On macOS, configures the `fileExporter`, `fileImporter`, or `fileMover` with a custom confirmation button label.
- [fileDialogCustomizationID(\_:)](filedialogcustomizationid%28__%29.md): On macOS, configures the `fileExporter`, `fileImporter`, or `fileMover` to persist and restore the file dialog configuration.
- [fileDialogDefaultDirectory(\_:)](filedialogdefaultdirectory%28__%29.md): Configures the `fileExporter`, `fileImporter`, or `fileMover` to open with the specified default directory.
- [fileDialogImportsUnresolvedAliases(\_:)](filedialogimportsunresolvedaliases%28__%29.md): On macOS, configures the `fileExporter`, `fileImporter`, or `fileMover` behavior when a user chooses an alias.
- [fileDialogURLEnabled(\_:)](filedialogurlenabled%28__%29.md): On macOS, configures the `fileImporter` or `fileMover` to conditionally disable presented URLs.
- [FileDialogBrowserOptions](../filedialogbrowseroptions.md): The way that file dialogs present the file system.
