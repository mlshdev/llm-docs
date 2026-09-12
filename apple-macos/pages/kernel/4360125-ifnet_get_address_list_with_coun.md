> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/4360125-ifnet_get_address_list_with_coun](https://developer.apple.com/documentation/kernel/4360125-ifnet_get_address_list_with_coun)

# ifnet_get_address_list_with_count

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
errno_t ifnet_get_address_list_with_count(ifnet_t interface, ifaddr_t **addresses, uint16_t *addresses_count);
```
