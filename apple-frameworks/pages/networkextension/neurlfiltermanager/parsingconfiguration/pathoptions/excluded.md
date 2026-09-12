> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neurlfiltermanager/parsingconfiguration/pathoptions/excluded](https://developer.apple.com/documentation/networkextension/neurlfiltermanager/parsingconfiguration/pathoptions/excluded)

# excluded

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether to exlude the path component from URL parsing.

## Declaration

```swift
var excluded: Bool
```

<a id="discussion"></a>

## Discussion

When this value is `true`, parsing ignores all other path options.

## See Also

### Working with path options

- [segments](segments.md): The number of path levels to preserve when parsing.
- [enumerateHierarchy](enumeratehierarchy.md): A Boolean value that indicates whether the parser walks the path hierarchy for matching.
