> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseblendnodedefinition/addrange(envelope:subtree:)](https://developer.apple.com/documentation/phase/phaseblendnodedefinition/addrange(envelope:subtree:))

# addRange(envelope:subtree:) (Swift)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Adds a child node with an envelope.

## Declaration

```swift
func addRange(envelope: PHASEEnvelope, subtree: PHASESoundEventNodeDefinition)
```

## Parameters

- `envelope`: A shaped audio signal over a range.
- `subtree`: A child node that’s active in the blend range an envelope defines.

## See Also

### Adding Child Nodes

- [addRangeForInputValuesAbove(value:fullGainAtValue:fadeCurveType:subtree:)](addrangeforinputvaluesabove%28value_fullgainatvalue_fadecurvetype_subtree_%29.md): Adds a child node that blends above a given value.
- [addRangeForInputValuesBelow(value:fullGainAtValue:fadeCurveType:subtree:)](addrangeforinputvaluesbelow%28value_fullgainatvalue_fadecurvetype_subtree_%29.md): Adds a child node that blends below a given value.
- [addRangeForInputValuesBetween(lowValue:highValue:fullGainAtLowValue:fullGainAtHighValue:lowFadeCurveType:highFadeCurveType:subtree:)](addrangeforinputvaluesbetween%28lowvalue_highvalue_fullgainatlowvalue_fullgainathighvalue_lowfadecurvetype_highfadecurvetype_subtree_%29.md): Adds a child node that blends between a given high and low value.

# addRangeWithEnvelope:subtree: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Adds a child node with an envelope.

## Declaration

```objectivec
- (void) addRangeWithEnvelope:(PHASEEnvelope *) envelope subtree:(PHASESoundEventNodeDefinition *) subtree;
```

## Parameters

- `envelope`: A shaped audio signal over a range.
- `subtree`: A child node that’s active in the blend range an envelope defines.

## See Also

### Adding Child Nodes

- [addRangeForInputValuesAbove:fullGainAtValue:fadeCurveType:subtree:](addrangeforinputvaluesabove%28value_fullgainatvalue_fadecurvetype_subtree_%29.md): Adds a child node that blends above a given value.
- [addRangeForInputValuesBelow:fullGainAtValue:fadeCurveType:subtree:](addrangeforinputvaluesbelow%28value_fullgainatvalue_fadecurvetype_subtree_%29.md): Adds a child node that blends below a given value.
- [addRangeForInputValuesBetween:highValue:fullGainAtLowValue:fullGainAtHighValue:lowFadeCurveType:highFadeCurveType:subtree:](addrangeforinputvaluesbetween%28lowvalue_highvalue_fullgainatlowvalue_fullgainathighvalue_lowfadecurvetype_highfadecurvetype_subtree_%29.md): Adds a child node that blends between a given high and low value.
