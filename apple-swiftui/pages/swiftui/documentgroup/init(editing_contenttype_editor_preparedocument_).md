> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/documentgroup/init(editing:contenttype:editor:preparedocument:)](https://developer.apple.com/documentation/swiftui/documentgroup/init(editing:contenttype:editor:preparedocument:))

# init(editing:contentType:editor:prepareDocument:)

**Framework:** SwiftData  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

Instantiates a document group for creating and editing documents that store a specific model type.

## Declaration

```swift
nonisolated init(editing modelType: any PersistentModel.Type, contentType: UTType, editor: @escaping () -> Content, prepareDocument: @escaping (ModelContext) -> Void = { _ in })
```

## Parameters

- `modelType`: The model type defining the schema used for each document.
- `contentType`: The content type of the document. It should conform to `UTType.package`.
- `editor`: The editing UI for the provided document.
- `prepareDocument`: The optional closure that accepts `ModelContext` associated with the new document. Use this closure to set the document’s initial contents before it is displayed: insert preconfigured models in the provided `ModelContext`.

<a id="discussion"></a>

## Discussion

```swift
 @main
 struct Todo: App {
     var body: some Scene {
         DocumentGroup(editing: TodoItem.self, contentType: .todoItem) {
             ContentView()
         }
     }
 }

 struct ContentView: View {
     @Query var items: [TodoItem]

         var body: some View {
             List {
                 ForEach(items) { item in
                     @Bindable var item = item
                     Toggle(item.text, isOn: $item.isDone)
                 }
              }
         }
 }

 @Model
 final class TodoItem {
     var created: Date
     var text: String
     var isDone = false
 }

 extension UTType {
     static var todoItem = UTType(exportedAs: "com.myApp.todoItem")
 }
```

> **Important**

> If your app declares custom uniform type identifiers, include corresponding entries in the app’s `Info.plist`. For more information, see [Defining file and data types for your app](https://developer.apple.com/documentation/uniformtypeidentifiers/defining-file-and-data-types-for-your-app). Also, remember to specify the supported Document types in the Info.plist as well.

## See Also

### Editing a document backed by a persistent store

- [init(editing:migrationPlan:editor:prepareDocument:)](init%28editing_migrationplan_editor_preparedocument_%29.md): Conforms when `Document` is `ModelDocument` and `Content` conforms to `View`. Instantiates a document group for creating and editing documents described by the last `Schema` in the migration plan.
