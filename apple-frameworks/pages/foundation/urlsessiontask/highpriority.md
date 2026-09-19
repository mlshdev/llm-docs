> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/urlsessiontask/highpriority

# highPriority (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A high URL session task priority, with a floating point value above the default value and below the maximum of `1.0`.

## Declaration

```swift
class let highPriority: Float
```

## See Also

### Priority constants

- [defaultPriority](defaultpriority.md): The default URL session task priority, used implicitly for any task you have not prioritized.
- [lowPriority](lowpriority.md): A low URL session task priority, with a floating point value above the minimum of `0` and below the default value.

# NSURLSessionTaskPriorityHigh (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A high URL session task priority, with a floating point value above the default value and below the maximum of `1.0`.

## Declaration

```objectivec
extern const float NSURLSessionTaskPriorityHigh;
```

## See Also

### Priority constants

- [NSURLSessionTaskPriorityDefault](defaultpriority.md): The default URL session task priority, used implicitly for any task you have not prioritized.
- [NSURLSessionTaskPriorityLow](lowpriority.md): A low URL session task priority, with a floating point value above the minimum of `0` and below the default value.
