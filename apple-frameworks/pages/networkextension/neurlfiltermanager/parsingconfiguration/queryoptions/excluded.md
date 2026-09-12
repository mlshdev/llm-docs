> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neurlfiltermanager/parsingconfiguration/queryoptions/excluded](https://developer.apple.com/documentation/networkextension/neurlfiltermanager/parsingconfiguration/queryoptions/excluded)

# excluded

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether to exclude the query component from URL parsing.

## Declaration

```swift
var excluded: Bool
```

<a id="discussion"></a>

## Discussion

When this value is `true`, parsing ignores all other query options.

## See Also

### Working with query options

- [parameters](parameters.md): An array of parameter names to extract.
