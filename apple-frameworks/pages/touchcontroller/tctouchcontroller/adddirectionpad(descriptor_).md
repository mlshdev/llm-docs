> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tctouchcontroller/adddirectionpad(descriptor:)](https://developer.apple.com/documentation/touchcontroller/tctouchcontroller/adddirectionpad(descriptor:))

# addDirectionPad(descriptor:) (Swift)

**Framework:** Touch Controller  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Creates a new direction pad control with the provided descriptor, and adds it to the touch controller.

## Declaration

```swift
func addDirectionPad(descriptor: TCDirectionPadDescriptor) -> TCDirectionPad
```

## Parameters

- `descriptor`: The `TCDirectionPadDescriptor` containing the configuration for the direction pad.

<a id="return-value"></a>

## Return Value

A new `TCDirectionPad` instance.

## See Also

### Adding a directional pad control

- [TCDirectionPadDescriptor](../tcdirectionpaddescriptor.md): A descriptor for configuring a directional pad.

# addDirectionPadWithDescriptor: (Objective-C)

**Framework:** Touch Controller  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Creates a new direction pad control with the provided descriptor, and adds it to the touch controller.

## Declaration

```objectivec
- (TCDirectionPad *) addDirectionPadWithDescriptor:(TCDirectionPadDescriptor *) descriptor;
```

## Parameters

- `descriptor`: The `TCDirectionPadDescriptor` containing the configuration for the direction pad.

<a id="return-value"></a>

## Return Value

A new `TCDirectionPad` instance.

## See Also

### Adding a directional pad control

- [TCDirectionPadDescriptor](../tcdirectionpaddescriptor.md): A descriptor for configuring a directional pad.
