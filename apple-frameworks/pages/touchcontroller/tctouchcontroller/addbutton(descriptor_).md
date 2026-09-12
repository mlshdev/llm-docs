> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tctouchcontroller/addbutton(descriptor:)](https://developer.apple.com/documentation/touchcontroller/tctouchcontroller/addbutton(descriptor:))

# addButton(descriptor:) (Swift)

**Framework:** Touch Controller  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Creates a new button control with the provided descriptor, and adds it to the touch controller.

## Declaration

```swift
func addButton(descriptor: TCButtonDescriptor) -> TCButton
```

## Parameters

- `descriptor`: The `TCButtonDescriptor` containing the configuration for the button.

<a id="return-value"></a>

## Return Value

A new `TCButton` instance.

## See Also

### Adding a button control

- [TCButtonDescriptor](../tcbuttondescriptor.md): A descriptor for configuring a button.

# addButtonWithDescriptor: (Objective-C)

**Framework:** Touch Controller  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Creates a new button control with the provided descriptor, and adds it to the touch controller.

## Declaration

```objectivec
- (TCButton *) addButtonWithDescriptor:(TCButtonDescriptor *) descriptor;
```

## Parameters

- `descriptor`: The `TCButtonDescriptor` containing the configuration for the button.

<a id="return-value"></a>

## Return Value

A new `TCButton` instance.

## See Also

### Adding a button control

- [TCButtonDescriptor](../tcbuttondescriptor.md): A descriptor for configuring a button.
