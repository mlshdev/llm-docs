> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiontask/defaultpriority](https://developer.apple.com/documentation/foundation/urlsessiontask/defaultpriority)

# defaultPriority (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The default URL session task priority, used implicitly for any task you have not prioritized.

## Declaration

```swift
class let defaultPriority: Float
```

<a id="Discussion"></a>

## Discussion

The floating point value of this constant is `0.5`.

## See Also

### Priority constants

- [lowPriority](lowpriority.md): A low URL session task priority, with a floating point value above the minimum of `0` and below the default value.
- [highPriority](highpriority.md): A high URL session task priority, with a floating point value above the default value and below the maximum of `1.0`.

# NSURLSessionTaskPriorityDefault (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The default URL session task priority, used implicitly for any task you have not prioritized.

## Declaration

```objectivec
extern const float NSURLSessionTaskPriorityDefault;
```

<a id="Discussion"></a>

## Discussion

The floating point value of this constant is `0.5`.

## See Also

### Priority constants

- [NSURLSessionTaskPriorityLow](lowpriority.md): A low URL session task priority, with a floating point value above the minimum of `0` and below the default value.
- [NSURLSessionTaskPriorityHigh](highpriority.md): A high URL session task priority, with a floating point value above the default value and below the maximum of `1.0`.
