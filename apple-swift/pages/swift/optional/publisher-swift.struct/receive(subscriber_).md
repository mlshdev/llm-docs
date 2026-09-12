> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/optional/publisher-swift.struct/receive(subscriber:)](https://developer.apple.com/documentation/swift/optional/publisher-swift.struct/receive(subscriber:))

# receive(subscriber:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Implements the Publisher protocol by accepting the subscriber and immediately publishing the optional’s value if it has one, or finishing normally if it doesn’t.

## Declaration

```swift
func receive<S>(subscriber: S) where Wrapped == S.Input, S : Subscriber, S.Failure == Never
```

## Parameters

- `subscriber`: The subscriber to add.
