> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatatable/rows-swift.struct/randomaccesscollection-implementations](https://developer.apple.com/documentation/createml/mldatatable/rows-swift.struct/randomaccesscollection-implementations)

# RandomAccessCollection Implementations

**Framework:** Create ML  
**Kind:** API Collection

## Topics

### Instance Properties

- [endIndex](endindex.md): The DataTable’s “past the end” position—that is, the position one greater than the last valid subscript argument.
- [startIndex](startindex.md): The position of the first row in a nonempty DataTable. If the DataTable is empty, `startIndex` is equal to `endIndex`.

### Subscripts

- [subscript(\_:)](subscript%28__%29.md): Subscript by index. This returns a row in the data table.

### Type Aliases

- [MLDataTable.Rows.Element](element.md): The Element of a DataTable is a Row. This is represented as a Dictionary-like type containing all Column names and their corresponding values.
