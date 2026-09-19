> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/neurlfiltermanager/parsingconfiguration/domainoptions/excluded

# excluded

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether to exclude the domain component from URL parsing.

## Declaration

```swift
var excluded: Bool
```

<a id="discussion"></a>

## Discussion

When this value is `true`, parsing ignores all other domain options.

## See Also

### Working with domain options

- [stripWWW](stripwww.md): A Boolean value that indicates whether to strip the `www` subdomain when parsing.
- [levels](levels.md): The number of domain levels to preserve when parsing.
- [enumerateHierarchy](enumeratehierarchy.md): A Boolean value that indicates whether the parser walks the domain hierarchy for matching.
