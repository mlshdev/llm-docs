> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/standard-protocol-input-keys](https://developer.apple.com/documentation/quartz/standard-protocol-input-keys)

# Standard Protocol Input Keys

**Interface languages:** Swift, Objective-C

**Framework:** Quartz  
**Kind:** API Collection

Input ports of a composition.

## Topics

### Constants

- [QCCompositionInputImageKey](qccompositioninputimagekey.md): Deprecated. An image input port whose key is `inputImage`.
- [QCCompositionInputSourceImageKey](qccompositioninputsourceimagekey.md): Deprecated. An image input port whose key is `inputSourceImage`.
- [QCCompositionInputDestinationImageKey](qccompositioninputdestinationimagekey.md): Deprecated. An image input port whose key is `inputDestinationImage`.
- [QCCompositionInputRSSFeedURLKey](qccompositioninputrssfeedurlkey.md): Deprecated. A string input port whose key is `inputRSSFeedURL`. This port must be passed an http or feed scheme URL.
- [QCCompositionInputRSSArticleDurationKey](qccompositioninputrssarticledurationkey.md): Deprecated. A number input port whose key is `inputRSSArticleDuration`. The value must be expressed in seconds.
- [QCCompositionInputPreviewModeKey](qccompositioninputpreviewmodekey.md): Deprecated. A Boolean input port whose key is `inputPreviewMode`. When the value of this input port is set to `TRUE`, the composition that provides this port must be able to run in a low-quality mode that produces a preview of the composition.
- [QCCompositionInputXKey](qccompositioninputxkey.md): Deprecated. A number input port whose key is `inputX`. The value must be normalized to the image width with the origin on the left.
- [QCCompositionInputYKey](qccompositioninputykey.md): Deprecated. A number input port whose key is `inputY`. The value must be normalized to the image height with the origin at the bottom.
- [QCCompositionInputScreenImageKey](qccompositioninputscreenimagekey.md): Deprecated. An image input port whose key is `inputScreenImage`.
- [QCCompositionInputAudioPeakKey](qccompositioninputaudiopeakkey.md): Deprecated. A number input port whose key is `inputAudioPeak`. The value must be in the `[0,1]` range as a mono signal with no decay applied.
- [QCCompositionInputAudioSpectrumKey](qccompositioninputaudiospectrumkey.md): Deprecated. A structure input port whose key is `inputAudioSpectrum`. The structure must contain 16 values in the `[0,1]` range representing 16 spectrum bands of the mono signal from low to high frequencies with no decay applied.
- [QCCompositionInputTrackPositionKey](qccompositioninputtrackpositionkey.md): Deprecated. A number input port whose key is `inputTrackPosition`. The value must be expressed in seconds.
- [QCCompositionInputTrackInfoKey](qccompositioninputtrackinfokey.md): Deprecated. A structure input port whose key is `inputTrackInfo`. The structure contains optional entries, such as “name”, “artist”, “album”, “duration”, “artwork”, and so on.
- [QCCompositionInputTrackSignalKey](qccompositioninputtracksignalkey.md): Deprecated. A Boolean input port whose key is `inputTrackSignal`.
- [QCCompositionInputPrimaryColorKey](qccompositioninputprimarycolorkey.md): Deprecated. A color input port whose key is `inputPrimaryColor`.
- [QCCompositionInputSecondaryColorKey](qccompositioninputsecondarycolorkey.md): Deprecated. A color input port whose key is `inputSecondaryColor`.
- [QCCompositionInputPaceKey](qccompositioninputpacekey.md): A number input port whose key is `inputPace`. The value must be in the `[0,1]` range.

## See Also

### Constants

- [Attribute Keys](attribute-keys.md): Attributes of a composition.
- [Composition Categories](composition-categories.md): Categories for compositions.
- [Standard Protocol Output Keys](standard-protocol-output-keys.md): Output ports of a composition.
- [Standard Protocols](standard-protocols.md): Protocols for a composition.
