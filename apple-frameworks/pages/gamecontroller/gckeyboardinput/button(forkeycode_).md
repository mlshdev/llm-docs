> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gckeyboardinput/button(forkeycode:)](https://developer.apple.com/documentation/gamecontroller/gckeyboardinput/button(forkeycode:))

# button(forKeyCode:) (Swift)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Returns the button element for the specified key code.

## Declaration

```swift
func button(forKeyCode code: GCKeyCode) -> GCControllerButtonInput?
```

## Parameters

- `code`: The code for the keyboard button element.

<a id="return-value"></a>

## Return Value

The keyboard button element that this profile defines for the specified key code.

<a id="Discussion"></a>

## Discussion

Alternatively, you can get a button element for a key using the [subscript(\_:)](../gcphysicalinputprofile/subscript%28__%29.md) notation that you inherit from [GCPhysicalInputProfile](../gcphysicalinputprofile.md), as in `keyboard[GCKeyUpArrow]`.

## See Also

### Accessing Buttons

- [isAnyKeyPressed](isanykeypressed.md): A Boolean value that indicates whether the user is pressing any of the keys.
- [GCKeyCode](../gckeycode.md): The key codes for keys on a keyboard.
- [Keycode Constants](../keycode-constants.md): Constants for the codes of keyboard keys.

# buttonForKeyCode: (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Returns the button element for the specified key code.

## Declaration

```objectivec
- (GCControllerButtonInput *) buttonForKeyCode:(GCKeyCode) code;
```

## Parameters

- `code`: The code for the keyboard button element.

<a id="return-value"></a>

## Return Value

The keyboard button element that this profile defines for the specified key code.

<a id="Discussion"></a>

## Discussion

Alternatively, you can get a button element for a key using the [objectForKeyedSubscript:](../gcphysicalinputprofile/subscript%28__%29.md) notation that you inherit from [GCPhysicalInputProfile](../gcphysicalinputprofile.md), as in `keyboard[GCKeyUpArrow]`.

## See Also

### Accessing Buttons

- [anyKeyPressed](isanykeypressed.md): A Boolean value that indicates whether the user is pressing any of the keys.
- [GCKeyCode](../gckeycode.md): The key codes for keys on a keyboard.
- [Keycode Constants](../keycode-constants.md): Constants for the codes of keyboard keys.
