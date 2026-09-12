> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/buttonrole/destructive](https://developer.apple.com/documentation/swiftui/buttonrole/destructive)

# destructive

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A role that indicates a destructive button.

## Declaration

```swift
static let destructive: ButtonRole
```

## Mentioned In

- [Populating SwiftUI menus with adaptive controls](../populating-swiftui-menus-with-adaptive-controls.md)

<a id="discussion"></a>

## Discussion

Use this role for a button that deletes user data, or performs an irreversible operation. A destructive button signals by its appearance that the user should carefully consider whether to tap or click the button. For example, SwiftUI presents a destructive button that you add with the [swipeActions(edge:allowsFullSwipe:content:)](../view/swipeactions%28edge_allowsfullswipe_content_%29.md) modifier using a red background:

```swift
List {
    ForEach(items) { item in
        Text(item.title)
            .swipeActions {
                Button(role: .destructive) { delete() } label: {
                    Label("Delete", systemImage: "trash")
                }
            }
    }
}
.navigationTitle("Shopping List")
```

![A screenshot of a list of three items, where the second item is](https://developer.apple.com/images/com.apple.SwiftUI/ButtonRole-destructive-1@2x.png)

## See Also

### Getting button roles

- [cancel](cancel.md): A role that indicates a button that cancels an operation.
