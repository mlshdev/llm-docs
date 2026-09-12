> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scdynamicstorecopydhcpinfo](https://developer.apple.com/documentation/systemconfiguration/scdynamicstorecopydhcpinfo)

# SCDynamicStoreCopyDHCPInfo

**Interface language:** Objective-C

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Returns the DHCP information for the specified service.

## Declaration

```objectivec
CFDictionaryRefSCDynamicStoreCopyDHCPInfo(SCDynamicStoreRef store, CFStringRef serviceID);
```

## Parameters

- `store`: The dynamic store session that should be used for communication with the server. If this is `NULL`, a temporary session is used.
- `serviceID`: The service ID. Pass `NULL` to retrieve information for the primary service.

<a id="return-value"></a>

## Return Value

A dictionary containing DHCP information if successful, or `NULL` if unsuccessful. You must use the [CFRelease](../corefoundation/cfrelease.md) function to release return values other than `NULL`.

<a id="Discussion"></a>

## Discussion

Use [DHCPInfoGetOptionData](dhcpinfogetoptiondata.md) to extract individual options from the dictionary returned by this function.

## See Also

### Group

- [DHCPInfoGetOptionData](dhcpinfogetoptiondata.md): Returns DHCP option data, if present.
- [DHCPInfoGetLeaseStartTime](dhcpinfogetleasestarttime.md): Returns the lease start time data.
