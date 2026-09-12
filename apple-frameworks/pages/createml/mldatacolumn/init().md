> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatacolumn/init()](https://developer.apple.com/documentation/createml/mldatacolumn/init())

# init()

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Constructs an invalid Column.

## Declaration

```swift
init()
```

<a id="discussion"></a>

## Discussion

Assigning an invalid Column to a column name in a DataTable will remove any Column previously stored under that name.

## See Also

### Creating a data column

- [init(repeating:count:)](init%28repeating_count_%29.md): Creates a new column with a repeating element.
- [init(\_:)](init%28__%29.md): Creates a new column from a given sequence of elements.
