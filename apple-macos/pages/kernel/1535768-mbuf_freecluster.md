> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1535768-mbuf_freecluster](https://developer.apple.com/documentation/kernel/1535768-mbuf_freecluster)

# mbuf_freecluster

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
void mbuf_freecluster(caddr_t addr, size_t size);
```

## Parameters

- `addr`: The address of the cluster.
- `size`: The actual size of the cluster.

<a id="discussion"></a>

## Discussion

Free a cluster that was previously allocated by a call to mbuf_alloccluster(). The caller must pass the actual size of the cluster as returned by mbuf_alloccluster(), which at this point must be either 2048, 4096 or 16384 bytes.
