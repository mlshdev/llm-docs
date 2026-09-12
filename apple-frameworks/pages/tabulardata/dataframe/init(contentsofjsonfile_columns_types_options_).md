> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/init(contentsofjsonfile:columns:types:options:)](https://developer.apple.com/documentation/tabulardata/dataframe/init(contentsofjsonfile:columns:types:options:))

# init(contentsOfJSONFile:columns:types:options:)

**Framework:** TabularData  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a data frame by reading a JSON file.

## Declaration

```swift
init(contentsOfJSONFile url: URL, columns: [String]? = nil, types: [String : JSONType] = [:], options: JSONReadingOptions = .init()) throws
```

## Parameters

- `url`: A URL to a JSON file.
- `columns`: An array of column names; Set to `nil` to use every column in the JSON file.
- `types`: A dictionary of column names and their JSON types. The data frame infers the types for column names that aren’t in the dictionary.
- `options`: The options that instruct how the data frame reads the JSON file.

<a id="discussion"></a>

## Discussion

The JSON file should contain a sequence of objects where each object contains a value for every column name. Here’s an example with two columns “id” and “name”:

```
[
  {"id": 1, "name": "foo"},
  {"id": 2, "name": "bar"},
]
```

> **Throws**

> A `JSONReadingError` instance.

## See Also

### Creating a Data Frame from a JSON File

- [init(jsonData:columns:types:options:)](init%28jsondata_columns_types_options_%29.md): Creates a data frame by converting JSON data.
- [JSONType](../jsontype.md): Represents the value types in a JSON file.
- [JSONReadingOptions](../jsonreadingoptions.md): A set of JSON file-reading options.
