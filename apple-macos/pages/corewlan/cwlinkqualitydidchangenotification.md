> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwlinkqualitydidchangenotification](https://developer.apple.com/documentation/corewlan/cwlinkqualitydidchangenotification)

# CWLinkQualityDidChangeNotification

**Interface language:** Objective-C

**Framework:** Core WLAN  
**Kind:** Global Variable  
**Availability:** macOS 10.7+ (deprecated in 10.10)

## Declaration

```objectivec
extern NSString * const CWLinkQualityDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

Posted when the link quality for any WLAN interface changes. The *object* for this notification is the corresponding BSD interface name. The *userInfo* dictionary for this notification contains the current RSSI and current transmit rate for the given CoreWLAN interface.

## See Also

### Constants

- [CWBSSIDDidChangeNotification](cwbssiddidchangenotification.md): Deprecated.
- [CWCountryCodeDidChangeNotification](cwcountrycodedidchangenotification.md): Deprecated.
- [CWErrorDomain](cwerrordomain.md)
- [CWLinkDidChangeNotification](cwlinkdidchangenotification.md): Deprecated.
- [CWLinkQualityNotificationRSSIKey](cwlinkqualitynotificationrssikey.md): Deprecated.
- [CWLinkQualityNotificationTransmitRateKey](cwlinkqualitynotificationtransmitratekey.md): Deprecated.
- [CWModeDidChangeNotification](cwmodedidchangenotification.md): Deprecated.
- [CWPowerDidChangeNotification](cwpowerdidchangenotification.md): Deprecated.
- [CWScanCacheDidUpdateNotification](cwscancachedidupdatenotification.md): Deprecated.
- [CWSSIDDidChangeNotification](cwssiddidchangenotification.md): Deprecated.
