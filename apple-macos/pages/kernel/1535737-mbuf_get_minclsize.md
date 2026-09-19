> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1535737-mbuf_get_minclsize

# mbuf_get_minclsize

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
u_int32_t mbuf_get_minclsize(void);
```

<a id="return_value"></a>

## Return Value

The minimum number of bytes before a cluster will be used.

<a id="discussion"></a>

## Discussion

This routine returns the minimum number of data bytes before an external cluster is used. This is equivalent to the legacy MINCLSIZE macro.
