> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/modifierflags-swift.type.property](https://developer.apple.com/documentation/appkit/nsevent/modifierflags-swift.type.property)

# modifierFlags (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.6+

The currently pressed modifier keys.

## Declaration

```swift
class var modifierFlags: NSEvent.ModifierFlags { get }
```

<a id="return-value"></a>

## Return Value

A mask of the current modifiers using the values in `Modifier Flags`.

<a id="Discussion"></a>

## Discussion

This returns the state of devices combined with synthesized events at the moment, independent of which events have been delivered via the event stream.

## See Also

### Getting modifier flags

- [modifierFlags](modifierflags-swift.property.md): An integer bit field that indicates the pressed modifier keys.
- [NSEvent.ModifierFlags](modifierflags-swift.struct.md): Flags that represent key states in an event object.

# modifierFlags (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.6+

The currently pressed modifier keys.

## Declaration

```objectivec
@property (class, readonly) NSEventModifierFlags modifierFlags;
```

<a id="return-value"></a>

## Return Value

A mask of the current modifiers using the values in `Modifier Flags`.

<a id="Discussion"></a>

## Discussion

This returns the state of devices combined with synthesized events at the moment, independent of which events have been delivered via the event stream.

## See Also

### Getting modifier flags

- [modifierFlags](modifierflags-swift.property.md): An integer bit field that indicates the pressed modifier keys.
- [NSEventModifierFlags](modifierflags-swift.struct.md): Flags that represent key states in an event object.
