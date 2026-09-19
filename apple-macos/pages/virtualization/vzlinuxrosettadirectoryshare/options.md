> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/virtualization/vzlinuxrosettadirectoryshare/options

# options

**Interface language:** Objective-C

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The value that enables translation caching and configures the socket communication type for Rosetta.

## Declaration

```objectivec
@property (strong, nullable) VZLinuxRosettaCachingOptions * options;
```

## See Also

### Setting the ahead of time (AOT) caching options

- [VZLinuxRosettaAbstractSocketCachingOptions](../vzlinuxrosettaabstractsocketcachingoptions.md): Caching options for an abstract socket.
- [VZLinuxRosettaCachingOptions](../vzlinuxrosettacachingoptions.md): An abstract class that defines UNIX socket-based caching options for Rosetta.
- [VZLinuxRosettaUnixSocketCachingOptions](../vzlinuxrosettaunixsocketcachingoptions.md): An object that represents caching options for a UNIX domain socket.
