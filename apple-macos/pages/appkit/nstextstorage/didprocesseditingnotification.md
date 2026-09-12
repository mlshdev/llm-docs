> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextstorage/didprocesseditingnotification](https://developer.apple.com/documentation/appkit/nstextstorage/didprocesseditingnotification)

# didProcessEditingNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.0+

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

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

A notification that posts after a text storage finishes processing edits.

## Declaration

```objectivec
extern NSNotificationName NSTextStorageDidProcessEditingNotification;
```

<a id="Discussion"></a>

## Discussion

The framework posts this notification after a text storage finishes processing edits in [processEditing](processediting%28%29.md). Observers other than the delegate shouldn’t make further changes to the text storage. The notification object is the text storage object that processed the edits. This notification doesn’t contain a `userInfo` dictionary.

## See Also

### Notifications

- [NSTextStorageWillProcessEditingNotification](willprocesseditingnotification.md): A notification that posts before a text storage begins processing edits.
