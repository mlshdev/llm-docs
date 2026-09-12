> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1535724-mbuf_getpacket](https://developer.apple.com/documentation/kernel/1535724-mbuf_getpacket)

# mbuf_getpacket

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
errno_t mbuf_getpacket(mbuf_how_t how, mbuf_t *mbuf);
```

## Parameters

- `how`: Blocking or non-blocking.
- `mbuf`: Upon success, \*mbuf will be a reference to the new mbuf.

<a id="return_value"></a>

## Return Value

0 on success, errno error on failure.

<a id="discussion"></a>

## Discussion

Allocate an mbuf, allocate and attach a cluster, and set the packet header flag.
