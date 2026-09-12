> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscroller/knobproportion](https://developer.apple.com/documentation/appkit/nsscroller/knobproportion)

# knobProportion (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The proportion of the knob slot that the knob should fill.

## Declaration

```swift
var knobProportion: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

This property contains a floating-point value from 0.0 (minimal size) to 1.0 (fills the slot).

# knobProportion (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The proportion of the knob slot that the knob should fill.

## Declaration

```objectivec
@property CGFloat knobProportion;
```

<a id="Discussion"></a>

## Discussion

This property contains a floating-point value from 0.0 (minimal size) to 1.0 (fills the slot).

## See Also

### Setting the Knob Position

- [setFloatValue:knobProportion:](setfloatvalue_knobproportion_.md): Deprecated. Sets the position of the knob to `aFloat`, which is a value from 0.0 (indicating the top or left end) to 1.0 (the bottom or right end).
