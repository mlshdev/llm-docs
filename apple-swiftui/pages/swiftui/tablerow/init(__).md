> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tablerow/init(_:)](https://developer.apple.com/documentation/swiftui/tablerow/init(_:))

# init(\_:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 12.0+ · visionOS 1.0+

Creates a table row for the given value.

## Declaration

```swift
nonisolated init(_ value: Value)
```

## Parameters

- `value`: The value of the row.

<a id="discussion"></a>

## Discussion

The table provides the value of a row to each column of a table, which produces the cells for each row in the column.

The following example creates a row for one instance of the `Person` type. The table delivers this value to its columns, which displays different fields of `Person`.

```swift
 TableRow(Person(givenName: "Tom", familyName: "Clark"))
```
