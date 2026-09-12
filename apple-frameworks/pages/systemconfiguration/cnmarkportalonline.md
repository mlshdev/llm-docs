> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/cnmarkportalonline](https://developer.apple.com/documentation/systemconfiguration/cnmarkportalonline)

# CNMarkPortalOnline

**Interface language:** Objective-C

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** iOS 4.0+ (deprecated in 9.0) · iPadOS 4.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ · visionOS 1.0+ (deprecated in 1.0)

Informs Captive Network Support that the application has successfully authenticated the device to a captive network. Captive Network Support notifies the rest of the system that WiFi is a viable interface.

## Declaration

```objectivec
Boolean CNMarkPortalOnline(CFStringRef interfaceName);
```

## Parameters

- `interfaceName`: The name of the interface that is now online.

<a id="return-value"></a>

## Return Value

`TRUE` if the operation succeeded; otherwise, `FALSE`.

## See Also

### Functions

- [CNCopySupportedInterfaces](cncopysupportedinterfaces.md): Returns the names of all network interfaces Captive Network Support is monitoring.
- [CNMarkPortalOffline](cnmarkportaloffline.md): Deprecated. Informs Captive Network Support that the device is not authenticated on a captive network.
- [CNSetSupportedSSIDs](cnsetsupportedssids.md): Deprecated. Specifies an updated list of captive network SSIDs that the application performs authentication on.
- [DHCPInfoGetLeaseExpirationTime](dhcpinfogetleaseexpirationtime.md): Returns the lease expiration time data.
