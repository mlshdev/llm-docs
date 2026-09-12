> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/importablefromservices(for:action:)](https://developer.apple.com/documentation/swiftui/view/importablefromservices(for:action:))

# importableFromServices(for:action:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Enables importing items from services, such as Continuity Camera on macOS.

## Declaration

```swift
nonisolated func importableFromServices<T>(for payloadType: T.Type = T.self, action: @escaping ([T]) -> Bool) -> some View where T : Transferable

```

## Parameters

- `payloadType`: The expected type of the imported models.
- `action`: A closure that will be called with the imported service item. Return `false` to indicate that there was a failure to receive the items.

<a id="discussion"></a>

## Discussion

```swift
@State private var title: String
var body: some View {
    Color.pink
        .frame(width: 400, height: 400)
        .importableFromServices(for: String.self) { titles
            title = titles.first ?? title
            return !titles.isEmpty
        }
}
```

## See Also

### Importing and exporting transferable items

- [exportableToServices(\_:)](exportabletoservices%28__%29.md): Exports items for consumption by shortcuts, quick actions, and services.
- [exportableToServices(\_:onEdit:)](exportabletoservices%28__onedit_%29.md): Exports read-write items for consumption by shortcuts, quick actions, and services.
