> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/notificationcenter/messageidentifier/dataavailable](https://developer.apple.com/documentation/foundation/notificationcenter/messageidentifier/dataavailable)

# dataAvailable

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

An identifier for a message about a file handle having data available for reading.

## Declaration

```swift
static var dataAvailable: NotificationCenter.BaseMessageIdentifier<FileHandle.DataAvailableMessage> { get }
```

<a id="discussion"></a>

## Discussion

Use this identifier with [NotificationCenter](../../notificationcenter.md)’s `addObserver(of:for:using:)` or `messages(of:for:bufferSize:)` methods to observe messages of type [FileHandle.DataAvailableMessage](../../filehandle/dataavailablemessage.md).

## See Also

### Identifying file handle messages

- [connectionAccepted](connectionaccepted.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<FileHandle.ConnectionAcceptedMessage>`. An identifier for a message about a file handle accepting a connection.
- [readToEndOfFileCompletion](readtoendoffilecompletion.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<FileHandle.ReadToEndOfFileCompletionMessage>`. An identifier for a message about a file handle having reached the end of a file or communication channel.
- [readCompletion](readcompletion.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<FileHandle.ReadCompletionMessage>`. An identifier for a message about a file handle having read the currently available data from a file or communication channel.
