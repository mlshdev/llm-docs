> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1535699-mbuf_get_mlen](https://developer.apple.com/documentation/kernel/1535699-mbuf_get_mlen)

# mbuf_get_mlen

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
u_int32_t mbuf_get_mlen(void);
```

<a id="return_value"></a>

## Return Value

The number of bytes of available data.

<a id="discussion"></a>

## Discussion

This routine returns the number of data bytes in a normal mbuf, i.e. an mbuf that is not a packet header, nor one with an external cluster attached to it. This is equivalent to the legacy MLEN macro.
