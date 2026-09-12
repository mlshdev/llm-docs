> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/notificationcenter/messageidentifier/didstartgathering](https://developer.apple.com/documentation/foundation/notificationcenter/messageidentifier/didstartgathering)

# didStartGathering

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

An identifier for a message about a metadata query that is starting its initial result gathering.

## Declaration

```swift
static var didStartGathering: NotificationCenter.BaseMessageIdentifier<NSMetadataQuery.DidStartGatheringMessage> { get }
```

<a id="discussion"></a>

## Discussion

Use this identifier with [NotificationCenter](../../notificationcenter.md)’s `addObserver(of:for:using:)` or `messages(of:for:bufferSize:)` methods to observe messages of type [NSMetadataQuery.DidStartGatheringMessage](../../nsmetadataquery/didstartgatheringmessage.md).

## See Also

### Identifying metadata query messages

- [didFinishGathering](didfinishgathering.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSMetadataQuery.DidFinishGatheringMessage>`. An identifier for a message about a metadata query that finished its initial result gathering.
