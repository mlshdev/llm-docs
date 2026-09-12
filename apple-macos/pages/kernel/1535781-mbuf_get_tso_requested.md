> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1535781-mbuf_get_tso_requested](https://developer.apple.com/documentation/kernel/1535781-mbuf_get_tso_requested)

# mbuf_get_tso_requested

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
errno_t mbuf_get_tso_requested(mbuf_t mbuf, mbuf_tso_request_flags_t *request, u_int32_t *mss);
```

## Parameters

- `mbuf`: The mbuf containing the packet.
- `request`: Flags indicating which values are being requested for this packet.
- `value`: The requested value.

<a id="return_value"></a>

## Return Value

0 upon success otherwise the errno error.

<a id="discussion"></a>

## Discussion

This function is used by the driver to determine which checksum operations should be performed in hardware.
