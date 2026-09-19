> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/1503986-notification_ids/kiovideodevicenotificationid_controlvaluechanged

# kIOVideoDeviceNotificationID_ControlValueChanged

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 18.4+ · macOS 10.7+

## Declaration

```objectivec
kIOVideoDeviceNotificationID_ControlValueChanged = 'cval'
```

<a id="discussion"></a>

## Discussion

Indicates that the value of the control with the given ID has changed. The first argument is the new value.
