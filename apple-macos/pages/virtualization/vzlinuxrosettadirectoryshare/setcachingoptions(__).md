> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzlinuxrosettadirectoryshare/setcachingoptions(_:)](https://developer.apple.com/documentation/virtualization/vzlinuxrosettadirectoryshare/setcachingoptions(_:))

# setCachingOptions(\_:)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Sets the Rosetta caching options using the options you specify.

## Declaration

```swift
func setCachingOptions(_ cachingOptions: VZLinuxRosettaDirectoryShare.CachingOptions?) throws
```

## Parameters

- `cachingOptions`: One of the available [VZLinuxRosettaDirectoryShare.CachingOptions](cachingoptions-swift.enum.md).

## Mentioned In

- [Running Intel Binaries in Linux VMs](../running-intel-binaries-in-linux-vms.md)

## See Also

### Setting the ahead of time (AOT) caching options

- [cachingOptions](cachingoptions-swift.property.md): The value that enables translation caching and configures the socket communication type for Rosetta.
- [VZLinuxRosettaDirectoryShare.CachingOptions](cachingoptions-swift.enum.md): Socket values you specify to configure Rosetta’s caching capabilities.
