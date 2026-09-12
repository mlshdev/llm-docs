> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tablecolumnalignment/numeric(_:)](https://developer.apple.com/documentation/swiftui/tablecolumnalignment/numeric(_:))

# numeric(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Column alignment appropriate for numeric content.

## Declaration

```swift
static func numeric(_ numberingSystem: Locale.NumberingSystem) -> TableColumnAlignment
```

<a id="discussion"></a>

## Discussion

Use this alignment when a table column is primarily displaying numeric content, so that the values are easy to visually scan and compare.

This uses the provided numbering system to determine the alignment:

- For left to right numbering systems, this is equivalent to right.
- For right to left numbering systems, this is equivalent to left.

## See Also

### Getting the alignment

- [automatic](automatic.md): The default column alignment.
- [leading](leading.md): Leading column alignment.
- [center](center.md): Center column alignment.
- [trailing](trailing.md): Trailing column alignment.
- [numeric](numeric.md): Column alignment appropriate for numeric content.
