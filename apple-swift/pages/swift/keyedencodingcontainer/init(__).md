> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/keyedencodingcontainer/init(_:)](https://developer.apple.com/documentation/swift/keyedencodingcontainer/init(_:))

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new instance with the given container.

## Declaration

```swift
init<Container>(_ container: Container) where K == Container.Key, Container : KeyedEncodingContainerProtocol
```

## Parameters

- `container`: The container to hold.
