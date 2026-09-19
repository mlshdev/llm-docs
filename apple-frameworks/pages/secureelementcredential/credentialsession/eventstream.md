> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/secureelementcredential/credentialsession/eventstream

# eventStream

**Framework:** SecureElementCredential  
**Kind:** Instance Property  
**Availability:** iOS 18.1+ · iPadOS 18.1+

An asynchronous stream of session events.

## Declaration

```swift
var eventStream: AsyncStream<CredentialSession.Event> { get async }
```

<a id="discussion"></a>

## Discussion

Consume and handle events as the session produces then. Do this with a `for-await-in` loop over the stream, like the following example:

```swift
for await event in session.eventStream {
    // Handle event.
}
```

## See Also

### Handling session events

- [CredentialSession.Event](event.md): Events produced by a credential session, such as connectivity events and errors.
