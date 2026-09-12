> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/exportabletoservices(_:onedit:)](https://developer.apple.com/documentation/swiftui/view/exportabletoservices(_:onedit:))

# exportableToServices(\_:onEdit:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Exports read-write items for consumption by shortcuts, quick actions, and services.

## Declaration

```swift
nonisolated func exportableToServices<T>(_ payload: @autoclosure @escaping () -> [T], onEdit: @escaping ([T]) -> Bool) -> some View where T : Transferable

```

## Parameters

- `payload`: A closure that will be called on request of the items by the shortcut or service.
- `onEdit`: A closure that will be called after the shortcut or service completes with its output data. This should replace the selected subpart that was exported with `onExport`. Return `false` to indicate that there was a failure to receive the items.

<a id="discussion"></a>

## Discussion

If the associated view supports selection, the exported item should reflect that selected subpart.

```swift
@State private var title: String
var body: some View {
    Color.pink
        .frame(width: 400, height: 400)
        .exportableToServices([title]) { editedTitles
            title = editedTitles.first ?? title
            return !editedTitles.isEmpty
        }
}
```

## See Also

### Importing and exporting transferable items

- [importableFromServices(for:action:)](importablefromservices%28for_action_%29.md): Enables importing items from services, such as Continuity Camera on macOS.
- [exportableToServices(\_:)](exportabletoservices%28__%29.md): Exports items for consumption by shortcuts, quick actions, and services.
