> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1535646-mbuf_pkthdr_setlen](https://developer.apple.com/documentation/kernel/1535646-mbuf_pkthdr_setlen)

# mbuf_pkthdr_setlen

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
void mbuf_pkthdr_setlen(mbuf_t mbuf, size_t len);
```

## Parameters

- `mbuf`: The mbuf containing the packet header.
- `len`: The new length of the packet.

<a id="discussion"></a>

## Discussion

Sets the length of the packet in the packet header.
