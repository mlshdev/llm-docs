> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mltaskstate/cancelling](https://developer.apple.com/documentation/coreml/mltaskstate/cancelling)

# MLTaskState.cancelling (Swift)

**Framework:** Core ML  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The state of a machine learning task that’s in mid-termination, before it could finish successfully.

## Declaration

```swift
case cancelling
```

## See Also

### Transient states

- [MLTaskState.running](running.md): The state of a machine learning task that’s executing.
- [MLTaskState.suspended](suspended.md): The state of a machine learning task that’s paused.

# MLTaskStateCancelling (Objective-C)

**Framework:** Core ML  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The state of a machine learning task that’s in mid-termination, before it could finish successfully.

## Declaration

```objectivec
MLTaskStateCancelling
```

## See Also

### Transient states

- [MLTaskStateRunning](running.md): The state of a machine learning task that’s executing.
- [MLTaskStateSuspended](suspended.md): The state of a machine learning task that’s paused.
