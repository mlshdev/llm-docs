> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1535628-mbuf_set_vlan_tag](https://developer.apple.com/documentation/kernel/1535628-mbuf_set_vlan_tag)

# mbuf_set_vlan_tag

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
errno_t mbuf_set_vlan_tag(mbuf_t mbuf, u_int16_t vlan);
```

## Parameters

- `mbuf`: The mbuf containing the packet.
- `vlan`: The protocol family of the aux data to add.

<a id="return_value"></a>

## Return Value

0 upon success otherwise the errno error.

<a id="discussion"></a>

## Discussion

This function is used by interfaces that support vlan tagging in hardware. This function will set properties in the mbuf to indicate which vlan the packet was received for.
