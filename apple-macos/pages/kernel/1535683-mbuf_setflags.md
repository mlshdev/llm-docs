> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1535683-mbuf_setflags](https://developer.apple.com/documentation/kernel/1535683-mbuf_setflags)

# mbuf_setflags

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
errno_t mbuf_setflags(mbuf_t mbuf, mbuf_flags_t flags);
```

## Parameters

- `mbuf`: The mbuf.
- `flags`: The flags that should be set, all other flags will be cleared. Certain flags such as MBUF_EXT cannot be altered.

<a id="return_value"></a>

## Return Value

0 upon success otherwise the errno error.

<a id="discussion"></a>

## Discussion

Sets the set of set flags.
