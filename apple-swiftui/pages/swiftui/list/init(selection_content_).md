> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/list/init(selection:content:)](https://developer.apple.com/documentation/swiftui/list/init(selection:content:))

# init(selection:content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** macOS 13.0+

Creates a list with the given content that supports selecting a single row that cannot be deselected.

## Declaration

```swift
nonisolated init(selection: Binding<SelectionValue>, @ContentBuilder content: () -> Content)
```

## Parameters

- `selection`: A binding to a selected row.
- `content`: The content of the list.

## See Also

### Creating a list from a set of views

- [init(content:)](init%28content_%29.md): Conforms when `SelectionValue` is `Never` and `Content` conforms to `View`. Creates a list with the given content.
