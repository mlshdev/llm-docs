> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/cwlinkqualitydidchange

# CWLinkQualityDidChange

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** macOS 10.7+ (deprecated in 10.10)

> Use -\[CWWiFiClient startMonitoringEventWithType:error:\] with the CWEventTypeLinkQualityDidChange event type

## Declaration

```swift
static let CWLinkQualityDidChange: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

Posted when the link quality for any WLAN interface changes. The *object* for this notification is the corresponding BSD interface name. The *userInfo* dictionary for this notification contains the current RSSI and current transmit rate for the given CoreWLAN interface.

## See Also

### Core WLAN

- [CWBSSIDDidChange](cwbssiddidchange.md): Deprecated.
- [CWCountryCodeDidChange](cwcountrycodedidchange.md): Deprecated.
- [CWLinkDidChange](cwlinkdidchange.md): Deprecated.
- [CWModeDidChange](cwmodedidchange.md): Deprecated.
- [CWPowerDidChange](cwpowerdidchange.md): Deprecated.
- [CWSSIDDidChange](cwssiddidchange.md): Deprecated.
- [CWScanCacheDidUpdate](cwscancachedidupdate.md): Deprecated.
