> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1535672-mbuf_setnext

# mbuf_setnext

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
errno_t mbuf_setnext(mbuf_t mbuf, mbuf_t next);
```

## Parameters

- `mbuf`: The mbuf.
- `next`: The new next mbuf.

<a id="return_value"></a>

## Return Value

0 upon success otherwise the errno error.

<a id="discussion"></a>

## Discussion

Sets the next mbuf in the chain.
