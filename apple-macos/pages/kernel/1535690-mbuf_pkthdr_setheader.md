> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1535690-mbuf_pkthdr_setheader

# mbuf_pkthdr_setheader

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
void mbuf_pkthdr_setheader(mbuf_t mbuf, void *header);
```

## Parameters

- `mbuf`: The mbuf containing the packet header.
- `ifnet`: A pointer to the header.

<a id="return_value"></a>

## Return Value

0 upon success otherwise the errno error.

<a id="discussion"></a>

## Discussion

Sets the pointer to the packet header.
