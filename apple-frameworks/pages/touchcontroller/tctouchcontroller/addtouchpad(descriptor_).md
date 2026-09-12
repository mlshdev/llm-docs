> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tctouchcontroller/addtouchpad(descriptor:)](https://developer.apple.com/documentation/touchcontroller/tctouchcontroller/addtouchpad(descriptor:))

# addTouchpad(descriptor:) (Swift)

**Framework:** Touch Controller  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Creates a new touchpad control with the provided descriptor, and adds it to the touch controller.

## Declaration

```swift
func addTouchpad(descriptor: TCTouchpadDescriptor) -> TCTouchpad
```

## Parameters

- `descriptor`: The `TCTouchpadDescriptor` containing the configuration for the touchpad.

<a id="return-value"></a>

## Return Value

A new `TCTouchpad` instance.

## See Also

### Adding a touchpad control

- [TCTouchpadDescriptor](../tctouchpaddescriptor.md): A descriptor for configuring a touchpad.

# addTouchpadWithDescriptor: (Objective-C)

**Framework:** Touch Controller  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Creates a new touchpad control with the provided descriptor, and adds it to the touch controller.

## Declaration

```objectivec
- (TCTouchpad *) addTouchpadWithDescriptor:(TCTouchpadDescriptor *) descriptor;
```

## Parameters

- `descriptor`: The `TCTouchpadDescriptor` containing the configuration for the touchpad.

<a id="return-value"></a>

## Return Value

A new `TCTouchpad` instance.

## See Also

### Adding a touchpad control

- [TCTouchpadDescriptor](../tctouchpaddescriptor.md): A descriptor for configuring a touchpad.
