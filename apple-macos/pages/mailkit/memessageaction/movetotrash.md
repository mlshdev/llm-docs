> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/memessageaction/movetotrash](https://developer.apple.com/documentation/mailkit/memessageaction/movetotrash)

# moveToTrash (Swift)

**Framework:** MailKit  
**Kind:** Type Property  
**Availability:** macOS 12.0+

An object that moves the message to the account’s Trash mailbox.

## Declaration

```swift
class var moveToTrash: MEMessageAction { get }
```

## See Also

### Transferring Messages

- [moveToArchive](movetoarchive.md): An object that moves the message to the account’s Archive mailbox.
- [moveToJunk](movetojunk.md): An object that moves the message to the account’s Junk mailbox.

# moveToTrashAction (Objective-C)

**Framework:** MailKit  
**Kind:** Type Property  
**Availability:** macOS 12.0+

An object that moves the message to the account’s Trash mailbox.

## Declaration

```objectivec
@property (class, readonly) MEMessageAction * moveToTrashAction;
```

## See Also

### Transferring Messages

- [moveToArchiveAction](movetoarchive.md): An object that moves the message to the account’s Archive mailbox.
- [moveToJunkAction](movetojunk.md): An object that moves the message to the account’s Junk mailbox.
