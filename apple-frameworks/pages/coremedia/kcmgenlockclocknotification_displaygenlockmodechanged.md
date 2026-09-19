> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/kcmgenlockclocknotification_displaygenlockmodechanged

# kCMGenlockClockNotification_DisplayGenlockModeChanged (Swift)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

Posted when the display mode changes from genlock to non-genlock or vice versa.

## Declaration

```swift
let kCMGenlockClockNotification_DisplayGenlockModeChanged: CFString
```

<a id="discussion"></a>

## Discussion

Observe this notification using `CMNotificationCenterAddListener` on the default local `CMNotificationCenter`. The notification payload dictionary contains a `CFBoolean` value for the key `kCMGenlockClockNotificationPayload_AnyDisplayIsSynchronizedToLockedGenlockSignal`.

# kCMGenlockClockNotification_DisplayGenlockModeChanged (Objective-C)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

Posted when the display mode changes from genlock to non-genlock or vice versa.

## Declaration

```objectivec
extern CFStringRef const kCMGenlockClockNotification_DisplayGenlockModeChanged;
```

<a id="discussion"></a>

## Discussion

Observe this notification using `CMNotificationCenterAddListener` on the default local `CMNotificationCenter`. The notification payload dictionary contains a `CFBoolean` value for the key `kCMGenlockClockNotificationPayload_AnyDisplayIsSynchronizedToLockedGenlockSignal`.
