> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tctouchcontroller/addthrottle(descriptor:)](https://developer.apple.com/documentation/touchcontroller/tctouchcontroller/addthrottle(descriptor:))

# addThrottle(descriptor:) (Swift)

**Framework:** Touch Controller  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Creates a new throttle control with the provided descriptor, and adds it to the touch controller.

## Declaration

```swift
func addThrottle(descriptor: TCThrottleDescriptor) -> TCThrottle
```

## Parameters

- `descriptor`: The `TCThrottleDescriptor` containing the configuration for the throttle.

<a id="return-value"></a>

## Return Value

A new `TCThrottle` instance.

## See Also

### Adding a throttle control

- [TCThrottleDescriptor](../tcthrottledescriptor.md): A descriptor for configuring a throttle.

# addThrottleWithDescriptor: (Objective-C)

**Framework:** Touch Controller  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Creates a new throttle control with the provided descriptor, and adds it to the touch controller.

## Declaration

```objectivec
- (TCThrottle *) addThrottleWithDescriptor:(TCThrottleDescriptor *) descriptor;
```

## Parameters

- `descriptor`: The `TCThrottleDescriptor` containing the configuration for the throttle.

<a id="return-value"></a>

## Return Value

A new `TCThrottle` instance.

## See Also

### Adding a throttle control

- [TCThrottleDescriptor](../tcthrottledescriptor.md): A descriptor for configuring a throttle.
