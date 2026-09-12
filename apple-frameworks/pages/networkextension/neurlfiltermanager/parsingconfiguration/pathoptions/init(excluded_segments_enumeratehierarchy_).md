> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neurlfiltermanager/parsingconfiguration/pathoptions/init(excluded:segments:enumeratehierarchy:)](https://developer.apple.com/documentation/networkextension/neurlfiltermanager/parsingconfiguration/pathoptions/init(excluded:segments:enumeratehierarchy:))

# init(excluded:segments:enumerateHierarchy:)

**Framework:** Network Extension  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

Creates a new path options configuration with default values.

## Declaration

```swift
init(excluded: Bool = false, segments: UInt = 0, enumerateHierarchy: Bool = true)
```

<a id="discussion"></a>

## Discussion

The path options default behavior is as follows:

- Parsing includes the path.
- Parsing preserves all path segments.
- Parsing enables path hierarchy enumeration.
