> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mailkit/memessageaction/movetoarchive

# moveToArchive (Swift)

**Framework:** MailKit  
**Kind:** Type Property  
**Availability:** macOS 12.0+

An object that moves the message to the account’s Archive mailbox.

## Declaration

```swift
class var moveToArchive: MEMessageAction { get }
```

## See Also

### Transferring Messages

- [moveToJunk](movetojunk.md): An object that moves the message to the account’s Junk mailbox.
- [moveToTrash](movetotrash.md): An object that moves the message to the account’s Trash mailbox.

# moveToArchiveAction (Objective-C)

**Framework:** MailKit  
**Kind:** Type Property  
**Availability:** macOS 12.0+

An object that moves the message to the account’s Archive mailbox.

## Declaration

```objectivec
@property (class, readonly) MEMessageAction * moveToArchiveAction;
```

## See Also

### Transferring Messages

- [moveToJunkAction](movetojunk.md): An object that moves the message to the account’s Junk mailbox.
- [moveToTrashAction](movetotrash.md): An object that moves the message to the account’s Trash mailbox.
