> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/picker/init(selection:content:label:)](https://developer.apple.com/documentation/swiftui/picker/init(selection:content:label:))

# init(selection:content:label:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a picker that displays a custom label.

## Declaration

```swift
@export(implementation) nonisolated init(selection: Binding<SelectionValue>, @ContentBuilder content: () -> Content, @ContentBuilder label: () -> Label)
```

## Parameters

- `selection`: A binding to a property that determines the currently-selected option.
- `content`: A view that contains the set of options.
- `label`: A view that describes the purpose of selecting an option.

## See Also

### Creating a picker

- [init(\_:selection:content:)](init%28__selection_content_%29.md): Conforms when `Label` is `Text`, `SelectionValue` conforms to `Hashable`, and `Content` conforms to `View`. Creates a picker that generates its label from a localized string resource.
