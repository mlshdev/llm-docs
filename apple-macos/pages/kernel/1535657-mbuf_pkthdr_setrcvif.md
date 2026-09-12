> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1535657-mbuf_pkthdr_setrcvif](https://developer.apple.com/documentation/kernel/1535657-mbuf_pkthdr_setrcvif)

# mbuf_pkthdr_setrcvif

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
errno_t mbuf_pkthdr_setrcvif(mbuf_t mbuf, ifnet_t ifp);
```

## Parameters

- `mbuf`: The mbuf containing the packet header.
- `ifnet`: A reference to an interface.

<a id="return_value"></a>

## Return Value

0 upon success otherwise the errno error.

<a id="discussion"></a>

## Discussion

Sets the interface the packet was received on.
