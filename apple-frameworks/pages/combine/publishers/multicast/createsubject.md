> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/multicast/createsubject](https://developer.apple.com/documentation/combine/publishers/multicast/createsubject)

# createSubject

**Framework:** Combine  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A closure that returns a subject each time a subscriber attaches to the multicast publisher.

## Declaration

```swift
final let createSubject: () -> SubjectType
```

## See Also

### Inspecting publisher properties

- [upstream](upstream.md): The publisher from which this publisher receives its elements.
