> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseblendnodedefinition/addrangeforinputvaluesbetween(lowvalue:highvalue:fullgainatlowvalue:fullgainathighvalue:lowfadecurvetype:highfadecurvetype:subtree:)](https://developer.apple.com/documentation/phase/phaseblendnodedefinition/addrangeforinputvaluesbetween(lowvalue:highvalue:fullgainatlowvalue:fullgainathighvalue:lowfadecurvetype:highfadecurvetype:subtree:))

# addRangeForInputValuesBetween(lowValue:highValue:fullGainAtLowValue:fullGainAtHighValue:lowFadeCurveType:highFadeCurveType:subtree:) (Swift)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Adds a child node that blends between a given high and low value.

## Declaration

```swift
func addRangeForInputValuesBetween(lowValue: Double, highValue: Double, fullGainAtLowValue: Double, fullGainAtHighValue: Double, lowFadeCurveType: PHASECurveType, highFadeCurveType: PHASECurveType, subtree: PHASESoundEventNodeDefinition)
```

## Parameters

- `lowValue`: A value above which the child node blends.
- `highValue`: A value below which the child node blends.
- `fullGainAtLowValue`: The threshold for which a fade curve that `lowFadeCurveType` defines applies to the gain when the blend parameter value is between `lowValue` and `fullGainAtLowValue`.
- `fullGainAtHighValue`: The threshold for which a fade curve that `highFadeCurveType` defines applies to the gain when the blend parameter value is between `highValue` and `fullGainAtHighValue`.
- `lowFadeCurveType`: An option that determines a rate of change for the child node’s gain over the low fade range.
- `highFadeCurveType`: An option that determines a rate of change for the child node’s gain over the high fade range.
- `subtree`: A child node to blend.

## See Also

### Adding Child Nodes

- [addRange(envelope:subtree:)](addrange%28envelope_subtree_%29.md): Adds a child node with an envelope.
- [addRangeForInputValuesAbove(value:fullGainAtValue:fadeCurveType:subtree:)](addrangeforinputvaluesabove%28value_fullgainatvalue_fadecurvetype_subtree_%29.md): Adds a child node that blends above a given value.
- [addRangeForInputValuesBelow(value:fullGainAtValue:fadeCurveType:subtree:)](addrangeforinputvaluesbelow%28value_fullgainatvalue_fadecurvetype_subtree_%29.md): Adds a child node that blends below a given value.

# addRangeForInputValuesBetween:highValue:fullGainAtLowValue:fullGainAtHighValue:lowFadeCurveType:highFadeCurveType:subtree: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Adds a child node that blends between a given high and low value.

## Declaration

```objectivec
- (void) addRangeForInputValuesBetween:(double) lowValue highValue:(double) highValue fullGainAtLowValue:(double) fullGainAtLowValue fullGainAtHighValue:(double) fullGainAtHighValue lowFadeCurveType:(PHASECurveType) lowFadeCurveType highFadeCurveType:(PHASECurveType) highFadeCurveType subtree:(PHASESoundEventNodeDefinition *) subtree;
```

## Parameters

- `lowValue`: A value above which the child node blends.
- `highValue`: A value below which the child node blends.
- `fullGainAtLowValue`: The threshold for which a fade curve that `lowFadeCurveType` defines applies to the gain when the blend parameter value is between `lowValue` and `fullGainAtLowValue`.
- `fullGainAtHighValue`: The threshold for which a fade curve that `highFadeCurveType` defines applies to the gain when the blend parameter value is between `highValue` and `fullGainAtHighValue`.
- `lowFadeCurveType`: An option that determines a rate of change for the child node’s gain over the low fade range.
- `highFadeCurveType`: An option that determines a rate of change for the child node’s gain over the high fade range.
- `subtree`: A child node to blend.

## See Also

### Adding Child Nodes

- [addRangeWithEnvelope:subtree:](addrange%28envelope_subtree_%29.md): Adds a child node with an envelope.
- [addRangeForInputValuesAbove:fullGainAtValue:fadeCurveType:subtree:](addrangeforinputvaluesabove%28value_fullgainatvalue_fadecurvetype_subtree_%29.md): Adds a child node that blends above a given value.
- [addRangeForInputValuesBelow:fullGainAtValue:fadeCurveType:subtree:](addrangeforinputvaluesbelow%28value_fullgainatvalue_fadecurvetype_subtree_%29.md): Adds a child node that blends below a given value.
