> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1644523-anonymous/mbuf_dontwait

# MBUF_DONTWAIT

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
MBUF_DONTWAIT = 1
```

<a id="discussion"></a>

## Discussion

Don't allow the mbuf allocation call to block, if blocking is necessary fail and return immediately.
