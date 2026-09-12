> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasyncproperty/status](https://developer.apple.com/documentation/avfoundation/avasyncproperty/status)

# AVAsyncProperty.Status

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Loaded status values for asynchronous properties.

## Declaration

```swift
@frozen enum Status
```

## Mentioned In

- [Loading media data asynchronously](../loading-media-data-asynchronously.md)

## Topics

### Status values

- [AVAsyncProperty.Status.notYetLoaded](status/notyetloaded.md): The system hasn’t loaded a property value.
- [AVAsyncProperty.Status.loading](status/loading.md): The system is loading the property.
- [AVAsyncProperty.Status.loaded(\_:)](status/loaded%28__%29.md): A property value is ready to use.
- [AVAsyncProperty.Status.failed(\_:)](status/failed%28__%29.md): A property value fails to load.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
