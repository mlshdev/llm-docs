> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/importsitemproviders(_:onimport:)](https://developer.apple.com/documentation/swiftui/view/importsitemproviders(_:onimport:))

# importsItemProviders(\_:onImport:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Enables importing item providers from services, such as Continuity Camera on macOS.

## Declaration

```swift
nonisolated func importsItemProviders(_ contentTypes: [UTType], onImport: @escaping ([NSItemProvider]) -> Bool) -> some View

```

## Parameters

- `contentTypes`: The types of content that the view supports importing. An empty array means the view does not currently support importing.
- `onImport`: A closure that will be called with the imported service item. Return `false` to indicate that there was a failure to receive the items.

## See Also

### Importing and exporting using item providers

- [exportsItemProviders(\_:onExport:)](exportsitemproviders%28__onexport_%29.md): Exports a read-only item provider for consumption by shortcuts, quick actions, and services.
- [exportsItemProviders(\_:onExport:onEdit:)](exportsitemproviders%28__onexport_onedit_%29.md): Exports a read-write item provider for consumption by shortcuts, quick actions, and services.
