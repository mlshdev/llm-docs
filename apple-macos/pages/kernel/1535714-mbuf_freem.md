> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1535714-mbuf_freem](https://developer.apple.com/documentation/kernel/1535714-mbuf_freem)

# mbuf_freem

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
void mbuf_freem(mbuf_t mbuf);
```

## Parameters

- `mbuf`: The first mbuf in the chain to free.

<a id="discussion"></a>

## Discussion

Frees a chain of mbufs link through mnext.
