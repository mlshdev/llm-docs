> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/multicast/init(upstream:createsubject:)](https://developer.apple.com/documentation/combine/publishers/multicast/init(upstream:createsubject:))

# init(upstream:createSubject:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a multicast publisher that applies a closure to create a subject that delivers elements to subscribers.

## Declaration

```swift
init(upstream: Upstream, createSubject: @escaping () -> SubjectType)
```

## Parameters

- `createSubject`: A closure that returns a [Subject](../../subject.md) each time a subscriber attaches to the multicast publisher.
