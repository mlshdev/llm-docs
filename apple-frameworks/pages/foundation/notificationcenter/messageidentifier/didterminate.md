> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/notificationcenter/messageidentifier/didterminate

# didTerminate

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** macOS 26.0+

An identifier for a message about a stopped task.

## Declaration

```swift
static var didTerminate: NotificationCenter.BaseMessageIdentifier<Process.DidTerminateMessage> { get }
```

<a id="discussion"></a>

## Discussion

Use this identifier with [NotificationCenter](../../notificationcenter.md)’s `addObserver(of:for:using:)` or `messages(of:for:bufferSize:)` methods to observe messages of type [Process.DidTerminateMessage](../../process/didterminatemessage.md).

## See Also

### Identifying process info messages

- [powerStateDidChange](powerstatedidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<ProcessInfo.PowerStateDidChangeMessage>`. An identifier for a message about a power state change.
- [thermalStateDidChange](thermalstatedidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<ProcessInfo.ThermalStateDidChangeMessage>`. An identifier for a message about a thermal state change.
