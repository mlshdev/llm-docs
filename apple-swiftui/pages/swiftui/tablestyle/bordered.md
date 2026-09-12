> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tablestyle/bordered](https://developer.apple.com/documentation/swiftui/tablestyle/bordered)

# bordered

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** macOS 12.0+

The table style that describes the behavior and appearance of a table with standard border.

## Declaration

```swift
@MainActor @export(implementation) @preconcurrency static var bordered: BorderedTableStyle { get }
```

<a id="discussion"></a>

## Discussion

Bordered tables are expected to be inset from their outer containers, but do not have inset style rows or selection.

To customize whether the rows of the table should alternate their backgrounds, use [alternatingRowBackgrounds(\_:)](../view/alternatingrowbackgrounds%28__%29.md).

## See Also

### Getting built-in table styles

- [automatic](automatic.md): Conforms when `Self` is `AutomaticTableStyle`. The default table style in the current context.
- [inset](inset.md): Conforms when `Self` is `InsetTableStyle`. The table style that describes the behavior and appearance of a table with its content and selection inset from the table edges.
