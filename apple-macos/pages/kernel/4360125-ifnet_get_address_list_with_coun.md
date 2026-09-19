> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/4360125-ifnet_get_address_list_with_coun

# ifnet_get_address_list_with_count

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
errno_t ifnet_get_address_list_with_count(ifnet_t interface, ifaddr_t **addresses, uint16_t *addresses_count);
```
