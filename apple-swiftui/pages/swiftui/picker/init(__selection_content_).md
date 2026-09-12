> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/picker/init(_:selection:content:)](https://developer.apple.com/documentation/swiftui/picker/init(_:selection:content:))

# init(\_:selection:content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a picker that generates its label from a localized string resource.

## Declaration

```swift
@export(implementation) nonisolated init(_ titleResource: LocalizedStringResource, selection: Binding<SelectionValue>, @ContentBuilder content: () -> Content)
```

## Parameters

- `titleResource`: A localized string resource that describes the purpose of selecting an option.
- `selection`: A binding to a property that determines the currently-selected option.
- `content`: A view that contains the set of options.

<a id="discussion"></a>

## Discussion

This initializer creates a [Text](../text.md) view on your behalf. See [Text](../text.md) for more information about localizing strings.

## See Also

### Creating a picker

- [init(selection:content:label:)](init%28selection_content_label_%29.md): Conforms when `Label` conforms to `View`, `SelectionValue` conforms to `Hashable`, and `Content` conforms to `View`. Creates a picker that displays a custom label.
