> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/exportabletoservices(_:)](https://developer.apple.com/documentation/swiftui/view/exportabletoservices(_:))

# exportableToServices(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Exports items for consumption by shortcuts, quick actions, and services.

## Declaration

```swift
nonisolated func exportableToServices<T>(_ payload: @autoclosure @escaping () -> [T]) -> some View where T : Transferable

```

## Parameters

- `payload`: A closure that will be called on request of the items by the shortcut or service.

<a id="discussion"></a>

## Discussion

If the associated view supports selection, the exported item should reflect that selected subpart.

```swift
var title: String
var body: some View {
    Color.pink
        .frame(width: 400, height: 400)
        .exportableToServices([title])
}
```

## See Also

### Importing and exporting transferable items

- [importableFromServices(for:action:)](importablefromservices%28for_action_%29.md): Enables importing items from services, such as Continuity Camera on macOS.
- [exportableToServices(\_:onEdit:)](exportabletoservices%28__onedit_%29.md): Exports read-write items for consumption by shortcuts, quick actions, and services.
