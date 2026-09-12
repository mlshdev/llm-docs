> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1535762-mbuf_split](https://developer.apple.com/documentation/kernel/1535762-mbuf_split)

# mbuf_split

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
errno_t mbuf_split(mbuf_t src, size_t offset, mbuf_how_t how, mbuf_t *new_mbuf);
```

## Parameters

- `src`: The mbuf to be split.
- `offset`: The offset in the buffer where the mbuf should be split.
- `how`: Blocking or non-blocking.
- `new_mbuf`: Upon success, the second half of the split mbuf chain.

<a id="return_value"></a>

## Return Value

0 upon success otherwise the errno error. In the case of failure, the original mbuf chain passed in to src will be preserved.

<a id="discussion"></a>

## Discussion

Split an mbuf chain at a specific offset.
