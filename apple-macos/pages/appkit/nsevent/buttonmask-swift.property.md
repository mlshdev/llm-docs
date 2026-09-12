> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/buttonmask-swift.property](https://developer.apple.com/documentation/appkit/nsevent/buttonmask-swift.property)

# buttonMask (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A bit mask identifying the buttons pressed for a tablet event.

## Declaration

```swift
var buttonMask: NSEvent.ButtonMask { get }
```

<a id="Discussion"></a>

## Discussion

Use one or more of the button-mask constants described in `Getting Unicode Values` to determine which of the pointing device’s buttons are pressed. This property is valid only for mouse events with a subtype of `NSTabletPointEventSubtype` and for events of type `NSTabletPoint`; otherwise, the property is set to `0`.

## See Also

### Getting tablet pointing information

- [absoluteX](absolutex.md): The absolute x coordinate of a pointing device on its tablet at full tablet resolution.
- [absoluteY](absolutey.md): The absolute y coordinate of a pointing device on its tablet at full tablet resolution.
- [absoluteZ](absolutez.md): The absolute z coordinate of pointing device on its tablet at full tablet resolution.
- [NSEvent.ButtonMask](buttonmask-swift.struct.md): Constants you use to identify the activated tablet buttons in an event.
- [rotation](rotation.md): The rotation in degrees of the tablet pointing device associated with this event.
- [tangentialPressure](tangentialpressure.md): The tangential pressure on the device that generated this event.
- [tilt](tilt.md): The scaled tilt values of the pointing device that generated this event.
- [vendorDefined](vendordefined.md): An array of three vendor-defined number objects associated with a pointing-type event.

# buttonMask (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A bit mask identifying the buttons pressed for a tablet event.

## Declaration

```objectivec
@property (readonly) NSEventButtonMask buttonMask;
```

<a id="Discussion"></a>

## Discussion

Use one or more of the button-mask constants described in `Getting Unicode Values` to determine which of the pointing device’s buttons are pressed. This property is valid only for mouse events with a subtype of `NSTabletPointEventSubtype` and for events of type `NSTabletPoint`; otherwise, the property is set to `0`.

## See Also

### Getting tablet pointing information

- [absoluteX](absolutex.md): The absolute x coordinate of a pointing device on its tablet at full tablet resolution.
- [absoluteY](absolutey.md): The absolute y coordinate of a pointing device on its tablet at full tablet resolution.
- [absoluteZ](absolutez.md): The absolute z coordinate of pointing device on its tablet at full tablet resolution.
- [NSEventButtonMask](buttonmask-swift.struct.md): Constants you use to identify the activated tablet buttons in an event.
- [rotation](rotation.md): The rotation in degrees of the tablet pointing device associated with this event.
- [tangentialPressure](tangentialpressure.md): The tangential pressure on the device that generated this event.
- [tilt](tilt.md): The scaled tilt values of the pointing device that generated this event.
- [vendorDefined](vendordefined.md): An array of three vendor-defined number objects associated with a pointing-type event.
