> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/nstextstorage/didprocesseditingnotification

# didProcessEditingNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A notification that posts after a text storage finishes processing edits.

## Declaration

```swift
class let didProcessEditingNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The framework posts this notification after a text storage finishes processing edits in [processEditing()](processediting%28%29.md). Observers other than the delegate shouldn’t make further changes to the text storage. The notification object is the text storage object that processed the edits. This notification doesn’t contain a `userInfo` dictionary.

## See Also

### Notifications

- [willProcessEditingNotification](willprocesseditingnotification.md): A notification that posts before a text storage begins processing edits.

# NSTextStorageDidProcessEditingNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A notification that posts after a text storage finishes processing edits.

## Declaration

```objectivec
extern NSNotificationName const NSTextStorageDidProcessEditingNotification;
```

<a id="Discussion"></a>

## Discussion

The framework posts this notification after a text storage finishes processing edits in [processEditing](processediting%28%29.md). Observers other than the delegate shouldn’t make further changes to the text storage. The notification object is the text storage object that processed the edits. This notification doesn’t contain a `userInfo` dictionary.

## See Also

### Notifications

- [NSTextStorageWillProcessEditingNotification](willprocesseditingnotification.md): A notification that posts before a text storage begins processing edits.
