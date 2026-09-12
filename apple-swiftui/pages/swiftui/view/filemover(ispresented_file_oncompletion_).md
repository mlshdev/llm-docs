> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/filemover(ispresented:file:oncompletion:)](https://developer.apple.com/documentation/swiftui/view/filemover(ispresented:file:oncompletion:))

# fileMover(isPresented:file:onCompletion:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Presents a system dialog for allowing the user to move an existing file to a new location.

## Declaration

```swift
nonisolated func fileMover(isPresented: Binding<Bool>, file: URL?, onCompletion: @escaping (Result<URL, any Error>) -> Void) -> some View

```

## Parameters

- `isPresented`: A binding to whether the dialog should be shown.
- `file`: The `URL` of the file to be moved.
- `onCompletion`: A callback that will be invoked when the operation has has succeeded or failed. To access the received URLs, call `startAccessingSecurityScopedResource`. When the access is no longer required, call `stopAccessingSecurityScopedResource`.

  - **result**: A `Result` indicating whether the operation succeeded or failed.

<a id="discussion"></a>

## Discussion

> **Note**

> This dialog provides security-scoped URLs. Call the `startAccessingSecurityScopedResource` method to access or bookmark the URLs, and the `stopAccessingSecurityScopedResource` method to release the access.

In order for the dialog to appear, both `isPresented` must be `true` and `file` must not be `nil`. When the operation is finished, `isPresented` will be set to `false` before `onCompletion` is called. If the user cancels the operation, `isPresented` will be set to `false` and `onCompletion` will not be called.

To further configure the dialog’s appearance and behavior, use these view modifiers: [fileDialogDefaultDirectory(\_:)](filedialogdefaultdirectory%28__%29.md), [fileDialogConfirmationLabel(\_:)](filedialogconfirmationlabel%28__%29.md), [fileDialogMessage(\_:)](filedialogmessage%28__%29.md), [fileDialogBrowserOptions(\_:)](filedialogbrowseroptions%28__%29.md), [fileDialogURLEnabled(\_:)](filedialogurlenabled%28__%29.md), [fileDialogImportsUnresolvedAliases(\_:)](filedialogimportsunresolvedaliases%28__%29.md), and [fileDialogCustomizationID(\_:)](filedialogcustomizationid%28__%29.md).

## See Also

### Moving a file

- [fileMover(isPresented:files:onCompletion:)](filemover%28ispresented_files_oncompletion_%29.md): Presents a system dialog for allowing the user to move a collection of existing files to a new location.
- [fileMover(isPresented:file:onCompletion:onCancellation:)](filemover%28ispresented_file_oncompletion_oncancellation_%29.md): Presents a system dialog for allowing the user to move an existing file to a new location.
- [fileMover(isPresented:files:onCompletion:onCancellation:)](filemover%28ispresented_files_oncompletion_oncancellation_%29.md): Presents a system dialog for allowing the user to move a collection of existing files to a new location.
