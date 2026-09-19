> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsslider/maxvalue

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

The slider’s maximum value. A horizontal slider sends the maximum value when the knob is all the way to the trailing end of the bar. A vertical slider sends the maximum value when the knob is at the top.

## See Also

### Asking about the value limits

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

The slider’s maximum value. A horizontal slider sends the maximum value when the knob is all the way to the trailing end of the bar. A vertical slider sends the maximum value when the knob is at the top.

## See Also

### Asking about the value limits

- [minValue](minvalue.md): The minimum value the slider can send to its target.
