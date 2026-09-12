> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/documentgroup/init(viewing:contenttype:viewer:)](https://developer.apple.com/documentation/swiftui/documentgroup/init(viewing:contenttype:viewer:))

# init(viewing:contentType:viewer:)

**Framework:** SwiftData  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

Instantiates a document group for viewing documents that store a specific model type.

## Declaration

```swift
nonisolated init(viewing modelType: any PersistentModel.Type, contentType: UTType, viewer: @escaping () -> Content)
```

## Parameters

- `modelType`: The model type defining the schema used for each document.
- `contentType`: The content type of document your app can view. It should conform to `UTType.package`.
- `viewer`: The viewing UI for the provided document.

<a id="discussion"></a>

## Discussion

```swift
 @main
 struct Todo: App {
     var body: some Scene {
         DocumentGroup(viewing: TodoItem.self, contentType: .todoItem) {
             ContentView()
         }
     }
 }

 extension UTType {
     static var todoItem = UTType(exportedAs: "com.myApp.todoItem")
 }
```

> **Important**

> If your app declares custom uniform type identifiers, include corresponding entries in the app’s `Info.plist`. For more information, see [Defining file and data types for your app](https://developer.apple.com/documentation/uniformtypeidentifiers/defining-file-and-data-types-for-your-app). Also, remember to specify the supported Document types in the `Info.plist` as well.

## See Also

### Viewing a document backed by a persistent store

- [init(viewing:migrationPlan:viewer:)](init%28viewing_migrationplan_viewer_%29.md): Conforms when `Document` is `ModelDocument` and `Content` conforms to `View`. Instantiates a document group for viewing documents described by the last `Schema` in the migration plan.
