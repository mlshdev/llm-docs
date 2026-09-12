> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/exportsitemproviders(_:onexport:)](https://developer.apple.com/documentation/swiftui/view/exportsitemproviders(_:onexport:))

# exportsItemProviders(\_:onExport:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Exports a read-only item provider for consumption by shortcuts, quick actions, and services.

## Declaration

```swift
nonisolated func exportsItemProviders(_ contentTypes: [UTType], onExport: @escaping () -> [NSItemProvider]) -> some View

```

## Parameters

- `contentTypes`: The types of content that the view supports exporting. An empty array means the view does not currently support exporting.
- `onExport`: A closure that will be called on request of the items by the shortcut or service.

<a id="discussion"></a>

## Discussion

If the associated view supports selection, the exported item should reflect that selected subpart.

## See Also

### Importing and exporting using item providers

- [importsItemProviders(\_:onImport:)](importsitemproviders%28__onimport_%29.md): Enables importing item providers from services, such as Continuity Camera on macOS.
- [exportsItemProviders(\_:onExport:onEdit:)](exportsitemproviders%28__onexport_onedit_%29.md): Exports a read-write item provider for consumption by shortcuts, quick actions, and services.
