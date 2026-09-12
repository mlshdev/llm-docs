> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/atsnotificationcallback](https://developer.apple.com/documentation/applicationservices/atsnotificationcallback)

# ATSNotificationCallback (Swift)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

## Declaration

```swift
typealias ATSNotificationCallback = (ATSFontNotificationInfoRef?, UnsafeMutableRawPointer?) -> Void
```

# ATSNotificationCallback (Objective-C)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

## Declaration

```objectivec
typedef void (*ATSNotificationCallback)(ATSFontNotificationInfoRef info, void *refCon);
```
