> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1535686-mbuf_setflags_mask](https://developer.apple.com/documentation/kernel/1535686-mbuf_setflags_mask)

# mbuf_setflags_mask

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
errno_t mbuf_setflags_mask(mbuf_t mbuf, mbuf_flags_t flags, mbuf_flags_t mask);
```

## Parameters

- `mbuf`: The mbuf.
- `flags`: The flags that should be set or cleared. Certain flags such as MBUF_EXT cannot be altered.
- `mask`: The mask controlling which flags will be modified.

<a id="return_value"></a>

## Return Value

0 upon success otherwise the errno error.

<a id="discussion"></a>

## Discussion

Useful for setting or clearing individual flags. Easier than calling mbuf_setflags(m, mbuf_flags(m) | M_FLAG).
