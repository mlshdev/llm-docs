> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/cncopysupportedinterfaces](https://developer.apple.com/documentation/systemconfiguration/cncopysupportedinterfaces)

# CNCopySupportedInterfaces

**Interface language:** Objective-C

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+

Returns the names of all network interfaces Captive Network Support is monitoring.

## Declaration

```objectivec
CFArrayRefCNCopySupportedInterfaces();
```

<a id="return-value"></a>

## Return Value

The network interface names, as an array of [CFStringRef](../corefoundation/cfstring.md) objects. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Functions

- [CNMarkPortalOffline](cnmarkportaloffline.md): Deprecated. Informs Captive Network Support that the device is not authenticated on a captive network.
- [CNMarkPortalOnline](cnmarkportalonline.md): Deprecated. Informs Captive Network Support that the application has successfully authenticated the device to a captive network. Captive Network Support notifies the rest of the system that WiFi is a viable interface.
- [CNSetSupportedSSIDs](cnsetsupportedssids.md): Deprecated. Specifies an updated list of captive network SSIDs that the application performs authentication on.
- [DHCPInfoGetLeaseExpirationTime](dhcpinfogetleaseexpirationtime.md): Returns the lease expiration time data.
