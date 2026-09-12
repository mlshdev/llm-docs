> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/optional/publisher-swift.struct/init(_:)](https://developer.apple.com/documentation/swift/optional/publisher-swift.struct/init(_:))

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a publisher to emit the value of the optional, or to finish immediately if the optional doesn’t have a value.

## Declaration

```swift
init(_ output: Optional<Wrapped>.Publisher.Output?)
```

## Parameters

- `output`: The result to deliver to each subscriber.
