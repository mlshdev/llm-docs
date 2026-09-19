> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/dataframetemporalannotationparameters/filepathcolumnid

# filePathColumnID

**Framework:** Create ML Components  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

The column id that contains the file path. The default value is “filePath” with String type.

## Declaration

```swift
var filePathColumnID: ColumnID<String>
```

## See Also

### Getting the properties

- [annotationColumnID](annotationcolumnid.md): The column id that contains the annotation. The default value is “annotation” with `Annotation` type.
- [endTimeColumnID](endtimecolumnid.md): The column id that contains the end time. The default value is `nil`.
- [filePathType](filepathtype-swift.property.md): The file path type in the annotation file. The default value is `.absolute`.
- [startTimeColumnID](starttimecolumnid.md): The column id that contains the start time. The default value is `nil`.
