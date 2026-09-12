> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/miditransformtype/scale](https://developer.apple.com/documentation/coremidi/miditransformtype/scale)

# MIDITransformType.scale (Swift)

**Framework:** Core MIDI  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A transform that multiplies by the specified parameter value.

## Declaration

```swift
case scale
```

<a id="Discussion"></a>

## Discussion

Specify the parameter value in fixed point format: `bbbb.bbbb bbbb bbbb`

## See Also

### Transform Types

- [MIDITransformType.none](none.md): No transformation.
- [MIDITransformType.filterOut](filterout.md): A transformation that filters out an event type.
- [MIDITransformType.mapControl](mapcontrol.md): A transformation that changes a specified control number to a supplied parameter value.
- [MIDITransformType.add](add.md): A transform that adds a parameter value.
- [MIDITransformType.minValue](minvalue.md): A transform that sets the minimum value to the specified parameter value.
- [MIDITransformType.maxValue](maxvalue.md): A transform that sets the maximum value to the specified parameter value.
- [MIDITransformType.mapValue](mapvalue.md): A transform that maps one value to another.

# kMIDITransform_Scale (Objective-C)

**Framework:** Core MIDI  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A transform that multiplies by the specified parameter value.

## Declaration

```objectivec
kMIDITransform_Scale
```

<a id="Discussion"></a>

## Discussion

Specify the parameter value in fixed point format: `bbbb.bbbb bbbb bbbb`

## See Also

### Transform Types

- [kMIDITransform_None](none.md): No transformation.
- [kMIDITransform_FilterOut](filterout.md): A transformation that filters out an event type.
- [kMIDITransform_MapControl](mapcontrol.md): A transformation that changes a specified control number to a supplied parameter value.
- [kMIDITransform_Add](add.md): A transform that adds a parameter value.
- [kMIDITransform_MinValue](minvalue.md): A transform that sets the minimum value to the specified parameter value.
- [kMIDITransform_MaxValue](maxvalue.md): A transform that sets the maximum value to the specified parameter value.
- [kMIDITransform_MapValue](mapvalue.md): A transform that maps one value to another.
