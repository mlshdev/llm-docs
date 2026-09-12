> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/rotation](https://developer.apple.com/documentation/appkit/nsevent/rotation)

# rotation (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The rotation in degrees of the tablet pointing device associated with this event.

## Declaration

```swift
var rotation: Float { get }
```

<a id="Discussion"></a>

## Discussion

Many devices do not support rotation, in which case the returned value is 0.0. This property is valid only for mouse events with subtype `NSTabletPointEventSubtype` and for `NSTabletPoint` events.

## See Also

### Related Documentation

- [pressure](pressure.md): A normalized value that indicates the degree of pressure applied to an appropriate input device.

### Getting tablet pointing information

- [absoluteX](absolutex.md): The absolute x coordinate of a pointing device on its tablet at full tablet resolution.
- [absoluteY](absolutey.md): The absolute y coordinate of a pointing device on its tablet at full tablet resolution.
- [absoluteZ](absolutez.md): The absolute z coordinate of pointing device on its tablet at full tablet resolution.
- [buttonMask](buttonmask-swift.property.md): A bit mask identifying the buttons pressed for a tablet event.
- [NSEvent.ButtonMask](buttonmask-swift.struct.md): Constants you use to identify the activated tablet buttons in an event.
- [tangentialPressure](tangentialpressure.md): The tangential pressure on the device that generated this event.
- [tilt](tilt.md): The scaled tilt values of the pointing device that generated this event.
- [vendorDefined](vendordefined.md): An array of three vendor-defined number objects associated with a pointing-type event.

# rotation (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The rotation in degrees of the tablet pointing device associated with this event.

## Declaration

```objectivec
@property (readonly) float rotation;
```

<a id="Discussion"></a>

## Discussion

Many devices do not support rotation, in which case the returned value is 0.0. This property is valid only for mouse events with subtype `NSTabletPointEventSubtype` and for `NSTabletPoint` events.

## See Also

### Related Documentation

- [pressure](pressure.md): A normalized value that indicates the degree of pressure applied to an appropriate input device.

### Getting tablet pointing information

- [absoluteX](absolutex.md): The absolute x coordinate of a pointing device on its tablet at full tablet resolution.
- [absoluteY](absolutey.md): The absolute y coordinate of a pointing device on its tablet at full tablet resolution.
- [absoluteZ](absolutez.md): The absolute z coordinate of pointing device on its tablet at full tablet resolution.
- [buttonMask](buttonmask-swift.property.md): A bit mask identifying the buttons pressed for a tablet event.
- [NSEventButtonMask](buttonmask-swift.struct.md): Constants you use to identify the activated tablet buttons in an event.
- [tangentialPressure](tangentialpressure.md): The tangential pressure on the device that generated this event.
- [tilt](tilt.md): The scaled tilt values of the pointing device that generated this event.
- [vendorDefined](vendordefined.md): An array of three vendor-defined number objects associated with a pointing-type event.
