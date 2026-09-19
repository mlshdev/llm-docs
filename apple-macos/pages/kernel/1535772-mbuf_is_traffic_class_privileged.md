> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1535772-mbuf_is_traffic_class_privileged

# mbuf_is_traffic_class_privileged

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
int mbuf_is_traffic_class_privileged(mbuf_t mbuf);
```

## Parameters

- `mbuf`: The mbuf to retrieve the status from.

<a id="return_value"></a>

## Return Value

Non-zero if privileged, 0 otherwise.

<a id="discussion"></a>

## Discussion

Returns the privileged status of the traffic class of the packet specified by the mbuf.
