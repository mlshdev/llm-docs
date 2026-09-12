> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tablestyle/makebody(configuration:)](https://developer.apple.com/documentation/swiftui/tablestyle/makebody(configuration:))

# makeBody(configuration:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 12.0+ · visionOS 1.0+

Creates a view that represents the body of a table.

## Declaration

```swift
@ContentBuilder @MainActor @preconcurrency func makeBody(configuration: Self.Configuration) -> Self.Body
```

## Parameters

- `configuration`: The properties of the table.

<a id="discussion"></a>

## Discussion

The system calls this method for each [Table](../table.md) instance in a view hierarchy where this style is the current table style.

## See Also

### Creating custom table styles

- [TableStyle.Configuration](configuration.md): The properties of a table.
- [Body](body.md): A view that represents the body of a table.
