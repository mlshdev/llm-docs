> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/alert(item:content:)](https://developer.apple.com/documentation/swiftui/view/alert(item:content:))

# alert(item:content:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Presents an alert to the user.

> Use [alert(\_:isPresented:presenting:actions:message:)](https://developer.apple.com/documentation/swiftui/view/alert%28_:ispresented:presenting:actions:message:%29-29bp4) instead.

## Declaration

```swift
nonisolated func alert<Item>(item: Binding<Item?>, content: (Item) -> Alert) -> some View where Item : Identifiable

```

## Parameters

- `item`: A binding to an optional source of truth for the alert. if `item` is non-`nil`, the system passes the contents to the modifier’s closure. You use this content to populate the fields of an alert that you create that the system displays to the user. If `item` changes, the system dismisses the currently displayed alert and replaces it with a new one using the same process.
- `content`: A closure returning the alert to present.

<a id="discussion"></a>

## Discussion

Use this method when you need to show an alert that contains information from a binding to an optional data source that you provide. The example below shows a custom data source `FileInfo` whose properties configure the alert’s `message` field:

```swift
struct FileInfo: Identifiable {
    var id: String { name }
    let name: String
    let fileType: UTType
}

struct ConfirmImportAlert: View {
    @State private var alertDetails: FileInfo?
    var body: some View {
        Button("Show Alert") {
            alertDetails = FileInfo(name: "MyImageFile.png",
                                    fileType: .png)
        }
        .alert(item: $alertDetails) { details in
            Alert(title: Text("Import Complete"),
                  message: Text("""
                    Imported \(details.name) \n File
                    type: \(details.fileType.description).
                    """),
                  dismissButton: .default(Text("Dismiss")))
        }
    }
}
```

![An alert showing information from a data source that describes the result of a file import process. The alert displays the name of the file imported, MyImageFile.png and its file type, the PNG image file format along with a default OK button for dismissing the alert.](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-View-AlertItemContent@2x.png)

## See Also

### View presentation modifiers

- [actionSheet(isPresented:content:)](actionsheet%28ispresented_content_%29.md): Deprecated. Presents an action sheet when a given condition is true.
- [actionSheet(item:content:)](actionsheet%28item_content_%29.md): Deprecated. Presents an action sheet using the given item as a data source for the sheet’s content.
- [alert(isPresented:content:)](alert%28ispresented_content_%29.md): Deprecated. Presents an alert to the user.
