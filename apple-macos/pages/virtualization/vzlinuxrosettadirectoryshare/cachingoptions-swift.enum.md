> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzlinuxrosettadirectoryshare/cachingoptions-swift.enum](https://developer.apple.com/documentation/virtualization/vzlinuxrosettadirectoryshare/cachingoptions-swift.enum)

# VZLinuxRosettaDirectoryShare.CachingOptions

**Framework:** Virtualization  
**Kind:** Enumeration  
**Availability:** macOS 14.0+

Socket values you specify to configure Rosetta’s caching capabilities.

## Declaration

```swift
enum CachingOptions
```

## Mentioned In

- [Running Intel Binaries in Linux VMs](../running-intel-binaries-in-linux-vms.md)

## Topics

### Socket types

- [VZLinuxRosettaDirectoryShare.CachingOptions.abstractSocket(\_:)](cachingoptions-swift.enum/abstractsocket%28__%29.md): The value that describes an abstract socket with a name you specify.
- [VZLinuxRosettaDirectoryShare.CachingOptions.unixSocket(\_:)](cachingoptions-swift.enum/unixsocket%28__%29.md): The value that describes an UNIX domain socket at a path that you specify.

### Type properties

- [defaultUnixSocket](cachingoptions-swift.enum/defaultunixsocket.md): The options to use for a default UNIX domain socket.
- [maximumNameLength](cachingoptions-swift.enum/maximumnamelength.md): The maximum length of the name of an abstract socket.
- [maximumPathLength](cachingoptions-swift.enum/maximumpathlength.md): The maximum length of the path to a UNIX domain socket.

## See Also

### Setting the ahead of time (AOT) caching options

- [cachingOptions](cachingoptions-swift.property.md): The value that enables translation caching and configures the socket communication type for Rosetta.
- [setCachingOptions(\_:)](setcachingoptions%28__%29.md): Sets the Rosetta caching options using the options you specify.
