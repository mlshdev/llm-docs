> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1535696-mbuf_clear_vlan_tag](https://developer.apple.com/documentation/kernel/1535696-mbuf_clear_vlan_tag)

# mbuf_clear_vlan_tag

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
errno_t mbuf_clear_vlan_tag(mbuf_t mbuf);
```

## Parameters

- `mbuf`: The mbuf containing the packet.

<a id="return_value"></a>

## Return Value

0 upon success otherwise the errno error.

<a id="discussion"></a>

## Discussion

This function will clear any vlan tag associated with the mbuf.
