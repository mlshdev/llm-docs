> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1535722-mbuf_gethdr](https://developer.apple.com/documentation/kernel/1535722-mbuf_gethdr)

# mbuf_gethdr

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
errno_t mbuf_gethdr(mbuf_how_t how, mbuf_type_t type, mbuf_t *mbuf);
```

## Parameters

- `how`: Blocking or non-blocking.
- `type`: The type of the mbuf.
- `mbuf`: The mbuf.

<a id="return_value"></a>

## Return Value

0 on success, errno error on failure.

<a id="discussion"></a>

## Discussion

Allocates an mbuf without a cluster for external data. Sets a flag to indicate there is a packet header and initializes the packet header.
