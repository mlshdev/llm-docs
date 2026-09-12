> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/copyable(_:)](https://developer.apple.com/documentation/swiftui/view/copyable(_:))

# copyable(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 13.0+

Specifies a list of items to copy in response to the system’s Copy command.

## Declaration

```swift
nonisolated func copyable<T>(_ payload: @autoclosure @escaping () -> [T]) -> some View where T : Transferable

```

## Parameters

- `payload`: A closure that returns an array of items to copy to the Clipboard when someone issues a Copy command. The items in the array must conform to the [Transferable](https://developer.apple.com/documentation/coretransferable/transferable) protocol.

<a id="return-value"></a>

## Return Value

A view that adds one or more items to the Clipboard in response to a Copy command.

<a id="discussion"></a>

## Discussion

Use this modifier to specify one or more items that the system copies to the Clipboard when someone issues a Copy command while the modified view has focus. People issue a Copy command by choosing Edit \> Copy from the app’s menu, or by using the Command-C keyboard shortcut. The system enables the Copy command for your app when it detects copyable content.

For example, the following code enables people to copy all of the strings that they select in a [List](../list.md):

```swift
struct CopyableExample: View {
    let strings = ["Alpha", "Beta", "Gamma"]
    @State private var selection: Set<String> = []

    var body: some View {
        List(strings, id: \.self, selection: $selection) {
            Text($0)
        }
        .copyable(Array(selection))
    }
}
```

The command copies each item’s representation as specified by the item’s conformance to the [Transferable](https://developer.apple.com/documentation/coretransferable/transferable) protocol. The above example records selection using each list item’s corresponding string, and strings conform to the `Transferable` protocol by default. For more complex cases, you might need to take additional steps.

For example, the following code displays colors composed from a list of `Item` instances that contain both a color and its name, as well as an identifier. The list manages selection using item identifiers:

```swift
struct Item: Identifiable, Transferable {
    let color: Color
    let name: String
    let id = UUID()

    static var transferRepresentation: some TransferRepresentation {
        ProxyRepresentation(exporting: \.name)
    }
}

struct CopyableIDExample: View {
    let items: [Item] = [
        Item(color: .red, name: "red"),
        Item(color: .green, name: "green"),
        Item(color: .blue, name: "blue")
    ]

    @State private var selection: Set<Item.ID> = []

    var body: some View {
        List(items, selection: $selection) { item in
            item.color
        }
        .copyable(items.filter { selection.contains($0.id) })
    }
}
```

This example does two things that the previous example didn’t have to:

- It converts the list of selected item identifiers into a list of selected items for use with the copyable modifier.
- It ensures that the copyable items conform to the [Transferable](https://developer.apple.com/documentation/coretransferable/transferable) protocol, using the item’s `name` property as the representation.

When someone copies the first item in the list, which appears in the interface as a red rectangle, and then pastes into a text editor, they get the string “red”.

> **Note**

> To enable people to copy using a custom action — like from a context menu item — rather than using the system Copy command, update the Clipboard directly using an [NSPasteboard](https://developer.apple.com/documentation/appkit/nspasteboard) or a [UIPasteboard](https://developer.apple.com/documentation/uikit/uipasteboard) instance.

## See Also

### Copying transferable items

- [cuttable(for:action:)](cuttable%28for_action_%29.md): Specifies an action that moves items to the Clipboard in response to the system’s Cut command.
- [pasteDestination(for:action:validator:)](pastedestination%28for_action_validator_%29.md): Specifies an action that adds validated items to a view in response to the system’s Paste command.
