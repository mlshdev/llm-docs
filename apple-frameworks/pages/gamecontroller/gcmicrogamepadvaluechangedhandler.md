> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcmicrogamepadvaluechangedhandler](https://developer.apple.com/documentation/gamecontroller/gcmicrogamepadvaluechangedhandler)

# GCMicroGamepadValueChangedHandler (Swift)

**Framework:** Game Controller  
**Kind:** Type Alias  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Signature for the block that this profile calls when an element’s value changes.

## Declaration

```swift
typealias GCMicroGamepadValueChangedHandler = (GCMicroGamepad, GCControllerElement) -> Void
```

## Parameters

- `gamepad`: The profile whose element value changes.
- `element`: The element in the profile whose value changes.

## See Also

### Receiving a callback when input values change

- [valueChangedHandler](gcmicrogamepad/valuechangedhandler.md): The block that this profile calls when an element’s value changes.

# GCMicroGamepadValueChangedHandler (Objective-C)

**Framework:** Game Controller  
**Kind:** Type Alias  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Signature for the block that this profile calls when an element’s value changes.

## Declaration

```objectivec
typedef void (^)(GCMicroGamepad *, GCControllerElement *) GCMicroGamepadValueChangedHandler;
```

## Parameters

- `gamepad`: The profile whose element value changes.
- `element`: The element in the profile whose value changes.

## See Also

### Receiving a callback when input values change

- [valueChangedHandler](gcmicrogamepad/valuechangedhandler.md): The block that this profile calls when an element’s value changes.
