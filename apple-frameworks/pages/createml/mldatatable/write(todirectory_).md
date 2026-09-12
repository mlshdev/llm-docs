> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatatable/write(todirectory:)](https://developer.apple.com/documentation/createml/mldatatable/write(todirectory:))

# write(toDirectory:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Exports a binary file of the data table to the given directory path.

## Declaration

```swift
func write(toDirectory path: String) throws
```

## Parameters

- `path`: A file system directory path where the data table file should be written.

## See Also

### Saving a data table

- [write(to:)](write%28to_%29.md): Exports a binary file of the data table to the given directory URL.
- [writeCSV(to:)](writecsv%28to_%29.md): Exports a CSV file of the data table to the given directory URL.
- [writeCSV(toFile:)](writecsv%28tofile_%29.md): Exports a CSV file of the data table to the given directory path.
