> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tctouchcontroller/addthumbstick(descriptor:)](https://developer.apple.com/documentation/touchcontroller/tctouchcontroller/addthumbstick(descriptor:))

# addThumbstick(descriptor:) (Swift)

**Framework:** Touch Controller  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Creates a new thumbstick control with the provided descriptor, and adds it to the touch controller.

## Declaration

```swift
func addThumbstick(descriptor: TCThumbstickDescriptor) -> TCThumbstick
```

## Parameters

- `descriptor`: The `TCThumbstickDescriptor` containing the configuration for the thumbstick.

<a id="return-value"></a>

## Return Value

A new `TCThumbstick` instance.

## See Also

### Adding a thumbstick control

- [TCThumbstickDescriptor](../tcthumbstickdescriptor.md): A descriptor for configuring a thumbstick.

# addThumbstickWithDescriptor: (Objective-C)

**Framework:** Touch Controller  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Creates a new thumbstick control with the provided descriptor, and adds it to the touch controller.

## Declaration

```objectivec
- (TCThumbstick *) addThumbstickWithDescriptor:(TCThumbstickDescriptor *) descriptor;
```

## Parameters

- `descriptor`: The `TCThumbstickDescriptor` containing the configuration for the thumbstick.

<a id="return-value"></a>

## Return Value

A new `TCThumbstick` instance.

## See Also

### Adding a thumbstick control

- [TCThumbstickDescriptor](../tcthumbstickdescriptor.md): A descriptor for configuring a thumbstick.
