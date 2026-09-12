> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/modifierflags-swift.property](https://developer.apple.com/documentation/appkit/nsevent/modifierflags-swift.property)

# modifierFlags (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

An integer bit field that indicates the pressed modifier keys.

## Declaration

```swift
var modifierFlags: NSEvent.ModifierFlags { get }
```

<a id="Discussion"></a>

## Discussion

You can examine individual flag settings using the C bitwise AND operator with the predefined key masks described in `Getting Unicode Values`. The lower 16 bits of the modifier flags are reserved for device-dependent bits.

## See Also

### Getting modifier flags

- [NSEvent.ModifierFlags](modifierflags-swift.struct.md): Flags that represent key states in an event object.
- [modifierFlags](modifierflags-swift.type.property.md): The currently pressed modifier keys.

# modifierFlags (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

An integer bit field that indicates the pressed modifier keys.

## Declaration

```objectivec
@property (readonly) NSEventModifierFlags modifierFlags;
```

<a id="Discussion"></a>

## Discussion

You can examine individual flag settings using the C bitwise AND operator with the predefined key masks described in `Getting Unicode Values`. The lower 16 bits of the modifier flags are reserved for device-dependent bits.

## See Also

### Getting modifier flags

- [NSEventModifierFlags](modifierflags-swift.struct.md): Flags that represent key states in an event object.
- [modifierFlags](modifierflags-swift.type.property.md): The currently pressed modifier keys.
