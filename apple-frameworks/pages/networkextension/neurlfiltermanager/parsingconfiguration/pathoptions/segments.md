> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neurlfiltermanager/parsingconfiguration/pathoptions/segments](https://developer.apple.com/documentation/networkextension/neurlfiltermanager/parsingconfiguration/pathoptions/segments)

# segments

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

The number of path levels to preserve when parsing.

## Declaration

```swift
var segments: UInt
```

<a id="discussion"></a>

## Discussion

With a path of `/a/b/c/d`, setting `segments` to `2` keeps `/a/b`.

Use a value of `0` to keep all path segments.

## See Also

### Working with path options

- [excluded](excluded.md): A Boolean value that indicates whether to exlude the path component from URL parsing.
- [enumerateHierarchy](enumeratehierarchy.md): A Boolean value that indicates whether the parser walks the path hierarchy for matching.
