> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1535669-mbuf_adjustlen](https://developer.apple.com/documentation/kernel/1535669-mbuf_adjustlen)

# mbuf_adjustlen

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
errno_t mbuf_adjustlen(mbuf_t mbuf, int amount);
```

## Parameters

- `mbuf`: The mbuf to adjust.
- `amount`: The number of bytes increment the length by.

<a id="return_value"></a>

## Return Value

0 upon success otherwise the errno error.

<a id="discussion"></a>

## Discussion

Adds amount to the mbuf len. Verifies that the new length is valid (greater than or equal to zero and less than maximum amount of data that may be stored in the mbuf). This function will not adjust the packet header length field or affect any other mbufs in a chain.
