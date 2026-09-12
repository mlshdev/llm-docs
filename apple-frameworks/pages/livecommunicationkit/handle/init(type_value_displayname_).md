> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/livecommunicationkit/handle/init(type:value:displayname:)](https://developer.apple.com/documentation/livecommunicationkit/handle/init(type:value:displayname:))

# init(type:value:displayName:)

**Framework:** LiveCommunicationKit  
**Kind:** Initializer  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS 1.1+ · watchOS 10.4+

Creates a new handle that identifies a participant in a conversation.

## Declaration

```swift
init(type: Handle.Kind, value: String, displayName: String? = nil)
```

## Parameters

- `type`: The type of the handle; for example, a phone number or email address.
- `value`: The raw value of the handle.
- `displayName`: The name that people see for a participant of a conversation in the conversation UI. If the `displayName` is `nil`, the system uses `value` instead.
