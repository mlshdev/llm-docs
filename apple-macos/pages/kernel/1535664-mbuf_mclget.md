> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1535664-mbuf_mclget](https://developer.apple.com/documentation/kernel/1535664-mbuf_mclget)

# mbuf_mclget

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
errno_t mbuf_mclget(mbuf_how_t how, mbuf_type_t type, mbuf_t *mbuf);
```

## Parameters

- `how`: Blocking or non-blocking.
- `type`: The type of the mbuf.
- `mbuf`: The mbuf the cluster will be attached to.

<a id="return_value"></a>

## Return Value

0 on success, errno error on failure. If you specified NULL for the mbuf, any intermediate mbuf that may have been allocated will be freed. If you specify an mbuf value in \*mbuf, mbuf_mclget will not free it.

<a id="discussion"></a>

## Discussion

Allocate a cluster and attach it to an mbuf for use as external data. If mbuf points to a NULL mbuf_t, an mbuf will be allocated for you. If mbuf points to a non-NULL mbuf_t, mbuf_mclget may return a different mbuf_t than the one you passed in.
