> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1535656-mbuf_setdata](https://developer.apple.com/documentation/kernel/1535656-mbuf_setdata)

# mbuf_setdata

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
errno_t mbuf_setdata(mbuf_t mbuf, void *data, size_t len);
```

## Parameters

- `mbuf`: The mbuf.
- `data`: The new pointer value for data.
- `len`: The new length of data in the mbuf.

<a id="return_value"></a>

## Return Value

0 on success, errno error on failure.

<a id="discussion"></a>

## Discussion

Sets the data and length values for an mbuf. The data value must be in a valid range. In the case of an mbuf with a cluster, the data value must point to a location in the cluster and the data value plus the length, must be less than the end of the cluster. For data embedded directly in an mbuf (no cluster), the data value must fall somewhere between the start and end of the data area in the mbuf and the data + length must also be in the same range.
