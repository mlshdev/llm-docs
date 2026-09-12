> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neurlfiltermanager/parsingconfiguration/queryoptions](https://developer.apple.com/documentation/networkextension/neurlfiltermanager/parsingconfiguration/queryoptions)

# NEURLFilterManager.ParsingConfiguration.QueryOptions

**Framework:** Network Extension  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

A type that represents options for parsing the URL query component.

## Declaration

```swift
struct QueryOptions
```

## Topics

### Creating a query options instance

- [init(excluded:parameters:)](queryoptions/init%28excluded_parameters_%29.md): Creates a new query options configuration with default values.

### Working with query options

- [excluded](queryoptions/excluded.md): A Boolean value that indicates whether to exclude the query component from URL parsing.
- [parameters](queryoptions/parameters.md): An array of parameter names to extract.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Working with configuration options

- [excludeScheme](excludescheme.md): A Boolean value that indicates whether parsing should exclude the URL scheme.
- [domain](domain.md): Parsing options for the URL domain component.
- [NEURLFilterManager.ParsingConfiguration.DomainOptions](domainoptions.md): A type that represents options for parsing the URL domain component.
- [path](path.md): Parsing options for the URL path component.
- [NEURLFilterManager.ParsingConfiguration.PathOptions](pathoptions.md): A type that represents options for parsing the URL path component.
- [query](query.md): Parsing options for the URL query component.
- [excludeFragment](excludefragment.md): A Boolean value that indicates whether parsing should exclude the URL fragment.
- [excludeIntermediates](excludeintermediates.md): A Boolean value that indicates whether parsing should exclude the URL fragment.
- [caseSensitive](casesensitive.md): A Boolean value that indicates whether parsing should be case-sensitive.
