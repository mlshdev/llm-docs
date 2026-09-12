> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/thread/threadpriority()](https://developer.apple.com/documentation/foundation/thread/threadpriority())

# threadPriority() (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the current thread’s priority.

## Declaration

```swift
class func threadPriority() -> Double
```

<a id="return-value"></a>

## Return Value

The current thread’s priority, which is specified by a floating point number from 0.0 to 1.0, where 1.0 is highest priority.

<a id="Discussion"></a>

## Discussion

The priorities in this range are mapped to the operating system’s priority values. A “typical” thread priority might be 0.5, but because the priority is determined by the kernel, there is no guarantee what this value actually will be.

## See Also

### Prioritizing Thread Work

- [qualityOfService](qualityofservice.md)
- [QualityOfService](../qualityofservice.md): Constants that indicate the nature and importance of work to the system.
- [threadPriority](threadpriority.md): The receiver’s priority
- [setThreadPriority(\_:)](setthreadpriority%28__%29.md): Sets the current thread’s priority.

# threadPriority (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the current thread’s priority.

## Declaration

```objectivec
+ (double) threadPriority;
```

<a id="return-value"></a>

## Return Value

The current thread’s priority, which is specified by a floating point number from 0.0 to 1.0, where 1.0 is highest priority.

<a id="Discussion"></a>

## Discussion

The priorities in this range are mapped to the operating system’s priority values. A “typical” thread priority might be 0.5, but because the priority is determined by the kernel, there is no guarantee what this value actually will be.

## See Also

### Prioritizing Thread Work

- [qualityOfService](qualityofservice.md)
- [NSQualityOfService](../qualityofservice.md): Constants that indicate the nature and importance of work to the system.
- [threadPriority](threadpriority.md): The receiver’s priority
- [setThreadPriority:](setthreadpriority%28__%29.md): Sets the current thread’s priority.
