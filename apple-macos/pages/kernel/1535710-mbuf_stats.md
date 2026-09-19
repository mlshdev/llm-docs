> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1535710-mbuf_stats

# mbuf_stats

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
void mbuf_stats(struct mbuf_stat *stats);
```

## Parameters

- `stats`: Storage to copy the stats in to.

<a id="discussion"></a>

## Discussion

Get the mbuf statistics.
