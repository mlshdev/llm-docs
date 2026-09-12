> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwlinkqualitynotificationtransmitratekey](https://developer.apple.com/documentation/corewlan/cwlinkqualitynotificationtransmitratekey)

# CWLinkQualityNotificationTransmitRateKey (Swift)

**Framework:** Core WLAN  
**Kind:** Global Variable  
**Availability:** macOS 10.6+ (deprecated in 10.10)

> Use -\[CWWiFiClient startMonitoringEventWithType:error:\] with the CWEventTypeLinkQualityDidChange event type

## Declaration

```swift
let CWLinkQualityNotificationTransmitRateKey: String
```

<a id="Discussion"></a>

## Discussion

NSNumber containing the current transmit rate value for the WLAN interface. Found in the *userInfo* dictionary for the *CWLinkQualityChangedNotification*.

## See Also

### Constants

- [CWErrorDomain](cwerrordomain.md)
- [CWLinkQualityNotificationRSSIKey](cwlinkqualitynotificationrssikey.md): Deprecated.

# CWLinkQualityNotificationTransmitRateKey (Objective-C)

**Framework:** Core WLAN  
**Kind:** Global Variable  
**Availability:** macOS 10.6+ (deprecated in 10.10)

> Use -\[CWWiFiClient startMonitoringEventWithType:error:\] with the CWEventTypeLinkQualityDidChange event type

## Declaration

```objectivec
extern NSString * const CWLinkQualityNotificationTransmitRateKey;
```

<a id="Discussion"></a>

## Discussion

NSNumber containing the current transmit rate value for the WLAN interface. Found in the *userInfo* dictionary for the *CWLinkQualityChangedNotification*.

## See Also

### Constants

- [CWBSSIDDidChangeNotification](cwbssiddidchangenotification.md): Deprecated.
- [CWCountryCodeDidChangeNotification](cwcountrycodedidchangenotification.md): Deprecated.
- [CWErrorDomain](cwerrordomain.md)
- [CWLinkDidChangeNotification](cwlinkdidchangenotification.md): Deprecated.
- [CWLinkQualityDidChangeNotification](cwlinkqualitydidchangenotification.md): Deprecated.
- [CWLinkQualityNotificationRSSIKey](cwlinkqualitynotificationrssikey.md): Deprecated.
- [CWModeDidChangeNotification](cwmodedidchangenotification.md): Deprecated.
- [CWPowerDidChangeNotification](cwpowerdidchangenotification.md): Deprecated.
- [CWScanCacheDidUpdateNotification](cwscancachedidupdatenotification.md): Deprecated.
- [CWSSIDDidChangeNotification](cwssiddidchangenotification.md): Deprecated.
