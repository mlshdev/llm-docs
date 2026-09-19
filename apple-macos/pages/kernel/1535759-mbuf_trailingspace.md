> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1535759-mbuf_trailingspace

# mbuf_trailingspace

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
size_t mbuf_trailingspace(const mbuf_t mbuf);
```

## Parameters

- `mbuf`: The mbuf.

<a id="return_value"></a>

## Return Value

The number of unused bytes following the current data.

<a id="discussion"></a>

## Discussion

Determines the space available in the mbuf following the current data.
