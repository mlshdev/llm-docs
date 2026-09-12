> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewiresbp2liblogininterface/1590576-setmaxpayloadsize](https://developer.apple.com/documentation/iokit/iofirewiresbp2liblogininterface/1590576-setmaxpayloadsize)

# setMaxPayloadSize

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the maximum data transfer length for a normal command ORB.

## Declaration

```objectivec
void (*setMaxPayloadSize)(void *self, UInt32 size);
```

## Parameters

- `self`: Pointer to IOFireWireSBP2LibLoginInterface object.
- `size`: The desired maximum payload size in bytes.

<a id="discussion"></a>

## Discussion

Sets the maximum data transfer length for a normal command ORB. This value is the maximum for all ORBs sent to this LUN. This can be trimmed further on an ORB by ORB basis, by a similar call in the IOFireWireSBP2ORB itself.
