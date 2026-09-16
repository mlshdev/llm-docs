> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/asyncsequence/asynciterator

# AsyncIterator

**Framework:** Swift  
**Kind:** Associated Type  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The type of asynchronous iterator that produces elements of this asynchronous sequence.

## Declaration

```swift
associatedtype AsyncIterator : AsyncIteratorProtocol
```

## See Also

### Creating an Iterator

- [makeAsyncIterator()](makeasynciterator%28%29.md): Creates the asynchronous iterator that produces elements of this asynchronous sequence.
- [AsyncIteratorProtocol](../asynciteratorprotocol.md): A type that asynchronously supplies the values of a sequence one at a time.
- [Element](element.md): The type of element produced by this asynchronous sequence.
