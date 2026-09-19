> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsslidercell/minvalue

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

A vertical slider sends this value when its knob is at the bottom; a horizontal slider sends it when its knob is all the way to the left; a circular slider sends it when its knob is at the top.

## See Also

### Managing Value Limits

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

A vertical slider sends this value when its knob is at the bottom; a horizontal slider sends it when its knob is all the way to the left; a circular slider sends it when its knob is at the top.

## See Also

### Managing Value Limits

- [maxValue](maxvalue.md): The maximum value the slider can send to its target.
