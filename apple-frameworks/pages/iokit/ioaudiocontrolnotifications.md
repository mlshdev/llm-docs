> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/ioaudiocontrolnotifications

# IOAudioControlNotifications

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.1+

The set of constants passed in the type field of IOAudioControlUserClient::registerNotificaitonPort().

## Declaration

```objectivec
typedef enum _IOAudioControlNotifications : unsigned int {
    ...
} IOAudioControlNotifications;
```

## Topics

### Constants

- [kIOAudioControlValueChangeNotification](ioaudiocontrolnotifications/kioaudiocontrolvaluechangenotification.md)
- [kIOAudioControlRangeChangeNotification](ioaudiocontrolnotifications/kioaudiocontrolrangechangenotification.md)
