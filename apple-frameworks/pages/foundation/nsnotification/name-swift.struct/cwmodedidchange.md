> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/cwmodedidchange

# CWModeDidChange

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** macOS 10.6+ (deprecated in 10.10)

> Use -\[CWWiFiClient startMonitoringEventWithType:error:\] with the CWEventTypeModeDidChange event type

## Declaration

```swift
static let CWModeDidChange: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

Posted when the op mode of any WLAN interface changes. The *object* for this notification is the corresponding BSD interface name. This notification does not contain a *userInfo* dictionary.

## See Also

### Core WLAN

- [CWBSSIDDidChange](cwbssiddidchange.md): Deprecated.
- [CWCountryCodeDidChange](cwcountrycodedidchange.md): Deprecated.
- [CWLinkDidChange](cwlinkdidchange.md): Deprecated.
- [CWLinkQualityDidChange](cwlinkqualitydidchange.md): Deprecated.
- [CWPowerDidChange](cwpowerdidchange.md): Deprecated.
- [CWSSIDDidChange](cwssiddidchange.md): Deprecated.
- [CWScanCacheDidUpdate](cwscancachedidupdate.md): Deprecated.
