> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/neurlfiltermanager/parsingconfiguration/domainoptions/levels

# levels

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

The number of domain levels to preserve when parsing.

## Declaration

```swift
var levels: UInt
```

<a id="discussion"></a>

## Discussion

A value of `2` for the domain `www.sub.example.com` keeps the `example.com`.

Use a value of `0` to keep all domain levels.

## See Also

### Working with domain options

- [excluded](excluded.md): A Boolean value that indicates whether to exclude the domain component from URL parsing.
- [stripWWW](stripwww.md): A Boolean value that indicates whether to strip the `www` subdomain when parsing.
- [enumerateHierarchy](enumeratehierarchy.md): A Boolean value that indicates whether the parser walks the domain hierarchy for matching.
