> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmclock/displaygenlockmodechangedmessage](https://developer.apple.com/documentation/coremedia/cmclock/displaygenlockmodechangedmessage)

# CMClock.DisplayGenlockModeChangedMessage

**Framework:** Core Media  
**Kind:** Structure  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

A message delivered when the display mode changes from genlock to non-genlock or vice versa.

## Declaration

```swift
struct DisplayGenlockModeChangedMessage
```

## Topics

### Instance Properties

- [isAnyDisplaySynchronizedToLockedGenlockSignal](displaygenlockmodechangedmessage/isanydisplaysynchronizedtolockedgenlocksignal.md): Indicates whether at least one display is synchronized to a locked external genlock signal.

## Relationships

### Conforms To

- [NotificationCenter.MainActorMessage](../../foundation/notificationcenter/mainactormessage.md)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
