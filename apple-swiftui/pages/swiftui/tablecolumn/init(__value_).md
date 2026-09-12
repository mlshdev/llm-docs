> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tablecolumn/init(_:value:)](https://developer.apple.com/documentation/swiftui/tablecolumn/init(_:value:))

# init(\_:value:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.6+ · iPadOS 16.6+ · Mac Catalyst 16.6+ · macOS 13.5+ · visionOS 1.0+

Creates an unsortable column that displays a string property that generates its label from a localized string resource.

## Declaration

```swift
@export(implementation) nonisolated init(_ titleResource: LocalizedStringResource, value: KeyPath<RowValue, String>) where Content == Text
```

## Parameters

- `titleResource`: Text resource for the column’s localized title.
- `value`: The path to the property associated with the column. The table uses this to display the property as verbatim text in each row of the table.

<a id="discussion"></a>

## Discussion

This initializer creates a [Text](../text.md) view for you. For more information about localizing strings, see [Text](../text.md).

## See Also

### Creating an unsortable column

- [init(\_:content:)](init%28__content_%29.md): Conforms when `RowValue` conforms to `Identifiable`, `Sort` is `Never`, `Content` conforms to `View`, and `Label` is `Text`. Creates an unsortable column that generates its label from a localized string resource.
