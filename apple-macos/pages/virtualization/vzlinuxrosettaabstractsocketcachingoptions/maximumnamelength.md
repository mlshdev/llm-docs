> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/virtualization/vzlinuxrosettaabstractsocketcachingoptions/maximumnamelength

# maximumNameLength

**Interface language:** Objective-C

**Framework:** Virtualization  
**Kind:** Type Property  
**Availability:** macOS 14.0+

The maximum length of name that the framework allows.

## Declaration

```objectivec
@property (class, readonly) NSUInteger maximumNameLength;
```

<a id="Discussion"></a>

## Discussion

The `sockaddr_un` structure in Linux defines the maximum length for the path [name](name.md).
