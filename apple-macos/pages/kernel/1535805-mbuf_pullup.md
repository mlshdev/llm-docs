> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1535805-mbuf_pullup](https://developer.apple.com/documentation/kernel/1535805-mbuf_pullup)

# mbuf_pullup

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
errno_t mbuf_pullup(mbuf_t *mbuf, size_t len);
```

## Parameters

- `mbuf`: The mbuf in the chain the data should be contiguous in.
- `len`: The number of bytes to pull from the next mbuf(s).

<a id="return_value"></a>

## Return Value

0 upon success otherwise the errno error. In the case of an error, the mbuf chain has been freed.

<a id="discussion"></a>

## Discussion

Move the next len bytes in to mbuf from other mbufs in the chain. This is commonly used to get the IP and TCP or UDP header contiguous in the first mbuf. If mbuf_pullup fails, the entire mbuf chain will be freed.
