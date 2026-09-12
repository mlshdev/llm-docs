> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/1584146-audio-unit-mixer-subtypes](https://developer.apple.com/documentation/audiotoolbox/1584146-audio-unit-mixer-subtypes)

# Audio Unit Mixer Subtypes

**Interface languages:** Swift, Objective-C

**Framework:** Audio Toolbox  
**Kind:** API Collection

## Topics

### Constants

- [kAudioUnitSubType_3DMixer](kaudiounitsubtype_3dmixer.md): Deprecated. An audio unit that can have any number of input buses and one output bus. Each input bus can be mono, in which case it can be panned using 3D coordinates and parameters. Stereo input buses pass directly through to the output. Four-channel *ambisonic* inputs are rendered to the output configuration. The single output bus can be configured with 2, 4, 5, 6, 7 or 8 channels.
- [kAudioUnitSubType_StereoMixer](kaudiounitsubtype_stereomixer.md): An audio unit that can have any number of input buses, each of which is mono or stereo, and one stereo output bus.

## See Also

### Mixers

- [AUSpatialMixerAttenuationCurve](auspatialmixerattenuationcurve.md)
- [AUSpatialMixerRenderingFlags](auspatialmixerrenderingflags.md)
- [AUSpatialMixer Parameters](1390073-auspatialmixer-parameters.md)
- [Panner Audio Unit Parameters](1389991-panner-audio-unit-parameters.md)
- [AUMatrixMixer Parameters](1390003-aumatrixmixer-parameters.md)
- [AUMultiChannelMixer Parameters](1389739-aumultichannelmixer_parameters.md): Parameters for the Multichannel Mixer unit.
- [Spatial Mixer Property IDs](1534150-spatial-mixer-property-ids.md)
- [Stereo Mixer Unit Parameters](1389928-stereo-mixer-unit-parameters.md)
- [Mixer Audio Unit Properties](1534041-mixer_audio_unit_properties.md): Properties for Apple mixer audio units.
- [Mixer Audio Unit Subtypes](1584150-mixer_audio_unit_subtypes.md): Audio mixing audio unit subtypes for audio units provided by Apple.
- [AUSpatialMixerOutputType](auspatialmixeroutputtype.md)
- [AUSpatialMixerPointSourceInHeadMode](auspatialmixerpointsourceinheadmode.md)
- [AUSpatialMixerSourceMode](auspatialmixersourcemode.md)
- [3D Mixer Unit Parameters](1389763-3d_mixer_unit_parameters.md): Parameters for the 3D Mixer unit.
- [AU3DMixerAttenuationCurve](au3dmixerattenuationcurve.md)
