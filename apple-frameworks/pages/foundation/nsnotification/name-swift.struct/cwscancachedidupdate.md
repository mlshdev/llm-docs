> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/name-swift.struct/cwscancachedidupdate](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/cwscancachedidupdate)

# CWScanCacheDidUpdate

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** macOS 10.7+ (deprecated in 10.10)

> Use -\[CWWiFiClient startMonitoringEventWithType:error:\] with the CWEventTypeScanCacheUpdated event type

## Declaration

```swift
static let CWScanCacheDidUpdate: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

Posted when new entries are added to the scan cache, or existing entries are updated with more current information. The *object* for this notification is the corresponding BSD interface name. This notification does not contain a *userInfo* dictionary.

## See Also

### Core WLAN

- [CWBSSIDDidChange](cwbssiddidchange.md): Deprecated.
- [CWCountryCodeDidChange](cwcountrycodedidchange.md): Deprecated.
- [CWLinkDidChange](cwlinkdidchange.md): Deprecated.
- [CWLinkQualityDidChange](cwlinkqualitydidchange.md): Deprecated.
- [CWModeDidChange](cwmodedidchange.md): Deprecated.
- [CWPowerDidChange](cwpowerdidchange.md): Deprecated.
- [CWSSIDDidChange](cwssiddidchange.md): Deprecated.
