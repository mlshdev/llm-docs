> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorpanel/colordidchangenotification](https://developer.apple.com/documentation/appkit/nscolorpanel/colordidchangenotification)

# colorDidChangeNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Posted when the color of the `NSColorPanel` is set, as when [NSColorPanel](../nscolorpanel.md) is invoked.

## Declaration

```swift
class let colorDidChangeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object is the notifying `NSColorPanel`. This notification does not contain a `userInfo` dictionary.

To observe this notification using Swift concurrency, use [NSColorPanel.ColorDidChangeMessage](colordidchangemessage.md).

## See Also

### Responding to a color change

- [NSColorChanging](../nscolorchanging.md)

# NSColorPanelColorDidChangeNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

Posted when the color of the `NSColorPanel` is set, as when [NSColorPanel](../nscolorpanel.md) is invoked.

## Declaration

```objectivec
extern NSNotificationName NSColorPanelColorDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the notifying `NSColorPanel`. This notification does not contain a `userInfo` dictionary.

To observe this notification using Swift concurrency, use [NSColorPanel.ColorDidChangeMessage](colordidchangemessage.md).

## See Also

### Responding to a color change

- [NSColorChanging](../nscolorchanging.md)
- [changeColor:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/changecolor:): Deprecated. Sent to the first responder when the user selects a color in an `NSColorPanel` object.
