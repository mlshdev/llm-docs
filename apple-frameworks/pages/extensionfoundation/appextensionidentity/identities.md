> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionfoundation/appextensionidentity/identities](https://developer.apple.com/documentation/extensionfoundation/appextensionidentity/identities)

# AppExtensionIdentity.Identities

**Framework:** ExtensionFoundation  
**Kind:** Structure  
**Availability:** macOS 13.0+ (deprecated in 26.0)

An asynchronous sequence that returns the enabled extensions that match provided constraints.

> Replaced with AppExtensionPoint.Monitor

## Declaration

```swift
struct Identities
```

## Topics

### Iterating the Sequence

- [next()](identities/asynciterator/next%28%29.md): Deprecated. Asynchronously advances to the next element and returns it.
- [AppExtensionIdentity.Identities.AsyncIterator](identities/asynciterator.md): Deprecated. The type of the asynchronous iterator created by this asynchronous sequence.
- [AppExtensionIdentity.Identities.Element](identities/element.md): Deprecated. The type of element produced by this asynchronous sequence.
- [makeAsyncIterator()](identities/makeasynciterator%28%29.md): Deprecated. Creates the asynchronous iterator that produces elements of this asynchronous sequence.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)

## See Also

### Deprecated

- [AppExtensionIdentity.Availability](availability.md): Deprecated. An object that contains information about available extensions.
- [availabilityUpdates](availabilityupdates.md): Deprecated.
- [matching(appExtensionPointIDs:)](matching%28appextensionpointids_%29.md): Deprecated. The asynchronous sequence of extension identities which target the specified extension point identifiers.
