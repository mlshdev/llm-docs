> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neurlfiltermanager/parsingconfiguration/domainoptions/enumeratehierarchy](https://developer.apple.com/documentation/networkextension/neurlfiltermanager/parsingconfiguration/domainoptions/enumeratehierarchy)

# enumerateHierarchy

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether the parser walks the domain hierarchy for matching.

## Declaration

```swift
var enumerateHierarchy: Bool
```

## See Also

### Working with domain options

- [excluded](excluded.md): A Boolean value that indicates whether to exclude the domain component from URL parsing.
- [stripWWW](stripwww.md): A Boolean value that indicates whether to strip the `www` subdomain when parsing.
- [levels](levels.md): The number of domain levels to preserve when parsing.
