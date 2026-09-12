> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1535764-mbuf_inet6_cksum](https://developer.apple.com/documentation/kernel/1535764-mbuf_inet6_cksum)

# mbuf_inet6_cksum

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
errno_t mbuf_inet6_cksum(mbuf_t mbuf, int protocol, u_int32_t offset, u_int32_t length, u_int16_t *csum);
```

## Parameters

- `mbuf`: The mbuf (or chain of mbufs) containing the packet.
- `protocol`: A zero or non-zero value. A non-zero value specifies the transport protocol used for pseudo header checksum.
- `offset`: A zero or non-zero value; if the latter, it specifies the offset of the transport header from the beginning of mbuf.
- `length`: The total (non-zero) length of the transport segment.
- `csum`: Pointer to the checksum variable; upon success, this routine will return the calculated Internet checksum through this variable. The caller must set it to a non-NULL value.

<a id="return_value"></a>

## Return Value

0 upon success otherwise the errno error.

<a id="discussion"></a>

## Discussion

@discussions Calculates 16-bit 1's complement Internet checksum of the transport segment with or without the pseudo header checksum of a given IPv6 packet. If the caller specifies a non-zero transport protocol, the checksum returned will also include the pseudo header checksum for the corresponding transport header. Otherwise, no header parsing will be done and the caller may use this to calculate the Internet checksum of an arbitrary span of data.

This routine does not modify the contents of the packet. If the caller specifies a non-zero protocol and/or offset, the routine expects the complete protocol header(s) to be present at the beginning of the first mbuf.
