> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1535744-mbuf_settype](https://developer.apple.com/documentation/kernel/1535744-mbuf_settype)

# mbuf_settype

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
errno_t mbuf_settype(mbuf_t mbuf, mbuf_type_t new_type);
```

## Parameters

- `mbuf`: The mbuf.
- `new_type`: The new type.

<a id="return_value"></a>

## Return Value

0 upon success otherwise the errno error.

<a id="discussion"></a>

## Discussion

Sets the type of mbuf.
