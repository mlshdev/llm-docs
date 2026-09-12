> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextmovement](https://developer.apple.com/documentation/appkit/nstextmovement)

# NSTextMovement (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

## Declaration

```swift
enum NSTextMovement
```

## Topics

### Movement Options

- [NSTextMovement.return](nstextmovement/return.md)
- [NSTextMovement.tab](nstextmovement/tab.md)
- [NSTextMovement.backtab](nstextmovement/backtab.md)
- [NSTextMovement.left](nstextmovement/left.md)
- [NSTextMovement.right](nstextmovement/right.md)
- [NSTextMovement.up](nstextmovement/up.md)
- [NSTextMovement.down](nstextmovement/down.md)
- [NSTextMovement.cancel](nstextmovement/cancel.md)
- [NSTextMovement.other](nstextmovement/other.md)

### Initializers

- [init(rawValue:)](nstextmovement/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Notifications

- [didBeginEditingNotification](nstext/didbegineditingnotification.md): Posted when an `NSText` object begins any operation that changes characters or formatting attributes.
- [didChangeNotification](nstext/didchangenotification.md): Posted after an `NSText` object performs any operation that changes characters or formatting attributes.
- [didEndEditingNotification](nstext/didendeditingnotification.md): Posted when focus leaves an `NSText` object, whether or not any operation has changed characters or formatting attributes.
- [movementUserInfoKey](nstext/movementuserinfokey.md): The `userInfo` dictionary key for the [didEndEditingNotification](nstext/didendeditingnotification.md) notification.

# NSTextMovement (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

## Declaration

```objectivec
enum NSTextMovement : NSInteger;
```

## Topics

### Movement Options

- [NSTextMovementReturn](nstextmovement/return.md)
- [NSTextMovementTab](nstextmovement/tab.md)
- [NSTextMovementBacktab](nstextmovement/backtab.md)
- [NSTextMovementLeft](nstextmovement/left.md)
- [NSTextMovementRight](nstextmovement/right.md)
- [NSTextMovementUp](nstextmovement/up.md)
- [NSTextMovementDown](nstextmovement/down.md)
- [NSTextMovementCancel](nstextmovement/cancel.md)
- [NSTextMovementOther](nstextmovement/other.md)

## See Also

### Notifications

- [NSTextDidBeginEditingNotification](nstext/didbegineditingnotification.md): Posted when an `NSText` object begins any operation that changes characters or formatting attributes.
- [NSTextDidChangeNotification](nstext/didchangenotification.md): Posted after an `NSText` object performs any operation that changes characters or formatting attributes.
- [NSTextDidEndEditingNotification](nstext/didendeditingnotification.md): Posted when focus leaves an `NSText` object, whether or not any operation has changed characters or formatting attributes.
- [NSTextMovementUserInfoKey](nstext/movementuserinfokey.md): The `userInfo` dictionary key for the [NSTextDidEndEditingNotification](nstext/didendeditingnotification.md) notification.
