> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/dhcpinfogetleasestarttime](https://developer.apple.com/documentation/systemconfiguration/dhcpinfogetleasestarttime)

# DHCPInfoGetLeaseStartTime

**Interface language:** Objective-C

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Returns the lease start time data.

## Declaration

```objectivec
CFDateRefDHCPInfoGetLeaseStartTime(CFDictionaryRef info);
```

## Parameters

- `info`: The DHCP information dictionary returned by [SCDynamicStoreCopyDHCPInfo](scdynamicstorecopydhcpinfo.md). Do not pass in a `NULL` dictionary.

<a id="return-value"></a>

## Return Value

Data that corresponds to the lease start time, if this information is present, or `NULL` if the information is not present or if the configuration method is not DHCP.

## See Also

### Group

- [SCDynamicStoreCopyDHCPInfo](scdynamicstorecopydhcpinfo.md): Returns the DHCP information for the specified service.
- [DHCPInfoGetOptionData](dhcpinfogetoptiondata.md): Returns DHCP option data, if present.
