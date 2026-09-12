> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/thread/setthreadpriority(_:)](https://developer.apple.com/documentation/foundation/thread/setthreadpriority(_:))

# setThreadPriority(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the current thread’s priority.

## Declaration

```swift
class func setThreadPriority(_ p: Double) -> Bool
```

## Parameters

- `p`: The new priority, specified with a floating point number from 0.0 to 1.0, where 1.0 is highest priority.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the priority assignment succeeded, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

The priorities in this range are mapped to the operating system’s priority values.

## See Also

### Prioritizing Thread Work

- [qualityOfService](qualityofservice.md)
- [QualityOfService](../qualityofservice.md): Constants that indicate the nature and importance of work to the system.
- [threadPriority()](threadpriority%28%29.md): Returns the current thread’s priority.
- [threadPriority](threadpriority.md): The receiver’s priority

# setThreadPriority: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the current thread’s priority.

## Declaration

```objectivec
+ (BOOL) setThreadPriority:(double) p;
```

## Parameters

- `p`: The new priority, specified with a floating point number from 0.0 to 1.0, where 1.0 is highest priority.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the priority assignment succeeded, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

The priorities in this range are mapped to the operating system’s priority values.

## See Also

### Prioritizing Thread Work

- [qualityOfService](qualityofservice.md)
- [NSQualityOfService](../qualityofservice.md): Constants that indicate the nature and importance of work to the system.
- [threadPriority](threadpriority%28%29.md): Returns the current thread’s priority.
- [threadPriority](threadpriority.md): The receiver’s priority
