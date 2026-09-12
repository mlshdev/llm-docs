> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewiresbp2liborbinterface/1590443-setmaxorbpayloadsize](https://developer.apple.com/documentation/iokit/iofirewiresbp2liborbinterface/1590443-setmaxorbpayloadsize)

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
