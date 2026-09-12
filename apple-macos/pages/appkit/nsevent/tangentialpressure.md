> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/tangentialpressure](https://developer.apple.com/documentation/appkit/nsevent/tangentialpressure)

# tangentialPressure (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The tangential pressure on the device that generated this event.

## Declaration

```swift
var tangentialPressure: Float { get }
```

<a id="Discussion"></a>

## Discussion

The property’s value can range from -1.0 to 1.0. Tangential pressure is also known as barrel pressure. Only some pointing devices support tangential pressure. This method is valid for mouse events with subtype `NSTabletPointEventSubtype` and for `NSTabletPoint` events.

## See Also

### Related Documentation

- [pressure](pressure.md): A normalized value that indicates the degree of pressure applied to an appropriate input device.

### Getting tablet pointing information

- [absoluteX](absolutex.md): The absolute x coordinate of a pointing device on its tablet at full tablet resolution.
- [absoluteY](absolutey.md): The absolute y coordinate of a pointing device on its tablet at full tablet resolution.
- [absoluteZ](absolutez.md): The absolute z coordinate of pointing device on its tablet at full tablet resolution.
- [buttonMask](buttonmask-swift.property.md): A bit mask identifying the buttons pressed for a tablet event.
- [NSEvent.ButtonMask](buttonmask-swift.struct.md): Constants you use to identify the activated tablet buttons in an event.
- [rotation](rotation.md): The rotation in degrees of the tablet pointing device associated with this event.
- [tilt](tilt.md): The scaled tilt values of the pointing device that generated this event.
- [vendorDefined](vendordefined.md): An array of three vendor-defined number objects associated with a pointing-type event.

# tangentialPressure (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The tangential pressure on the device that generated this event.

## Declaration

```objectivec
@property (readonly) float tangentialPressure;
```

<a id="Discussion"></a>

## Discussion

The property’s value can range from -1.0 to 1.0. Tangential pressure is also known as barrel pressure. Only some pointing devices support tangential pressure. This method is valid for mouse events with subtype `NSTabletPointEventSubtype` and for `NSTabletPoint` events.

## See Also

### Related Documentation

- [pressure](pressure.md): A normalized value that indicates the degree of pressure applied to an appropriate input device.

### Getting tablet pointing information

- [absoluteX](absolutex.md): The absolute x coordinate of a pointing device on its tablet at full tablet resolution.
- [absoluteY](absolutey.md): The absolute y coordinate of a pointing device on its tablet at full tablet resolution.
- [absoluteZ](absolutez.md): The absolute z coordinate of pointing device on its tablet at full tablet resolution.
- [buttonMask](buttonmask-swift.property.md): A bit mask identifying the buttons pressed for a tablet event.
- [NSEventButtonMask](buttonmask-swift.struct.md): Constants you use to identify the activated tablet buttons in an event.
- [rotation](rotation.md): The rotation in degrees of the tablet pointing device associated with this event.
- [tilt](tilt.md): The scaled tilt values of the pointing device that generated this event.
- [vendorDefined](vendordefined.md): An array of three vendor-defined number objects associated with a pointing-type event.
