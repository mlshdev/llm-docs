> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/audio-format-identifiers](https://developer.apple.com/documentation/coreaudiotypes/audio-format-identifiers)

# Audio Format Identifiers (Swift)

**Framework:** Core Audio Types  
**Kind:** API Collection

Identifiers for supported audio formats.

<a id="overview"></a>

## Overview

Use these identifiers to test for the presence of audio codecs on a system. If a given codec is present, you can use its identifier to specify that codec for data encoding or decoding, according to the capabilities of the codec. For more information, see [Core Audio](../coreaudio.md).

## Topics

### Format identifiers

- [kAudioFormat60958AC3](kaudioformat60958ac3.md): A key that specifies the AC-3 codec, which provides data packaged for transport over an IEC 60958-compliant digital audio interface, and uses standard flags.
- [kAudioFormatAC3](kaudioformatac3.md): A key that specifies the AC-3 codec, and uses no flags.
- [kAudioFormatAES3](kaudioformataes3.md): A key that specifies the codec defined by the AES3-2003 standard, and uses no flags.
- [kAudioFormatALaw](kaudioformatalaw.md): A key that specifies the A-law 2:1 codec, and uses no flags.
- [kAudioFormatAMR](kaudioformatamr.md): A key that specifies the Adaptive Multi-Rate (AMR) narrow band speech codec, and uses no flags.
- [kAudioFormatAMR_WB](kaudioformatamr_wb.md): A key that specifies the AMR Wideband speech codec, and uses no flags.
- [kAudioFormatAppleIMA4](kaudioformatappleima4.md): A key that specifies Apple’s implementation of the IMA 4:1 ADPCM codec, and uses no flags.
- [kAudioFormatAppleLossless](kaudioformatapplelossless.md): A key that specifies the Apple Lossless codec, and uses flags to indicate the bit depth of the source material.
- [kAudioFormatAudible](kaudioformataudible.md): A key that specifies the codec for Audible audio books, and uses no flags.
- [kAudioFormatDVIIntelIMA](kaudioformatdviintelima.md): A key that specifies the codec defined by DVI/Intel IMA ADPCM - ACM code 17, and uses no flags.
- [kAudioFormatEnhancedAC3](kaudioformatenhancedac3.md): A key that specifies the Enhanced AC-3 codec, and uses no flags.
- [kAudioFormatFLAC](kaudioformatflac.md): A key that specifies the Free Lossless Audio Codec (FLAC), and uses flags to indicate the bit depth of the source material.
- [kAudioFormatLinearPCM](kaudioformatlinearpcm.md): A key that specifies the linear PCM codec, and uses the standard flags.
- [kAudioFormatMACE3](kaudioformatmace3.md): A key that specifies the MACE 3:1 codec, and uses no flags.
- [kAudioFormatMACE6](kaudioformatmace6.md): A key that specifies the MACE C:1 codec, and uses no flags.
- [kAudioFormatMIDIStream](kaudioformatmidistream.md): A key that specifies the MIDI stream codec, and uses no flags.
- [kAudioFormatMPEG4AAC](kaudioformatmpeg4aac.md): A key that specifies the MPEG-4 AAC Low Complexity codec, and uses no flags.
- [kAudioFormatMPEG4AAC_ELD](kaudioformatmpeg4aac_eld.md): A key that specifies the MPEG-4 Enhanced Low Delay AAC codec, and uses no flags.
- [kAudioFormatMPEG4AAC_ELD_SBR](kaudioformatmpeg4aac_eld_sbr.md): A key that specifies the MPEG-4 Enhanced Low Delay AAC codec with a spectral band replication (SBR) extension layer, and uses no flags.
- [kAudioFormatMPEG4AAC_ELD_V2](kaudioformatmpeg4aac_eld_v2.md): A key that specifies the MPEG-4 Enhanced Low Delay AAC version 2 codec, and uses no flags.
- [kAudioFormatMPEG4AAC_HE](kaudioformatmpeg4aac_he.md): A key that specifies the MPEG-4 High-Efficiency AAC codec, and uses no flags.
- [kAudioFormatMPEG4AAC_HE_V2](kaudioformatmpeg4aac_he_v2.md): A key that specifies the MPEG-4 High-Efficiency AAC version 2 codec, and uses no flags.
- [kAudioFormatMPEG4AAC_LD](kaudioformatmpeg4aac_ld.md): A key that specifies the MPEG-4 Low Delay AAC codec, and uses no flags.
- [kAudioFormatMPEG4AAC_Spatial](kaudioformatmpeg4aac_spatial.md): A key that specifies the MPEG-4 Spatial Audio Coding codec, and uses no flags.
- [kAudioFormatMPEG4CELP](kaudioformatmpeg4celp.md): A key that specifies the MPEG-4 CELP codec, and uses flags to indicate the specific kind of data.
- [kAudioFormatMPEG4HVXC](kaudioformatmpeg4hvxc.md): A key that specifies the MPEG-4 HVXC codec, and uses no flags.
- [kAudioFormatMPEG4TwinVQ](kaudioformatmpeg4twinvq.md): A key that specifies the MPEG-4 TwinVQ codec, and uses no flags.
- [kAudioFormatMPEGD_USAC](kaudioformatmpegd_usac.md): A key that specifies the MPEG-D Unified Speech and Audio Coding codec, and uses no flags.
- [kAudioFormatMPEGLayer1](kaudioformatmpeglayer1.md): A key that specifies the MPEG-1/2, Layer I audio codec, and uses no flags.
- [kAudioFormatMPEGLayer2](kaudioformatmpeglayer2.md): A key that specifies the MPEG-1/2, Layer II audio codec, and uses no flags.
- [kAudioFormatMPEGLayer3](kaudioformatmpeglayer3.md): A key that specifies the MPEG-1/2, Layer III audio codec, and uses no flags.
- [kAudioFormatMicrosoftGSM](kaudioformatmicrosoftgsm.md): A key that specifies the Microsoft GSM 6.10 - ACM code 49 codec, and uses no flags.
- [kAudioFormatOpus](kaudioformatopus.md): A key that specifies the Opus codec, and uses no flags.
- [kAudioFormatParameterValueStream](kaudioformatparametervaluestream.md): A key that specifies the A side-chain of float 32 data that an audio unit provides for sending high-density parameter value control information, and uses no flags.
- [kAudioFormatQDesign](kaudioformatqdesign.md): A key that specifies the QDesign music codec, and uses no flags.
- [kAudioFormatQDesign2](kaudioformatqdesign2.md): A key that specifies the QDesign 2 music codec, and uses no flags.
- [kAudioFormatQUALCOMM](kaudioformatqualcomm.md): A key that specifies the Qualcomm PureVoice codec, and uses no flags.
- [kAudioFormatTimeCode](kaudioformattimecode.md): A key that specifies the A stream of audio timestamp structures, and uses audio timestamp flags.
- [kAudioFormatULaw](kaudioformatulaw.md): A key that specifies the μ-Law 2:1 codec, and uses no flags.
- [kAudioFormatiLBC](kaudioformatilbc.md): A key that specifies the internet Low Bitrate Codec (iLBC) narrow band speech codec, and uses no flags.

## See Also

### Streams

- [AudioStreamBasicDescription](audiostreambasicdescription.md): A format specification for an audio stream.
- [AudioStreamPacketDescription](audiostreampacketdescription.md): A value that describes a packet in a buffer of audio data.
- [AudioFormatFlags](audioformatflags.md): A type definition for audio format flags.
- [Audio Format Flags](audio-format-flags.md): Commonly used combinations of data format flags for an audio stream description.
- [AudioFormatID](audioformatid.md): A type definition for audio format identifiers.
- [kAudioStreamAnyRate](kaudiostreamanyrate.md): A value that indicates that an audio stream can use any sample rate.
- [MPEG4ObjectID](mpeg4objectid.md): Deprecated. Constants that define the type of MPEG-4 audio data.

# Audio Format Identifiers (Objective-C)

**Framework:** Core Audio Types  
**Kind:** API Collection

Identifiers for supported audio formats.

<a id="overview"></a>

## Overview

Use these identifiers to test for the presence of audio codecs on a system. If a given codec is present, you can use its identifier to specify that codec for data encoding or decoding, according to the capabilities of the codec. For more information, see [Core Audio](../coreaudio.md).

## Topics

### Format identifiers

- [kAudioFormat60958AC3](kaudioformat60958ac3.md): A key that specifies the AC-3 codec, which provides data packaged for transport over an IEC 60958-compliant digital audio interface, and uses standard flags.
- [kAudioFormatAC3](kaudioformatac3.md): A key that specifies the AC-3 codec, and uses no flags.
- [kAudioFormatAES3](kaudioformataes3.md): A key that specifies the codec defined by the AES3-2003 standard, and uses no flags.
- [kAudioFormatALaw](kaudioformatalaw.md): A key that specifies the A-law 2:1 codec, and uses no flags.
- [kAudioFormatAMR](kaudioformatamr.md): A key that specifies the Adaptive Multi-Rate (AMR) narrow band speech codec, and uses no flags.
- [kAudioFormatAMR_WB](kaudioformatamr_wb.md): A key that specifies the AMR Wideband speech codec, and uses no flags.
- [kAudioFormatAppleIMA4](kaudioformatappleima4.md): A key that specifies Apple’s implementation of the IMA 4:1 ADPCM codec, and uses no flags.
- [kAudioFormatAppleLossless](kaudioformatapplelossless.md): A key that specifies the Apple Lossless codec, and uses flags to indicate the bit depth of the source material.
- [kAudioFormatAudible](kaudioformataudible.md): A key that specifies the codec for Audible audio books, and uses no flags.
- [kAudioFormatDVIIntelIMA](kaudioformatdviintelima.md): A key that specifies the codec defined by DVI/Intel IMA ADPCM - ACM code 17, and uses no flags.
- [kAudioFormatEnhancedAC3](kaudioformatenhancedac3.md): A key that specifies the Enhanced AC-3 codec, and uses no flags.
- [kAudioFormatFLAC](kaudioformatflac.md): A key that specifies the Free Lossless Audio Codec (FLAC), and uses flags to indicate the bit depth of the source material.
- [kAudioFormatLinearPCM](kaudioformatlinearpcm.md): A key that specifies the linear PCM codec, and uses the standard flags.
- [kAudioFormatMACE3](kaudioformatmace3.md): A key that specifies the MACE 3:1 codec, and uses no flags.
- [kAudioFormatMACE6](kaudioformatmace6.md): A key that specifies the MACE C:1 codec, and uses no flags.
- [kAudioFormatMIDIStream](kaudioformatmidistream.md): A key that specifies the MIDI stream codec, and uses no flags.
- [kAudioFormatMPEG4AAC](kaudioformatmpeg4aac.md): A key that specifies the MPEG-4 AAC Low Complexity codec, and uses no flags.
- [kAudioFormatMPEG4AAC_ELD](kaudioformatmpeg4aac_eld.md): A key that specifies the MPEG-4 Enhanced Low Delay AAC codec, and uses no flags.
- [kAudioFormatMPEG4AAC_ELD_SBR](kaudioformatmpeg4aac_eld_sbr.md): A key that specifies the MPEG-4 Enhanced Low Delay AAC codec with a spectral band replication (SBR) extension layer, and uses no flags.
- [kAudioFormatMPEG4AAC_ELD_V2](kaudioformatmpeg4aac_eld_v2.md): A key that specifies the MPEG-4 Enhanced Low Delay AAC version 2 codec, and uses no flags.
- [kAudioFormatMPEG4AAC_HE](kaudioformatmpeg4aac_he.md): A key that specifies the MPEG-4 High-Efficiency AAC codec, and uses no flags.
- [kAudioFormatMPEG4AAC_HE_V2](kaudioformatmpeg4aac_he_v2.md): A key that specifies the MPEG-4 High-Efficiency AAC version 2 codec, and uses no flags.
- [kAudioFormatMPEG4AAC_LD](kaudioformatmpeg4aac_ld.md): A key that specifies the MPEG-4 Low Delay AAC codec, and uses no flags.
- [kAudioFormatMPEG4AAC_Spatial](kaudioformatmpeg4aac_spatial.md): A key that specifies the MPEG-4 Spatial Audio Coding codec, and uses no flags.
- [kAudioFormatMPEG4CELP](kaudioformatmpeg4celp.md): A key that specifies the MPEG-4 CELP codec, and uses flags to indicate the specific kind of data.
- [kAudioFormatMPEG4HVXC](kaudioformatmpeg4hvxc.md): A key that specifies the MPEG-4 HVXC codec, and uses no flags.
- [kAudioFormatMPEG4TwinVQ](kaudioformatmpeg4twinvq.md): A key that specifies the MPEG-4 TwinVQ codec, and uses no flags.
- [kAudioFormatMPEGD_USAC](kaudioformatmpegd_usac.md): A key that specifies the MPEG-D Unified Speech and Audio Coding codec, and uses no flags.
- [kAudioFormatMPEGLayer1](kaudioformatmpeglayer1.md): A key that specifies the MPEG-1/2, Layer I audio codec, and uses no flags.
- [kAudioFormatMPEGLayer2](kaudioformatmpeglayer2.md): A key that specifies the MPEG-1/2, Layer II audio codec, and uses no flags.
- [kAudioFormatMPEGLayer3](kaudioformatmpeglayer3.md): A key that specifies the MPEG-1/2, Layer III audio codec, and uses no flags.
- [kAudioFormatMicrosoftGSM](kaudioformatmicrosoftgsm.md): A key that specifies the Microsoft GSM 6.10 - ACM code 49 codec, and uses no flags.
- [kAudioFormatOpus](kaudioformatopus.md): A key that specifies the Opus codec, and uses no flags.
- [kAudioFormatParameterValueStream](kaudioformatparametervaluestream.md): A key that specifies the A side-chain of float 32 data that an audio unit provides for sending high-density parameter value control information, and uses no flags.
- [kAudioFormatQDesign](kaudioformatqdesign.md): A key that specifies the QDesign music codec, and uses no flags.
- [kAudioFormatQDesign2](kaudioformatqdesign2.md): A key that specifies the QDesign 2 music codec, and uses no flags.
- [kAudioFormatQUALCOMM](kaudioformatqualcomm.md): A key that specifies the Qualcomm PureVoice codec, and uses no flags.
- [kAudioFormatTimeCode](kaudioformattimecode.md): A key that specifies the A stream of audio timestamp structures, and uses audio timestamp flags.
- [kAudioFormatULaw](kaudioformatulaw.md): A key that specifies the μ-Law 2:1 codec, and uses no flags.
- [kAudioFormatiLBC](kaudioformatilbc.md): A key that specifies the internet Low Bitrate Codec (iLBC) narrow band speech codec, and uses no flags.
