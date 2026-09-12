> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1535803-mbuf_get_vlan_tag](https://developer.apple.com/documentation/kernel/1535803-mbuf_get_vlan_tag)

# mbuf_get_vlan_tag

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
errno_t mbuf_get_vlan_tag(mbuf_t mbuf, u_int16_t *vlan);
```

## Parameters

- `mbuf`: The mbuf containing the packet.
- `vlan`: The protocol family of the aux data to add.

<a id="return_value"></a>

## Return Value

0 upon success otherwise the errno error. ENXIO indicates that the vlan tag is not set.

<a id="discussion"></a>

## Discussion

This function is used by drivers that support hardware vlan tagging to determine which vlan this packet belongs to. To differentiate between the case where the vlan tag is zero and the case where there is no vlan tag, this function will return ENXIO when there is no vlan.
