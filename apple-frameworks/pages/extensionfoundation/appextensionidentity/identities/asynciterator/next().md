> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionfoundation/appextensionidentity/identities/asynciterator/next()](https://developer.apple.com/documentation/extensionfoundation/appextensionidentity/identities/asynciterator/next())

# next()

**Framework:** ExtensionFoundation  
**Kind:** Instance Method  
**Availability:** macOS 13.0+ (deprecated in 26.0)

Asynchronously advances to the next element and returns it.

> Replaced with AppExtensionPoint.Monitor

## Declaration

```swift
mutating func next() async -> [AppExtensionIdentity]?
```

<a id="return-value"></a>

## Return Value

The next element, if it exists, or `nil` to signal the end of the sequence.

## See Also

### Iterating the Sequence

- [AppExtensionIdentity.Identities.AsyncIterator](../asynciterator.md): Deprecated. The type of the asynchronous iterator created by this asynchronous sequence.
- [AppExtensionIdentity.Identities.Element](../element.md): Deprecated. The type of element produced by this asynchronous sequence.
- [makeAsyncIterator()](../makeasynciterator%28%29.md): Deprecated. Creates the asynchronous iterator that produces elements of this asynchronous sequence.
