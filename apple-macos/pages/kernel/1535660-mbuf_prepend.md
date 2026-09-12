> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1535660-mbuf_prepend](https://developer.apple.com/documentation/kernel/1535660-mbuf_prepend)

# mbuf_prepend

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
errno_t mbuf_prepend(mbuf_t *mbuf, size_t len, mbuf_how_t how);
```

## Parameters

- `mbuf`: The mbuf to prepend data to. This may change if a new mbuf must be allocated or may be NULL if the operation fails.
- `len`: The length, in bytes, to be prepended to the mbuf.
- `how`: Blocking or non-blocking.

<a id="return_value"></a>

## Return Value

0 upon success otherwise the errno error.

<a id="discussion"></a>

## Discussion

Prepend len bytes to an mbuf. If there is space (mbuf_leadingspace \>= len), the mbuf's data ptr is changed and the same mbuf is returned. If there is no space, a new mbuf may be allocated and prepended to the mbuf chain. If the operation fails, the mbuf may be freed (\*mbuf will be NULL).
