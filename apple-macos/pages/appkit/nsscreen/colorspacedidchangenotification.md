> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscreen/colorspacedidchangenotification](https://developer.apple.com/documentation/appkit/nsscreen/colorspacedidchangenotification)

# colorSpaceDidChangeNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.6+

Posted when the color space of the screen has changed.

## Declaration

```swift
class let colorSpaceDidChangeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object is the [NSScreen](../nsscreen.md) object whose [colorSpace](colorspace.md) has changed.. This notification does not contain a `userInfo` dictionary.

To observe this notification using Swift concurrency, use [NSScreen.ColorSpaceDidChangeMessage](colorspacedidchangemessage.md).

# NSScreenColorSpaceDidChangeNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.6+

Posted when the color space of the screen has changed.

## Declaration

```objectivec
extern NSNotificationName const NSScreenColorSpaceDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the [NSScreen](../nsscreen.md) object whose [colorSpace](colorspace.md) has changed.. This notification does not contain a `userInfo` dictionary.

To observe this notification using Swift concurrency, use [NSScreen.ColorSpaceDidChangeMessage](colorspacedidchangemessage.md).
