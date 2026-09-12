> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzlinuxrosettadirectoryshare/cachingoptions-swift.enum/unixsocket(_:)](https://developer.apple.com/documentation/virtualization/vzlinuxrosettadirectoryshare/cachingoptions-swift.enum/unixsocket(_:))

# VZLinuxRosettaDirectoryShare.CachingOptions.unixSocket(\_:)

**Framework:** Virtualization  
**Kind:** Case  
**Availability:** macOS 14.0+

The value that describes an UNIX domain socket at a path that you specify.

## Declaration

```swift
case unixSocket(String)
```

## Parameters

- `path`: The path of the Unix Domain Socket for Rosetta to use.

<a id="Discussion"></a>

## Discussion

> **Important**

>  The guest operating system needs to have a directory at `path` created in order for translation caching to operate correctly.

## See Also

### Socket types

- [VZLinuxRosettaDirectoryShare.CachingOptions.abstractSocket(\_:)](abstractsocket%28__%29.md): The value that describes an abstract socket with a name you specify.
