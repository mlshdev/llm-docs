> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/notificationcenter/messageidentifier/didfinishgathering

# didFinishGathering

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

An identifier for a message about a metadata query that finished its initial result gathering.

## Declaration

```swift
static var didFinishGathering: NotificationCenter.BaseMessageIdentifier<NSMetadataQuery.DidFinishGatheringMessage> { get }
```

<a id="discussion"></a>

## Discussion

Use this identifier with [NotificationCenter](../../notificationcenter.md)’s `addObserver(of:for:using:)` or `messages(of:for:bufferSize:)` methods to observe messages of type [NSMetadataQuery.DidStartGatheringMessage](../../nsmetadataquery/didstartgatheringmessage.md).

## See Also

### Identifying metadata query messages

- [didStartGathering](didstartgathering.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSMetadataQuery.DidStartGatheringMessage>`. An identifier for a message about a metadata query that is starting its initial result gathering.
