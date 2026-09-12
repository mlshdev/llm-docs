> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionfoundation/appextensionidentity/identities/asynciterator](https://developer.apple.com/documentation/extensionfoundation/appextensionidentity/identities/asynciterator)

# AppExtensionIdentity.Identities.AsyncIterator

**Framework:** ExtensionFoundation  
**Kind:** Structure  
**Availability:** macOS 13.0+ (deprecated in 26.0)

The type of the asynchronous iterator created by this asynchronous sequence.

> Replaced with AppExtensionPoint.Monitor

## Declaration

```swift
struct AsyncIterator
```

## Topics

### Iterating Extensions

- [AppExtensionIdentity.Identities.Element](element.md): Deprecated. The type of element produced by this asynchronous sequence.
- [next()](asynciterator/next%28%29.md): Deprecated. Asynchronously advances to the next element and returns it.

## Relationships

### Conforms To

- [AsyncIteratorProtocol](https://developer.apple.com/documentation/swift/asynciteratorprotocol)

## See Also

### Iterating the Sequence

- [next()](asynciterator/next%28%29.md): Deprecated. Asynchronously advances to the next element and returns it.
- [AppExtensionIdentity.Identities.Element](element.md): Deprecated. The type of element produced by this asynchronous sequence.
- [makeAsyncIterator()](makeasynciterator%28%29.md): Deprecated. Creates the asynchronous iterator that produces elements of this asynchronous sequence.
