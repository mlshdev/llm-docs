> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nscolorlist/didchangenotification

# didChangeNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Posted whenever a color list changes.

## Declaration

```swift
class let didChangeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object is the [NSColorList](../nscolorlist.md) object that changed. This notification does not contain a `userInfo` dictionary.

To observe this notification using Swift concurrency, use [NSColorList.DidChangeMessage](didchangemessage.md).

# NSColorListDidChangeNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

Posted whenever a color list changes.

## Declaration

```objectivec
extern NSNotificationName NSColorListDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the [NSColorList](../nscolorlist.md) object that changed. This notification does not contain a `userInfo` dictionary.

To observe this notification using Swift concurrency, use [NSColorList.DidChangeMessage](didchangemessage.md).
