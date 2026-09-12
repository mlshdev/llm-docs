> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/name-swift.struct/cwpowerdidchange](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/cwpowerdidchange)

# CWPowerDidChange

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** macOS 10.6+ (deprecated in 10.10)

> Use -\[CWWiFiClient startMonitoringEventWithType:error:\] with the CWEventTypePowerDidChange event type

## Declaration

```swift
static let CWPowerDidChange: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

Posted when the power state of any WLAN interface changes. The *object* for this notification is the corresponding BSD interface name. This notification does not contain a *userInfo* dictionary.

## See Also

### Core WLAN

- [CWBSSIDDidChange](cwbssiddidchange.md): Deprecated.
- [CWCountryCodeDidChange](cwcountrycodedidchange.md): Deprecated.
- [CWLinkDidChange](cwlinkdidchange.md): Deprecated.
- [CWLinkQualityDidChange](cwlinkqualitydidchange.md): Deprecated.
- [CWModeDidChange](cwmodedidchange.md): Deprecated.
- [CWSSIDDidChange](cwssiddidchange.md): Deprecated.
- [CWScanCacheDidUpdate](cwscancachedidupdate.md): Deprecated.
