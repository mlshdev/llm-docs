> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextstorage/willprocesseditingnotification](https://developer.apple.com/documentation/appkit/nstextstorage/willprocesseditingnotification)

# willProcessEditingNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.0+

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

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

A notification that posts before a text storage begins processing edits.

## Declaration

```objectivec
extern NSNotificationName NSTextStorageWillProcessEditingNotification;
```

<a id="Discussion"></a>

## Discussion

The framework posts this notification before a text storage begins processing edits in [processEditing](processediting%28%29.md). Observers other than the delegate shouldn’t make further changes to the text storage. The notification object is the text storage object that’s about to process the edits. This notification doesn’t contain a `userInfo` dictionary.

## See Also

### Notifications

- [NSTextStorageDidProcessEditingNotification](didprocesseditingnotification.md): A notification that posts after a text storage finishes processing edits.
