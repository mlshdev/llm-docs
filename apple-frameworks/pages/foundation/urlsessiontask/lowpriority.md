> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiontask/lowpriority](https://developer.apple.com/documentation/foundation/urlsessiontask/lowpriority)

# lowPriority (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A low URL session task priority, with a floating point value above the minimum of `0` and below the default value.

## Declaration

```swift
class let lowPriority: Float
```

## See Also

### Priority constants

- [defaultPriority](defaultpriority.md): The default URL session task priority, used implicitly for any task you have not prioritized.
- [highPriority](highpriority.md): A high URL session task priority, with a floating point value above the default value and below the maximum of `1.0`.

# NSURLSessionTaskPriorityLow (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A low URL session task priority, with a floating point value above the minimum of `0` and below the default value.

## Declaration

```objectivec
extern const float NSURLSessionTaskPriorityLow;
```

## See Also

### Priority constants

- [NSURLSessionTaskPriorityDefault](defaultpriority.md): The default URL session task priority, used implicitly for any task you have not prioritized.
- [NSURLSessionTaskPriorityHigh](highpriority.md): A high URL session task priority, with a floating point value above the default value and below the maximum of `1.0`.
