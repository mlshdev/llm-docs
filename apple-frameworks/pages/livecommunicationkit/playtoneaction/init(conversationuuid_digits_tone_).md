> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/livecommunicationkit/playtoneaction/init(conversationuuid:digits:tone:)

# init(conversationUUID:digits:tone:)

**Framework:** LiveCommunicationKit  
**Kind:** Initializer  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS 1.1+ · watchOS 10.4+

Creates an action that plays a sequence of tones that indicate an interaction with the keypad.

## Declaration

```swift
init(conversationUUID: UUID, digits: String, tone: PlayToneAction.Tone)
```

## Parameters

- `conversationUUID`: The unique identifier of the conversation to which this action will be applied.
- `digits`: The digits tapped by the user into the keypad or included in the dial string.
- `tone`: The tone to play.
