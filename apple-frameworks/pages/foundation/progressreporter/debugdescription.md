> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progressreporter/debugdescription](https://developer.apple.com/documentation/foundation/progressreporter/debugdescription)

# debugDescription

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A textual representation of the progress reporter suitable for debugging.

## Declaration

```swift
final var debugDescription: String { get }
```

<a id="discussion"></a>

## Discussion

This property returns the same value as `description`, providing detailed information about the progress reporter’s state for debugging purposes.
