> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/filedialogcustomizationid(_:)](https://developer.apple.com/documentation/swiftui/view/filedialogcustomizationid(_:))

# fileDialogCustomizationID(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

On macOS, configures the `fileExporter`, `fileImporter`, or `fileMover` to persist and restore the file dialog configuration.

## Declaration

```swift
nonisolated func fileDialogCustomizationID(_ id: String) -> some View

```

## Parameters

- `id`: An identifier of the configuration.

<a id="discussion"></a>

## Discussion

Among other parameters, it stores the current directory, view style (e.g., Icons, List, Columns), recent places, and expanded window size. It enables a refined user experience; for example, when importing an image, the user might switch to the Icons view, but the List view could be more convenient in another context. The file dialog stores these settings and applies them every time before presenting the panel. If not provided, on every launch, the file dialog uses the default configuration.

## See Also

### Configuring a file dialog

- [fileDialogBrowserOptions(\_:)](filedialogbrowseroptions%28__%29.md): On macOS, configures the `fileExporter`, `fileImporter`, or `fileMover` to provide a refined URL search experience: include or exclude hidden files, allow searching by tag, etc.
- [fileDialogConfirmationLabel(\_:)](filedialogconfirmationlabel%28__%29.md): On macOS, configures the `fileExporter`, `fileImporter`, or `fileMover` with a custom confirmation button label.
- [fileDialogDefaultDirectory(\_:)](filedialogdefaultdirectory%28__%29.md): Configures the `fileExporter`, `fileImporter`, or `fileMover` to open with the specified default directory.
- [fileDialogImportsUnresolvedAliases(\_:)](filedialogimportsunresolvedaliases%28__%29.md): On macOS, configures the `fileExporter`, `fileImporter`, or `fileMover` behavior when a user chooses an alias.
- [fileDialogMessage(\_:)](filedialogmessage%28__%29.md): On macOS, configures the `fileExporter`, `fileImporter`, or `fileMover` with a custom message that is presented to the user, similar to a title.
- [fileDialogURLEnabled(\_:)](filedialogurlenabled%28__%29.md): On macOS, configures the `fileImporter` or `fileMover` to conditionally disable presented URLs.
- [FileDialogBrowserOptions](../filedialogbrowseroptions.md): The way that file dialogs present the file system.
