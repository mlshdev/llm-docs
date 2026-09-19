> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mldatatable/writecsv(to:)

# writeCSV(to:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Exports a CSV file of the data table to the given directory URL.

## Declaration

```swift
func writeCSV(to fileURL: URL) throws
```

## Parameters

- `fileURL`: The location in the file system to which the data table file should be written.

## See Also

### Saving a data table

- [write(to:)](write%28to_%29.md): Exports a binary file of the data table to the given directory URL.
- [write(toDirectory:)](write%28todirectory_%29.md): Exports a binary file of the data table to the given directory path.
- [writeCSV(toFile:)](writecsv%28tofile_%29.md): Exports a CSV file of the data table to the given directory path.
