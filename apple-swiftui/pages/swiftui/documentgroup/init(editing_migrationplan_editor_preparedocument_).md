> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/documentgroup/init(editing:migrationplan:editor:preparedocument:)](https://developer.apple.com/documentation/swiftui/documentgroup/init(editing:migrationplan:editor:preparedocument:))

# init(editing:migrationPlan:editor:prepareDocument:)

**Framework:** SwiftData  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

Instantiates a document group for creating and editing documents described by the last `Schema` in the migration plan.

## Declaration

```swift
nonisolated init(editing contentType: UTType, migrationPlan: any SchemaMigrationPlan.Type, editor: @escaping () -> Content, prepareDocument: @escaping (ModelContext) -> Void = { _ in })
```

## Parameters

- `editing`: The content type of the document. It should conform to `UTType.package`.
- `migrationPlan`: The description of steps required to migrate older document versions so that they can be opened and edited. The last `VersionedSchema` in the plan is considered to be the current application schema.
- `editor`: The editing UI for the provided document.

## See Also

### Editing a document backed by a persistent store

- [init(editing:contentType:editor:prepareDocument:)](init%28editing_contenttype_editor_preparedocument_%29.md): Conforms when `Document` is `ModelDocument` and `Content` conforms to `View`. Instantiates a document group for creating and editing documents that store a specific model type.
