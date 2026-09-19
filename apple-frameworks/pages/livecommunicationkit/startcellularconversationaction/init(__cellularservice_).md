> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/livecommunicationkit/startcellularconversationaction/init(_:cellularservice:)

# init(\_:cellularService:)

**Framework:** LiveCommunicationKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Creates an action that initiates a cellular network conversation.

## Declaration

```swift
init(_ handle: Handle, cellularService: CellularService? = nil)
```

## Parameters

- `handle`: The handle of the conversation’s recipient.
- `cellularService`: The cellular service for the conversation.

<a id="discussion"></a>

## Discussion

If you don’t provide an cellular service, the system chooses a service for the conversation or fails the action.

## See Also

### Request creation

- [init(\_:)](init%28__%29.md): Creates an action that initiates a cellular conversation using information from a recent conversation.
