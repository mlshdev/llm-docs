> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1535789-mbuf_set_csum_performed](https://developer.apple.com/documentation/kernel/1535789-mbuf_set_csum_performed)

# mbuf_set_csum_performed

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
errno_t mbuf_set_csum_performed(mbuf_t mbuf, mbuf_csum_performed_flags_t flags, u_int32_t value);
```

## Parameters

- `mbuf`: The mbuf containing the packet.
- `flags`: Flags indicating which hardware checksum operations were performed.
- `value`: If the MBUF_CSUM_DID_DATA flag is set, value should be set to the value of the TCP or UDP header as calculated by the hardware.

<a id="return_value"></a>

## Return Value

0 upon success otherwise the errno error.

<a id="discussion"></a>

## Discussion

This is used by the driver to indicate to the stack which checksum operations were performed in hardware.
