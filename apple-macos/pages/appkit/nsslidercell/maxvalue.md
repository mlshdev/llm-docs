> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsslidercell/maxvalue](https://developer.apple.com/documentation/appkit/nsslidercell/maxvalue)

# maxValue (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The maximum value the slider can send to its target.

## Declaration

```swift
var maxValue: Double { get set }
```

<a id="Discussion"></a>

## Discussion

A horizontal slider sends its maximum value when the knob is at the right end of the slider; a vertical slider sends it when the knob is at the top. The maximum selectable value for a circular slider is just below [maxValue](maxvalue.md); for example, if [maxValue](maxvalue.md) is 360, you can set the dial up to 359.999.

## See Also

### Managing Value Limits

- [minValue](minvalue.md): The minimum value the slider can send to its target.

# maxValue (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The maximum value the slider can send to its target.

## Declaration

```objectivec
@property double maxValue;
```

<a id="Discussion"></a>

## Discussion

A horizontal slider sends its maximum value when the knob is at the right end of the slider; a vertical slider sends it when the knob is at the top. The maximum selectable value for a circular slider is just below [maxValue](maxvalue.md); for example, if [maxValue](maxvalue.md) is 360, you can set the dial up to 359.999.

## See Also

### Managing Value Limits

- [minValue](minvalue.md): The minimum value the slider can send to its target.
