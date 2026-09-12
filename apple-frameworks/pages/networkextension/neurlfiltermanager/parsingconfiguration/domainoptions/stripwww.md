> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neurlfiltermanager/parsingconfiguration/domainoptions/stripwww](https://developer.apple.com/documentation/networkextension/neurlfiltermanager/parsingconfiguration/domainoptions/stripwww)

# stripWWW

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether to strip the `www` subdomain when parsing.

## Declaration

```swift
var stripWWW: Bool
```

## See Also

### Working with domain options

- [excluded](excluded.md): A Boolean value that indicates whether to exclude the domain component from URL parsing.
- [levels](levels.md): The number of domain levels to preserve when parsing.
- [enumerateHierarchy](enumeratehierarchy.md): A Boolean value that indicates whether the parser walks the domain hierarchy for matching.
