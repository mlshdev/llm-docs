> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/deferred/init(createpublisher:)](https://developer.apple.com/documentation/combine/deferred/init(createpublisher:))

# init(createPublisher:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a deferred publisher.

## Declaration

```swift
init(createPublisher: @escaping () -> DeferredPublisher)
```

## Parameters

- `createPublisher`: The closure to execute when calling `subscribe(_:)`.
