> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/1494111-instance-codec-properties](https://developer.apple.com/documentation/audiotoolbox/1494111-instance-codec-properties)

# Instance Codec Properties (Swift)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Properties that can be set or read on an instance of the audio codec.

<a id="overview"></a>

## Overview

These properties are used with the [AudioCodecGetProperty(\_:\_:\_:\_:)](audiocodecgetproperty%28________%29.md) and [AudioCodecSetProperty(\_:\_:\_:\_:)](audiocodecsetproperty%28________%29.md) functions.

These properties are dependent on the codec’s current state. A property may be read/write or read only, depending on the data format of the codec.

These properties may have different values depending on whether the codec is in the initialized state. You can set writable properties only when the codec is not initialized. All properties can be read at any time the codec is open.

## Topics

### Constants

- [kAudioCodecPropertyAdjustLocalQuality](kaudiocodecpropertyadjustlocalquality.md)
- [kAudioCodecPropertyApplicableBitRateRange](kaudiocodecpropertyapplicablebitraterange.md)
- [kAudioCodecPropertyApplicableInputSampleRates](kaudiocodecpropertyapplicableinputsamplerates.md)
- [kAudioCodecPropertyApplicableOutputSampleRates](kaudiocodecpropertyapplicableoutputsamplerates.md)
- [kAudioCodecPropertyBitRateControlMode](kaudiocodecpropertybitratecontrolmode.md)
- [kAudioCodecPropertyCurrentInputChannelLayout](kaudiocodecpropertycurrentinputchannellayout.md)
- [kAudioCodecPropertyCurrentInputFormat](kaudiocodecpropertycurrentinputformat.md)
- [kAudioCodecPropertyCurrentInputSampleRate](kaudiocodecpropertycurrentinputsamplerate.md)
- [kAudioCodecPropertyCurrentOutputChannelLayout](kaudiocodecpropertycurrentoutputchannellayout.md)
- [kAudioCodecPropertyCurrentOutputFormat](kaudiocodecpropertycurrentoutputformat.md)
- [kAudioCodecPropertyCurrentOutputSampleRate](kaudiocodecpropertycurrentoutputsamplerate.md)
- [kAudioCodecPropertyCurrentTargetBitRate](kaudiocodecpropertycurrenttargetbitrate.md)
- [kAudioCodecPropertyDelayMode](kaudiocodecpropertydelaymode.md)
- [kAudioCodecPropertyDynamicRangeControlMode](kaudiocodecpropertydynamicrangecontrolmode.md)
- [kAudioCodecPropertyFormatList](kaudiocodecpropertyformatlist.md)
- [kAudioCodecPropertyHasVariablePacketByteSizes](kaudiocodecpropertyhasvariablepacketbytesizes.md)
- [kAudioCodecPropertyInputBufferSize](kaudiocodecpropertyinputbuffersize.md)
- [kAudioCodecPropertyIsInitialized](kaudiocodecpropertyisinitialized.md)
- [kAudioCodecPropertyMagicCookie](kaudiocodecpropertymagiccookie.md)
- [kAudioCodecPropertyMaximumPacketByteSize](kaudiocodecpropertymaximumpacketbytesize.md)
- [kAudioCodecPropertyPacketFrameSize](kaudiocodecpropertypacketframesize.md)
- [kAudioCodecPropertyPacketSizeLimitForVBR](kaudiocodecpropertypacketsizelimitforvbr.md)
- [kAudioCodecPropertyPaddedZeros](kaudiocodecpropertypaddedzeros.md)
- [kAudioCodecPropertyPrimeInfo](kaudiocodecpropertyprimeinfo.md)
- [kAudioCodecPropertyPrimeMethod](kaudiocodecpropertyprimemethod.md)
- [kAudioCodecPropertyProgramTargetLevel](kaudiocodecpropertyprogramtargetlevel.md)
- [kAudioCodecPropertyProgramTargetLevelConstant](kaudiocodecpropertyprogramtargetlevelconstant.md)
- [kAudioCodecPropertyQualitySetting](kaudiocodecpropertyqualitysetting.md)
- [kAudioCodecPropertyRecommendedBitRateRange](kaudiocodecpropertyrecommendedbitraterange.md)
- [kAudioCodecPropertySettings](kaudiocodecpropertysettings.md)
- [kAudioCodecPropertySoundQualityForVBR](kaudiocodecpropertysoundqualityforvbr.md)
- [kAudioCodecPropertyUsedInputBufferSize](kaudiocodecpropertyusedinputbuffersize.md)
- [kAudioCodecPropertyAdjustCompressionProfile](kaudiocodecpropertyadjustcompressionprofile.md)
- [kAudioCodecPropertyAdjustTargetLevel](kaudiocodecpropertyadjusttargetlevel.md)
- [kAudioCodecPropertyAdjustTargetLevelConstant](kaudiocodecpropertyadjusttargetlevelconstant.md)
- [kAudioCodecPropertyBitRateForVBR](kaudiocodecpropertybitrateforvbr.md)
- [kAudioCodecPropertyEmploysDependentPackets](kaudiocodecpropertyemploysdependentpackets.md)

## See Also

### Enumerations

- [Output Status Constants](1494122-output-status-constants.md): Status values returned from the [AudioCodecProduceOutputPackets(\_:\_:\_:\_:\_:\_:)](audiocodecproduceoutputpackets%28____________%29.md) function.
- [Program Target Levels](1494116-program-target-levels.md)
- [Dynamic Range Control Modes](1494094-dynamic-range-control-modes.md)
- [Bit Rate Control Mode Constants](1494144-bit-rate-control-mode-constants.md): Bit rate control modes to be used with `kAudioCodecPropertyBitRateControlMode`.
- [Global Codec Properties](1494121-global-codec-properties.md): These read-only properties disclose the capabilities of the codec and remain the same for all instances of the codec.
- [Audio Codec Priming Method Constants](1494154-audio-codec-priming-method-const.md): Values used with `kAudioCodecPropertyPrimeMethod`.
- [Audio Codec Quality Constants](1494130-audio-codec-quality-constants.md): Sound quality settings to be used with the property `kAudioCodecPropertyQualitySetting`.
- [Audio Codec Routine Selectors](1494074-audio-codec-routine-selectors.md): Selectors used by the Component Manager to call routines implemented by the codec and exposed to developers through the Audio Codec Services API. These selectors are for use by codec developers; if you are calling Audio Codec Services functions, you don’t need to use these constants.
- [Audio Codec Delays](1494127-audio-codec-delays.md)
- [Audio Codec Delay Modes](1494050-audio-codec-delay-modes.md)
- [Audio Codec Properties](1494068-audio-codec-properties.md)
- [Audio Codec Errors](1494076-audio-codec-errors.md)

# Instance Codec Properties (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Properties that can be set or read on an instance of the audio codec.

<a id="overview"></a>

## Overview

These properties are used with the [AudioCodecGetProperty](audiocodecgetproperty%28________%29.md) and [AudioCodecSetProperty](audiocodecsetproperty%28________%29.md) functions.

These properties are dependent on the codec’s current state. A property may be read/write or read only, depending on the data format of the codec.

These properties may have different values depending on whether the codec is in the initialized state. You can set writable properties only when the codec is not initialized. All properties can be read at any time the codec is open.

## Topics

### Constants

- [kAudioCodecPropertyAdjustLocalQuality](kaudiocodecpropertyadjustlocalquality.md)
- [kAudioCodecPropertyApplicableBitRateRange](kaudiocodecpropertyapplicablebitraterange.md)
- [kAudioCodecPropertyApplicableInputSampleRates](kaudiocodecpropertyapplicableinputsamplerates.md)
- [kAudioCodecPropertyApplicableOutputSampleRates](kaudiocodecpropertyapplicableoutputsamplerates.md)
- [kAudioCodecPropertyBitRateControlMode](kaudiocodecpropertybitratecontrolmode.md)
- [kAudioCodecPropertyCurrentInputChannelLayout](kaudiocodecpropertycurrentinputchannellayout.md)
- [kAudioCodecPropertyCurrentInputFormat](kaudiocodecpropertycurrentinputformat.md)
- [kAudioCodecPropertyCurrentInputSampleRate](kaudiocodecpropertycurrentinputsamplerate.md)
- [kAudioCodecPropertyCurrentOutputChannelLayout](kaudiocodecpropertycurrentoutputchannellayout.md)
- [kAudioCodecPropertyCurrentOutputFormat](kaudiocodecpropertycurrentoutputformat.md)
- [kAudioCodecPropertyCurrentOutputSampleRate](kaudiocodecpropertycurrentoutputsamplerate.md)
- [kAudioCodecPropertyCurrentTargetBitRate](kaudiocodecpropertycurrenttargetbitrate.md)
- [kAudioCodecPropertyDelayMode](kaudiocodecpropertydelaymode.md)
- [kAudioCodecPropertyDynamicRangeControlMode](kaudiocodecpropertydynamicrangecontrolmode.md)
- [kAudioCodecPropertyFormatList](kaudiocodecpropertyformatlist.md)
- [kAudioCodecPropertyHasVariablePacketByteSizes](kaudiocodecpropertyhasvariablepacketbytesizes.md)
- [kAudioCodecPropertyInputBufferSize](kaudiocodecpropertyinputbuffersize.md)
- [kAudioCodecPropertyIsInitialized](kaudiocodecpropertyisinitialized.md)
- [kAudioCodecPropertyMagicCookie](kaudiocodecpropertymagiccookie.md)
- [kAudioCodecPropertyMaximumPacketByteSize](kaudiocodecpropertymaximumpacketbytesize.md)
- [kAudioCodecPropertyPacketFrameSize](kaudiocodecpropertypacketframesize.md)
- [kAudioCodecPropertyPacketSizeLimitForVBR](kaudiocodecpropertypacketsizelimitforvbr.md)
- [kAudioCodecPropertyPaddedZeros](kaudiocodecpropertypaddedzeros.md)
- [kAudioCodecPropertyPrimeInfo](kaudiocodecpropertyprimeinfo.md)
- [kAudioCodecPropertyPrimeMethod](kaudiocodecpropertyprimemethod.md)
- [kAudioCodecPropertyProgramTargetLevel](kaudiocodecpropertyprogramtargetlevel.md)
- [kAudioCodecPropertyProgramTargetLevelConstant](kaudiocodecpropertyprogramtargetlevelconstant.md)
- [kAudioCodecPropertyQualitySetting](kaudiocodecpropertyqualitysetting.md)
- [kAudioCodecPropertyRecommendedBitRateRange](kaudiocodecpropertyrecommendedbitraterange.md)
- [kAudioCodecPropertySettings](kaudiocodecpropertysettings.md)
- [kAudioCodecPropertySoundQualityForVBR](kaudiocodecpropertysoundqualityforvbr.md)
- [kAudioCodecPropertyUsedInputBufferSize](kaudiocodecpropertyusedinputbuffersize.md)
- [kAudioCodecPropertyAdjustCompressionProfile](kaudiocodecpropertyadjustcompressionprofile.md)
- [kAudioCodecPropertyAdjustTargetLevel](kaudiocodecpropertyadjusttargetlevel.md)
- [kAudioCodecPropertyAdjustTargetLevelConstant](kaudiocodecpropertyadjusttargetlevelconstant.md)
- [kAudioCodecPropertyBitRateForVBR](kaudiocodecpropertybitrateforvbr.md)
- [kAudioCodecPropertyEmploysDependentPackets](kaudiocodecpropertyemploysdependentpackets.md)

## See Also

### Enumerations

- [Output Status Constants](1494122-output-status-constants.md): Status values returned from the [AudioCodecProduceOutputPackets](audiocodecproduceoutputpackets%28____________%29.md) function.
- [Program Target Levels](1494116-program-target-levels.md)
- [Dynamic Range Control Modes](1494094-dynamic-range-control-modes.md)
- [Bit Rate Control Mode Constants](1494144-bit-rate-control-mode-constants.md): Bit rate control modes to be used with `kAudioCodecPropertyBitRateControlMode`.
- [Global Codec Properties](1494121-global-codec-properties.md): These read-only properties disclose the capabilities of the codec and remain the same for all instances of the codec.
- [Audio Codec Priming Method Constants](1494154-audio-codec-priming-method-const.md): Values used with `kAudioCodecPropertyPrimeMethod`.
- [Audio Codec Quality Constants](1494130-audio-codec-quality-constants.md): Sound quality settings to be used with the property `kAudioCodecPropertyQualitySetting`.
- [Audio Codec Routine Selectors](1494074-audio-codec-routine-selectors.md): Selectors used by the Component Manager to call routines implemented by the codec and exposed to developers through the Audio Codec Services API. These selectors are for use by codec developers; if you are calling Audio Codec Services functions, you don’t need to use these constants.
- [Audio Codec Delays](1494127-audio-codec-delays.md)
- [Audio Codec Delay Modes](1494050-audio-codec-delay-modes.md)
- [Audio Codec Properties](1494068-audio-codec-properties.md)
- [Audio Codec Errors](1494076-audio-codec-errors.md)
