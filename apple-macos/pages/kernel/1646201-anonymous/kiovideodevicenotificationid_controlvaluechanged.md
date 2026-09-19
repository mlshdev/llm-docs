> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1646201-anonymous/kiovideodevicenotificationid_controlvaluechanged

# kIOVideoDeviceNotificationID_ControlValueChanged

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kIOVideoDeviceNotificationID_ControlValueChanged = 'cval'
```

<a id="discussion"></a>

## Discussion

Indicates that the value of the control with the given ID has changed. The first argument is the new value.
