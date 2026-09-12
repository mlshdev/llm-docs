> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasyncproperty/status/loaded(_:)](https://developer.apple.com/documentation/avfoundation/avasyncproperty/status/loaded(_:))

# AVAsyncProperty.Status.loaded(\_:)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A property value is ready to use.

## Declaration

```swift
case loaded(Value)
```

## Parameters

- `value`: A value for the property.

## See Also

### Status values

- [AVAsyncProperty.Status.notYetLoaded](notyetloaded.md): The system hasn’t loaded a property value.
- [AVAsyncProperty.Status.loading](loading.md): The system is loading the property.
- [AVAsyncProperty.Status.failed(\_:)](failed%28__%29.md): A property value fails to load.
