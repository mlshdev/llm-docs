> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gamecontroller/gccontrolleraxisvaluechangedhandler

# GCControllerAxisValueChangedHandler (Swift)

**Framework:** Game Controller  
**Kind:** Type Alias  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The signature for the block that executes when the user changes the axis value.

## Declaration

```swift
typealias GCControllerAxisValueChangedHandler = (GCControllerAxisInput, Float) -> Void
```

## Parameters

- `axis`: The axis that the user changed.
- `value`: A normalized value for the axis ranging from `-1` to `1`.

## See Also

### Getting change information

- [valueChangedHandler](gccontrolleraxisinput/valuechangedhandler.md): The block that the element calls when the user changes the axis value.

# GCControllerAxisValueChangedHandler (Objective-C)

**Framework:** Game Controller  
**Kind:** Type Alias  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The signature for the block that executes when the user changes the axis value.

## Declaration

```objectivec
typedef void (^)(GCControllerAxisInput *, float) GCControllerAxisValueChangedHandler;
```

## Parameters

- `axis`: The axis that the user changed.
- `value`: A normalized value for the axis ranging from `-1` to `1`.

## See Also

### Getting change information

- [valueChangedHandler](gccontrolleraxisinput/valuechangedhandler.md): The block that the element calls when the user changes the axis value.
