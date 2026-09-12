> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/bufferingstrategy/customerror(_:)](https://developer.apple.com/documentation/combine/publishers/bufferingstrategy/customerror(_:))

# Publishers.BufferingStrategy.customError(\_:)

**Framework:** Combine  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

When the buffer is full, execute the closure to provide a custom error.

## Declaration

```swift
case customError(() -> Failure)
```

## See Also

### Buffering strategies

- [Publishers.BufferingStrategy.dropNewest](dropnewest.md): When the buffer is full, discard the newly received element.
- [Publishers.BufferingStrategy.dropOldest](dropoldest.md): When the buffer is full, discard the oldest element in the buffer.
