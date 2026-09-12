> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseblendnodedefinition/addrangeforinputvaluesabove(value:fullgainatvalue:fadecurvetype:subtree:)](https://developer.apple.com/documentation/phase/phaseblendnodedefinition/addrangeforinputvaluesabove(value:fullgainatvalue:fadecurvetype:subtree:))

# addRangeForInputValuesAbove(value:fullGainAtValue:fadeCurveType:subtree:) (Swift)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Adds a child node that blends above a given value.

## Declaration

```swift
func addRangeForInputValuesAbove(value: Double, fullGainAtValue: Double, fadeCurveType: PHASECurveType, subtree: PHASESoundEventNodeDefinition)
```

## Parameters

- `value`: The value below which the child node blends.
- `fullGainAtValue`: A threshold such that the node applies a fade curve to the child node’s gain when the blend parameter is between `value` and this value.
- `fadeCurveType`: An option that determines a rate of change for the child node’s gain over the fade range.
- `subtree`: A child node to blend.

## See Also

### Adding Child Nodes

- [addRange(envelope:subtree:)](addrange%28envelope_subtree_%29.md): Adds a child node with an envelope.
- [addRangeForInputValuesBelow(value:fullGainAtValue:fadeCurveType:subtree:)](addrangeforinputvaluesbelow%28value_fullgainatvalue_fadecurvetype_subtree_%29.md): Adds a child node that blends below a given value.
- [addRangeForInputValuesBetween(lowValue:highValue:fullGainAtLowValue:fullGainAtHighValue:lowFadeCurveType:highFadeCurveType:subtree:)](addrangeforinputvaluesbetween%28lowvalue_highvalue_fullgainatlowvalue_fullgainathighvalue_lowfadecurvetype_highfadecurvetype_subtree_%29.md): Adds a child node that blends between a given high and low value.

# addRangeForInputValuesAbove:fullGainAtValue:fadeCurveType:subtree: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Adds a child node that blends above a given value.

## Declaration

```objectivec
- (void) addRangeForInputValuesAbove:(double) value fullGainAtValue:(double) fullGainAtValue fadeCurveType:(PHASECurveType) fadeCurveType subtree:(PHASESoundEventNodeDefinition *) subtree;
```

## Parameters

- `value`: The value below which the child node blends.
- `fullGainAtValue`: A threshold such that the node applies a fade curve to the child node’s gain when the blend parameter is between `value` and this value.
- `fadeCurveType`: An option that determines a rate of change for the child node’s gain over the fade range.
- `subtree`: A child node to blend.

## See Also

### Adding Child Nodes

- [addRangeWithEnvelope:subtree:](addrange%28envelope_subtree_%29.md): Adds a child node with an envelope.
- [addRangeForInputValuesBelow:fullGainAtValue:fadeCurveType:subtree:](addrangeforinputvaluesbelow%28value_fullgainatvalue_fadecurvetype_subtree_%29.md): Adds a child node that blends below a given value.
- [addRangeForInputValuesBetween:highValue:fullGainAtLowValue:fullGainAtHighValue:lowFadeCurveType:highFadeCurveType:subtree:](addrangeforinputvaluesbetween%28lowvalue_highvalue_fullgainatlowvalue_fullgainathighvalue_lowfadecurvetype_highfadecurvetype_subtree_%29.md): Adds a child node that blends between a given high and low value.
