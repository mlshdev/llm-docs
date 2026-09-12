> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsimplequeue/error](https://developer.apple.com/documentation/coremedia/cmsimplequeue/error)

# CMSimpleQueue.Error

**Framework:** Core Media  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A structure that defines errors that queue operations can produce.

## Declaration

```swift
struct Error
```

## Topics

### Errors

- [allocationFailed](error/allocationfailed.md): The system failed to allocate memory.
- [queueIsFull](error/queueisfull.md): An operation failed because the queue is full.
- [parameterOutOfRange](error/parameteroutofrange.md): You passed a parameter to a function that’s outside the range of allowed values.
- [requiredParameterMissing](error/requiredparametermissing.md): You failed to pass a required parameter to a function.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
