> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwssiddidchangenotification](https://developer.apple.com/documentation/corewlan/cwssiddidchangenotification)

# CWSSIDDidChangeNotification

**Interface language:** Objective-C

**Framework:** Core WLAN  
**Kind:** Global Variable  
**Availability:** macOS 10.6+ (deprecated in 10.10)

## Declaration

```objectivec
extern NSString * const CWSSIDDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

Posted when the SSID of any WLAN interface changes. The *object* for this notification is the corresponding BSD interface name. This notification does not contain a *userInfo* dictionary.

## See Also

### Constants

- [CWBSSIDDidChangeNotification](cwbssiddidchangenotification.md): Deprecated.
- [CWCountryCodeDidChangeNotification](cwcountrycodedidchangenotification.md): Deprecated.
- [CWErrorDomain](cwerrordomain.md)
- [CWLinkDidChangeNotification](cwlinkdidchangenotification.md): Deprecated.
- [CWLinkQualityDidChangeNotification](cwlinkqualitydidchangenotification.md): Deprecated.
- [CWLinkQualityNotificationRSSIKey](cwlinkqualitynotificationrssikey.md): Deprecated.
- [CWLinkQualityNotificationTransmitRateKey](cwlinkqualitynotificationtransmitratekey.md): Deprecated.
- [CWModeDidChangeNotification](cwmodedidchangenotification.md): Deprecated.
- [CWPowerDidChangeNotification](cwpowerdidchangenotification.md): Deprecated.
- [CWScanCacheDidUpdateNotification](cwscancachedidupdatenotification.md): Deprecated.
