> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsscroller/preferredscrollerstyledidchangenotification

# preferredScrollerStyleDidChangeNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

Posted if the preferred scroller style changes.

## Declaration

```swift
class let preferredScrollerStyleDidChangeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

For a full discussion, see [preferredScrollerStyle](preferredscrollerstyle.md).

To observe this notification using Swift concurrency, use [NSScroller.PreferredScrollerStyleDidChangeMessage](preferredscrollerstyledidchangemessage.md).

# NSPreferredScrollerStyleDidChangeNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.7+

Posted if the preferred scroller style changes.

## Declaration

```objectivec
extern NSNotificationName const NSPreferredScrollerStyleDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

For a full discussion, see [preferredScrollerStyle](preferredscrollerstyle.md).

To observe this notification using Swift concurrency, use [NSScroller.PreferredScrollerStyleDidChangeMessage](preferredscrollerstyledidchangemessage.md).
