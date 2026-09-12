> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1644527-anonymous/mbuf_promisc](https://developer.apple.com/documentation/kernel/1644527-anonymous/mbuf_promisc)

# MBUF_PROMISC

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
MBUF_PROMISC = 0x2000
```

<a id="discussion"></a>

## Discussion

Indicates this packet was only received because the interface is in promiscuous mode. This should be set by the demux function. These packets will be discarded after being passed to any interface filters.
