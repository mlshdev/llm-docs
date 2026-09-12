> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neurlfiltermanager/parsingconfiguration/pathoptions](https://developer.apple.com/documentation/networkextension/neurlfiltermanager/parsingconfiguration/pathoptions)

# NEURLFilterManager.ParsingConfiguration.PathOptions

**Framework:** Network Extension  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

A type that represents options for parsing the URL path component.

## Declaration

```swift
struct PathOptions
```

## Topics

### Creating a path options instance

- [init(excluded:segments:enumerateHierarchy:)](pathoptions/init%28excluded_segments_enumeratehierarchy_%29.md): Creates a new path options configuration with default values.

### Working with path options

- [excluded](pathoptions/excluded.md): A Boolean value that indicates whether to exlude the path component from URL parsing.
- [segments](pathoptions/segments.md): The number of path levels to preserve when parsing.
- [enumerateHierarchy](pathoptions/enumeratehierarchy.md): A Boolean value that indicates whether the parser walks the path hierarchy for matching.

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
- [query](query.md): Parsing options for the URL query component.
- [NEURLFilterManager.ParsingConfiguration.QueryOptions](queryoptions.md): A type that represents options for parsing the URL query component.
- [excludeFragment](excludefragment.md): A Boolean value that indicates whether parsing should exclude the URL fragment.
- [excludeIntermediates](excludeintermediates.md): A Boolean value that indicates whether parsing should exclude the URL fragment.
- [caseSensitive](casesensitive.md): A Boolean value that indicates whether parsing should be case-sensitive.
