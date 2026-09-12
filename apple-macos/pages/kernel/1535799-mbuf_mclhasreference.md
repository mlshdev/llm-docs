> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1535799-mbuf_mclhasreference](https://developer.apple.com/documentation/kernel/1535799-mbuf_mclhasreference)

# mbuf_mclhasreference

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
int mbuf_mclhasreference(mbuf_t mbuf);
```

## Parameters

- `mbuf`: The mbuf with the cluster to test.

<a id="return_value"></a>

## Return Value

0 if there is no reference by another mbuf, 1 otherwise.

<a id="discussion"></a>

## Discussion

Check if a cluster of an mbuf is referenced by another mbuf. References may be taken, for example, as a result of a call to mbuf_split or mbuf_copym
