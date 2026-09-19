> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1535682-mbuf_pkthdr_adjustlen

# mbuf_pkthdr_adjustlen

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
void mbuf_pkthdr_adjustlen(mbuf_t mbuf, int amount);
```

## Parameters

- `mbuf`: The mbuf containing the packet header.
- `amount`: The number of bytes to adjust the packet header length field by.

<a id="discussion"></a>

## Discussion

Adjusts the length of the packet in the packet header.
