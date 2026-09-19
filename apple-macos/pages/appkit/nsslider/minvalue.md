> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsslider/minvalue

# minValue (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The minimum value the slider can send to its target.

## Declaration

```swift
var minValue: Double { get set }
```

<a id="Discussion"></a>

## Discussion

A horizontal slider sends the minimum value when the knob is all the way to the leading end of the bar. A vertical slider sends the minimum value when its knob is at the bottom.

## See Also

### Asking about the value limits

- [maxValue](maxvalue.md): The maximum value the slider can send to its target.

# minValue (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The minimum value the slider can send to its target.

## Declaration

```objectivec
@property double minValue;
```

<a id="Discussion"></a>

## Discussion

A horizontal slider sends the minimum value when the knob is all the way to the leading end of the bar. A vertical slider sends the minimum value when its knob is at the bottom.

## See Also

### Asking about the value limits

- [maxValue](maxvalue.md): The maximum value the slider can send to its target.
