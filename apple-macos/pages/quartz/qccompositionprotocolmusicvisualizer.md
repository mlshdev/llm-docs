> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qccompositionprotocolmusicvisualizer](https://developer.apple.com/documentation/quartz/qccompositionprotocolmusicvisualizer)

# QCCompositionProtocolMusicVisualizer (Swift)

**Framework:** Quartz  
**Kind:** Global Variable  
**Availability:** macOS 10.4+ (deprecated in 10.15)

A  composition that acts as a visualizer for music.  A conforming composition must use the input key [QCCompositionInputAudioPeakKey](qccompositioninputaudiopeakkey.md) for the instantaneous audio peak and the [QCCompositionInputAudioSpectrumKey](qccompositioninputaudiospectrumkey.md)  for the instantaneous audio spectrum. It can optionally use the [QCCompositionInputTrackInfoKey](qccompositioninputtrackinfokey.md) to indicate it receives information about the current  track and the [QCCompositionInputTrackSignalKey](qccompositioninputtracksignalkey.md) to indicate the start of a new track.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
let QCCompositionProtocolMusicVisualizer: String
```

## See Also

### Constants

- [QCCompositionAttributeBuiltInKey](qccompositionattributebuiltinkey.md): Deprecated. The key for the composition origin.
- [QCCompositionAttributeCategoryKey](qccompositionattributecategorykey.md): Deprecated. A key representing a composition category.
- [QCCompositionAttributeCopyrightKey](qccompositionattributecopyrightkey.md): Deprecated. The key for composition copyright information. The associated value is an `NSString` object.
- [QCCompositionAttributeDescriptionKey](qccompositionattributedescriptionkey.md): Deprecated. The key for the composition description. The associated value is an `NSString` object.
- [QCCompositionAttributeHasConsumersKey](qccompositionattributehasconsumerskey.md): Deprecated. The key for a composition that has consumer patches.
- [QCCompositionAttributeIsTimeDependentKey](qccompositionattributeistimedependentkey.md): Deprecated.
- [QCCompositionAttributeNameKey](qccompositionattributenamekey.md): Deprecated. The key for the composition name. The associated value is an `NSString` object.
- [QCCompositionCategoryDistortion](qccompositioncategorydistortion.md): Deprecated. A composition that produces a distortion effect.
- [QCCompositionCategoryStylize](qccompositioncategorystylize.md): Deprecated. A composition that produces a stylize effect.
- [QCCompositionCategoryUtility](qccompositioncategoryutility.md): Deprecated. A utility composition.
- [QCCompositionInputAudioPeakKey](qccompositioninputaudiopeakkey.md): Deprecated. A number input port whose key is `inputAudioPeak`. The value must be in the `[0,1]` range as a mono signal with no decay applied.
- [QCCompositionInputAudioSpectrumKey](qccompositioninputaudiospectrumkey.md): Deprecated. A structure input port whose key is `inputAudioSpectrum`. The structure must contain 16 values in the `[0,1]` range representing 16 spectrum bands of the mono signal from low to high frequencies with no decay applied.
- [QCCompositionInputDestinationImageKey](qccompositioninputdestinationimagekey.md): Deprecated. An image input port whose key is `inputDestinationImage`.
- [QCCompositionInputImageKey](qccompositioninputimagekey.md): Deprecated. An image input port whose key is `inputImage`.
- [QCCompositionInputPaceKey](qccompositioninputpacekey.md): A number input port whose key is `inputPace`. The value must be in the `[0,1]` range.

# QCCompositionProtocolMusicVisualizer (Objective-C)

**Framework:** Quartz  
**Kind:** Global Variable  
**Availability:** macOS 10.4+ (deprecated in 10.15)

A  composition that acts as a visualizer for music.  A conforming composition must use the input key [QCCompositionInputAudioPeakKey](qccompositioninputaudiopeakkey.md) for the instantaneous audio peak and the [QCCompositionInputAudioSpectrumKey](qccompositioninputaudiospectrumkey.md)  for the instantaneous audio spectrum. It can optionally use the [QCCompositionInputTrackInfoKey](qccompositioninputtrackinfokey.md) to indicate it receives information about the current  track and the [QCCompositionInputTrackSignalKey](qccompositioninputtracksignalkey.md) to indicate the start of a new track.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
extern NSString * const QCCompositionProtocolMusicVisualizer;
```

## See Also

### Constants

- [QCCompositionAttributeBuiltInKey](qccompositionattributebuiltinkey.md): Deprecated. The key for the composition origin.
- [QCCompositionAttributeCategoryKey](qccompositionattributecategorykey.md): Deprecated. A key representing a composition category.
- [QCCompositionAttributeCopyrightKey](qccompositionattributecopyrightkey.md): Deprecated. The key for composition copyright information. The associated value is an `NSString` object.
- [QCCompositionAttributeDescriptionKey](qccompositionattributedescriptionkey.md): Deprecated. The key for the composition description. The associated value is an `NSString` object.
- [QCCompositionAttributeHasConsumersKey](qccompositionattributehasconsumerskey.md): Deprecated. The key for a composition that has consumer patches.
- [QCCompositionAttributeIsTimeDependentKey](qccompositionattributeistimedependentkey.md): Deprecated.
- [QCCompositionAttributeNameKey](qccompositionattributenamekey.md): Deprecated. The key for the composition name. The associated value is an `NSString` object.
- [QCCompositionCategoryDistortion](qccompositioncategorydistortion.md): Deprecated. A composition that produces a distortion effect.
- [QCCompositionCategoryStylize](qccompositioncategorystylize.md): Deprecated. A composition that produces a stylize effect.
- [QCCompositionCategoryUtility](qccompositioncategoryutility.md): Deprecated. A utility composition.
- [QCCompositionInputAudioPeakKey](qccompositioninputaudiopeakkey.md): Deprecated. A number input port whose key is `inputAudioPeak`. The value must be in the `[0,1]` range as a mono signal with no decay applied.
- [QCCompositionInputAudioSpectrumKey](qccompositioninputaudiospectrumkey.md): Deprecated. A structure input port whose key is `inputAudioSpectrum`. The structure must contain 16 values in the `[0,1]` range representing 16 spectrum bands of the mono signal from low to high frequencies with no decay applied.
- [QCCompositionInputDestinationImageKey](qccompositioninputdestinationimagekey.md): Deprecated. An image input port whose key is `inputDestinationImage`.
- [QCCompositionInputImageKey](qccompositioninputimagekey.md): Deprecated. An image input port whose key is `inputImage`.
- [QCCompositionInputPaceKey](qccompositioninputpacekey.md): A number input port whose key is `inputPace`. The value must be in the `[0,1]` range.
