> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/dhcpinfogetoptiondata](https://developer.apple.com/documentation/systemconfiguration/dhcpinfogetoptiondata)

# DHCPInfoGetOptionData

**Interface language:** Objective-C

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Returns DHCP option data, if present.

## Declaration

```objectivec
CFDataRefDHCPInfoGetOptionData(CFDictionaryRef info, UInt8 code);
```

## Parameters

- `info`: The DHCP information dictionary returned by [SCDynamicStoreCopyDHCPInfo](scdynamicstorecopydhcpinfo.md). Do not pass in a `NULL` dictionary.
- `code`: The DHCP option code to get data for. (See RFC 2132 for more information on this code.)

<a id="return-value"></a>

## Return Value

The DHCP option data if present, or `NULL` if the data is not present. You must not release the return value.

## See Also

### Group

- [SCDynamicStoreCopyDHCPInfo](scdynamicstorecopydhcpinfo.md): Returns the DHCP information for the specified service.
- [DHCPInfoGetLeaseStartTime](dhcpinfogetleasestarttime.md): Returns the lease start time data.
