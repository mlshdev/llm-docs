> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1535784-mbuf_copydata](https://developer.apple.com/documentation/kernel/1535784-mbuf_copydata)

# mbuf_copydata

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
errno_t mbuf_copydata(const mbuf_t mbuf, size_t offset, size_t length, void *out_data);
```

## Parameters

- `mbuf`: The mbuf chain to copy data out of.
- `offset`: The offset in to the mbuf to start copying.
- `length`: The number of bytes to copy.
- `out_data`: A pointer to the location where the data will be copied.

<a id="return_value"></a>

## Return Value

0 upon success otherwise the errno error.

<a id="discussion"></a>

## Discussion

Copies data out of an mbuf in to a specified buffer. If the data is stored in a chain of mbufs, the data will be copied from each mbuf in the chain until length bytes have been copied.
