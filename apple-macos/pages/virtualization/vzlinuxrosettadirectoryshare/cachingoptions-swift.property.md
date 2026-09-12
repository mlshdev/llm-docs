> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzlinuxrosettadirectoryshare/cachingoptions-swift.property](https://developer.apple.com/documentation/virtualization/vzlinuxrosettadirectoryshare/cachingoptions-swift.property)

# cachingOptions

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The value that enables translation caching and configures the socket communication type for Rosetta.

## Declaration

```swift
var cachingOptions: VZLinuxRosettaDirectoryShare.CachingOptions? { get }
```

## See Also

### Setting the ahead of time (AOT) caching options

- [setCachingOptions(\_:)](setcachingoptions%28__%29.md): Sets the Rosetta caching options using the options you specify.
- [VZLinuxRosettaDirectoryShare.CachingOptions](cachingoptions-swift.enum.md): Socket values you specify to configure Rosetta’s caching capabilities.
