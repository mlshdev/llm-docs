> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcextendedgamepadvaluechangedhandler](https://developer.apple.com/documentation/gamecontroller/gcextendedgamepadvaluechangedhandler)

# GCExtendedGamepadValueChangedHandler (Swift)

**Framework:** Game Controller  
**Kind:** Type Alias  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The signature for the block that the profile calls when an element’s value changes.

## Declaration

```swift
typealias GCExtendedGamepadValueChangedHandler = (GCExtendedGamepad, GCControllerElement) -> Void
```

## Parameters

- `gamepad`: The profile with the element value that changes.
- `element`: The element with the value that changes in the profile.

## See Also

### Getting change information

- [valueChangedHandler](gcextendedgamepad/valuechangedhandler.md): The block that the profile calls when an element’s value changes.

# GCExtendedGamepadValueChangedHandler (Objective-C)

**Framework:** Game Controller  
**Kind:** Type Alias  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The signature for the block that the profile calls when an element’s value changes.

## Declaration

```objectivec
typedef void (^)(GCExtendedGamepad *, GCControllerElement *) GCExtendedGamepadValueChangedHandler;
```

## Parameters

- `gamepad`: The profile with the element value that changes.
- `element`: The element with the value that changes in the profile.

## See Also

### Getting change information

- [valueChangedHandler](gcextendedgamepad/valuechangedhandler.md): The block that the profile calls when an element’s value changes.
