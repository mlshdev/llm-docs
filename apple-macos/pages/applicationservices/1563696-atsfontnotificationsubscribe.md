> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1563696-atsfontnotificationsubscribe](https://developer.apple.com/documentation/applicationservices/1563696-atsfontnotificationsubscribe)

# ATSFontNotificationSubscribe(\_:\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1)

## Declaration

```swift
func ATSFontNotificationSubscribe(_ callback: ATSNotificationCallback!, _ options: ATSFontNotifyOption, _ iRefcon: UnsafeMutableRawPointer!, _ oNotificationRef: UnsafeMutablePointer<ATSFontNotificationRef?>!) -> OSStatus
```

# ATSFontNotificationSubscribe (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1)

## Declaration

```objectivec
OSStatus ATSFontNotificationSubscribe(ATSNotificationCallback callback, ATSFontNotifyOption options, void *iRefcon, ATSFontNotificationRef *oNotificationRef);
```
