> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscroller/setfloatvalue:knobproportion:](https://developer.apple.com/documentation/appkit/nsscroller/setfloatvalue:knobproportion:)

# setFloatValue:knobProportion:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.5)

Sets the position of the knob to `aFloat`, which is a value from 0.0 (indicating the top or left end) to 1.0 (the bottom or right end).

> Use the [knobProportion](knobproportion.md) property and the [doubleValue](../nscontrol/doublevalue.md) method instead.

## Declaration

```objectivec
- (void) setFloatValue:(float) value knobProportion:(CGFloat) proportion;
```

<a id="Discussion"></a>

## Discussion

Also sets the proportion of the knob slot filled by the knob to `knobProp`, also a value from 0.0 (minimal size) to 1.0 (fills the slot).

## See Also

### Related Documentation

- [knobProportion](knobproportion.md): The proportion of the knob slot that the knob should fill.
- [floatValue](../nscontrol/floatvalue.md): The value of the receiver’s cell as a single-precision floating-point number.

### Setting the Knob Position

- [knobProportion](knobproportion.md): The proportion of the knob slot that the knob should fill.
