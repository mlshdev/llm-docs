> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/quartz-composer-constants](https://developer.apple.com/documentation/quartz/quartz-composer-constants)

# Quartz Composer Constants (Swift)

**Framework:** Quartz  
**Kind:** API Collection

## Topics

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
- [QCCompositionInputPreviewModeKey](qccompositioninputpreviewmodekey.md): Deprecated. A Boolean input port whose key is `inputPreviewMode`. When the value of this input port is set to `TRUE`, the composition that provides this port must be able to run in a low-quality mode that produces a preview of the composition.
- [QCCompositionInputPrimaryColorKey](qccompositioninputprimarycolorkey.md): Deprecated. A color input port whose key is `inputPrimaryColor`.
- [QCCompositionInputRSSArticleDurationKey](qccompositioninputrssarticledurationkey.md): Deprecated. A number input port whose key is `inputRSSArticleDuration`. The value must be expressed in seconds.
- [QCCompositionInputRSSFeedURLKey](qccompositioninputrssfeedurlkey.md): Deprecated. A string input port whose key is `inputRSSFeedURL`. This port must be passed an http or feed scheme URL.
- [QCCompositionInputScreenImageKey](qccompositioninputscreenimagekey.md): Deprecated. An image input port whose key is `inputScreenImage`.
- [QCCompositionInputSecondaryColorKey](qccompositioninputsecondarycolorkey.md): Deprecated. A color input port whose key is `inputSecondaryColor`.
- [QCCompositionInputSourceImageKey](qccompositioninputsourceimagekey.md): Deprecated. An image input port whose key is `inputSourceImage`.
- [QCCompositionInputTrackInfoKey](qccompositioninputtrackinfokey.md): Deprecated. A structure input port whose key is `inputTrackInfo`. The structure contains optional entries, such as “name”, “artist”, “album”, “duration”, “artwork”, and so on.
- [QCCompositionInputTrackPositionKey](qccompositioninputtrackpositionkey.md): Deprecated. A number input port whose key is `inputTrackPosition`. The value must be expressed in seconds.
- [QCCompositionInputTrackSignalKey](qccompositioninputtracksignalkey.md): Deprecated. A Boolean input port whose key is `inputTrackSignal`.
- [QCCompositionInputXKey](qccompositioninputxkey.md): Deprecated. A number input port whose key is `inputX`. The value must be normalized to the image width with the origin on the left.
- [QCCompositionInputYKey](qccompositioninputykey.md): Deprecated. A number input port whose key is `inputY`. The value must be normalized to the image height with the origin at the bottom.
- [QCCompositionOutputImageKey](qccompositionoutputimagekey.md): Deprecated. An image output port whose key is `outputImage`.
- [QCCompositionOutputWebPageURLKey](qccompositionoutputwebpageurlkey.md): Deprecated. A string output port whose key is `outputWebPageURL`.
- [QCCompositionProtocolGraphicAnimation](qccompositionprotocolgraphicanimation.md): Deprecated. A composition that renders a generic graphical animation. It has the option to use [QCCompositionInputPrimaryColorKey](qccompositioninputprimarycolorkey.md) for the primary color of the animation, [QCCompositionInputSecondaryColorKey](qccompositioninputsecondarycolorkey.md) for the secondary color of the animation, [QCCompositionInputPaceKey](qccompositioninputpacekey.md) for the global pace of the animation, and [QCCompositionInputPreviewModeKey](qccompositioninputpreviewmodekey.md) to indicate if the animation should run in lower-quality for preview purposes.
- [QCCompositionProtocolGraphicTransition](qccompositionprotocolgraphictransition.md): Deprecated. A composition that performs a transition between two images, using a transition time in range of `0` to `1`. A conforming composition must use the input keys [QCCompositionInputSourceImageKey](qccompositioninputsourceimagekey.md) for the starting image and [QCCompositionInputDestinationImageKey](qccompositioninputdestinationimagekey.md) for the image to transition to. The composition can optionally use [QCCompositionInputPreviewModeKey](qccompositioninputpreviewmodekey.md) to indicate if the animation should run in lower-quality for preview purposes.
- [QCCompositionProtocolImageFilter](qccompositionprotocolimagefilter.md): Deprecated. A composition that applies an effect to a source image. A conforming composition must use the input key [QCCompositionInputImageKey](qccompositioninputimagekey.md) for the source image and [QCCompositionOutputImageKey](qccompositionoutputimagekey.md) for the output image. The composition can optionally use [QCCompositionInputXKey](qccompositioninputxkey.md) to specify the X position of the center point of the effect, [QCCompositionInputYKey](qccompositioninputykey.md) to specify the Y position of the center point of the effect, and[QCCompositionInputPreviewModeKey](qccompositioninputpreviewmodekey.md) to indicate if the animation should run in lower-quality for preview purposes.
- [QCCompositionProtocolMusicVisualizer](qccompositionprotocolmusicvisualizer.md): Deprecated. A composition that acts as a visualizer for music. A conforming composition must use the input key [QCCompositionInputAudioPeakKey](qccompositioninputaudiopeakkey.md) for the instantaneous audio peak and the [QCCompositionInputAudioSpectrumKey](qccompositioninputaudiospectrumkey.md) for the instantaneous audio spectrum. It can optionally use the [QCCompositionInputTrackInfoKey](qccompositioninputtrackinfokey.md) to indicate it receives information about the current track and the [QCCompositionInputTrackSignalKey](qccompositioninputtracksignalkey.md) to indicate the start of a new track.
- [QCCompositionProtocolRSSVisualizer](qccompositionprotocolrssvisualizer.md): Deprecated. A composition that acts as a visualizer for an RSS feed. A conforming composition must use the input key [QCCompositionInputRSSFeedURLKey](qccompositioninputrssfeedurlkey.md) for the URL to use for the RSS feed. It can optionally use [QCCompositionInputRSSArticleDurationKey](qccompositioninputrssarticledurationkey.md) to specify the duration of each feed article.
- [QCCompositionProtocolScreenSaver](qccompositionprotocolscreensaver.md): Deprecated. A composition that can be used as a screen saver. The composition has the option to use [QCCompositionInputScreenImageKey](qccompositioninputscreenimagekey.md) for a screenshot image of the screen that the screen saver runs on, [QCCompositionInputPreviewModeKey](qccompositioninputpreviewmodekey.md) to indicate if the animation should run in lower-quality for preview purposes, and [QCCompositionOutputWebPageURLKey](qccompositionoutputwebpageurlkey.md) for a URL to open in the default web browser when screen saver exits (only allowed if screen saver password is disabled).
- [QCPlugInAttributeCategoriesKey](qcpluginattributecategorieskey.md): Deprecated.
- [QCPlugInAttributeCopyrightKey](qcpluginattributecopyrightkey.md): Deprecated.
- [QCPlugInAttributeDescriptionKey](qcpluginattributedescriptionkey.md): Deprecated. The key for the custom patch description.
- [QCPlugInAttributeExamplesKey](qcpluginattributeexampleskey.md): Deprecated.
- [QCPlugInAttributeNameKey](qcpluginattributenamekey.md): Deprecated. The key for the custom patch name.
- [QCPlugInExecutionArgumentEventKey](qcpluginexecutionargumenteventkey.md): Deprecated. The current event.
- [QCPlugInExecutionArgumentMouseLocationKey](qcpluginexecutionargumentmouselocationkey.md): Deprecated. The current location of the mouse (as an `NSPoint` object stored in an `NSValue` object) in normalized coordinates relative to the OpenGL context viewport (\[0,1\]x\[0,1\] with the origin (`0,0`) at the lower-left corner).
- [QCPlugInPixelFormatARGB8](qcpluginpixelformatargb8.md): Deprecated. An ARGB8 format. The alpha component is stored in the most significant bits of each pixel. Each pixel component is 8 bits. For best performance, use this format on PowerPC-based Macintosh computers, as it represents of the order of the data in memory.
- [QCPlugInPixelFormatBGRA8](qcpluginpixelformatbgra8.md): Deprecated. A BGRA8 format. The alpha component is stored in the least significant bits of each pixel. Each pixel component is 8 bits. For best performance, use this format on Intel-PC-based Macintosh computers, as it represents of the order of the data in memory.
- [QCPlugInPixelFormatI8](qcpluginpixelformati8.md): Deprecated. An I8 format. Intensity information is represented as an 8-bit value.
- [QCPlugInPixelFormatIf](qcpluginpixelformatif.md): Deprecated. An If format. Intensity information is represented as a floating-point value.
- [QCPlugInPixelFormatRGBAf](qcpluginpixelformatrgbaf.md): Deprecated. An RGBAf format. Pixel components are represented as floating-point values.
- [QCPortAttributeDefaultValueKey](qcportattributedefaultvaluekey.md): Deprecated. The key for the port default value. You can use this key only for value ports (Boolean, Index, Number, Color and String).
- [QCPortAttributeMaximumValueKey](qcportattributemaximumvaluekey.md): Deprecated. The key for the port maximum value.
- [QCPortAttributeMenuItemsKey](qcportattributemenuitemskey.md): Deprecated. The key for the menu items.
- [QCPortAttributeMinimumValueKey](qcportattributeminimumvaluekey.md): Deprecated. The key for the port minimum value.
- [QCPortAttributeNameKey](qcportattributenamekey.md): Deprecated. The key for the port name.
- [QCPortAttributeTypeKey](qcportattributetypekey.md): Deprecated. The key for the port type. The associated value can be of any of the following constants: [QCPortTypeBoolean](qcporttypeboolean.md), [QCPortTypeIndex](qcporttypeindex.md), [QCPortTypeNumber](qcporttypenumber.md), [QCPortTypeString](qcporttypestring.md), [QCPortTypeColor](qcporttypecolor.md), [QCPortTypeImage](qcporttypeimage.md), or [QCPortTypeStructure](qcporttypestructure.md).
- [QCPortTypeBoolean](qcporttypeboolean.md): Deprecated. The port type for a Boolean value.
- [QCPortTypeColor](qcporttypecolor.md): Deprecated. The port type for a color value.
- [QCPortTypeImage](qcporttypeimage.md): Deprecated. The port type for an image.
- [QCPortTypeIndex](qcporttypeindex.md): Deprecated. The port type for an index value.
- [QCPortTypeNumber](qcporttypenumber.md): Deprecated. The port type for a number value.
- [QCPortTypeString](qcporttypestring.md): Deprecated. The port type for a string. The associated value can be an NSString object or any object that responds to the `-stringValue` or `-description` methods.
- [QCPortTypeStructure](qcporttypestructure.md): Deprecated. The port type for a collection.
- [QCRendererEventKey](qcrenderereventkey.md): Deprecated. A key for a renderer event.
- [QCRendererMouseLocationKey](qcrenderermouselocationkey.md): Deprecated. A key for the mouse location.
- [kQCPlugInExecutionModeConsumer](kqcpluginexecutionmodeconsumer.md): A consumer execution mode. The custom patch always executes assuming the value of its Enable input port is `true`. (The Enable port is automatically added by the system.)
- [kQCPlugInExecutionModeProcessor](kqcpluginexecutionmodeprocessor.md): A processor execution mode. The custom patch executes whenever its inputs change or if the time change (assuming it’s time-dependent).
- [kQCPlugInExecutionModeProvider](kqcpluginexecutionmodeprovider.md): A provider execution mode. The custom patch executes on demand—that is, whenever data is requested of it, but at most once per frame.
- [kQCPlugInTimeModeIdle](kqcplugintimemodeidle.md): An idle time dependency. The custom patch does not depend on time but needs the system to execute it periodically. For example if the custom patch connects to a piece of hardware, to ensure that it pulls data from the hardware, you would set the custom patch time dependency to idle time mode. This time mode is typically used with providers.\]\]
- [kQCPlugInTimeModeNone](kqcplugintimemodenone.md): No time dependency. The custom patch does not depend on time at all. (It does not use the `time` parameter of the `execute:atTime:withArguments:` method.)
- [kQCPlugInTimeModeTimeBase](kqcplugintimemodetimebase.md): A time base dependency. The custom patch does depend on time explicitly and has a time base defined by the system. (It uses the `time` parameter of the `execute:atTime:withArguments:` method.)

