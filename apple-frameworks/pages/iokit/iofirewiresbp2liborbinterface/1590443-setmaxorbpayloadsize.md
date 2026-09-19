> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iofirewiresbp2liborbinterface/1590443-setmaxorbpayloadsize

# setMaxORBPayloadSize

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets max payload size for the ORB.

## Declaration

```objectivec
void (*setMaxORBPayloadSize)(void *self, UInt32 size);
```

## Parameters

- `self`: Pointer to IOFireWireSBP2LibORBInterface.
- `size`: The maximum payload size in bytes.

<a id="discussion"></a>

## Discussion

This sets the maximum payload size for this ORB only. This size is clipped by the global max payload size set in the login object.
