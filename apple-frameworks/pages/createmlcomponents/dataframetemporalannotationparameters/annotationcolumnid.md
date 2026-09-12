> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/dataframetemporalannotationparameters/annotationcolumnid](https://developer.apple.com/documentation/createmlcomponents/dataframetemporalannotationparameters/annotationcolumnid)

# annotationColumnID

**Framework:** Create ML Components  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

The column id that contains the annotation. The default value is “annotation” with `Annotation` type.

## Declaration

```swift
var annotationColumnID: ColumnID<Annotation>
```

## See Also

### Getting the properties

- [endTimeColumnID](endtimecolumnid.md): The column id that contains the end time. The default value is `nil`.
- [filePathColumnID](filepathcolumnid.md): The column id that contains the file path. The default value is “filePath” with String type.
- [filePathType](filepathtype-swift.property.md): The file path type in the annotation file. The default value is `.absolute`.
- [startTimeColumnID](starttimecolumnid.md): The column id that contains the start time. The default value is `nil`.
