> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1535698-mbuf_get_csum_requested

# mbuf_get_csum_requested

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
errno_t mbuf_get_csum_requested(mbuf_t mbuf, mbuf_csum_request_flags_t *request, u_int32_t *value);
```

## Parameters

- `mbuf`: The mbuf containing the packet.
- `request`: Flags indicating which checksums are being requested for this packet.
- `value`: This parameter is currently unsupported.

<a id="return_value"></a>

## Return Value

0 upon success otherwise the errno error.

<a id="discussion"></a>

## Discussion

This function is used by the driver to determine which checksum operations should be performed in hardware.
