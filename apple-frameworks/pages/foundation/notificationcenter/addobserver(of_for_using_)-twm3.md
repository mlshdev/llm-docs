> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/notificationcenter/addobserver(of:for:using:)-twm3](https://developer.apple.com/documentation/foundation/notificationcenter/addobserver(of:for:using:)-twm3)

# addObserver(of:for:using:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Adds an observer to a center for messages delivered asynchronously with a given subject and identifier.

## Declaration

```swift
func addObserver<Identifier, Message>(of subject: Message.Subject, for identifier: Identifier, using observer: @escaping @Sendable (Message) async -> Void) -> NotificationCenter.ObservationToken where Identifier : NotificationCenter.MessageIdentifier, Message : NotificationCenter.AsyncMessage, Message == Identifier.MessageType, Message.Subject : AnyObject
```

## Parameters

- `subject`: The subject to observe. Specify a metatype to observe all values for a given type.
- `identifier`: An identifier representing a specific message type.
- `observer`: A closure to execute when receving a message.

<a id="return-value"></a>

## Return Value

A token representing the observation registration with the given notification center. Retain this token for as long as you need to receive messages.

## See Also

### Observing concurrency-safe notifications

- [addObserver(of:for:using:)](addobserver%28of_for_using_%29-4d19x.md): Adds an observer to a center for messages delivered on the main actor with a given subject and identifier.
- [addObserver(of:for:using:)](addobserver%28of_for_using_%29-90os.md): Adds an observer to a center for messages delivered on the main actor with a given subject and identifier.
- [addObserver(of:for:using:)](addobserver%28of_for_using_%29-56bn4.md): Adds an observer to a center for messages delivered on the main actor with a given subject and message type.
- [addObserver(of:for:using:)](addobserver%28of_for_using_%29-t1wr.md): Adds an observer to a center for messages delivered asynchronously with a given subject and message type.
- [addObserver(of:for:using:)](addobserver%28of_for_using_%29-64uw3.md): Adds an observer to a center for messages delivered asynchronously with a given subject and message type.
- [removeObserver(\_:)](removeobserver%28__%29-2gmm0.md): Stops the observation represented by the given observation token.
- [NotificationCenter.ObservationToken](observationtoken.md): A unique token representing a single observer registration in a notification center.
