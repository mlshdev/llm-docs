> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/asynciteratorprotocol/next()](https://developer.apple.com/documentation/swift/asynciteratorprotocol/next())

# next()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Asynchronously advances to the next element and returns it, or ends the sequence if there is no next element.

## Declaration

```swift
mutating func next() async throws -> Self.Element?
```

<a id="return-value"></a>

## Return Value

The next element, if it exists, or `nil` to signal the end of the sequence.

## Default Implementations

### AsyncIteratorProtocol Implementations

- [next()](next%28%29-4a3d9.md): Default implementation of `next()` in terms of `next(isolation:)`, which is required to maintain backward compatibility with existing async iterators.
