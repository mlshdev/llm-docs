> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsfont/fontsetchangednotification

# fontSetChangedNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Posted after the currently-set font changes.

## Declaration

```swift
class let fontSetChangedNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

To observe this notification using Swift concurrency, use [NSFont.FontSetChangedMessage](fontsetchangedmessage.md).

## See Also

### Responding to Font-Related Notifications

- [antialiasThresholdChangedNotification](antialiasthresholdchangednotification.md): Posted after the threshold for antialiasing changes.

# NSFontSetChangedNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

Posted after the currently-set font changes.

## Declaration

```objectivec
extern NSNotificationName NSFontSetChangedNotification;
```

<a id="Discussion"></a>

## Discussion

To observe this notification using Swift concurrency, use [NSFont.FontSetChangedMessage](fontsetchangedmessage.md).

## See Also

### Responding to Font-Related Notifications

- [NSAntialiasThresholdChangedNotification](antialiasthresholdchangednotification.md): Posted after the threshold for antialiasing changes.
