> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1535627-mbuf_next](https://developer.apple.com/documentation/kernel/1535627-mbuf_next)

# mbuf_next

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
mbuf_t mbuf_next(const mbuf_t mbuf);
```

## Parameters

- `mbuf`: The mbuf.

<a id="return_value"></a>

## Return Value

The next mbuf in the chain.

<a id="discussion"></a>

## Discussion

Returns the next mbuf in the chain.
