> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tablecolumn/init(_:content:)](https://developer.apple.com/documentation/swiftui/tablecolumn/init(_:content:))

# init(\_:content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.6+ · iPadOS 16.6+ · Mac Catalyst 16.6+ · macOS 13.5+ · visionOS 1.0+

Creates an unsortable column that generates its label from a localized string resource.

## Declaration

```swift
@export(implementation) nonisolated init(_ titleResource: LocalizedStringResource, @ContentBuilder content: @escaping (RowValue) -> Content)
```

## Parameters

- `titleResource`: Text resource for the column’s localized title.
- `content`: The view content to display for each row in a table.

<a id="discussion"></a>

## Discussion

This initializer creates a [Text](../text.md) view for you. For more information about localizing strings, see [Text](../text.md).

## See Also

### Creating an unsortable column

- [init(\_:value:)](init%28__value_%29.md): Conforms when `RowValue` conforms to `Identifiable`, `Sort` is `Never`, `Content` conforms to `View`, and `Label` is `Text`. Creates an unsortable column that displays a string property that generates its label from a localized string resource.
