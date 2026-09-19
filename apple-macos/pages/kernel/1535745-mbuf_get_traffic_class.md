> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1535745-mbuf_get_traffic_class

# mbuf_get_traffic_class

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
mbuf_traffic_class_t mbuf_get_traffic_class(mbuf_t mbuf);
```

## Parameters

- `mbuf`: The mbuf to get the traffic class of.

<a id="return_value"></a>

## Return Value

The traffic class

<a id="discussion"></a>

## Discussion

Get the traffic class of an mbuf packet
