> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1535776-mbuf_setlen](https://developer.apple.com/documentation/kernel/1535776-mbuf_setlen)

# mbuf_setlen

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
void mbuf_setlen(mbuf_t mbuf, size_t len);
```

## Parameters

- `mbuf`: The mbuf.
- `len`: The new length.

<a id="return_value"></a>

## Return Value

0 upon success otherwise the errno error.

<a id="discussion"></a>

## Discussion

Sets the length of data in this packet. Be careful to not set the length over the space available in the mbuf.
