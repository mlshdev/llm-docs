> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcgearshifterelement/patterninput](https://developer.apple.com/documentation/gamecontroller/gcgearshifterelement/patterninput)

# patternInput (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 16.0+ · macOS 13.0+

The input object for a pattern gear shift.

## Declaration

```swift
var patternInput: (any GCSwitchPositionInput)? { get }
```

<a id="Discussion"></a>

## Discussion

If this property is `nil`, the gear shift isn’t a pattern gear shift. A pattern gear shift lays out the gears in a pattern that lets the user move to any gear. If the [position](../gcswitchpositioninput/position.md) property of this property is `0`, the gear shift is in neutral. If it’s `-1`, the gear shift is in reverse.

## See Also

### Accessing input values

- [sequentialInput](sequentialinput.md): The input object for a sequential gear shift.

# patternInput (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 16.0+ · macOS 13.0+

The input object for a pattern gear shift.

## Declaration

```objectivec
@property (readonly, nullable) id<GCSwitchPositionInput> patternInput;
```

<a id="Discussion"></a>

## Discussion

If this property is `nil`, the gear shift isn’t a pattern gear shift. A pattern gear shift lays out the gears in a pattern that lets the user move to any gear. If the [position](../gcswitchpositioninput/position.md) property of this property is `0`, the gear shift is in neutral. If it’s `-1`, the gear shift is in reverse.

## See Also

### Accessing input values

- [sequentialInput](sequentialinput.md): The input object for a sequential gear shift.
