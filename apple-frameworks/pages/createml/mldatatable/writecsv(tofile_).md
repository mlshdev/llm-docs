> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mldatatable/writecsv(tofile:)

# writeCSV(toFile:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Exports a CSV file of the data table to the given directory path.

## Declaration

```swift
func writeCSV(toFile path: String) throws
```

## Parameters

- `path`: A file system path where the data table file should be written.

## See Also

### Saving a data table

- [write(to:)](write%28to_%29.md): Exports a binary file of the data table to the given directory URL.
- [write(toDirectory:)](write%28todirectory_%29.md): Exports a binary file of the data table to the given directory path.
- [writeCSV(to:)](writecsv%28to_%29.md): Exports a CSV file of the data table to the given directory URL.
