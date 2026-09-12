> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1535617-mbuf_pulldown](https://developer.apple.com/documentation/kernel/1535617-mbuf_pulldown)

# mbuf_pulldown

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
errno_t mbuf_pulldown(mbuf_t src, size_t *offset, size_t length, mbuf_t *location);
```

## Parameters

- `src`: The start of the mbuf chain.
- `offset`: Pass in a pointer to a value with the offset of the data you're interested in making contiguous. Upon success, this will be overwritten with the offset from the mbuf returned in location.
- `length`: The length of data that should be made contiguous.
- `location`: Upon success, \*location will be the mbuf the data is in.

<a id="return_value"></a>

## Return Value

0 upon success otherwise the errno error.

<a id="discussion"></a>

## Discussion

Make length bytes at offset in the mbuf chain contiguous. Nothing before offset bytes in the chain will be modified. Upon return, location will be the mbuf the data is contiguous in and offset will be the offset in that mbuf at which the data is located. In the case of a failure, the mbuf chain will be freed.
