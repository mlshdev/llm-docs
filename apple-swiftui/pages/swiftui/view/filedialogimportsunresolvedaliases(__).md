> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/filedialogimportsunresolvedaliases(_:)](https://developer.apple.com/documentation/swiftui/view/filedialogimportsunresolvedaliases(_:))

# fileDialogImportsUnresolvedAliases(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

On macOS, configures the `fileExporter`, `fileImporter`, or `fileMover` behavior when a user chooses an alias.

## Declaration

```swift
nonisolated func fileDialogImportsUnresolvedAliases(_ imports: Bool) -> some View

```

## Parameters

- `imports`: A Boolean value that indicates if the application receives unresolved or resolved URLs when a user chooses aliases.

<a id="discussion"></a>

## Discussion

By default, file dialogs resolve aliases and provide the URL of the item referred to by the chosen alias. This modifier allows control of this behavior: pass `true` if the application doesn’t want file dialog to resolve aliases.

## See Also

### Configuring a file dialog

- [fileDialogBrowserOptions(\_:)](filedialogbrowseroptions%28__%29.md): On macOS, configures the `fileExporter`, `fileImporter`, or `fileMover` to provide a refined URL search experience: include or exclude hidden files, allow searching by tag, etc.
- [fileDialogConfirmationLabel(\_:)](filedialogconfirmationlabel%28__%29.md): On macOS, configures the `fileExporter`, `fileImporter`, or `fileMover` with a custom confirmation button label.
- [fileDialogCustomizationID(\_:)](filedialogcustomizationid%28__%29.md): On macOS, configures the `fileExporter`, `fileImporter`, or `fileMover` to persist and restore the file dialog configuration.
- [fileDialogDefaultDirectory(\_:)](filedialogdefaultdirectory%28__%29.md): Configures the `fileExporter`, `fileImporter`, or `fileMover` to open with the specified default directory.
- [fileDialogMessage(\_:)](filedialogmessage%28__%29.md): On macOS, configures the `fileExporter`, `fileImporter`, or `fileMover` with a custom message that is presented to the user, similar to a title.
- [fileDialogURLEnabled(\_:)](filedialogurlenabled%28__%29.md): On macOS, configures the `fileImporter` or `fileMover` to conditionally disable presented URLs.
- [FileDialogBrowserOptions](../filedialogbrowseroptions.md): The way that file dialogs present the file system.
