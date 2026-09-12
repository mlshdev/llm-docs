> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/cnsetsupportedssids](https://developer.apple.com/documentation/systemconfiguration/cnsetsupportedssids)

# CNSetSupportedSSIDs

**Interface language:** Objective-C

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** iOS 4.0+ (deprecated in 9.0) · iPadOS 4.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ · visionOS 1.0+ (deprecated in 1.0)

Specifies an updated list of captive network SSIDs that the application performs authentication on.

## Declaration

```objectivec
Boolean CNSetSupportedSSIDs(CFArrayRef ssidArray);
```

## Parameters

- `ssidArray`: An array of `CFString` objects representing the SSIDs the application supports.

<a id="return-value"></a>

## Return Value

`TRUE` if the list is successfully updated; otherwise, `FALSE`.

<a id="Discussion"></a>

## Discussion

The list is maintained for as long as the application is installed.

Providing a new list replaces any earlier list the application has provided.

## See Also

### Functions

- [CNCopySupportedInterfaces](cncopysupportedinterfaces.md): Returns the names of all network interfaces Captive Network Support is monitoring.
- [CNMarkPortalOffline](cnmarkportaloffline.md): Deprecated. Informs Captive Network Support that the device is not authenticated on a captive network.
- [CNMarkPortalOnline](cnmarkportalonline.md): Deprecated. Informs Captive Network Support that the application has successfully authenticated the device to a captive network. Captive Network Support notifies the rest of the system that WiFi is a viable interface.
- [DHCPInfoGetLeaseExpirationTime](dhcpinfogetleaseexpirationtime.md): Returns the lease expiration time data.
