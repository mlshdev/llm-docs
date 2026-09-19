> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1535738-mbuf_setnextpkt

# mbuf_setnextpkt

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
void mbuf_setnextpkt(mbuf_t mbuf, mbuf_t nextpkt);
```

## Parameters

- `mbuf`: The mbuf.
- `nextpkt`: The new next packet.

<a id="discussion"></a>

## Discussion

Sets the next packet attached to this mbuf.
