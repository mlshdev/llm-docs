> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1535684-mbuf_free](https://developer.apple.com/documentation/kernel/1535684-mbuf_free)

# mbuf_free

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
mbuf_t mbuf_free(mbuf_t mbuf);
```

## Parameters

- `mbuf`: The mbuf to free.

<a id="return_value"></a>

## Return Value

The next mbuf in the chain.

<a id="discussion"></a>

## Discussion

Frees a single mbuf. Not commonly used because it doesn't touch the rest of the mbufs on the chain.
