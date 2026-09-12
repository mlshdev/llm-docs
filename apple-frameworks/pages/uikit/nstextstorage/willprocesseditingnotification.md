> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextstorage/willprocesseditingnotification](https://developer.apple.com/documentation/uikit/nstextstorage/willprocesseditingnotification)

# willProcessEditingNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A notification that posts before a text storage begins processing edits.

## Declaration

```swift
class let willProcessEditingNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The framework posts this notification before a text storage begins processing edits in [processEditing()](processediting%28%29.md). Observers other than the delegate shouldn’t make further changes to the text storage. The notification object is the text storage object that’s about to process the edits. This notification doesn’t contain a `userInfo` dictionary.

## See Also

### Notifications

- [didProcessEditingNotification](didprocesseditingnotification.md): A notification that posts after a text storage finishes processing edits.

# NSTextStorageWillProcessEditingNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A notification that posts before a text storage begins processing edits.

## Declaration

```objectivec
extern NSNotificationName const NSTextStorageWillProcessEditingNotification;
```

<a id="Discussion"></a>

## Discussion

The framework posts this notification before a text storage begins processing edits in [processEditing](processediting%28%29.md). Observers other than the delegate shouldn’t make further changes to the text storage. The notification object is the text storage object that’s about to process the edits. This notification doesn’t contain a `userInfo` dictionary.

## See Also

### Notifications

- [NSTextStorageDidProcessEditingNotification](didprocesseditingnotification.md): A notification that posts after a text storage finishes processing edits.
