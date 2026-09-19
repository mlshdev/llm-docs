> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/arkitsession/events-swift.property

# events

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 1.0+

An asynchronous sequence of events that provide updates to the current authorization status of the session.

## Declaration

```swift
final var events: ARKitSession.Events { get }
```

<a id="Discussion"></a>

## Discussion

The following example detects changes in the current session’s authorization status.

```swift
let session = ARKitSession()
Task {
    for await update in session.events {
        if case .authorizationChanged(let type, let status) = update {
            print("Authorization. Status of \(type) changed to \(status).")
        } else {
            print("Another session event \(update).")
        }
    }
}
```

## See Also

### Observing a session

- [ARKitSession.Events](events-swift.struct.md): A sequence of events.
- [ARKitSession.Event](event.md): Enumeration of possible session events.
- [description](description.md): A textual representation of this session.
