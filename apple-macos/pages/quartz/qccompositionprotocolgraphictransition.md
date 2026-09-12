> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qccompositionprotocolgraphictransition](https://developer.apple.com/documentation/quartz/qccompositionprotocolgraphictransition)

# QCCompositionProtocolGraphicTransition (Swift)

**Framework:** Quartz  
**Kind:** Global Variable  
**Availability:** macOS 10.4+ (deprecated in 10.15)

A  composition that performs a transition between two images, using a transition time in range of `0` to `1`. A conforming composition must use the input keys [QCCompositionInputSourceImageKey](qccompositioninputsourceimagekey.md) for the starting image and [QCCompositionInputDestinationImageKey](qccompositioninputdestinationimagekey.md) for the image to transition to. The composition can optionally use [QCCompositionInputPreviewModeKey](qccompositioninputpreviewmodekey.md) to indicate if the animation should run in lower-quality for preview purposes.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
let QCCompositionProtocolGraphicTransition: String
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

# QCCompositionProtocolGraphicTransition (Objective-C)

**Framework:** Quartz  
**Kind:** Global Variable  
**Availability:** macOS 10.4+ (deprecated in 10.15)

A  composition that performs a transition between two images, using a transition time in range of `0` to `1`. A conforming composition must use the input keys [QCCompositionInputSourceImageKey](qccompositioninputsourceimagekey.md) for the starting image and [QCCompositionInputDestinationImageKey](qccompositioninputdestinationimagekey.md) for the image to transition to. The composition can optionally use [QCCompositionInputPreviewModeKey](qccompositioninputpreviewmodekey.md) to indicate if the animation should run in lower-quality for preview purposes.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
extern NSString * const QCCompositionProtocolGraphicTransition;
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
