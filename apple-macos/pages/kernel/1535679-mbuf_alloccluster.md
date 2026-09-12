> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1535679-mbuf_alloccluster](https://developer.apple.com/documentation/kernel/1535679-mbuf_alloccluster)

# mbuf_alloccluster

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
errno_t mbuf_alloccluster(mbuf_how_t how, size_t *size, char **addr);
```

## Parameters

- `how`: Blocking or non-blocking.
- `size`: Pointer to size of requested cluster. Sizes up to 2048 will be rounded up to 2048; sizes greater than 2048 and up to 4096 will be rounded up to 4096. Sizes greater than 4096 will be rounded up to 16384.
- `addr`: Pointer to the address of the requested cluster.

<a id="return_value"></a>

## Return Value

0 on success or ENOMEM if failure. If the caller requests greater than 4096 bytes and the system is unable to fulfill the request due to the lack of jumbo clusters support based on the configuration, this routine will return ENOTSUP. In this case, the caller is advised to use 4096 bytes or smaller during subseqent requests.

<a id="discussion"></a>

## Discussion

Allocate a cluster that can be later attached to an mbuf by calling mbuf_attachcluster(). The allocated cluster can also be freed (without being attached to an mbuf) by calling mbuf_freecluster(). At the moment this routine will either return a cluster of 2048, 4096 or 16384 bytes depending on the requested size. Note that clusters greater than 4096 bytes might not be available in all configurations; the caller must additionally check for ENOTSUP (see below).
