> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/audio-channel-layout-tags](https://developer.apple.com/documentation/coreaudiotypes/audio-channel-layout-tags)

# Audio Channel Layout Tags (Swift)

**Framework:** Core Audio Types  
**Kind:** API Collection

The identifiers that represent audio channel layouts.

<a id="overview"></a>

## Overview

Use these values to set the [mChannelLayoutTag](audiochannellayout/mchannellayouttag.md) field of an [AudioChannelLayout](audiochannellayout.md) structure.

## Topics

### General Layouts

- [kAudioChannelLayoutTag_UseChannelDescriptions](kaudiochannellayouttag_usechanneldescriptions.md): An array of audio channel description structures that defines the layout mapping.
- [kAudioChannelLayoutTag_UseChannelBitmap](kaudiochannellayouttag_usechannelbitmap.md): A bitmap that defines the layout mapping.
- [kAudioChannelLayoutTag_Mono](kaudiochannellayouttag_mono.md): A standard monophonic stream.
- [kAudioChannelLayoutTag_Stereo](kaudiochannellayouttag_stereo.md): A standard stereophonic stream.
- [kAudioChannelLayoutTag_StereoHeadphones](kaudiochannellayouttag_stereoheadphones.md): A standard stereo stream; headphone playback implied.
- [kAudioChannelLayoutTag_MatrixStereo](kaudiochannellayouttag_matrixstereo.md): A matrix-encoded stereo stream.
- [kAudioChannelLayoutTag_MidSide](kaudiochannellayouttag_midside.md): A middle and side channel audio layout.
- [kAudioChannelLayoutTag_XY](kaudiochannellayouttag_xy.md): A coincident, angled microphone pair.
- [kAudioChannelLayoutTag_Binaural](kaudiochannellayouttag_binaural.md): A binaural stereo audio layout.
- [kAudioChannelLayoutTag_Ambisonic_B_Format](kaudiochannellayouttag_ambisonic_b_format.md): An ambisonic B-format audio layout.
- [kAudioChannelLayoutTag_Quadraphonic](kaudiochannellayouttag_quadraphonic.md): A quadraphonic audio layout.
- [kAudioChannelLayoutTag_Pentagonal](kaudiochannellayouttag_pentagonal.md): A pentalgonal audio layout.
- [kAudioChannelLayoutTag_Hexagonal](kaudiochannellayouttag_hexagonal.md): A hexagonal audio layout.
- [kAudioChannelLayoutTag_Octagonal](kaudiochannellayouttag_octagonal.md): An octagonal audio layout.
- [kAudioChannelLayoutTag_Cube](kaudiochannellayouttag_cube.md): A cubic audio layout.

### Atmos Layouts

- [kAudioChannelLayoutTag_Atmos_5_1_2](kaudiochannellayouttag_atmos_5_1_2.md)
- [kAudioChannelLayoutTag_Atmos_5_1_4](kaudiochannellayouttag_atmos_5_1_4.md)
- [kAudioChannelLayoutTag_Atmos_7_1_2](kaudiochannellayouttag_atmos_7_1_2.md)
- [kAudioChannelLayoutTag_Atmos_7_1_4](kaudiochannellayouttag_atmos_7_1_4.md)
- [kAudioChannelLayoutTag_Atmos_9_1_6](kaudiochannellayouttag_atmos_9_1_6.md)

### MPEG Defined Layouts

- [kAudioChannelLayoutTag_MPEG_1_0](kaudiochannellayouttag_mpeg_1_0.md): An MPEG 1-channel audio layout.
- [kAudioChannelLayoutTag_MPEG_2_0](kaudiochannellayouttag_mpeg_2_0.md): An MPEG 2-channel audio layout.
- [kAudioChannelLayoutTag_MPEG_3_0_A](kaudiochannellayouttag_mpeg_3_0_a.md): An MPEG 3-channel, configuration A, audio layout.
- [kAudioChannelLayoutTag_MPEG_3_0_B](kaudiochannellayouttag_mpeg_3_0_b.md): An MPEG 3-channel, configuration B, audio layout.
- [kAudioChannelLayoutTag_MPEG_4_0_A](kaudiochannellayouttag_mpeg_4_0_a.md): An MPEG 4-channel, configuration A, audio layout.
- [kAudioChannelLayoutTag_MPEG_4_0_B](kaudiochannellayouttag_mpeg_4_0_b.md): An MPEG 4-channel, configuration B, audio layout
- [kAudioChannelLayoutTag_MPEG_5_0_A](kaudiochannellayouttag_mpeg_5_0_a.md): An MPEG 5-channel, configuration A, audio layout.
- [kAudioChannelLayoutTag_MPEG_5_0_B](kaudiochannellayouttag_mpeg_5_0_b.md): An MPEG 5-channel, configuration B, audio layout.
- [kAudioChannelLayoutTag_MPEG_5_0_C](kaudiochannellayouttag_mpeg_5_0_c.md): An MPEG 5-channel, configuration C, audio layout.
- [kAudioChannelLayoutTag_MPEG_5_0_D](kaudiochannellayouttag_mpeg_5_0_d.md): An MPEG 5-channel, configuration D, audio layout.
- [kAudioChannelLayoutTag_MPEG_5_0_E](kaudiochannellayouttag_mpeg_5_0_e.md): 5 channels, L R Rls Rrs C
- [kAudioChannelLayoutTag_MPEG_5_1_A](kaudiochannellayouttag_mpeg_5_1_a.md): An MPEG 5.1-channel, configuration A, audio layout.
- [kAudioChannelLayoutTag_MPEG_5_1_B](kaudiochannellayouttag_mpeg_5_1_b.md): An MPEG 5.1-channel, configuration B, audio layout.
- [kAudioChannelLayoutTag_MPEG_5_1_C](kaudiochannellayouttag_mpeg_5_1_c.md): An MPEG 5.1-channel, configuration C, audio layout.
- [kAudioChannelLayoutTag_MPEG_5_1_D](kaudiochannellayouttag_mpeg_5_1_d.md): An MPEG 5.1-channel, configuration D, audio layout.
- [kAudioChannelLayoutTag_MPEG_5_1_E](kaudiochannellayouttag_mpeg_5_1_e.md): 6 channels, L R Rls Rrs C LFE
- [kAudioChannelLayoutTag_MPEG_6_1_A](kaudiochannellayouttag_mpeg_6_1_a.md): An MPEG 6.1-channel, configuration A, audio layout.
- [kAudioChannelLayoutTag_MPEG_6_1_B](kaudiochannellayouttag_mpeg_6_1_b.md): 7 channels, L R Ls Rs C Cs LFE
- [kAudioChannelLayoutTag_MPEG_7_1_A](kaudiochannellayouttag_mpeg_7_1_a.md): An MPEG 7.1-channel, configuration A, audio layout.
- [kAudioChannelLayoutTag_MPEG_7_1_B](kaudiochannellayouttag_mpeg_7_1_b.md): An MPEG 7.1-channel, configuration B, audio layout.
- [kAudioChannelLayoutTag_MPEG_7_1_C](kaudiochannellayouttag_mpeg_7_1_c.md): An MPEG 7.1-channel, configuration C, audio layout.
- [kAudioChannelLayoutTag_MPEG_7_1_D](kaudiochannellayouttag_mpeg_7_1_d.md): 8 channels, L R Rls Rrs Ls Rs C LFE
- [kAudioChannelLayoutTag_Emagic_Default_7_1](kaudiochannellayouttag_emagic_default_7_1.md): An Emagic 7.1-channel default audio layout.
- [kAudioChannelLayoutTag_SMPTE_DTV](kaudiochannellayouttag_smpte_dtv.md): An SMPTE DTV audio layout.

### CICP

- [kAudioChannelLayoutTag_CICP_1](kaudiochannellayouttag_cicp_1.md)
- [kAudioChannelLayoutTag_CICP_2](kaudiochannellayouttag_cicp_2.md)
- [kAudioChannelLayoutTag_CICP_3](kaudiochannellayouttag_cicp_3.md)
- [kAudioChannelLayoutTag_CICP_4](kaudiochannellayouttag_cicp_4.md)
- [kAudioChannelLayoutTag_CICP_5](kaudiochannellayouttag_cicp_5.md)
- [kAudioChannelLayoutTag_CICP_6](kaudiochannellayouttag_cicp_6.md)
- [kAudioChannelLayoutTag_CICP_7](kaudiochannellayouttag_cicp_7.md)
- [kAudioChannelLayoutTag_CICP_9](kaudiochannellayouttag_cicp_9.md)
- [kAudioChannelLayoutTag_CICP_10](kaudiochannellayouttag_cicp_10.md)
- [kAudioChannelLayoutTag_CICP_11](kaudiochannellayouttag_cicp_11.md)
- [kAudioChannelLayoutTag_CICP_12](kaudiochannellayouttag_cicp_12.md)
- [kAudioChannelLayoutTag_CICP_13](kaudiochannellayouttag_cicp_13.md)
- [kAudioChannelLayoutTag_CICP_14](kaudiochannellayouttag_cicp_14.md)
- [kAudioChannelLayoutTag_CICP_15](kaudiochannellayouttag_cicp_15.md)
- [kAudioChannelLayoutTag_CICP_16](kaudiochannellayouttag_cicp_16.md)
- [kAudioChannelLayoutTag_CICP_17](kaudiochannellayouttag_cicp_17.md)
- [kAudioChannelLayoutTag_CICP_18](kaudiochannellayouttag_cicp_18.md)
- [kAudioChannelLayoutTag_CICP_19](kaudiochannellayouttag_cicp_19.md)
- [kAudioChannelLayoutTag_CICP_20](kaudiochannellayouttag_cicp_20.md)

### ITU Defined Layouts

- [kAudioChannelLayoutTag_ITU_1_0](kaudiochannellayouttag_itu_1_0.md): An ITU 1-channel audio layout.
- [kAudioChannelLayoutTag_ITU_2_0](kaudiochannellayouttag_itu_2_0.md): An ITU 2-channel audio layout.
- [kAudioChannelLayoutTag_ITU_2_1](kaudiochannellayouttag_itu_2_1.md): An ITU 2.1-channel audio layout.
- [kAudioChannelLayoutTag_ITU_2_2](kaudiochannellayouttag_itu_2_2.md): An ITU 2.2-channel audio layout.
- [kAudioChannelLayoutTag_ITU_3_0](kaudiochannellayouttag_itu_3_0.md): An ITU 3-channel audio layout.
- [kAudioChannelLayoutTag_ITU_3_1](kaudiochannellayouttag_itu_3_1.md): An ITU 3.1-channel audio layout.
- [kAudioChannelLayoutTag_ITU_3_2](kaudiochannellayouttag_itu_3_2.md): An ITU 3.2-channel audio layout.
- [kAudioChannelLayoutTag_ITU_3_2_1](kaudiochannellayouttag_itu_3_2_1.md): An ITU 3.2.1-channel audio layout.
- [kAudioChannelLayoutTag_ITU_3_4_1](kaudiochannellayouttag_itu_3_4_1.md): An ITU 3.4.1-channel audio layout.

### DVD Defined Layouts

- [kAudioChannelLayoutTag_DVD_0](kaudiochannellayouttag_dvd_0.md): A DVD monaural audio layout.
- [kAudioChannelLayoutTag_DVD_1](kaudiochannellayouttag_dvd_1.md): A DVD stereo audio layout.
- [kAudioChannelLayoutTag_DVD_2](kaudiochannellayouttag_dvd_2.md): A DVD 3-channel audio layout.
- [kAudioChannelLayoutTag_DVD_3](kaudiochannellayouttag_dvd_3.md): A DVD 4-channel audio layout.
- [kAudioChannelLayoutTag_DVD_4](kaudiochannellayouttag_dvd_4.md): A DVD 2.1-channel audio layout.
- [kAudioChannelLayoutTag_DVD_5](kaudiochannellayouttag_dvd_5.md): A DVD 3.1-channel audio layout.
- [kAudioChannelLayoutTag_DVD_6](kaudiochannellayouttag_dvd_6.md): A DVD 4.1-channel audio layout.
- [kAudioChannelLayoutTag_DVD_7](kaudiochannellayouttag_dvd_7.md): A DVD 3-channel audio layout.
- [kAudioChannelLayoutTag_DVD_8](kaudiochannellayouttag_dvd_8.md): A DVD 4-channel audio layout.
- [kAudioChannelLayoutTag_DVD_9](kaudiochannellayouttag_dvd_9.md): A DVD 5-channel audio layout.
- [kAudioChannelLayoutTag_DVD_10](kaudiochannellayouttag_dvd_10.md): A DVD 3.1-channel audio layout.
- [kAudioChannelLayoutTag_DVD_11](kaudiochannellayouttag_dvd_11.md): A DVD 4.1-channel audio layout.
- [kAudioChannelLayoutTag_DVD_12](kaudiochannellayouttag_dvd_12.md): A DVD 5.1-channel audio layout.
- [kAudioChannelLayoutTag_DVD_13](kaudiochannellayouttag_dvd_13.md): A DVD 4-channel audio layout.
- [kAudioChannelLayoutTag_DVD_14](kaudiochannellayouttag_dvd_14.md): A DVD 5-channel audio layout.
- [kAudioChannelLayoutTag_DVD_15](kaudiochannellayouttag_dvd_15.md): A DVD 3.1-channel audio layout.
- [kAudioChannelLayoutTag_DVD_16](kaudiochannellayouttag_dvd_16.md): A DVD 4.1-channel audio layout.
- [kAudioChannelLayoutTag_DVD_17](kaudiochannellayouttag_dvd_17.md): A DVD 5.1-channel audio layout.
- [kAudioChannelLayoutTag_DVD_18](kaudiochannellayouttag_dvd_18.md): A DVD 4.1-channel audio layout.
- [kAudioChannelLayoutTag_DVD_19](kaudiochannellayouttag_dvd_19.md): A DVD 5-channel audio layout.
- [kAudioChannelLayoutTag_DVD_20](kaudiochannellayouttag_dvd_20.md): A DVD 5.1-channel audio layout.

### Symmetrical Layouts

- [kAudioChannelLayoutTag_AudioUnit_4](kaudiochannellayouttag_audiounit_4.md): A quadraphonic symmetrical layout, recommended for use by audio units.
- [kAudioChannelLayoutTag_AudioUnit_5](kaudiochannellayouttag_audiounit_5.md): A pentagonal symmetrical layout, recommended for use by audio units.
- [kAudioChannelLayoutTag_AudioUnit_6](kaudiochannellayouttag_audiounit_6.md): A hexagonal symmetrical layout, recommended for use by audio units.
- [kAudioChannelLayoutTag_AudioUnit_8](kaudiochannellayouttag_audiounit_8.md): An octagonal symmetrical layout, recommended for use by audio units.

### Surround Based Layouts

- [kAudioChannelLayoutTag_AudioUnit_5_0](kaudiochannellayouttag_audiounit_5_0.md): A 5-channel surround-based layout, recommended for use by audio units.
- [kAudioChannelLayoutTag_AudioUnit_6_0](kaudiochannellayouttag_audiounit_6_0.md): A 6-channel surround-based layout, recommended for use by audio units.
- [kAudioChannelLayoutTag_AudioUnit_7_0](kaudiochannellayouttag_audiounit_7_0.md): A 7-channel surround-based layout, recommended for use by audio units.
- [kAudioChannelLayoutTag_AudioUnit_7_0_Front](kaudiochannellayouttag_audiounit_7_0_front.md): An alternate 7-channel surround-based layout, for use by audio units.
- [kAudioChannelLayoutTag_AudioUnit_5_1](kaudiochannellayouttag_audiounit_5_1.md): A 5.1-channel surround-based layout, recommended for use by audio units.
- [kAudioChannelLayoutTag_AudioUnit_6_1](kaudiochannellayouttag_audiounit_6_1.md): A 6.1-channel surround-based layout, recommended for use by audio units.
- [kAudioChannelLayoutTag_AudioUnit_7_1](kaudiochannellayouttag_audiounit_7_1.md): A 7.1-channel surround-based layout, recommended for use by audio units.
- [kAudioChannelLayoutTag_AudioUnit_7_1_Front](kaudiochannellayouttag_audiounit_7_1_front.md): A 7.1-channel surround-based layout, recommended for use by audio units.
- [kAudioChannelLayoutTag_TMH_10_2_std](kaudiochannellayouttag_tmh_10_2_std.md): A TMH 10.2 multiple-channel surround-based layout .
- [kAudioChannelLayoutTag_TMH_10_2_full](kaudiochannellayouttag_tmh_10_2_full.md): An extended TMH 10.2 multiple-channel surround-based layout, recommended for use by audio units.

### AAC Defined Layouts

- [kAudioChannelLayoutTag_AAC_3_0](kaudiochannellayouttag_aac_3_0.md): An AAC 3-channel audio layout.
- [kAudioChannelLayoutTag_AAC_Quadraphonic](kaudiochannellayouttag_aac_quadraphonic.md): An AAC quadraphonic surround-based layout.
- [kAudioChannelLayoutTag_AAC_4_0](kaudiochannellayouttag_aac_4_0.md): An AAC 4-channel surround-based layout.
- [kAudioChannelLayoutTag_AAC_5_0](kaudiochannellayouttag_aac_5_0.md): An AAC 5-channel surround-based layout.
- [kAudioChannelLayoutTag_AAC_5_1](kaudiochannellayouttag_aac_5_1.md): An AAC 5.1-channel surround-based layout.
- [kAudioChannelLayoutTag_AAC_6_0](kaudiochannellayouttag_aac_6_0.md): An AAC 6-channel surround-based layout.
- [kAudioChannelLayoutTag_AAC_6_1](kaudiochannellayouttag_aac_6_1.md): An AAC 6.1-channel surround-based layout.
- [kAudioChannelLayoutTag_AAC_7_0](kaudiochannellayouttag_aac_7_0.md): An AAC 7-channel surround-based layout.
- [kAudioChannelLayoutTag_AAC_7_1](kaudiochannellayouttag_aac_7_1.md): An AAC 7.1-channel surround-based layout.
- [kAudioChannelLayoutTag_AAC_7_1_B](kaudiochannellayouttag_aac_7_1_b.md): An AAC 7.1-channel, configuration B, surround-based layout.
- [kAudioChannelLayoutTag_AAC_7_1_C](kaudiochannellayouttag_aac_7_1_c.md): An AAC 7.1-channel, configuration C, surround-based layout.
- [kAudioChannelLayoutTag_AAC_Octagonal](kaudiochannellayouttag_aac_octagonal.md): An AAC 8-channel surround-based layout.

### AC3 Defined Layouts

- [kAudioChannelLayoutTag_AC3_1_0_1](kaudiochannellayouttag_ac3_1_0_1.md): An AC-3 layout.
- [kAudioChannelLayoutTag_AC3_3_0](kaudiochannellayouttag_ac3_3_0.md): An AC-3 layout.
- [kAudioChannelLayoutTag_AC3_3_1](kaudiochannellayouttag_ac3_3_1.md): An AC-3 layout.
- [kAudioChannelLayoutTag_AC3_3_0_1](kaudiochannellayouttag_ac3_3_0_1.md): An AC-3 layout.
- [kAudioChannelLayoutTag_AC3_2_1_1](kaudiochannellayouttag_ac3_2_1_1.md): An AC-3 layout.
- [kAudioChannelLayoutTag_AC3_3_1_1](kaudiochannellayouttag_ac3_3_1_1.md): An AC-3 layout.

### EAC3 Defined Layouts

- [kAudioChannelLayoutTag_EAC_6_0_A](kaudiochannellayouttag_eac_6_0_a.md): A Blu-ray Disc audio layout for Enhanced AC-3, also known as Dolby Digital Plus.
- [kAudioChannelLayoutTag_EAC_7_0_A](kaudiochannellayouttag_eac_7_0_a.md): A Blu-ray Disc audio layout for Enhanced AC-3, also known as Dolby Digital Plus.
- [kAudioChannelLayoutTag_EAC3_6_1_A](kaudiochannellayouttag_eac3_6_1_a.md): A Blu-ray Disc audio layout for Enhanced AC-3, also known as Dolby Digital Plus.
- [kAudioChannelLayoutTag_EAC3_6_1_B](kaudiochannellayouttag_eac3_6_1_b.md): A Blu-ray Disc audio layout for Enhanced AC-3, also known as Dolby Digital Plus.
- [kAudioChannelLayoutTag_EAC3_6_1_C](kaudiochannellayouttag_eac3_6_1_c.md): A Blu-ray Disc audio layout for Enhanced AC-3, also known as Dolby Digital Plus.
- [kAudioChannelLayoutTag_EAC3_7_1_A](kaudiochannellayouttag_eac3_7_1_a.md): A Blu-ray Disc audio layout for Enhanced AC-3, also known as Dolby Digital Plus.
- [kAudioChannelLayoutTag_EAC3_7_1_B](kaudiochannellayouttag_eac3_7_1_b.md): A Blu-ray Disc audio layout for Enhanced AC-3, also known as Dolby Digital Plus.
- [kAudioChannelLayoutTag_EAC3_7_1_C](kaudiochannellayouttag_eac3_7_1_c.md): A Blu-ray Disc audio layout for Enhanced AC-3, also known as Dolby Digital Plus.
- [kAudioChannelLayoutTag_EAC3_7_1_D](kaudiochannellayouttag_eac3_7_1_d.md): A Blu-ray Disc audio layout for Enhanced AC-3, also known as Dolby Digital Plus.
- [kAudioChannelLayoutTag_EAC3_7_1_E](kaudiochannellayouttag_eac3_7_1_e.md): A Blu-ray Disc audio layout for Enhanced AC-3, also known as Dolby Digital Plus.
- [kAudioChannelLayoutTag_EAC3_7_1_F](kaudiochannellayouttag_eac3_7_1_f.md): A Blu-ray Disc audio layout for Enhanced AC-3, also known as Dolby Digital Plus.
- [kAudioChannelLayoutTag_EAC3_7_1_G](kaudiochannellayouttag_eac3_7_1_g.md): A Blu-ray Disc audio layout for Enhanced AC-3, also known as Dolby Digital Plus.
- [kAudioChannelLayoutTag_EAC3_7_1_H](kaudiochannellayouttag_eac3_7_1_h.md): A Blu-ray Disc audio layout for Enhanced AC-3, also known as Dolby Digital Plus.

### DTS Defined Layouts

- [kAudioChannelLayoutTag_DTS_3_1](kaudiochannellayouttag_dts_3_1.md): A Blu-ray Disc audio layout, defined by DTS (Digital Theater Systems Ltd.).
- [kAudioChannelLayoutTag_DTS_4_1](kaudiochannellayouttag_dts_4_1.md): A Blu-ray Disc audio layout, defined by DTS (Digital Theater Systems Ltd.).
- [kAudioChannelLayoutTag_DTS_6_0_A](kaudiochannellayouttag_dts_6_0_a.md): A Blu-ray Disc audio layout, defined by DTS (Digital Theater Systems Ltd.).
- [kAudioChannelLayoutTag_DTS_6_0_B](kaudiochannellayouttag_dts_6_0_b.md): A Blu-ray Disc audio layout, defined by DTS (Digital Theater Systems Ltd.).
- [kAudioChannelLayoutTag_DTS_6_0_C](kaudiochannellayouttag_dts_6_0_c.md): A Blu-ray Disc audio layout, defined by DTS (Digital Theater Systems Ltd.).
- [kAudioChannelLayoutTag_DTS_6_1_A](kaudiochannellayouttag_dts_6_1_a.md): A Blu-ray Disc audio layout, defined by DTS (Digital Theater Systems Ltd.).
- [kAudioChannelLayoutTag_DTS_6_1_B](kaudiochannellayouttag_dts_6_1_b.md): A Blu-ray Disc audio layout, defined by DTS (Digital Theater Systems Ltd.).
- [kAudioChannelLayoutTag_DTS_6_1_C](kaudiochannellayouttag_dts_6_1_c.md): A Blu-ray Disc audio layout, defined by DTS (Digital Theater Systems Ltd.).
- [kAudioChannelLayoutTag_DTS_6_1_D](kaudiochannellayouttag_dts_6_1_d.md): A Blu-ray Disc audio layout, defined by DTS (Digital Theater Systems Ltd.).
- [kAudioChannelLayoutTag_DTS_7_0](kaudiochannellayouttag_dts_7_0.md): A Blu-ray Disc audio layout, defined by DTS (Digital Theater Systems Ltd.).
- [kAudioChannelLayoutTag_DTS_7_1](kaudiochannellayouttag_dts_7_1.md): A Blu-ray Disc audio layout, defined by DTS (Digital Theater Systems Ltd.).
- [kAudioChannelLayoutTag_DTS_8_0_A](kaudiochannellayouttag_dts_8_0_a.md): A Blu-ray Disc audio layout, defined by DTS (Digital Theater Systems Ltd.).
- [kAudioChannelLayoutTag_DTS_8_0_B](kaudiochannellayouttag_dts_8_0_b.md): A Blu-ray Disc audio layout, defined by DTS (Digital Theater Systems Ltd.).
- [kAudioChannelLayoutTag_DTS_8_1_A](kaudiochannellayouttag_dts_8_1_a.md): A Blu-ray Disc audio layout, defined by DTS (Digital Theater Systems Ltd.).
- [kAudioChannelLayoutTag_DTS_8_1_B](kaudiochannellayouttag_dts_8_1_b.md): A Blu-ray Disc audio layout, defined by DTS (Digital Theater Systems Ltd.).

### HOA Defined Layouts

- [kAudioChannelLayoutTag_HOA_ACN_N3D](kaudiochannellayouttag_hoa_acn_n3d.md): A Higher-order Ambisonics, full 3D normalization audio layout.
- [kAudioChannelLayoutTag_HOA_ACN_SN3D](kaudiochannellayouttag_hoa_acn_sn3d.md): A Higher-order Ambisonics, Schmidt semi-normalization audio layout.

### General Information Tags

- [kAudioChannelLayoutTag_DiscreteInOrder](kaudiochannellayouttag_discreteinorder.md): A tag used to map input channels to output channels without changing the channel order.
- [kAudioChannelLayoutTag_Unknown](kaudiochannellayouttag_unknown.md): The channel layout is unknown.

### Reserved Tag Range

The tags in this section define a range of values reserved for future Apple use. Do not create tags in this range.

- [kAudioChannelLayoutTag_BeginReserved](kaudiochannellayouttag_beginreserved.md): The beginning value for a reserved range of layout tags.
- [kAudioChannelLayoutTag_EndReserved](kaudiochannellayouttag_endreserved.md): The ending value for a reserved range of layout tags.

### Wave Layouts

- [kAudioChannelLayoutTag_WAVE_2_1](kaudiochannellayouttag_wave_2_1.md)
- [kAudioChannelLayoutTag_WAVE_3_0](kaudiochannellayouttag_wave_3_0.md)
- [kAudioChannelLayoutTag_WAVE_4_0_A](kaudiochannellayouttag_wave_4_0_a.md)
- [kAudioChannelLayoutTag_WAVE_4_0_B](kaudiochannellayouttag_wave_4_0_b.md)
- [kAudioChannelLayoutTag_WAVE_5_0_A](kaudiochannellayouttag_wave_5_0_a.md)
- [kAudioChannelLayoutTag_WAVE_5_0_B](kaudiochannellayouttag_wave_5_0_b.md)
- [kAudioChannelLayoutTag_WAVE_5_1_A](kaudiochannellayouttag_wave_5_1_a.md)
- [kAudioChannelLayoutTag_WAVE_5_1_B](kaudiochannellayouttag_wave_5_1_b.md)
- [kAudioChannelLayoutTag_WAVE_6_1](kaudiochannellayouttag_wave_6_1.md)
- [kAudioChannelLayoutTag_WAVE_7_1](kaudiochannellayouttag_wave_7_1.md)

### Logic Pro Layouts

- [kAudioChannelLayoutTag_Logic_4_0_A](kaudiochannellayouttag_logic_4_0_a.md)
- [kAudioChannelLayoutTag_Logic_4_0_B](kaudiochannellayouttag_logic_4_0_b.md)
- [kAudioChannelLayoutTag_Logic_4_0_C](kaudiochannellayouttag_logic_4_0_c.md)
- [kAudioChannelLayoutTag_Logic_5_0_A](kaudiochannellayouttag_logic_5_0_a.md)
- [kAudioChannelLayoutTag_Logic_5_0_B](kaudiochannellayouttag_logic_5_0_b.md)
- [kAudioChannelLayoutTag_Logic_5_0_C](kaudiochannellayouttag_logic_5_0_c.md)
- [kAudioChannelLayoutTag_Logic_5_0_D](kaudiochannellayouttag_logic_5_0_d.md)
- [kAudioChannelLayoutTag_Logic_5_1_A](kaudiochannellayouttag_logic_5_1_a.md)
- [kAudioChannelLayoutTag_Logic_5_1_B](kaudiochannellayouttag_logic_5_1_b.md)
- [kAudioChannelLayoutTag_Logic_5_1_C](kaudiochannellayouttag_logic_5_1_c.md)
- [kAudioChannelLayoutTag_Logic_5_1_D](kaudiochannellayouttag_logic_5_1_d.md)
- [kAudioChannelLayoutTag_Logic_6_0_A](kaudiochannellayouttag_logic_6_0_a.md)
- [kAudioChannelLayoutTag_Logic_6_0_B](kaudiochannellayouttag_logic_6_0_b.md)
- [kAudioChannelLayoutTag_Logic_6_0_C](kaudiochannellayouttag_logic_6_0_c.md)
- [kAudioChannelLayoutTag_Logic_6_1_A](kaudiochannellayouttag_logic_6_1_a.md)
- [kAudioChannelLayoutTag_Logic_6_1_B](kaudiochannellayouttag_logic_6_1_b.md)
- [kAudioChannelLayoutTag_Logic_6_1_C](kaudiochannellayouttag_logic_6_1_c.md)
- [kAudioChannelLayoutTag_Logic_6_1_D](kaudiochannellayouttag_logic_6_1_d.md)
- [kAudioChannelLayoutTag_Logic_7_1_A](kaudiochannellayouttag_logic_7_1_a.md)
- [kAudioChannelLayoutTag_Logic_7_1_B](kaudiochannellayouttag_logic_7_1_b.md)
- [kAudioChannelLayoutTag_Logic_7_1_C](kaudiochannellayouttag_logic_7_1_c.md)
- [kAudioChannelLayoutTag_Logic_7_1_SDDS_A](kaudiochannellayouttag_logic_7_1_sdds_a.md)
- [kAudioChannelLayoutTag_Logic_7_1_SDDS_B](kaudiochannellayouttag_logic_7_1_sdds_b.md)
- [kAudioChannelLayoutTag_Logic_7_1_SDDS_C](kaudiochannellayouttag_logic_7_1_sdds_c.md)
- [kAudioChannelLayoutTag_Logic_Atmos_5_1_2](kaudiochannellayouttag_logic_atmos_5_1_2.md)
- [kAudioChannelLayoutTag_Logic_Atmos_5_1_4](kaudiochannellayouttag_logic_atmos_5_1_4.md)
- [kAudioChannelLayoutTag_Logic_Atmos_7_1_2](kaudiochannellayouttag_logic_atmos_7_1_2.md)
- [kAudioChannelLayoutTag_Logic_Atmos_7_1_4_A](kaudiochannellayouttag_logic_atmos_7_1_4_a.md)
- [kAudioChannelLayoutTag_Logic_Atmos_7_1_4_B](kaudiochannellayouttag_logic_atmos_7_1_4_b.md)
- [kAudioChannelLayoutTag_Logic_Atmos_7_1_6](kaudiochannellayouttag_logic_atmos_7_1_6.md)
- [kAudioChannelLayoutTag_Logic_Mono](kaudiochannellayouttag_logic_mono.md)
- [kAudioChannelLayoutTag_Logic_Quadraphonic](kaudiochannellayouttag_logic_quadraphonic.md)
- [kAudioChannelLayoutTag_Logic_Stereo](kaudiochannellayouttag_logic_stereo.md)

## See Also

### Accessing the Data

- [mChannelBitmap](audiochannellayout/mchannelbitmap.md): If `mChannelLayoutTag` is set to `kAudioChannelLayoutTag_UseChannelBitmap`, this field is the channel-use bitmap.
- [AudioChannelBitmap](audiochannelbitmap.md): The supported channel bitmaps to use when defining channel layouts.
- [mChannelDescriptions](audiochannellayout/mchanneldescriptions.md): A variable length array of `mNumberChannelDescription` elements that describes a layout. If the `mChannelLayoutTag` field is set to `kAudioChannelLayoutTag_UseChannelDescriptions`, use this field to describe the layout.
- [mChannelLayoutTag](audiochannellayout/mchannellayouttag.md): The `AudioChannelLayoutTag` value that indicates the layout. See [Audio Channel Layout Tags](audio-channel-layout-tags.md) for possible values.
- [AudioChannelLayoutTag](audiochannellayouttag.md): Identifies a previously-defined channel layout.
- [mNumberChannelDescriptions](audiochannellayout/mnumberchanneldescriptions.md): The number of items in the `mChannelDescriptions` array.
- [AudioChannelLayoutTag_GetNumberOfChannels(\_:)](audiochannellayouttag_getnumberofchannels%28__%29.md): Retrieves the number of channels from an audio channel layout tag.

# Audio Channel Layout Tags (Objective-C)

**Framework:** Core Audio Types  
**Kind:** API Collection

The identifiers that represent audio channel layouts.

<a id="overview"></a>

## Overview

Use these values to set the [mChannelLayoutTag](audiochannellayout/mchannellayouttag.md) field of an [AudioChannelLayout](audiochannellayout.md) structure.

## Topics

### General Layouts

- [kAudioChannelLayoutTag_UseChannelDescriptions](kaudiochannellayouttag_usechanneldescriptions.md): An array of audio channel description structures that defines the layout mapping.
- [kAudioChannelLayoutTag_UseChannelBitmap](kaudiochannellayouttag_usechannelbitmap.md): A bitmap that defines the layout mapping.
- [kAudioChannelLayoutTag_Mono](kaudiochannellayouttag_mono.md): A standard monophonic stream.
- [kAudioChannelLayoutTag_Stereo](kaudiochannellayouttag_stereo.md): A standard stereophonic stream.
- [kAudioChannelLayoutTag_StereoHeadphones](kaudiochannellayouttag_stereoheadphones.md): A standard stereo stream; headphone playback implied.
- [kAudioChannelLayoutTag_MatrixStereo](kaudiochannellayouttag_matrixstereo.md): A matrix-encoded stereo stream.
- [kAudioChannelLayoutTag_MidSide](kaudiochannellayouttag_midside.md): A middle and side channel audio layout.
- [kAudioChannelLayoutTag_XY](kaudiochannellayouttag_xy.md): A coincident, angled microphone pair.
- [kAudioChannelLayoutTag_Binaural](kaudiochannellayouttag_binaural.md): A binaural stereo audio layout.
- [kAudioChannelLayoutTag_Ambisonic_B_Format](kaudiochannellayouttag_ambisonic_b_format.md): An ambisonic B-format audio layout.
- [kAudioChannelLayoutTag_Quadraphonic](kaudiochannellayouttag_quadraphonic.md): A quadraphonic audio layout.
- [kAudioChannelLayoutTag_Pentagonal](kaudiochannellayouttag_pentagonal.md): A pentalgonal audio layout.
- [kAudioChannelLayoutTag_Hexagonal](kaudiochannellayouttag_hexagonal.md): A hexagonal audio layout.
- [kAudioChannelLayoutTag_Octagonal](kaudiochannellayouttag_octagonal.md): An octagonal audio layout.
- [kAudioChannelLayoutTag_Cube](kaudiochannellayouttag_cube.md): A cubic audio layout.

### Atmos Layouts

- [kAudioChannelLayoutTag_Atmos_5_1_2](kaudiochannellayouttag_atmos_5_1_2.md)
- [kAudioChannelLayoutTag_Atmos_5_1_4](kaudiochannellayouttag_atmos_5_1_4.md)
- [kAudioChannelLayoutTag_Atmos_7_1_2](kaudiochannellayouttag_atmos_7_1_2.md)
- [kAudioChannelLayoutTag_Atmos_7_1_4](kaudiochannellayouttag_atmos_7_1_4.md)
- [kAudioChannelLayoutTag_Atmos_9_1_6](kaudiochannellayouttag_atmos_9_1_6.md)

### MPEG Defined Layouts

- [kAudioChannelLayoutTag_MPEG_1_0](kaudiochannellayouttag_mpeg_1_0.md): An MPEG 1-channel audio layout.
- [kAudioChannelLayoutTag_MPEG_2_0](kaudiochannellayouttag_mpeg_2_0.md): An MPEG 2-channel audio layout.
- [kAudioChannelLayoutTag_MPEG_3_0_A](kaudiochannellayouttag_mpeg_3_0_a.md): An MPEG 3-channel, configuration A, audio layout.
- [kAudioChannelLayoutTag_MPEG_3_0_B](kaudiochannellayouttag_mpeg_3_0_b.md): An MPEG 3-channel, configuration B, audio layout.
- [kAudioChannelLayoutTag_MPEG_4_0_A](kaudiochannellayouttag_mpeg_4_0_a.md): An MPEG 4-channel, configuration A, audio layout.
- [kAudioChannelLayoutTag_MPEG_4_0_B](kaudiochannellayouttag_mpeg_4_0_b.md): An MPEG 4-channel, configuration B, audio layout
- [kAudioChannelLayoutTag_MPEG_5_0_A](kaudiochannellayouttag_mpeg_5_0_a.md): An MPEG 5-channel, configuration A, audio layout.
- [kAudioChannelLayoutTag_MPEG_5_0_B](kaudiochannellayouttag_mpeg_5_0_b.md): An MPEG 5-channel, configuration B, audio layout.
- [kAudioChannelLayoutTag_MPEG_5_0_C](kaudiochannellayouttag_mpeg_5_0_c.md): An MPEG 5-channel, configuration C, audio layout.
- [kAudioChannelLayoutTag_MPEG_5_0_D](kaudiochannellayouttag_mpeg_5_0_d.md): An MPEG 5-channel, configuration D, audio layout.
- [kAudioChannelLayoutTag_MPEG_5_0_E](kaudiochannellayouttag_mpeg_5_0_e.md): 5 channels, L R Rls Rrs C
- [kAudioChannelLayoutTag_MPEG_5_1_A](kaudiochannellayouttag_mpeg_5_1_a.md): An MPEG 5.1-channel, configuration A, audio layout.
- [kAudioChannelLayoutTag_MPEG_5_1_B](kaudiochannellayouttag_mpeg_5_1_b.md): An MPEG 5.1-channel, configuration B, audio layout.
- [kAudioChannelLayoutTag_MPEG_5_1_C](kaudiochannellayouttag_mpeg_5_1_c.md): An MPEG 5.1-channel, configuration C, audio layout.
- [kAudioChannelLayoutTag_MPEG_5_1_D](kaudiochannellayouttag_mpeg_5_1_d.md): An MPEG 5.1-channel, configuration D, audio layout.
- [kAudioChannelLayoutTag_MPEG_5_1_E](kaudiochannellayouttag_mpeg_5_1_e.md): 6 channels, L R Rls Rrs C LFE
- [kAudioChannelLayoutTag_MPEG_6_1_A](kaudiochannellayouttag_mpeg_6_1_a.md): An MPEG 6.1-channel, configuration A, audio layout.
- [kAudioChannelLayoutTag_MPEG_6_1_B](kaudiochannellayouttag_mpeg_6_1_b.md): 7 channels, L R Ls Rs C Cs LFE
- [kAudioChannelLayoutTag_MPEG_7_1_A](kaudiochannellayouttag_mpeg_7_1_a.md): An MPEG 7.1-channel, configuration A, audio layout.
- [kAudioChannelLayoutTag_MPEG_7_1_B](kaudiochannellayouttag_mpeg_7_1_b.md): An MPEG 7.1-channel, configuration B, audio layout.
- [kAudioChannelLayoutTag_MPEG_7_1_C](kaudiochannellayouttag_mpeg_7_1_c.md): An MPEG 7.1-channel, configuration C, audio layout.
- [kAudioChannelLayoutTag_MPEG_7_1_D](kaudiochannellayouttag_mpeg_7_1_d.md): 8 channels, L R Rls Rrs Ls Rs C LFE
- [kAudioChannelLayoutTag_Emagic_Default_7_1](kaudiochannellayouttag_emagic_default_7_1.md): An Emagic 7.1-channel default audio layout.
- [kAudioChannelLayoutTag_SMPTE_DTV](kaudiochannellayouttag_smpte_dtv.md): An SMPTE DTV audio layout.

### CICP

- [kAudioChannelLayoutTag_CICP_1](kaudiochannellayouttag_cicp_1.md)
- [kAudioChannelLayoutTag_CICP_2](kaudiochannellayouttag_cicp_2.md)
- [kAudioChannelLayoutTag_CICP_3](kaudiochannellayouttag_cicp_3.md)
- [kAudioChannelLayoutTag_CICP_4](kaudiochannellayouttag_cicp_4.md)
- [kAudioChannelLayoutTag_CICP_5](kaudiochannellayouttag_cicp_5.md)
- [kAudioChannelLayoutTag_CICP_6](kaudiochannellayouttag_cicp_6.md)
- [kAudioChannelLayoutTag_CICP_7](kaudiochannellayouttag_cicp_7.md)
- [kAudioChannelLayoutTag_CICP_9](kaudiochannellayouttag_cicp_9.md)
- [kAudioChannelLayoutTag_CICP_10](kaudiochannellayouttag_cicp_10.md)
- [kAudioChannelLayoutTag_CICP_11](kaudiochannellayouttag_cicp_11.md)
- [kAudioChannelLayoutTag_CICP_12](kaudiochannellayouttag_cicp_12.md)
- [kAudioChannelLayoutTag_CICP_13](kaudiochannellayouttag_cicp_13.md)
- [kAudioChannelLayoutTag_CICP_14](kaudiochannellayouttag_cicp_14.md)
- [kAudioChannelLayoutTag_CICP_15](kaudiochannellayouttag_cicp_15.md)
- [kAudioChannelLayoutTag_CICP_16](kaudiochannellayouttag_cicp_16.md)
- [kAudioChannelLayoutTag_CICP_17](kaudiochannellayouttag_cicp_17.md)
- [kAudioChannelLayoutTag_CICP_18](kaudiochannellayouttag_cicp_18.md)
- [kAudioChannelLayoutTag_CICP_19](kaudiochannellayouttag_cicp_19.md)
- [kAudioChannelLayoutTag_CICP_20](kaudiochannellayouttag_cicp_20.md)

### ITU Defined Layouts

- [kAudioChannelLayoutTag_ITU_1_0](kaudiochannellayouttag_itu_1_0.md): An ITU 1-channel audio layout.
- [kAudioChannelLayoutTag_ITU_2_0](kaudiochannellayouttag_itu_2_0.md): An ITU 2-channel audio layout.
- [kAudioChannelLayoutTag_ITU_2_1](kaudiochannellayouttag_itu_2_1.md): An ITU 2.1-channel audio layout.
- [kAudioChannelLayoutTag_ITU_2_2](kaudiochannellayouttag_itu_2_2.md): An ITU 2.2-channel audio layout.
- [kAudioChannelLayoutTag_ITU_3_0](kaudiochannellayouttag_itu_3_0.md): An ITU 3-channel audio layout.
- [kAudioChannelLayoutTag_ITU_3_1](kaudiochannellayouttag_itu_3_1.md): An ITU 3.1-channel audio layout.
- [kAudioChannelLayoutTag_ITU_3_2](kaudiochannellayouttag_itu_3_2.md): An ITU 3.2-channel audio layout.
- [kAudioChannelLayoutTag_ITU_3_2_1](kaudiochannellayouttag_itu_3_2_1.md): An ITU 3.2.1-channel audio layout.
- [kAudioChannelLayoutTag_ITU_3_4_1](kaudiochannellayouttag_itu_3_4_1.md): An ITU 3.4.1-channel audio layout.

### DVD Defined Layouts

- [kAudioChannelLayoutTag_DVD_0](kaudiochannellayouttag_dvd_0.md): A DVD monaural audio layout.
- [kAudioChannelLayoutTag_DVD_1](kaudiochannellayouttag_dvd_1.md): A DVD stereo audio layout.
- [kAudioChannelLayoutTag_DVD_2](kaudiochannellayouttag_dvd_2.md): A DVD 3-channel audio layout.
- [kAudioChannelLayoutTag_DVD_3](kaudiochannellayouttag_dvd_3.md): A DVD 4-channel audio layout.
- [kAudioChannelLayoutTag_DVD_4](kaudiochannellayouttag_dvd_4.md): A DVD 2.1-channel audio layout.
- [kAudioChannelLayoutTag_DVD_5](kaudiochannellayouttag_dvd_5.md): A DVD 3.1-channel audio layout.
- [kAudioChannelLayoutTag_DVD_6](kaudiochannellayouttag_dvd_6.md): A DVD 4.1-channel audio layout.
- [kAudioChannelLayoutTag_DVD_7](kaudiochannellayouttag_dvd_7.md): A DVD 3-channel audio layout.
- [kAudioChannelLayoutTag_DVD_8](kaudiochannellayouttag_dvd_8.md): A DVD 4-channel audio layout.
- [kAudioChannelLayoutTag_DVD_9](kaudiochannellayouttag_dvd_9.md): A DVD 5-channel audio layout.
- [kAudioChannelLayoutTag_DVD_10](kaudiochannellayouttag_dvd_10.md): A DVD 3.1-channel audio layout.
- [kAudioChannelLayoutTag_DVD_11](kaudiochannellayouttag_dvd_11.md): A DVD 4.1-channel audio layout.
- [kAudioChannelLayoutTag_DVD_12](kaudiochannellayouttag_dvd_12.md): A DVD 5.1-channel audio layout.
- [kAudioChannelLayoutTag_DVD_13](kaudiochannellayouttag_dvd_13.md): A DVD 4-channel audio layout.
- [kAudioChannelLayoutTag_DVD_14](kaudiochannellayouttag_dvd_14.md): A DVD 5-channel audio layout.
- [kAudioChannelLayoutTag_DVD_15](kaudiochannellayouttag_dvd_15.md): A DVD 3.1-channel audio layout.
- [kAudioChannelLayoutTag_DVD_16](kaudiochannellayouttag_dvd_16.md): A DVD 4.1-channel audio layout.
- [kAudioChannelLayoutTag_DVD_17](kaudiochannellayouttag_dvd_17.md): A DVD 5.1-channel audio layout.
- [kAudioChannelLayoutTag_DVD_18](kaudiochannellayouttag_dvd_18.md): A DVD 4.1-channel audio layout.
- [kAudioChannelLayoutTag_DVD_19](kaudiochannellayouttag_dvd_19.md): A DVD 5-channel audio layout.
- [kAudioChannelLayoutTag_DVD_20](kaudiochannellayouttag_dvd_20.md): A DVD 5.1-channel audio layout.

### Symmetrical Layouts

- [kAudioChannelLayoutTag_AudioUnit_4](kaudiochannellayouttag_audiounit_4.md): A quadraphonic symmetrical layout, recommended for use by audio units.
- [kAudioChannelLayoutTag_AudioUnit_5](kaudiochannellayouttag_audiounit_5.md): A pentagonal symmetrical layout, recommended for use by audio units.
- [kAudioChannelLayoutTag_AudioUnit_6](kaudiochannellayouttag_audiounit_6.md): A hexagonal symmetrical layout, recommended for use by audio units.
- [kAudioChannelLayoutTag_AudioUnit_8](kaudiochannellayouttag_audiounit_8.md): An octagonal symmetrical layout, recommended for use by audio units.

### Surround Based Layouts

- [kAudioChannelLayoutTag_AudioUnit_5_0](kaudiochannellayouttag_audiounit_5_0.md): A 5-channel surround-based layout, recommended for use by audio units.
- [kAudioChannelLayoutTag_AudioUnit_6_0](kaudiochannellayouttag_audiounit_6_0.md): A 6-channel surround-based layout, recommended for use by audio units.
- [kAudioChannelLayoutTag_AudioUnit_7_0](kaudiochannellayouttag_audiounit_7_0.md): A 7-channel surround-based layout, recommended for use by audio units.
- [kAudioChannelLayoutTag_AudioUnit_7_0_Front](kaudiochannellayouttag_audiounit_7_0_front.md): An alternate 7-channel surround-based layout, for use by audio units.
- [kAudioChannelLayoutTag_AudioUnit_5_1](kaudiochannellayouttag_audiounit_5_1.md): A 5.1-channel surround-based layout, recommended for use by audio units.
- [kAudioChannelLayoutTag_AudioUnit_6_1](kaudiochannellayouttag_audiounit_6_1.md): A 6.1-channel surround-based layout, recommended for use by audio units.
- [kAudioChannelLayoutTag_AudioUnit_7_1](kaudiochannellayouttag_audiounit_7_1.md): A 7.1-channel surround-based layout, recommended for use by audio units.
- [kAudioChannelLayoutTag_AudioUnit_7_1_Front](kaudiochannellayouttag_audiounit_7_1_front.md): A 7.1-channel surround-based layout, recommended for use by audio units.
- [kAudioChannelLayoutTag_TMH_10_2_std](kaudiochannellayouttag_tmh_10_2_std.md): A TMH 10.2 multiple-channel surround-based layout .
- [kAudioChannelLayoutTag_TMH_10_2_full](kaudiochannellayouttag_tmh_10_2_full.md): An extended TMH 10.2 multiple-channel surround-based layout, recommended for use by audio units.

### AAC Defined Layouts

- [kAudioChannelLayoutTag_AAC_3_0](kaudiochannellayouttag_aac_3_0.md): An AAC 3-channel audio layout.
- [kAudioChannelLayoutTag_AAC_Quadraphonic](kaudiochannellayouttag_aac_quadraphonic.md): An AAC quadraphonic surround-based layout.
- [kAudioChannelLayoutTag_AAC_4_0](kaudiochannellayouttag_aac_4_0.md): An AAC 4-channel surround-based layout.
- [kAudioChannelLayoutTag_AAC_5_0](kaudiochannellayouttag_aac_5_0.md): An AAC 5-channel surround-based layout.
- [kAudioChannelLayoutTag_AAC_5_1](kaudiochannellayouttag_aac_5_1.md): An AAC 5.1-channel surround-based layout.
- [kAudioChannelLayoutTag_AAC_6_0](kaudiochannellayouttag_aac_6_0.md): An AAC 6-channel surround-based layout.
- [kAudioChannelLayoutTag_AAC_6_1](kaudiochannellayouttag_aac_6_1.md): An AAC 6.1-channel surround-based layout.
- [kAudioChannelLayoutTag_AAC_7_0](kaudiochannellayouttag_aac_7_0.md): An AAC 7-channel surround-based layout.
- [kAudioChannelLayoutTag_AAC_7_1](kaudiochannellayouttag_aac_7_1.md): An AAC 7.1-channel surround-based layout.
- [kAudioChannelLayoutTag_AAC_7_1_B](kaudiochannellayouttag_aac_7_1_b.md): An AAC 7.1-channel, configuration B, surround-based layout.
- [kAudioChannelLayoutTag_AAC_7_1_C](kaudiochannellayouttag_aac_7_1_c.md): An AAC 7.1-channel, configuration C, surround-based layout.
- [kAudioChannelLayoutTag_AAC_Octagonal](kaudiochannellayouttag_aac_octagonal.md): An AAC 8-channel surround-based layout.

### AC3 Defined Layouts

- [kAudioChannelLayoutTag_AC3_1_0_1](kaudiochannellayouttag_ac3_1_0_1.md): An AC-3 layout.
- [kAudioChannelLayoutTag_AC3_3_0](kaudiochannellayouttag_ac3_3_0.md): An AC-3 layout.
- [kAudioChannelLayoutTag_AC3_3_1](kaudiochannellayouttag_ac3_3_1.md): An AC-3 layout.
- [kAudioChannelLayoutTag_AC3_3_0_1](kaudiochannellayouttag_ac3_3_0_1.md): An AC-3 layout.
- [kAudioChannelLayoutTag_AC3_2_1_1](kaudiochannellayouttag_ac3_2_1_1.md): An AC-3 layout.
- [kAudioChannelLayoutTag_AC3_3_1_1](kaudiochannellayouttag_ac3_3_1_1.md): An AC-3 layout.

### EAC3 Defined Layouts

- [kAudioChannelLayoutTag_EAC_6_0_A](kaudiochannellayouttag_eac_6_0_a.md): A Blu-ray Disc audio layout for Enhanced AC-3, also known as Dolby Digital Plus.
- [kAudioChannelLayoutTag_EAC_7_0_A](kaudiochannellayouttag_eac_7_0_a.md): A Blu-ray Disc audio layout for Enhanced AC-3, also known as Dolby Digital Plus.
- [kAudioChannelLayoutTag_EAC3_6_1_A](kaudiochannellayouttag_eac3_6_1_a.md): A Blu-ray Disc audio layout for Enhanced AC-3, also known as Dolby Digital Plus.
- [kAudioChannelLayoutTag_EAC3_6_1_B](kaudiochannellayouttag_eac3_6_1_b.md): A Blu-ray Disc audio layout for Enhanced AC-3, also known as Dolby Digital Plus.
- [kAudioChannelLayoutTag_EAC3_6_1_C](kaudiochannellayouttag_eac3_6_1_c.md): A Blu-ray Disc audio layout for Enhanced AC-3, also known as Dolby Digital Plus.
- [kAudioChannelLayoutTag_EAC3_7_1_A](kaudiochannellayouttag_eac3_7_1_a.md): A Blu-ray Disc audio layout for Enhanced AC-3, also known as Dolby Digital Plus.
- [kAudioChannelLayoutTag_EAC3_7_1_B](kaudiochannellayouttag_eac3_7_1_b.md): A Blu-ray Disc audio layout for Enhanced AC-3, also known as Dolby Digital Plus.
- [kAudioChannelLayoutTag_EAC3_7_1_C](kaudiochannellayouttag_eac3_7_1_c.md): A Blu-ray Disc audio layout for Enhanced AC-3, also known as Dolby Digital Plus.
- [kAudioChannelLayoutTag_EAC3_7_1_D](kaudiochannellayouttag_eac3_7_1_d.md): A Blu-ray Disc audio layout for Enhanced AC-3, also known as Dolby Digital Plus.
- [kAudioChannelLayoutTag_EAC3_7_1_E](kaudiochannellayouttag_eac3_7_1_e.md): A Blu-ray Disc audio layout for Enhanced AC-3, also known as Dolby Digital Plus.
- [kAudioChannelLayoutTag_EAC3_7_1_F](kaudiochannellayouttag_eac3_7_1_f.md): A Blu-ray Disc audio layout for Enhanced AC-3, also known as Dolby Digital Plus.
- [kAudioChannelLayoutTag_EAC3_7_1_G](kaudiochannellayouttag_eac3_7_1_g.md): A Blu-ray Disc audio layout for Enhanced AC-3, also known as Dolby Digital Plus.
- [kAudioChannelLayoutTag_EAC3_7_1_H](kaudiochannellayouttag_eac3_7_1_h.md): A Blu-ray Disc audio layout for Enhanced AC-3, also known as Dolby Digital Plus.

### DTS Defined Layouts

- [kAudioChannelLayoutTag_DTS_3_1](kaudiochannellayouttag_dts_3_1.md): A Blu-ray Disc audio layout, defined by DTS (Digital Theater Systems Ltd.).
- [kAudioChannelLayoutTag_DTS_4_1](kaudiochannellayouttag_dts_4_1.md): A Blu-ray Disc audio layout, defined by DTS (Digital Theater Systems Ltd.).
- [kAudioChannelLayoutTag_DTS_6_0_A](kaudiochannellayouttag_dts_6_0_a.md): A Blu-ray Disc audio layout, defined by DTS (Digital Theater Systems Ltd.).
- [kAudioChannelLayoutTag_DTS_6_0_B](kaudiochannellayouttag_dts_6_0_b.md): A Blu-ray Disc audio layout, defined by DTS (Digital Theater Systems Ltd.).
- [kAudioChannelLayoutTag_DTS_6_0_C](kaudiochannellayouttag_dts_6_0_c.md): A Blu-ray Disc audio layout, defined by DTS (Digital Theater Systems Ltd.).
- [kAudioChannelLayoutTag_DTS_6_1_A](kaudiochannellayouttag_dts_6_1_a.md): A Blu-ray Disc audio layout, defined by DTS (Digital Theater Systems Ltd.).
- [kAudioChannelLayoutTag_DTS_6_1_B](kaudiochannellayouttag_dts_6_1_b.md): A Blu-ray Disc audio layout, defined by DTS (Digital Theater Systems Ltd.).
- [kAudioChannelLayoutTag_DTS_6_1_C](kaudiochannellayouttag_dts_6_1_c.md): A Blu-ray Disc audio layout, defined by DTS (Digital Theater Systems Ltd.).
- [kAudioChannelLayoutTag_DTS_6_1_D](kaudiochannellayouttag_dts_6_1_d.md): A Blu-ray Disc audio layout, defined by DTS (Digital Theater Systems Ltd.).
- [kAudioChannelLayoutTag_DTS_7_0](kaudiochannellayouttag_dts_7_0.md): A Blu-ray Disc audio layout, defined by DTS (Digital Theater Systems Ltd.).
- [kAudioChannelLayoutTag_DTS_7_1](kaudiochannellayouttag_dts_7_1.md): A Blu-ray Disc audio layout, defined by DTS (Digital Theater Systems Ltd.).
- [kAudioChannelLayoutTag_DTS_8_0_A](kaudiochannellayouttag_dts_8_0_a.md): A Blu-ray Disc audio layout, defined by DTS (Digital Theater Systems Ltd.).
- [kAudioChannelLayoutTag_DTS_8_0_B](kaudiochannellayouttag_dts_8_0_b.md): A Blu-ray Disc audio layout, defined by DTS (Digital Theater Systems Ltd.).
- [kAudioChannelLayoutTag_DTS_8_1_A](kaudiochannellayouttag_dts_8_1_a.md): A Blu-ray Disc audio layout, defined by DTS (Digital Theater Systems Ltd.).
- [kAudioChannelLayoutTag_DTS_8_1_B](kaudiochannellayouttag_dts_8_1_b.md): A Blu-ray Disc audio layout, defined by DTS (Digital Theater Systems Ltd.).

### HOA Defined Layouts

- [kAudioChannelLayoutTag_HOA_ACN_N3D](kaudiochannellayouttag_hoa_acn_n3d.md): A Higher-order Ambisonics, full 3D normalization audio layout.
- [kAudioChannelLayoutTag_HOA_ACN_SN3D](kaudiochannellayouttag_hoa_acn_sn3d.md): A Higher-order Ambisonics, Schmidt semi-normalization audio layout.

### General Information Tags

- [kAudioChannelLayoutTag_DiscreteInOrder](kaudiochannellayouttag_discreteinorder.md): A tag used to map input channels to output channels without changing the channel order.
- [kAudioChannelLayoutTag_Unknown](kaudiochannellayouttag_unknown.md): The channel layout is unknown.

### Reserved Tag Range

The tags in this section define a range of values reserved for future Apple use. Do not create tags in this range.

- [kAudioChannelLayoutTag_BeginReserved](kaudiochannellayouttag_beginreserved.md): The beginning value for a reserved range of layout tags.
- [kAudioChannelLayoutTag_EndReserved](kaudiochannellayouttag_endreserved.md): The ending value for a reserved range of layout tags.

### Wave Layouts

- [kAudioChannelLayoutTag_WAVE_2_1](kaudiochannellayouttag_wave_2_1.md)
- [kAudioChannelLayoutTag_WAVE_3_0](kaudiochannellayouttag_wave_3_0.md)
- [kAudioChannelLayoutTag_WAVE_4_0_A](kaudiochannellayouttag_wave_4_0_a.md)
- [kAudioChannelLayoutTag_WAVE_4_0_B](kaudiochannellayouttag_wave_4_0_b.md)
- [kAudioChannelLayoutTag_WAVE_5_0_A](kaudiochannellayouttag_wave_5_0_a.md)
- [kAudioChannelLayoutTag_WAVE_5_0_B](kaudiochannellayouttag_wave_5_0_b.md)
- [kAudioChannelLayoutTag_WAVE_5_1_A](kaudiochannellayouttag_wave_5_1_a.md)
- [kAudioChannelLayoutTag_WAVE_5_1_B](kaudiochannellayouttag_wave_5_1_b.md)
- [kAudioChannelLayoutTag_WAVE_6_1](kaudiochannellayouttag_wave_6_1.md)
- [kAudioChannelLayoutTag_WAVE_7_1](kaudiochannellayouttag_wave_7_1.md)

### Logic Pro Layouts

- [kAudioChannelLayoutTag_Logic_4_0_A](kaudiochannellayouttag_logic_4_0_a.md)
- [kAudioChannelLayoutTag_Logic_4_0_B](kaudiochannellayouttag_logic_4_0_b.md)
- [kAudioChannelLayoutTag_Logic_4_0_C](kaudiochannellayouttag_logic_4_0_c.md)
- [kAudioChannelLayoutTag_Logic_5_0_A](kaudiochannellayouttag_logic_5_0_a.md)
- [kAudioChannelLayoutTag_Logic_5_0_B](kaudiochannellayouttag_logic_5_0_b.md)
- [kAudioChannelLayoutTag_Logic_5_0_C](kaudiochannellayouttag_logic_5_0_c.md)
- [kAudioChannelLayoutTag_Logic_5_0_D](kaudiochannellayouttag_logic_5_0_d.md)
- [kAudioChannelLayoutTag_Logic_5_1_A](kaudiochannellayouttag_logic_5_1_a.md)
- [kAudioChannelLayoutTag_Logic_5_1_B](kaudiochannellayouttag_logic_5_1_b.md)
- [kAudioChannelLayoutTag_Logic_5_1_C](kaudiochannellayouttag_logic_5_1_c.md)
- [kAudioChannelLayoutTag_Logic_5_1_D](kaudiochannellayouttag_logic_5_1_d.md)
- [kAudioChannelLayoutTag_Logic_6_0_A](kaudiochannellayouttag_logic_6_0_a.md)
- [kAudioChannelLayoutTag_Logic_6_0_B](kaudiochannellayouttag_logic_6_0_b.md)
- [kAudioChannelLayoutTag_Logic_6_0_C](kaudiochannellayouttag_logic_6_0_c.md)
- [kAudioChannelLayoutTag_Logic_6_1_A](kaudiochannellayouttag_logic_6_1_a.md)
- [kAudioChannelLayoutTag_Logic_6_1_B](kaudiochannellayouttag_logic_6_1_b.md)
- [kAudioChannelLayoutTag_Logic_6_1_C](kaudiochannellayouttag_logic_6_1_c.md)
- [kAudioChannelLayoutTag_Logic_6_1_D](kaudiochannellayouttag_logic_6_1_d.md)
- [kAudioChannelLayoutTag_Logic_7_1_A](kaudiochannellayouttag_logic_7_1_a.md)
- [kAudioChannelLayoutTag_Logic_7_1_B](kaudiochannellayouttag_logic_7_1_b.md)
- [kAudioChannelLayoutTag_Logic_7_1_C](kaudiochannellayouttag_logic_7_1_c.md)
- [kAudioChannelLayoutTag_Logic_7_1_SDDS_A](kaudiochannellayouttag_logic_7_1_sdds_a.md)
- [kAudioChannelLayoutTag_Logic_7_1_SDDS_B](kaudiochannellayouttag_logic_7_1_sdds_b.md)
- [kAudioChannelLayoutTag_Logic_7_1_SDDS_C](kaudiochannellayouttag_logic_7_1_sdds_c.md)
- [kAudioChannelLayoutTag_Logic_Atmos_5_1_2](kaudiochannellayouttag_logic_atmos_5_1_2.md)
- [kAudioChannelLayoutTag_Logic_Atmos_5_1_4](kaudiochannellayouttag_logic_atmos_5_1_4.md)
- [kAudioChannelLayoutTag_Logic_Atmos_7_1_2](kaudiochannellayouttag_logic_atmos_7_1_2.md)
- [kAudioChannelLayoutTag_Logic_Atmos_7_1_4_A](kaudiochannellayouttag_logic_atmos_7_1_4_a.md)
- [kAudioChannelLayoutTag_Logic_Atmos_7_1_4_B](kaudiochannellayouttag_logic_atmos_7_1_4_b.md)
- [kAudioChannelLayoutTag_Logic_Atmos_7_1_6](kaudiochannellayouttag_logic_atmos_7_1_6.md)
- [kAudioChannelLayoutTag_Logic_Mono](kaudiochannellayouttag_logic_mono.md)
- [kAudioChannelLayoutTag_Logic_Quadraphonic](kaudiochannellayouttag_logic_quadraphonic.md)
- [kAudioChannelLayoutTag_Logic_Stereo](kaudiochannellayouttag_logic_stereo.md)
