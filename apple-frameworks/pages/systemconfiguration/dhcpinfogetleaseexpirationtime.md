> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/dhcpinfogetleaseexpirationtime](https://developer.apple.com/documentation/systemconfiguration/dhcpinfogetleaseexpirationtime)

# DHCPInfoGetLeaseExpirationTime

**Interface language:** Objective-C

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.8+

Returns the lease expiration time data.

## Declaration

```objectivec
CFDateRefDHCPInfoGetLeaseExpirationTime(CFDictionaryRef info);
```

## See Also

### Functions

- [CNCopySupportedInterfaces](cncopysupportedinterfaces.md): Returns the names of all network interfaces Captive Network Support is monitoring.
- [CNMarkPortalOffline](cnmarkportaloffline.md): Deprecated. Informs Captive Network Support that the device is not authenticated on a captive network.
- [CNMarkPortalOnline](cnmarkportalonline.md): Deprecated. Informs Captive Network Support that the application has successfully authenticated the device to a captive network. Captive Network Support notifies the rest of the system that WiFi is a viable interface.
- [CNSetSupportedSSIDs](cnsetsupportedssids.md): Deprecated. Specifies an updated list of captive network SSIDs that the application performs authentication on.
