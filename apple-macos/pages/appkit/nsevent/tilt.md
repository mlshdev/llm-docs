> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/tilt](https://developer.apple.com/documentation/appkit/nsevent/tilt)

# tilt (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The scaled tilt values of the pointing device that generated this event.

## Declaration

```swift
var tilt: NSPoint { get }
```

<a id="Discussion"></a>

## Discussion

This property’s value can range from -1.0 to 1.0 for both axes. A negative x-coordinate value indicates a tilt to the left and a positive value indicates a tilt to the right; a negative y-coordinate value indicates a tilt to the top and a positive value indicates a tilt to the bottom. If the device is perfectly perpendicular to the table surface, the values are 0.0 for both axes. This property is valid for mouse events with subtype `NSTabletPointEventSubtype` and for `NSTabletPoint` events.

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
- [tangentialPressure](tangentialpressure.md): The tangential pressure on the device that generated this event.
- [vendorDefined](vendordefined.md): An array of three vendor-defined number objects associated with a pointing-type event.

# tilt (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The scaled tilt values of the pointing device that generated this event.

## Declaration

```objectivec
@property (readonly) NSPoint tilt;
```

<a id="Discussion"></a>

## Discussion

This property’s value can range from -1.0 to 1.0 for both axes. A negative x-coordinate value indicates a tilt to the left and a positive value indicates a tilt to the right; a negative y-coordinate value indicates a tilt to the top and a positive value indicates a tilt to the bottom. If the device is perfectly perpendicular to the table surface, the values are 0.0 for both axes. This property is valid for mouse events with subtype `NSTabletPointEventSubtype` and for `NSTabletPoint` events.

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
- [tangentialPressure](tangentialpressure.md): The tangential pressure on the device that generated this event.
- [vendorDefined](vendordefined.md): An array of three vendor-defined number objects associated with a pointing-type event.
