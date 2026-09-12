> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/fileimporter(ispresented:allowedcontenttypes:oncompletion:)](https://developer.apple.com/documentation/swiftui/view/fileimporter(ispresented:allowedcontenttypes:oncompletion:))

# fileImporter(isPresented:allowedContentTypes:onCompletion:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Presents a system dialog for allowing the user to import an existing file.

## Declaration

```swift
nonisolated func fileImporter(isPresented: Binding<Bool>, allowedContentTypes: [UTType], onCompletion: @escaping (Result<URL, any Error>) -> Void) -> some View

```

## Parameters

- `isPresented`: A binding to whether the dialog should be shown.
- `allowedContentTypes`: The list of supported content types which can be imported.
- `onCompletion`: A callback that will be invoked when the operation has succeeded or failed. To access the received URLs, call `startAccessingSecurityScopedResource`. When the access is no longer required, call `stopAccessingSecurityScopedResource`.

  - **result**: A `Result` indicating whether the operation succeeded or failed.

<a id="discussion"></a>

## Discussion

In order for the dialog to appear, `isPresented` must be `true`. When the operation is finished, `isPresented` will be set to `false` before `onCompletion` is called. If the user cancels the operation, `isPresented` will be set to `false` and `onCompletion` will not be called.

> **Note**

> This dialog provides security-scoped URLs. Call the `startAccessingSecurityScopedResource` method to access or bookmark the URLs, and the `stopAccessingSecurityScopedResource` method to release the access.

For example, an application can have a button that allows the user to choose the default directory with document templates loaded on every launch. Such a button might look like this:

```swift
 struct PickTemplatesDirectoryButton: View {
     @State private var showFileImporter = false
     var onTemplatesDirectoryPicked: (URL) -> Void

     var body: some View {
         Button {
             showFileImporter = true
         } label: {
             Label("Choose templates directory", systemImage: "folder.circle")
         }
         .fileImporter(
             isPresented: $showFileImporter,
             allowedContentTypes: [.directory]
         ) { result in
              switch result {
              case .success(let directory):
                  // gain access to the directory
                  let gotAccess = directory.startAccessingSecurityScopedResource()
                  if !gotAccess { return }
                  // access the directory URL
                  // (read templates in the directory, make a bookmark, etc.)
                  onTemplatesDirectoryPicked(directory)
                  // release access
                  directory.stopAccessingSecurityScopedResource()
              case .failure(let error):
                  // handle error
                  print(error)
              }
         }
     }
 }
```

> **Note**

> Changing `allowedContentTypes` while the file importer is presented will have no immediate effect, however will apply the next time it is presented.

To further configure the dialog’s appearance and behavior, use these view modifiers: [fileDialogDefaultDirectory(\_:)](filedialogdefaultdirectory%28__%29.md), [fileDialogConfirmationLabel(\_:)](filedialogconfirmationlabel%28__%29.md), [fileDialogMessage(\_:)](filedialogmessage%28__%29.md), [fileDialogBrowserOptions(\_:)](filedialogbrowseroptions%28__%29.md), [fileDialogURLEnabled(\_:)](filedialogurlenabled%28__%29.md), [fileDialogImportsUnresolvedAliases(\_:)](filedialogimportsunresolvedaliases%28__%29.md), and [fileDialogCustomizationID(\_:)](filedialogcustomizationid%28__%29.md).

## See Also

### Importing from file

- [fileImporter(isPresented:allowedContentTypes:allowsMultipleSelection:onCompletion:)](fileimporter%28ispresented_allowedcontenttypes_allowsmultipleselection_oncompletion_%29.md): Presents a system dialog for allowing the user to import multiple files.
- [fileImporter(isPresented:allowedContentTypes:allowsMultipleSelection:onCompletion:onCancellation:)](fileimporter%28ispresented_allowedcontenttypes_allowsmultipleselection_oncompletion_oncancellation_%29.md): Presents a system dialog for allowing the user to import multiple files.
