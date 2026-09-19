> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/publishers/bufferingstrategy/dropnewest

# Publishers.BufferingStrategy.dropNewest

**Framework:** Combine  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

When the buffer is full, discard the newly received element.

## Declaration

```swift
case dropNewest
```

## See Also

### Buffering strategies

- [Publishers.BufferingStrategy.dropOldest](dropoldest.md): When the buffer is full, discard the oldest element in the buffer.
- [Publishers.BufferingStrategy.customError(\_:)](customerror%28__%29.md): When the buffer is full, execute the closure to provide a custom error.
