> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1535742-mbuf_pkthdr_len

# mbuf_pkthdr_len

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
size_t mbuf_pkthdr_len(const mbuf_t mbuf);
```

## Parameters

- `mbuf`: The mbuf containing the packet header with the length to be changed.

<a id="return_value"></a>

## Return Value

The length, in bytes, of the packet.

<a id="discussion"></a>

## Discussion

Returns the length as reported by the packet header.
