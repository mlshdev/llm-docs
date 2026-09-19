> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1535714-mbuf_freem

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
