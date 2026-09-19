> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1535645-mbuf_copy_pkthdr

# mbuf_copy_pkthdr

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
errno_t mbuf_copy_pkthdr(mbuf_t dest, const mbuf_t src);
```

## Parameters

- `src`: The mbuf from which the packet header will be copied.
- `mbuf`: The mbuf to which the packet header will be copied.

<a id="return_value"></a>

## Return Value

0 upon success otherwise the errno error.

<a id="discussion"></a>

## Discussion

Copies the packet header from src to dest.
