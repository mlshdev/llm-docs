> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionfoundation/appextensionidentity/identities/makeasynciterator()](https://developer.apple.com/documentation/extensionfoundation/appextensionidentity/identities/makeasynciterator())

# makeAsyncIterator()

**Framework:** ExtensionFoundation  
**Kind:** Instance Method  
**Availability:** macOS 13.0+ (deprecated in 26.0)

Creates the asynchronous iterator that produces elements of this asynchronous sequence.

> Replaced with AppExtensionPoint.Monitor

## Declaration

```swift
func makeAsyncIterator() -> AppExtensionIdentity.Identities.AsyncIterator
```

<a id="return-value"></a>

## Return Value

An instance of the `AsyncIterator` type used to produce elements of the asynchronous sequence.

## See Also

### Iterating the Sequence

- [next()](asynciterator/next%28%29.md): Deprecated. Asynchronously advances to the next element and returns it.
- [AppExtensionIdentity.Identities.AsyncIterator](asynciterator.md): Deprecated. The type of the asynchronous iterator created by this asynchronous sequence.
- [AppExtensionIdentity.Identities.Element](element.md): Deprecated. The type of element produced by this asynchronous sequence.
