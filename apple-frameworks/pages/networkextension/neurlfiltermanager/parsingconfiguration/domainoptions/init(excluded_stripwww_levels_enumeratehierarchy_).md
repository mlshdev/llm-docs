> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neurlfiltermanager/parsingconfiguration/domainoptions/init(excluded:stripwww:levels:enumeratehierarchy:)](https://developer.apple.com/documentation/networkextension/neurlfiltermanager/parsingconfiguration/domainoptions/init(excluded:stripwww:levels:enumeratehierarchy:))

# init(excluded:stripWWW:levels:enumerateHierarchy:)

**Framework:** Network Extension  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

Creates a new domain options configuration with default values.

## Declaration

```swift
init(excluded: Bool = false, stripWWW: Bool = true, levels: UInt = 0, enumerateHierarchy: Bool = true)
```

<a id="discussion"></a>

## Discussion

The domain options default behavior is as follows:

- Parsing includes the domain.
- Parsing strips the `www` subdomain if it is present.
- Parsing includes all domain levels.
- Parsing enables enumeration of the domain hierarchy.
