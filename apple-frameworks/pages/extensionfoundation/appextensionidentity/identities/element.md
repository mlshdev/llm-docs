> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/extensionfoundation/appextensionidentity/identities/element

# AppExtensionIdentity.Identities.Element

**Framework:** ExtensionFoundation  
**Kind:** Type Alias  
**Availability:** macOS 13.0+ (deprecated in 26.0)

The type of element produced by this asynchronous sequence.

> Replaced with AppExtensionPoint.Monitor

## Declaration

```swift
typealias Element = [AppExtensionIdentity]
```

## See Also

### Iterating the Sequence

- [next()](asynciterator/next%28%29.md): Deprecated. Asynchronously advances to the next element and returns it.
- [AppExtensionIdentity.Identities.AsyncIterator](asynciterator.md): Deprecated. The type of the asynchronous iterator created by this asynchronous sequence.
- [makeAsyncIterator()](makeasynciterator%28%29.md): Deprecated. Creates the asynchronous iterator that produces elements of this asynchronous sequence.
