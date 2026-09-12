> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/systemcolorsdidchangenotification](https://developer.apple.com/documentation/appkit/nscolor/systemcolorsdidchangenotification)

# systemColorsDidChangeNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Sent when the system colors have changed, such as through a system control panel interface.

## Declaration

```swift
class let systemColorsDidChangeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

This notification contains no notification object and no `userInfo` dictionary.

To observe this notification using Swift concurrency, use [NSColor.SystemColorsDidChangeMessage](systemcolorsdidchangemessage.md).

# NSSystemColorsDidChangeNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

Sent when the system colors have changed, such as through a system control panel interface.

## Declaration

```objectivec
extern NSNotificationName NSSystemColorsDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

This notification contains no notification object and no `userInfo` dictionary.

To observe this notification using Swift concurrency, use [NSColor.SystemColorsDidChangeMessage](systemcolorsdidchangemessage.md).