## See Also

### Reference

- [Quartz Data Types](quartz-data-types.md)
- [Quartz Constants](quartz-constants.md)
- [Quartz Enumerations](quartz-enumerations.md)
- [Quartz Composer Enumerations](quartz-composer-enumerations.md)

# Quartz Composer Constants (Objective-C)

**Framework:** Quartz  
**Kind:** API Collection

## Topics

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
- [QCCompositionInputPreviewModeKey](qccompositioninputpreviewmodekey.md): Deprecated. A Boolean input port whose key is `inputPreviewMode`. When the value of this input port is set to `TRUE`, the composition that provides this port must be able to run in a low-quality mode that produces a preview of the composition.
- [QCCompositionInputPrimaryColorKey](qccompositioninputprimarycolorkey.md): Deprecated. A color input port whose key is `inputPrimaryColor`.
- [QCCompositionInputRSSArticleDurationKey](qccompositioninputrssarticledurationkey.md): Deprecated. A number input port whose key is `inputRSSArticleDuration`. The value must be expressed in seconds.
- [QCCompositionInputRSSFeedURLKey](qccompositioninputrssfeedurlkey.md): Deprecated. A string input port whose key is `inputRSSFeedURL`. This port must be passed an http or feed scheme URL.
- [QCCompositionInputScreenImageKey](qccompositioninputscreenimagekey.md): Deprecated. An image input port whose key is `inputScreenImage`.
- [QCCompositionInputSecondaryColorKey](qccompositioninputsecondarycolorkey.md): Deprecated. A color input port whose key is `inputSecondaryColor`.
- [QCCompositionInputSourceImageKey](qccompositioninputsourceimagekey.md): Deprecated. An image input port whose key is `inputSourceImage`.
- [QCCompositionInputTrackInfoKey](qccompositioninputtrackinfokey.md): Deprecated. A structure input port whose key is `inputTrackInfo`. The structure contains optional entries, such as “name”, “artist”, “album”, “duration”, “artwork”, and so on.
- [QCCompositionInputTrackPositionKey](qccompositioninputtrackpositionkey.md): Deprecated. A number input port whose key is `inputTrackPosition`. The value must be expressed in seconds.
- [QCCompositionInputTrackSignalKey](qccompositioninputtracksignalkey.md): Deprecated. A Boolean input port whose key is `inputTrackSignal`.
- [QCCompositionInputXKey](qccompositioninputxkey.md): Deprecated. A number input port whose key is `inputX`. The value must be normalized to the image width with the origin on the left.
- [QCCompositionInputYKey](qccompositioninputykey.md): Deprecated. A number input port whose key is `inputY`. The value must be normalized to the image height with the origin at the bottom.
- [QCCompositionOutputImageKey](qccompositionoutputimagekey.md): Deprecated. An image output port whose key is `outputImage`.
- [QCCompositionOutputWebPageURLKey](qccompositionoutputwebpageurlkey.md): Deprecated. A string output port whose key is `outputWebPageURL`.
- [QCCompositionPickerViewDidSelectCompositionNotification](qccompositionpickerviewdidselectcompositionnotification.md): Deprecated. Posted when the user selects a composition in the picker view.
- [QCCompositionPickerPanelDidSelectCompositionNotification](qccompositionpickerpaneldidselectcompositionnotification.md): Deprecated. Posted when the user chooses a composition.
- [QCCompositionProtocolGraphicAnimation](qccompositionprotocolgraphicanimation.md): Deprecated. A composition that renders a generic graphical animation. It has the option to use [QCCompositionInputPrimaryColorKey](qccompositioninputprimarycolorkey.md) for the primary color of the animation, [QCCompositionInputSecondaryColorKey](qccompositioninputsecondarycolorkey.md) for the secondary color of the animation, [QCCompositionInputPaceKey](qccompositioninputpacekey.md) for the global pace of the animation, and [QCCompositionInputPreviewModeKey](qccompositioninputpreviewmodekey.md) to indicate if the animation should run in lower-quality for preview purposes.
- [QCCompositionProtocolGraphicTransition](qccompositionprotocolgraphictransition.md): Deprecated. A composition that performs a transition between two images, using a transition time in range of `0` to `1`. A conforming composition must use the input keys [QCCompositionInputSourceImageKey](qccompositioninputsourceimagekey.md) for the starting image and [QCCompositionInputDestinationImageKey](qccompositioninputdestinationimagekey.md) for the image to transition to. The composition can optionally use [QCCompositionInputPreviewModeKey](qccompositioninputpreviewmodekey.md) to indicate if the animation should run in lower-quality for preview purposes.
- [QCCompositionProtocolImageFilter](qccompositionprotocolimagefilter.md): Deprecated. A composition that applies an effect to a source image. A conforming composition must use the input key [QCCompositionInputImageKey](qccompositioninputimagekey.md) for the source image and [QCCompositionOutputImageKey](qccompositionoutputimagekey.md) for the output image. The composition can optionally use [QCCompositionInputXKey](qccompositioninputxkey.md) to specify the X position of the center point of the effect, [QCCompositionInputYKey](qccompositioninputykey.md) to specify the Y position of the center point of the effect, and[QCCompositionInputPreviewModeKey](qccompositioninputpreviewmodekey.md) to indicate if the animation should run in lower-quality for preview purposes.
- [QCCompositionProtocolMusicVisualizer](qccompositionprotocolmusicvisualizer.md): Deprecated. A composition that acts as a visualizer for music. A conforming composition must use the input key [QCCompositionInputAudioPeakKey](qccompositioninputaudiopeakkey.md) for the instantaneous audio peak and the [QCCompositionInputAudioSpectrumKey](qccompositioninputaudiospectrumkey.md) for the instantaneous audio spectrum. It can optionally use the [QCCompositionInputTrackInfoKey](qccompositioninputtrackinfokey.md) to indicate it receives information about the current track and the [QCCompositionInputTrackSignalKey](qccompositioninputtracksignalkey.md) to indicate the start of a new track.
- [QCCompositionProtocolRSSVisualizer](qccompositionprotocolrssvisualizer.md): Deprecated. A composition that acts as a visualizer for an RSS feed. A conforming composition must use the input key [QCCompositionInputRSSFeedURLKey](qccompositioninputrssfeedurlkey.md) for the URL to use for the RSS feed. It can optionally use [QCCompositionInputRSSArticleDurationKey](qccompositioninputrssarticledurationkey.md) to specify the duration of each feed article.
- [QCCompositionProtocolScreenSaver](qccompositionprotocolscreensaver.md): Deprecated. A composition that can be used as a screen saver. The composition has the option to use [QCCompositionInputScreenImageKey](qccompositioninputscreenimagekey.md) for a screenshot image of the screen that the screen saver runs on, [QCCompositionInputPreviewModeKey](qccompositioninputpreviewmodekey.md) to indicate if the animation should run in lower-quality for preview purposes, and [QCCompositionOutputWebPageURLKey](qccompositionoutputwebpageurlkey.md) for a URL to open in the default web browser when screen saver exits (only allowed if screen saver password is disabled).
- [QCCompositionRepositoryDidUpdateNotification](qccompositionrepositorydidupdatenotification.md): Deprecated. Posted whenever the list of compositions in the composition repository is updated.
- [QCPlugInAttributeCategoriesKey](qcpluginattributecategorieskey.md): Deprecated.
- [QCPlugInAttributeCopyrightKey](qcpluginattributecopyrightkey.md): Deprecated.
- [QCPlugInAttributeDescriptionKey](qcpluginattributedescriptionkey.md): Deprecated. The key for the custom patch description.
- [QCPlugInAttributeExamplesKey](qcpluginattributeexampleskey.md): Deprecated.
- [QCPlugInAttributeNameKey](qcpluginattributenamekey.md): Deprecated. The key for the custom patch name.
- [QCPlugInExecutionArgumentEventKey](qcpluginexecutionargumenteventkey.md): Deprecated. The current event.
- [QCPlugInExecutionArgumentMouseLocationKey](qcpluginexecutionargumentmouselocationkey.md): Deprecated. The current location of the mouse (as an `NSPoint` object stored in an `NSValue` object) in normalized coordinates relative to the OpenGL context viewport (\[0,1\]x\[0,1\] with the origin (`0,0`) at the lower-left corner).
- [QCPlugInPixelFormatARGB8](qcpluginpixelformatargb8.md): Deprecated. An ARGB8 format. The alpha component is stored in the most significant bits of each pixel. Each pixel component is 8 bits. For best performance, use this format on PowerPC-based Macintosh computers, as it represents of the order of the data in memory.
- [QCPlugInPixelFormatBGRA8](qcpluginpixelformatbgra8.md): Deprecated. A BGRA8 format. The alpha component is stored in the least significant bits of each pixel. Each pixel component is 8 bits. For best performance, use this format on Intel-PC-based Macintosh computers, as it represents of the order of the data in memory.
- [QCPlugInPixelFormatI8](qcpluginpixelformati8.md): Deprecated. An I8 format. Intensity information is represented as an 8-bit value.
- [QCPlugInPixelFormatIf](qcpluginpixelformatif.md): Deprecated. An If format. Intensity information is represented as a floating-point value.
- [QCPlugInPixelFormatRGBAf](qcpluginpixelformatrgbaf.md): Deprecated. An RGBAf format. Pixel components are represented as floating-point values.
- [QCPortAttributeDefaultValueKey](qcportattributedefaultvaluekey.md): Deprecated. The key for the port default value. You can use this key only for value ports (Boolean, Index, Number, Color and String).
- [QCPortAttributeMaximumValueKey](qcportattributemaximumvaluekey.md): Deprecated. The key for the port maximum value.
- [QCPortAttributeMenuItemsKey](qcportattributemenuitemskey.md): Deprecated. The key for the menu items.
- [QCPortAttributeMinimumValueKey](qcportattributeminimumvaluekey.md): Deprecated. The key for the port minimum value.
- [QCPortAttributeNameKey](qcportattributenamekey.md): Deprecated. The key for the port name.
- [QCPortAttributeTypeKey](qcportattributetypekey.md): Deprecated. The key for the port type. The associated value can be of any of the following constants: [QCPortTypeBoolean](qcporttypeboolean.md), [QCPortTypeIndex](qcporttypeindex.md), [QCPortTypeNumber](qcporttypenumber.md), [QCPortTypeString](qcporttypestring.md), [QCPortTypeColor](qcporttypecolor.md), [QCPortTypeImage](qcporttypeimage.md), or [QCPortTypeStructure](qcporttypestructure.md).
- [QCPortTypeBoolean](qcporttypeboolean.md): Deprecated. The port type for a Boolean value.
- [QCPortTypeColor](qcporttypecolor.md): Deprecated. The port type for a color value.
- [QCPortTypeImage](qcporttypeimage.md): Deprecated. The port type for an image.
- [QCPortTypeIndex](qcporttypeindex.md): Deprecated. The port type for an index value.
- [QCPortTypeNumber](qcporttypenumber.md): Deprecated. The port type for a number value.
- [QCPortTypeString](qcporttypestring.md): Deprecated. The port type for a string. The associated value can be an NSString object or any object that responds to the `-stringValue` or `-description` methods.
- [QCPortTypeStructure](qcporttypestructure.md): Deprecated. The port type for a collection.
- [QCRendererEventKey](qcrenderereventkey.md): Deprecated. A key for a renderer event.
- [QCRendererMouseLocationKey](qcrenderermouselocationkey.md): Deprecated. A key for the mouse location.
- [QCViewDidStopRenderingNotification](qcviewdidstoprenderingnotification.md): Deprecated. Posted when the view stops rendering.
- [QCViewDidStartRenderingNotification](qcviewdidstartrenderingnotification.md): Deprecated. Posted when the view starts rendering.
- [kQCPlugInExecutionModeConsumer](kqcpluginexecutionmodeconsumer.md): A consumer execution mode. The custom patch always executes assuming the value of its Enable input port is `true`. (The Enable port is automatically added by the system.)
- [kQCPlugInExecutionModeProcessor](kqcpluginexecutionmodeprocessor.md): A processor execution mode. The custom patch executes whenever its inputs change or if the time change (assuming it’s time-dependent).
- [kQCPlugInExecutionModeProvider](kqcpluginexecutionmodeprovider.md): A provider execution mode. The custom patch executes on demand—that is, whenever data is requested of it, but at most once per frame.
- [kQCPlugInTimeModeIdle](kqcplugintimemodeidle.md): An idle time dependency. The custom patch does not depend on time but needs the system to execute it periodically. For example if the custom patch connects to a piece of hardware, to ensure that it pulls data from the hardware, you would set the custom patch time dependency to idle time mode. This time mode is typically used with providers.\]\]
- [kQCPlugInTimeModeNone](kqcplugintimemodenone.md): No time dependency. The custom patch does not depend on time at all. (It does not use the `time` parameter of the `execute:atTime:withArguments:` method.)
- [kQCPlugInTimeModeTimeBase](kqcplugintimemodetimebase.md): A time base dependency. The custom patch does depend on time explicitly and has a time base defined by the system. (It uses the `time` parameter of the `execute:atTime:withArguments:` method.)

## See Also

### Reference

- [Quartz Data Types](quartz-data-types.md)
- [Quartz Constants](quartz-constants.md)
- [Quartz Enumerations](quartz-enumerations.md)
- [Quartz Composer Enumerations](quartz-composer-enumerations.md)
