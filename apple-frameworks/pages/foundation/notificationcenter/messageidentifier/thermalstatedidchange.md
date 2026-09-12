> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/notificationcenter/messageidentifier/thermalstatedidchange](https://developer.apple.com/documentation/foundation/notificationcenter/messageidentifier/thermalstatedidchange)

# thermalStateDidChange

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

An identifier for a message about a thermal state change.

## Declaration

```swift
static var thermalStateDidChange: NotificationCenter.BaseMessageIdentifier<ProcessInfo.ThermalStateDidChangeMessage> { get }
```

<a id="discussion"></a>

## Discussion

Use this identifier with [NotificationCenter](../../notificationcenter.md)’s `addObserver(of:for:using:)` or `messages(of:for:bufferSize:)` methods to observe messages of type [ProcessInfo.ThermalStateDidChangeMessage](../../processinfo/thermalstatedidchangemessage.md).

## See Also

### Identifying process info messages

- [powerStateDidChange](powerstatedidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<ProcessInfo.PowerStateDidChangeMessage>`. An identifier for a message about a power state change.
- [didTerminate](didterminate.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<Process.DidTerminateMessage>`. An identifier for a message about a stopped task.
