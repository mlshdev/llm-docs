> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/operation/threadpriority](https://developer.apple.com/documentation/foundation/operation/threadpriority)

# threadPriority (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 8.0) · iPadOS 4.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.6+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

The thread priority to use when executing the operation

> Use [qualityOfService](qualityofservice.md) instead.

## Declaration

```swift
var threadPriority: Double { get set }
```

## See Also

### Configuring the Execution Priority

- [qualityOfService](qualityofservice.md): The relative amount of importance for granting system resources to the operation.
- [queuePriority](queuepriority-swift.property.md): The execution priority of the operation in an operation queue.

# threadPriority (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 8.0) · iPadOS 4.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.6+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

The thread priority to use when executing the operation

> Use [qualityOfService](qualityofservice.md) instead.

## Declaration

```objectivec
@property double threadPriority;
```

## See Also

### Configuring the Execution Priority

- [qualityOfService](qualityofservice.md): The relative amount of importance for granting system resources to the operation.
- [queuePriority](queuepriority-swift.property.md): The execution priority of the operation in an operation queue.
