> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tablestyle/inset](https://developer.apple.com/documentation/swiftui/tablestyle/inset)

# inset

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 12.0+ · visionOS 1.0+

The table style that describes the behavior and appearance of a table with its content and selection inset from the table edges.

## Declaration

```swift
@MainActor @export(implementation) @preconcurrency static var inset: InsetTableStyle { get }
```

<a id="discussion"></a>

## Discussion

To customize whether the rows of the table should alternate their backgrounds, use [alternatingRowBackgrounds(\_:)](../view/alternatingrowbackgrounds%28__%29.md).

## See Also

### Getting built-in table styles

- [automatic](automatic.md): Conforms when `Self` is `AutomaticTableStyle`. The default table style in the current context.
- [bordered](bordered.md): Conforms when `Self` is `BorderedTableStyle`. The table style that describes the behavior and appearance of a table with standard border.
