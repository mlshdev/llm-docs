> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/memessageaction/movetojunk](https://developer.apple.com/documentation/mailkit/memessageaction/movetojunk)

# moveToJunk (Swift)

**Framework:** MailKit  
**Kind:** Type Property  
**Availability:** macOS 12.0+

An object that moves the message to the account’s Junk mailbox.

## Declaration

```swift
class var moveToJunk: MEMessageAction { get }
```

## See Also

### Transferring Messages

- [moveToArchive](movetoarchive.md): An object that moves the message to the account’s Archive mailbox.
- [moveToTrash](movetotrash.md): An object that moves the message to the account’s Trash mailbox.

# moveToJunkAction (Objective-C)

**Framework:** MailKit  
**Kind:** Type Property  
**Availability:** macOS 12.0+

An object that moves the message to the account’s Junk mailbox.

## Declaration

```objectivec
@property (class, readonly) MEMessageAction * moveToJunkAction;
```

## See Also

### Transferring Messages

- [moveToArchiveAction](movetoarchive.md): An object that moves the message to the account’s Archive mailbox.
- [moveToTrashAction](movetotrash.md): An object that moves the message to the account’s Trash mailbox.
