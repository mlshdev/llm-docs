> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neurlfiltermanager/parsingconfiguration](https://developer.apple.com/documentation/networkextension/neurlfiltermanager/parsingconfiguration)

# NEURLFilterManager.ParsingConfiguration

**Framework:** Network Extension  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

A type to configure the filter’s parser behavior.

## Declaration

```swift
struct ParsingConfiguration
```

<a id="overview"></a>

## Overview

Use this property to control which URL components to exclude, and to customize parsing behavior during sub-URL enumeration. By default, filtering is case-insensitive and includes all components except the scheme and the `www` subdomain. The filter enumerates all possible sub-URL combinations by walking up both the domain hierarchy and path hierarchy, including intermediate results.

For example, given a domain of `a.b.c.com`, walking the domain hierarchy includes `a.b.c.com`, `b.c.com` and `c.com`. For a path of `/a/b/c`, walking the path hierarchy includes `/a`, `/a/b`, and `/a/b/c`. This also allows for intermediate pattern combinations. For example, `example.com/a/b/c?id=123` includes `example.com`, `example.com/a`, `example.com/a/b`, `example.com/a/b/c`, and `example.com/a/b/c?id=123`.

## Topics

### Creating a configuration

- [init(excludeScheme:domain:path:query:excludeFragment:excludeIntermediates:caseSensitive:)](parsingconfiguration/init%28excludescheme_domain_path_query_excludefragment_excludeintermediates_casesensitive_%29.md): Creates a new parsing configuration with the default values.

### Working with configuration options

- [excludeScheme](parsingconfiguration/excludescheme.md): A Boolean value that indicates whether parsing should exclude the URL scheme.
- [domain](parsingconfiguration/domain.md): Parsing options for the URL domain component.
- [NEURLFilterManager.ParsingConfiguration.DomainOptions](parsingconfiguration/domainoptions.md): A type that represents options for parsing the URL domain component.
- [path](parsingconfiguration/path.md): Parsing options for the URL path component.
- [NEURLFilterManager.ParsingConfiguration.PathOptions](parsingconfiguration/pathoptions.md): A type that represents options for parsing the URL path component.
- [query](parsingconfiguration/query.md): Parsing options for the URL query component.
- [NEURLFilterManager.ParsingConfiguration.QueryOptions](parsingconfiguration/queryoptions.md): A type that represents options for parsing the URL query component.
- [excludeFragment](parsingconfiguration/excludefragment.md): A Boolean value that indicates whether parsing should exclude the URL fragment.
- [excludeIntermediates](parsingconfiguration/excludeintermediates.md): A Boolean value that indicates whether parsing should exclude the URL fragment.
- [caseSensitive](parsingconfiguration/casesensitive.md): A Boolean value that indicates whether parsing should be case-sensitive.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Customizing filter parsing behavior

- [urlParsingConfiguration](urlparsingconfiguration.md): A property to configure the filter’s parser behavior.
- [urlParsingRegularExpression](urlparsingregularexpression.md): A regular expression used for advanced URL parsing.
- [setURLParsingRegularExpression(\_:)](seturlparsingregularexpression%28__%29.md): Sets a regular expression for use in URL parsing.
