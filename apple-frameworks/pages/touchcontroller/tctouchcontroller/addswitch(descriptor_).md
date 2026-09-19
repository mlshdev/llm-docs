> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/touchcontroller/tctouchcontroller/addswitch(descriptor:)

# addSwitch(descriptor:) (Swift)

**Framework:** Touch Controller  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Creates a new switch control with the provided descriptor, and adds it to the touch controller.

## Declaration

```swift
func addSwitch(descriptor: TCSwitchDescriptor) -> TCSwitch
```

## Parameters

- `descriptor`: The `TCSwitchDescriptor` containing the configuration for the switch.

<a id="return-value"></a>

## Return Value

A new `TCSwitch` instance.

## See Also

### Adding a switch control

- [TCSwitchDescriptor](../tcswitchdescriptor.md): A descriptor for configuring a switch.

# addSwitchWithDescriptor: (Objective-C)

**Framework:** Touch Controller  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Creates a new switch control with the provided descriptor, and adds it to the touch controller.

## Declaration

```objectivec
- (TCSwitch *) addSwitchWithDescriptor:(TCSwitchDescriptor *) descriptor;
```

## Parameters

- `descriptor`: The `TCSwitchDescriptor` containing the configuration for the switch.

<a id="return-value"></a>

## Return Value

A new `TCSwitch` instance.

## See Also

### Adding a switch control

- [TCSwitchDescriptor](../tcswitchdescriptor.md): A descriptor for configuring a switch.
