> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/vendordefined](https://developer.apple.com/documentation/appkit/nsevent/vendordefined)

# vendorDefined (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

An array of three vendor-defined number objects associated with a pointing-type event.

## Declaration

```swift
var vendorDefined: Any { get }
```

<a id="Discussion"></a>

## Discussion

This property contains an array of three [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) objects. Each object encapsulates a `short` value that vendors may return for various reasons; see the vendor documentation for details.This method is valid for mouse events with subtype [NSTabletPointEventSubtype](../nstabletpointeventsubtype.md) and for [NSTabletPoint](../nstabletpoint.md) events.

## See Also

### Getting tablet pointing information

- [absoluteX](absolutex.md): The absolute x coordinate of a pointing device on its tablet at full tablet resolution.
- [absoluteY](absolutey.md): The absolute y coordinate of a pointing device on its tablet at full tablet resolution.
- [absoluteZ](absolutez.md): The absolute z coordinate of pointing device on its tablet at full tablet resolution.
- [buttonMask](buttonmask-swift.property.md): A bit mask identifying the buttons pressed for a tablet event.
- [NSEvent.ButtonMask](buttonmask-swift.struct.md): Constants you use to identify the activated tablet buttons in an event.
- [rotation](rotation.md): The rotation in degrees of the tablet pointing device associated with this event.
- [tangentialPressure](tangentialpressure.md): The tangential pressure on the device that generated this event.
- [tilt](tilt.md): The scaled tilt values of the pointing device that generated this event.

# vendorDefined (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

An array of three vendor-defined number objects associated with a pointing-type event.

## Declaration

```objectivec
@property (strong, readonly) id vendorDefined;
```

<a id="Discussion"></a>

## Discussion

This property contains an array of three [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) objects. Each object encapsulates a `short` value that vendors may return for various reasons; see the vendor documentation for details.This method is valid for mouse events with subtype [NSTabletPointEventSubtype](../nstabletpointeventsubtype.md) and for [NSTabletPoint](../nstabletpoint.md) events.

## See Also

### Getting tablet pointing information

- [absoluteX](absolutex.md): The absolute x coordinate of a pointing device on its tablet at full tablet resolution.
- [absoluteY](absolutey.md): The absolute y coordinate of a pointing device on its tablet at full tablet resolution.
- [absoluteZ](absolutez.md): The absolute z coordinate of pointing device on its tablet at full tablet resolution.
- [buttonMask](buttonmask-swift.property.md): A bit mask identifying the buttons pressed for a tablet event.
- [NSEventButtonMask](buttonmask-swift.struct.md): Constants you use to identify the activated tablet buttons in an event.
- [rotation](rotation.md): The rotation in degrees of the tablet pointing device associated with this event.
- [tangentialPressure](tangentialpressure.md): The tangential pressure on the device that generated this event.
- [tilt](tilt.md): The scaled tilt values of the pointing device that generated this event.
