> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/filemover(ispresented:files:oncompletion:oncancellation:)](https://developer.apple.com/documentation/swiftui/view/filemover(ispresented:files:oncompletion:oncancellation:))

# fileMover(isPresented:files:onCompletion:onCancellation:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Presents a system dialog for allowing the user to move a collection of existing files to a new location.

## Declaration

```swift
nonisolated func fileMover<C>(isPresented: Binding<Bool>, files: C, onCompletion: @escaping (Result<[URL], any Error>) -> Void, onCancellation: @escaping () -> Void) -> some View where C : Collection, C.Element == URL

```

## Parameters

- `isPresented`: A binding to whether the dialog should be shown.
- `files`: A collection of URLs for the files to be moved.
- `onCompletion`: A callback that will be invoked when the operation has succeeded or failed. The `result` indicates whether the operation succeeded or failed. To access the received URLs, call `startAccessingSecurityScopedResource`. When the access is no longer required, call `stopAccessingSecurityScopedResource`.
- `onCancellation`: A callback that will be invoked if the user cancels the operation.

<a id="discussion"></a>

## Discussion

> **Note**

> This dialog provides security-scoped URLs. Call the `startAccessingSecurityScopedResource` method to access or bookmark the URLs, and the `stopAccessingSecurityScopedResource` method to release the access.

For example, a button that allows the user to move files might look like this:

```swift
  struct MoveFilesButton: View {
      @Binding var files: [URL]
      @State private var showFileMover = false
      var onCompletion: (URL) -> Void
      var onCancellation: (() -> Void)?

      var body: some View {
          Button {
              showFileMover = true
          } label: {
              Label("Choose destination", systemImage: "folder.circle")
          }
          .fileMover(isPresented: $showFileMover, files: files) { result in
              switch result {
              case .success(let urls):
                  urls.forEach { url in
                      guard url.startAccessingSecurityScopedResource() else {
                          return
                      }
                      onCompletion(url)
                      url.stopAccessingSecurityScopedResource()
                  }
              case .failure(let error):
                  print(error)
                  // handle error
              }
          } onCancellation: {
              onCancellation?()
          }
      }
  }
```

To further configure the dialog’s appearance and behavior, use these view modifiers: [fileDialogDefaultDirectory(\_:)](filedialogdefaultdirectory%28__%29.md), [fileDialogConfirmationLabel(\_:)](filedialogconfirmationlabel%28__%29.md), [fileDialogMessage(\_:)](filedialogmessage%28__%29.md), [fileDialogBrowserOptions(\_:)](filedialogbrowseroptions%28__%29.md), [fileDialogURLEnabled(\_:)](filedialogurlenabled%28__%29.md), [fileDialogImportsUnresolvedAliases(\_:)](filedialogimportsunresolvedaliases%28__%29.md), and [fileDialogCustomizationID(\_:)](filedialogcustomizationid%28__%29.md).

## See Also

### Moving a file

- [fileMover(isPresented:file:onCompletion:)](filemover%28ispresented_file_oncompletion_%29.md): Presents a system dialog for allowing the user to move an existing file to a new location.
- [fileMover(isPresented:files:onCompletion:)](filemover%28ispresented_files_oncompletion_%29.md): Presents a system dialog for allowing the user to move a collection of existing files to a new location.
- [fileMover(isPresented:file:onCompletion:onCancellation:)](filemover%28ispresented_file_oncompletion_oncancellation_%29.md): Presents a system dialog for allowing the user to move an existing file to a new location.
