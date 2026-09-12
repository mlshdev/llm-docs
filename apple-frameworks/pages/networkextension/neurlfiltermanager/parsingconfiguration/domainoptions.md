> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neurlfiltermanager/parsingconfiguration/domainoptions](https://developer.apple.com/documentation/networkextension/neurlfiltermanager/parsingconfiguration/domainoptions)

# NEURLFilterManager.ParsingConfiguration.DomainOptions

**Framework:** Network Extension  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

A type that represents options for parsing the URL domain component.

## Declaration

```swift
struct DomainOptions
```

## Topics

### Creating a domain options instance

- [init(excluded:stripWWW:levels:enumerateHierarchy:)](domainoptions/init%28excluded_stripwww_levels_enumeratehierarchy_%29.md): Creates a new domain options configuration with default values.

### Working with domain options

- [excluded](domainoptions/excluded.md): A Boolean value that indicates whether to exclude the domain component from URL parsing.
- [stripWWW](domainoptions/stripwww.md): A Boolean value that indicates whether to strip the `www` subdomain when parsing.
- [levels](domainoptions/levels.md): The number of domain levels to preserve when parsing.
- [enumerateHierarchy](domainoptions/enumeratehierarchy.md): A Boolean value that indicates whether the parser walks the domain hierarchy for matching.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Working with configuration options

- [excludeScheme](excludescheme.md): A Boolean value that indicates whether parsing should exclude the URL scheme.
- [domain](domain.md): Parsing options for the URL domain component.
- [path](path.md): Parsing options for the URL path component.
- [NEURLFilterManager.ParsingConfiguration.PathOptions](pathoptions.md): A type that represents options for parsing the URL path component.
- [query](query.md): Parsing options for the URL query component.
- [NEURLFilterManager.ParsingConfiguration.QueryOptions](queryoptions.md): A type that represents options for parsing the URL query component.
- [excludeFragment](excludefragment.md): A Boolean value that indicates whether parsing should exclude the URL fragment.
- [excludeIntermediates](excludeintermediates.md): A Boolean value that indicates whether parsing should exclude the URL fragment.
- [caseSensitive](casesensitive.md): A Boolean value that indicates whether parsing should be case-sensitive.
