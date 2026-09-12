> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1535687-mbuf_get_mhlen](https://developer.apple.com/documentation/kernel/1535687-mbuf_get_mhlen)

# mbuf_get_mhlen

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
u_int32_t mbuf_get_mhlen(void);
```

<a id="return_value"></a>

## Return Value

The number of bytes of available data.

<a id="discussion"></a>

## Discussion

This routine returns the number of data bytes in a packet header mbuf. This is equivalent to the legacy MHLEN macro.
