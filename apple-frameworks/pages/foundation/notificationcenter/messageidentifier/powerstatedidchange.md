> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/notificationcenter/messageidentifier/powerstatedidchange](https://developer.apple.com/documentation/foundation/notificationcenter/messageidentifier/powerstatedidchange)

# powerStateDidChange

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

An identifier for a message about a power state change.

## Declaration

```swift
static var powerStateDidChange: NotificationCenter.BaseMessageIdentifier<ProcessInfo.PowerStateDidChangeMessage> { get }
```

<a id="discussion"></a>

## Discussion

Use this identifier with [NotificationCenter](../../notificationcenter.md)’s `addObserver(of:for:using:)` or `messages(of:for:bufferSize:)` methods to observe messages of type [ProcessInfo.PowerStateDidChangeMessage](../../processinfo/powerstatedidchangemessage.md).

## See Also

### Identifying process info messages

- [thermalStateDidChange](thermalstatedidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<ProcessInfo.ThermalStateDidChangeMessage>`. An identifier for a message about a thermal state change.
- [didTerminate](didterminate.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<Process.DidTerminateMessage>`. An identifier for a message about a stopped task.
