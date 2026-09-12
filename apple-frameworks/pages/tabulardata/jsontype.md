> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/jsontype](https://developer.apple.com/documentation/tabulardata/jsontype)

# JSONType

**Framework:** TabularData  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Represents the value types in a JSON file.

## Declaration

```swift
enum JSONType
```

## Topics

### Enumeration Cases

- [JSONType.array](jsontype/array.md): An array type.
- [JSONType.boolean](jsontype/boolean.md): A Boolean type.
- [JSONType.date](jsontype/date.md): A date type.
- [JSONType.double](jsontype/double.md): A double-precision floating-point type.
- [JSONType.integer](jsontype/integer.md): An integer type.
- [JSONType.object](jsontype/object.md): An object type.
- [JSONType.string](jsontype/string.md): A string type.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a Data Frame from a JSON File

- [init(contentsOfJSONFile:columns:types:options:)](dataframe/init%28contentsofjsonfile_columns_types_options_%29.md): Creates a data frame by reading a JSON file.
- [init(jsonData:columns:types:options:)](dataframe/init%28jsondata_columns_types_options_%29.md): Creates a data frame by converting JSON data.
- [JSONReadingOptions](jsonreadingoptions.md): A set of JSON file-reading options.
