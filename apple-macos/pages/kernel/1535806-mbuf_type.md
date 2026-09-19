> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1535806-mbuf_type

# mbuf_type

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
mbuf_type_t mbuf_type(const mbuf_t mbuf);
```

## Parameters

- `mbuf`: The mbuf.

<a id="return_value"></a>

## Return Value

The type.

<a id="discussion"></a>

## Discussion

Gets the type of mbuf.
