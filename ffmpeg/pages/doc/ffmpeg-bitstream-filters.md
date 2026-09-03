> Commit-pinned source for FFmpeg master: [doc/ffmpeg-bitstream-filters.texi](https://github.com/FFmpeg/FFmpeg/blob/0a59c39dad3da0e530836a7e7d1901134a0b592e/doc/ffmpeg-bitstream-filters.texi)

# Description

This document describes the bitstream filters provided by the
libavcodec library.

A bitstream filter operates on the encoded stream data, and performs
bitstream level modifications without performing decoding.

# Bitstream Filters

When you configure your FFmpeg build, all the supported bitstream
filters are enabled by default. You can list all available ones using
the configure option `--list-bsfs`.

You can disable all the bitstream filters using the configure option
`--disable-bsfs`, and selectively enable any bitstream filter using
the option `--enable-bsf=BSF`, or you can disable a particular
bitstream filter using the option `--disable-bsf=BSF`.

The option `-bsfs` of the ff\* tools will display the list of
all the supported bitstream filters included in your build.

The ff\* tools have a -bsf option applied per stream, taking a
comma-separated list of filters, whose parameters follow the filter
name after a '='.

```text
ffmpeg -i INPUT -c:v copy -bsf:v filter1[=opt1=str1:opt2=str2][,filter2] OUTPUT
```

Below is a description of the currently available bitstream filters,
with their parameters, if any.

## aac\_adtstoasc

Convert MPEG-2/4 AAC ADTS to an MPEG-4 Audio Specific Configuration
bitstream.

This filter creates an MPEG-4 AudioSpecificConfig from an MPEG-2/4
ADTS header and removes the ADTS header.

This filter is required for example when copying an AAC stream from a
raw ADTS AAC or an MPEG-TS container to MP4A-LATM, to an FLV file, or
to MOV/MP4 files and related formats such as 3GP or M4A. Please note
that it is auto-inserted for MP4A-LATM and MOV/MP4 and related formats.

## av1\_metadata

Modify metadata embedded in an AV1 stream.

- td
  Insert or remove temporal delimiter OBUs in all temporal units of the
  stream.

  - insert
    Insert a TD at the beginning of every TU which does not already have one.
  - remove
    Remove the TD from the beginning of every TU which has one.

- color\_primaries

- transfer\_characteristics

- matrix\_coefficients
  Set the color description fields in the stream (see AV1 section 6.4.2).

- color\_range
  Set the color range in the stream (see AV1 section 6.4.2; note that
  this cannot be set for streams using BT.709 primaries, sRGB transfer
  characteristic and identity (RGB) matrix coefficients).
  - tv
    Limited range.
  - pc
    Full range.

- chroma\_sample\_position
  Set the chroma sample location in the stream (see AV1 section 6.4.2).
  This can only be set for 4:2:0 streams.

  - vertical
    Left position (matching the default in MPEG-2 and H.264).
  - colocated
    Top-left position.

- tick\_rate
  Set the tick rate (*time\_scale / num\_units\_in\_display\_tick*) in
  the timing info in the sequence header.

- num\_ticks\_per\_picture
  Set the number of ticks in each picture, to indicate that the stream
  has a fixed framerate.  Ignored if `tick_rate` is not also set.

- delete\_padding
  Deletes Padding OBUs.

## chomp

Remove zero padding at the end of a packet.

## dca\_core

Extract the core from a DCA/DTS stream, dropping extensions such as
DTS-HD.

## dovi\_rpu

Manipulate Dolby Vision metadata in a HEVC/AV1 bitstream, optionally enabling
metadata compression.

- strip
  If enabled, strip all Dolby Vision metadata (configuration record + RPU data
  blocks) from the stream.
- compression
  Which compression level to enable.
  - none
    No metadata compression.
  - limited
    Limited metadata compression scheme. Should be compatible with most devices.
    This is the default.
  - extended
    Extended metadata compression. Devices are not required to support this. Note
    that this level currently behaves the same as `limited` in libavcodec.

## dovi\_split

Split a Dolby Vision Profile 7 multi-layer HEVC bitstream. Profile 7 carries the
enhancement-layer HEVC bitstream interleaved inside the base-layer access units,
wrapped in user-unspecified NAL units of type 63 (UNSPEC63), and the RPU metadata
as a sibling user-unspecified NAL of type 62 (UNSPEC62).

- mode
  Which Dolby Vision components to keep in the output bitstream.
  - bl
    Base layer only: drop every UNSPEC63 (EL) and every UNSPEC62 (RPU).
    The output is a plain HEVC stream with no Dolby Vision markers. This is the
    default.
  - bl\_rpu
    Base layer with the RPU NAL kept.
  - el
    Enhancement layer only: for every UNSPEC63 NAL, strip the two-byte outer NAL
    header and emit the inner payload. The result is a standalone HEVC bitstream.
    UNSPEC62 (RPU) is dropped.
  - el\_rpu
    Enhancement layer with the RPU NAL kept verbatim. Same as `el`, but the
    UNSPEC62 RPU NALs are also emitted alongside the unwrapped EL NALs.

## dump\_extra

Add extradata to the beginning of the filtered packets except when
said packets already exactly begin with the extradata that is intended
to be added.

- freq
  The additional argument specifies which packets should be filtered.
  It accepts the values:
  - k

  - keyframe
    add extradata to all key packets

  - e

  - all
    add extradata to all packets

If not specified it is assumed `k`.

For example the following `ffmpeg` command forces a global
header (thus disabling individual packet headers) in the H.264 packets
generated by the `libx264` encoder, but corrects them by adding
the header stored in extradata to the key packets:

```text
ffmpeg -i INPUT -map 0 -flags:v +global_header -c:v libx264 -bsf:v dump_extra out.ts
```

## dv\_error\_marker

Blocks in DV which are marked as damaged are replaced by blocks of the specified color.

- color
  The color to replace damaged blocks by
- sta
  A 16 bit mask which specifies which of the 16 possible error status values are
  to be replaced by colored blocks. 0xFFFE is the default which replaces all non 0
  error status values.
  - ok
    No error, no concealment
  - err
    Error, No concealment
  - res
    Reserved
  - notok
    Error or concealment
  - notres
    Not reserved
  - Aa, Ba, Ca, Ab, Bb, Cb, A, B, C, a, b, erri, erru
    The specific error status code
    see page 44-46 or section 5.5 of
    <http://web.archive.org/web/20060927044735/http://www.smpte.org/smpte_store/standards/pdf/s314m.pdf>

## eac3\_core

Extract the core from a E-AC-3 stream, dropping extra channels.

## eia608\_to\_smpte436m

Convert from a `EIA_608` stream to a `SMPTE_436M_ANC` data stream, wrapping the closed captions in CTA-708 CDP VANC packets.

- line\_number
  Choose which line number the generated VANC packets should go on. You generally want either line 9 (the default) or 11.
- wrapping\_type
  Choose the SMPTE 436M wrapping type, defaults to `vanc_frame`.
  It accepts the values:
  - vanc\_frame
    VANC frame (interlaced or segmented progressive frame)
  - vanc\_field\_1
  - vanc\_field\_2
  - vanc\_progressive\_frame
- sample\_coding
  Choose the SMPTE 436M sample coding, defaults to `8bit_luma`.
  It accepts the values:
  - 8bit\_luma
    8-bit component luma samples
  - 8bit\_color\_diff
    8-bit component color difference samples
  - 8bit\_luma\_and\_color\_diff
    8-bit component luma and color difference samples
  - 10bit\_luma
    10-bit component luma samples
  - 10bit\_color\_diff
    10-bit component color difference samples
  - 10bit\_luma\_and\_color\_diff
    10-bit component luma and color difference samples
  - 8bit\_luma\_parity\_error
    8-bit component luma samples with parity error
  - 8bit\_color\_diff\_parity\_error
    8-bit component color difference samples with parity error
  - 8bit\_luma\_and\_color\_diff\_parity\_error
    8-bit component luma and color difference samples with parity error
- initial\_cdp\_sequence\_cntr
  The initial value of the CDP's 16-bit unsigned integer `cdp_hdr_sequence_cntr` and `cdp_ftr_sequence_cntr` fields. Defaults to 0.
- cdp\_frame\_rate
  Set the CDP's `cdp_frame_rate` field. This doesn't actually change the timing of the data stream, it just changes the values inserted in that field in the generated CDP packets. Defaults to `30000/1001`.

## extract\_extradata

Extract the in-band extradata.

Certain codecs allow the long-term headers (e.g. MPEG-2 sequence headers,
or H.264/HEVC (VPS/)SPS/PPS) to be transmitted either "in-band" (i.e. as a part
of the bitstream containing the coded frames) or "out of band" (e.g. on the
container level). This latter form is called "extradata" in FFmpeg terminology.

This bitstream filter detects the in-band headers and makes them available as
extradata.

- remove
  When this option is enabled, the long-term headers are removed from the
  bitstream after extraction.

## filter\_units

Remove units with types in or not in a given set from the stream.

- pass\_types
  List of unit types or ranges of unit types to pass through while removing
  all others.  This is specified as a '|'-separated list of unit type values
  or ranges of values with '-'.

- remove\_types
  Identical to `pass_types`, except the units in the given set
  removed and all others passed through.

The types used by pass\_types and remove\_types correspond to NAL unit types
(nal\_unit\_type) in H.264, HEVC and H.266 (see Table 7-1 in the H.264
and HEVC specifications or Table 5 in the H.266 specification), to
marker values for JPEG (without 0xFF prefix) and to start codes without
start code prefix (i.e. the byte following the 0x000001) for MPEG-2.
For VP8 and VP9, every unit has type zero.

Extradata is unchanged by this transformation, but note that if the stream
contains inline parameter sets then the output may be unusable if they are
removed.

For example, to remove all non-VCL NAL units from an H.264 stream:

```text
ffmpeg -i INPUT -c:v copy -bsf:v 'filter_units=pass_types=1-5' OUTPUT
```

To remove all AUDs, SEI and filler from an H.265 stream:

```text
ffmpeg -i INPUT -c:v copy -bsf:v 'filter_units=remove_types=35|38-40' OUTPUT
```

To remove all user data from a MPEG-2 stream, including Closed Captions:

```text
ffmpeg -i INPUT -c:v copy -bsf:v 'filter_units=remove_types=178' OUTPUT
```

To remove all SEI from a H264 stream, including Closed Captions:

```text
ffmpeg -i INPUT -c:v copy -bsf:v 'filter_units=remove_types=6' OUTPUT
```

To remove all prefix and suffix SEI from a HEVC stream, including Closed Captions and dynamic HDR:

```text
ffmpeg -i INPUT -c:v copy -bsf:v 'filter_units=remove_types=39|40' OUTPUT
```

## hapqa\_extract

Extract Rgb or Alpha part of an HAPQA file, without recompression, in order to create an HAPQ or an HAPAlphaOnly file.

- texture
  Specifies the texture to keep.

  - color
  - alpha

Convert HAPQA to HAPQ

```text
ffmpeg -i hapqa_inputfile.mov -c copy -bsf:v hapqa_extract=texture=color -tag:v HapY -metadata:s:v:0 encoder="HAPQ" hapq_file.mov
```

Convert HAPQA to HAPAlphaOnly

```text
ffmpeg -i hapqa_inputfile.mov -c copy -bsf:v hapqa_extract=texture=alpha -tag:v HapA -metadata:s:v:0 encoder="HAPAlpha Only" hapalphaonly_file.mov
```

## h264\_metadata

Modify metadata embedded in an H.264 stream.

- aud
  Insert or remove AUD NAL units in all access units of the stream.

  - pass
  - insert
  - remove

Default is pass.

- sample\_aspect\_ratio
  Set the sample aspect ratio of the stream in the VUI parameters.
  See H.264 table E-1.

- overscan\_appropriate\_flag
  Set whether the stream is suitable for display using overscan
  or not (see H.264 section E.2.1).

- video\_format

- video\_full\_range\_flag
  Set the video format in the stream (see H.264 section E.2.1 and
  table E-2).

- colour\_primaries

- transfer\_characteristics

- matrix\_coefficients
  Set the colour description in the stream (see H.264 section E.2.1
  and tables E-3, E-4 and E-5).

- chroma\_sample\_loc\_type
  Set the chroma sample location in the stream (see H.264 section
  E.2.1 and figure E-1).

- tick\_rate
  Set the tick rate (time\_scale / num\_units\_in\_tick) in the VUI
  parameters.  This is the smallest time unit representable in the
  stream, and in many cases represents the field rate of the stream
  (double the frame rate).

- fixed\_frame\_rate\_flag
  Set whether the stream has fixed framerate - typically this indicates
  that the framerate is exactly half the tick rate, but the exact
  meaning is dependent on interlacing and the picture structure (see
  H.264 section E.2.1 and table E-6).

- zero\_new\_constraint\_set\_flags
  Zero constraint\_set4\_flag and constraint\_set5\_flag in the SPS. These
  bits were reserved in a previous version of the H.264 spec, and thus
  some hardware decoders require these to be zero. The result of zeroing
  this is still a valid bitstream.

- crop\_left

- crop\_right

- crop\_top

- crop\_bottom
  Set the frame cropping offsets in the SPS.  These values will replace
  the current ones if the stream is already cropped.

These fields are set in pixels.  Note that some sizes may not be
representable if the chroma is subsampled or the stream is interlaced
(see H.264 section 7.4.2.1.1).

- sei\_user\_data
  Insert a string as SEI unregistered user data.  The argument must
  be of the form *UUID+string*, where the UUID is as hex digits
  possibly separated by hyphens, and the string can be anything.

For example, `086f3693-b7b3-4f2c-9653-21492feee5b8+hello` will
insert the string \`\`hello'' associated with the given UUID.

- delete\_filler
  Deletes both filler NAL units and filler SEI messages.

- display\_orientation
  Insert, extract or remove Display orientation SEI messages.
  See H.264 section D.1.27 and D.2.27 for syntax and semantics.

  - pass
  - insert
  - remove
  - extract

Default is pass.

Insert mode works in conjunction with `rotate` and `flip` options.
Any pre-existing Display orientation messages will be removed in insert or remove mode.
Extract mode attaches the display matrix to the packet as side data.

- rotate
  Set rotation in display orientation SEI (anticlockwise angle in degrees).
  Range is -360 to +360. Default is NaN.

- flip
  Set flip in display orientation SEI.

  - horizontal
  - vertical

Default is unset.

- level
  Set the level in the SPS.  Refer to H.264 section A.3 and tables A-1
  to A-5.

The argument must be the name of a level (for example, `4.2`), a
level\_idc value (for example, `42`), or the special name `auto`
indicating that the filter should attempt to guess the level from the
input stream properties.

## h264\_mp4toannexb

Convert an H.264 bitstream from length prefixed mode to start code
prefixed mode (as defined in the Annex B of the ITU-T H.264
specification).

This is required by some streaming formats, typically the MPEG-2
transport stream format (muxer `mpegts`).

For example to remux an MP4 file containing an H.264 stream to mpegts
format with `ffmpeg`, you can use the command:

```text
ffmpeg -i INPUT.mp4 -codec copy -bsf:v h264_mp4toannexb OUTPUT.ts
```

Please note that this filter is auto-inserted for MPEG-TS (muxer
`mpegts`) and raw H.264 (muxer `h264`) output formats.

## h264\_redundant\_pps

This applies a specific fixup to some Blu-ray BDMV H264 streams
which contain redundant PPSs. The PPSs modify irrelevant parameters
of the stream, confusing other transformations which require
the correct extradata.

The encoder used on these impacted streams adds extra PPSs throughout
the stream, varying the initial QP and whether weighted prediction
was enabled. This causes issues after copying the stream into
a global header container, as the starting PPS is not suitable
for the rest of the stream. One side effect, for example,
is seeking will return garbled output until a new PPS appears.

This BSF removes the extra PPSs and rewrites the slice headers
such that the stream uses a single leading PPS in the global header,
which resolves the issue.

## hevc\_metadata

Modify metadata embedded in an HEVC stream.

- aud
  Insert or remove AUD NAL units in all access units of the stream.

  - insert
  - remove

- sample\_aspect\_ratio
  Set the sample aspect ratio in the stream in the VUI parameters.

- video\_format

- video\_full\_range\_flag
  Set the video format in the stream (see H.265 section E.3.1 and
  table E.2).

- colour\_primaries

- transfer\_characteristics

- matrix\_coefficients
  Set the colour description in the stream (see H.265 section E.3.1
  and tables E.3, E.4 and E.5).

- chroma\_sample\_loc\_type
  Set the chroma sample location in the stream (see H.265 section
  E.3.1 and figure E.1).

- tick\_rate
  Set the tick rate in the VPS and VUI parameters (time\_scale /
  num\_units\_in\_tick). Combined with `num_ticks_poc_diff_one`, this can
  set a constant framerate in the stream.  Note that it is likely to be
  overridden by container parameters when the stream is in a container.

- num\_ticks\_poc\_diff\_one
  Set poc\_proportional\_to\_timing\_flag in VPS and VUI and use this value
  to set num\_ticks\_poc\_diff\_one\_minus1 (see H.265 sections 7.4.3.1 and
  E.3.1).  Ignored if `tick_rate` is not also set.

- crop\_left

- crop\_right

- crop\_top

- crop\_bottom
  Set the conformance window cropping offsets in the SPS.  These values
  will replace the current ones if the stream is already cropped.

These fields are set in pixels.  Note that some sizes may not be
representable if the chroma is subsampled (H.265 section 7.4.3.2.1).

- width

- height
  Set width and height after crop.

- level
  Set the level in the VPS and SPS.  See H.265 section A.4 and tables
  A.6 and A.7.

The argument must be the name of a level (for example, `5.1`), a
*general\_level\_idc* value (for example, `153` for level 5.1),
or the special name `auto` indicating that the filter should
attempt to guess the level from the input stream properties.

## hevc\_mp4toannexb

Convert an HEVC/H.265 bitstream from length prefixed mode to start code
prefixed mode (as defined in the Annex B of the ITU-T H.265
specification).

This is required by some streaming formats, typically the MPEG-2
transport stream format (muxer `mpegts`).

For example to remux an MP4 file containing an HEVC stream to mpegts
format with `ffmpeg`, you can use the command:

```text
ffmpeg -i INPUT.mp4 -codec copy -bsf:v hevc_mp4toannexb OUTPUT.ts
```

Please note that this filter is auto-inserted for MPEG-TS (muxer
`mpegts`) and raw HEVC/H.265 (muxer `h265` or
`hevc`) output formats.

## imxdump

Modifies the bitstream to fit in MOV and to be usable by the Final Cut
Pro decoder. This filter only applies to the mpeg2video codec, and is
likely not needed for Final Cut Pro 7 and newer with the appropriate
`-tag:v`.

For example, to remux 30 MB/sec NTSC IMX to MOV:

```text
ffmpeg -i input.mxf -c copy -bsf:v imxdump -tag:v mx3n output.mov
```

## mjpeg2jpeg

Convert MJPEG/AVI1 packets to full JPEG/JFIF packets.

MJPEG is a video codec wherein each video frame is essentially a
JPEG image. The individual frames can be extracted without loss,
e.g. by

```text
ffmpeg -i ../some_mjpeg.avi -c:v copy frames_%d.jpg
```

Unfortunately, these chunks are incomplete JPEG images, because
they lack the DHT segment required for decoding. Quoting from
<http://www.digitalpreservation.gov/formats/fdd/fdd000063.shtml>:

Avery Lee, writing in the rec.video.desktop newsgroup in 2001,
commented that "MJPEG, or at least the MJPEG in AVIs having the
MJPG fourcc, is restricted JPEG with a fixed -- and *omitted* --
Huffman table. The JPEG must be YCbCr colorspace, it must be 4:2:2,
and it must use basic Huffman encoding, not arithmetic or
progressive. . . . You can indeed extract the MJPEG frames and
decode them with a regular JPEG decoder, but you have to prepend
the DHT segment to them, or else the decoder won't have any idea
how to decompress the data. The exact table necessary is given in
the OpenDML spec."

This bitstream filter patches the header of frames extracted from an MJPEG
stream (carrying the AVI1 header ID and lacking a DHT segment) to
produce fully qualified JPEG images.

```text
ffmpeg -i mjpeg-movie.avi -c:v copy -bsf:v mjpeg2jpeg frame_%d.jpg
exiftran -i -9 frame*.jpg
ffmpeg -i frame_%d.jpg -c:v copy rotated.avi
```

## mjpegadump

Add an MJPEG A header to the bitstream, to enable decoding by
Quicktime.

<a id="mov2textsub"></a>

## mov2textsub

Extract a representable text file from MOV subtitles, stripping the
metadata header from each subtitle packet.

See also the text2movsub filter.

## mpeg2\_metadata

Modify metadata embedded in an MPEG-2 stream.

- display\_aspect\_ratio
  Set the display aspect ratio in the stream.

The following fixed values are supported:

- 4/3

- 16/9

- 221/100
  Any other value will result in square pixels being signalled instead
  (see H.262 section 6.3.3 and table 6-3).

- frame\_rate
  Set the frame rate in the stream.  This is constructed from a table
  of known values combined with a small multiplier and divisor - if
  the supplied value is not exactly representable, the nearest
  representable value will be used instead (see H.262 section 6.3.3
  and table 6-4).

- video\_format
  Set the video format in the stream (see H.262 section 6.3.6 and
  table 6-6).

- colour\_primaries

- transfer\_characteristics

- matrix\_coefficients
  Set the colour description in the stream (see H.262 section 6.3.6
  and tables 6-7, 6-8 and 6-9).

## mpeg4\_unpack\_bframes

Unpack DivX-style packed B-frames.

DivX-style packed B-frames are not valid MPEG-4 and were only a
workaround for the broken Video for Windows subsystem.
They use more space, can cause minor AV sync issues, require more
CPU power to decode (unless the player has some decoded picture queue
to compensate the 2,0,2,0 frame per packet style) and cause
trouble if copied into a standard container like mp4 or mpeg-ps/ts,
because MPEG-4 decoders may not be able to decode them, since they are
not valid MPEG-4.

For example to fix an AVI file containing an MPEG-4 stream with
DivX-style packed B-frames using `ffmpeg`, you can use the command:

```text
ffmpeg -i INPUT.avi -codec copy -bsf:v mpeg4_unpack_bframes OUTPUT.avi
```

## noise

Damages the contents of packets or simply drops them without damaging the
container. Can be used for fuzzing or testing error resilience/concealment.

Parameters:

- amount
  Accepts an expression whose evaluation per-packet determines how often bytes in that
  packet will be modified. A value below 0 will result in a variable frequency.
  Default is 0 which results in no modification. However, if neither amount nor drop is specified,
  amount will be set to *-1*. See below for accepted variables.
- drop
  Accepts an expression evaluated per-packet whose value determines whether that packet is dropped.
  Evaluation to a positive value results in the packet being dropped. Evaluation to a negative
  value results in a variable chance of it being dropped, roughly inverse in proportion to the magnitude
  of the value. Default is 0 which results in no drops. See below for accepted variables.
- dropamount
  Accepts a non-negative integer, which assigns a variable chance of it being dropped, roughly inverse
  in proportion to the value. Default is 0 which results in no drops. This option is kept for backwards
  compatibility and is equivalent to setting drop to a negative value with the same magnitude
  i.e. `dropamount=4` is the same as `drop=-4`. Ignored if drop is also specified.

Both `amount` and `drop` accept expressions containing the following variables:

- n
  The index of the packet, starting from zero.
- tb
  The timebase for packet timestamps.
- pts
  Packet presentation timestamp.
- dts
  Packet decoding timestamp.
- nopts
  Constant representing AV\_NOPTS\_VALUE.
- startpts
  First non-AV\_NOPTS\_VALUE PTS seen in the stream.
- startdts
  First non-AV\_NOPTS\_VALUE DTS seen in the stream.
- duration
- d
  Packet duration, in timebase units.
- pos
  Packet position in input; may be -1 when unknown or not set.
- size
  Packet size, in bytes.
- key
  Whether packet is marked as a keyframe.
- state
  A pseudo random integer, primarily derived from the content of packet payload.

### Examples

Apply modification to every byte but don't drop any packets.

```text
ffmpeg -i INPUT -c copy -bsf noise=1 output.mkv
```

Drop every video packet not marked as a keyframe after timestamp 30s but do not
modify any of the remaining packets.

```text
ffmpeg -i INPUT -c copy -bsf:v noise=drop='gt(pts*tb\,30)*not(key)' output.mkv
```

Drop one second of audio every 10 seconds and add some random noise to the rest.

```text
ffmpeg -i INPUT -c copy -bsf:a noise=amount=-1:drop='between(mod(pts*tb\,10)\,9\,10)' output.mkv
```

## null

This bitstream filter passes the packets through unchanged.

## pcm\_rechunk

Repacketize PCM audio to a fixed number of samples per packet or a fixed packet
rate per second. This is similar to the asetnsamples but works on audio packets instead of audio frames.

- nb\_out\_samples, n
  Set the number of samples per each output audio packet. The number is intended
  as the number of samples *per each channel*. Default value is 1024.

- pad, p
  If set to 1, the filter will pad the last audio packet with silence, so that it
  will contain the same number of samples (or roughly the same number of samples,
  see `frame_rate`) as the previous ones. Default value is 1.

- frame\_rate, r
  This option makes the filter output a fixed number of packets per second instead
  of a fixed number of samples per packet. If the audio sample rate is not
  divisible by the frame rate then the number of samples will not be constant but
  will vary slightly so that each packet will start as close to the frame
  boundary as possible. Using this option has precedence over `nb_out_samples`.

You can generate the well known 1602-1601-1602-1601-1602 pattern of 48kHz audio
for NTSC frame rate using the `frame_rate` option.

```text
ffmpeg -f lavfi -i sine=r=48000:d=1 -c pcm_s16le -bsf pcm_rechunk=r=30000/1001 -f framecrc -
```

## pgs\_frame\_merge

Merge a sequence of PGS Subtitle segments ending with an "end of display set"
segment into a single packet.

This is required by some containers that support PGS subtitles
(muxer `matroska`).

## prores\_metadata

Modify color property metadata embedded in prores stream.

- color\_primaries
  Set the color primaries.
  Available values are:

  - auto
    Keep the same color primaries property (default).

  - unknown

  - bt709

  - bt470bg
    BT601 625

  - smpte170m
    BT601 525

  - bt2020

  - smpte431
    DCI P3

  - smpte432
    P3 D65

- transfer\_characteristics
  Set the color transfer.
  Available values are:

  - auto
    Keep the same transfer characteristics property (default).

  - unknown

  - bt709
    BT 601, BT 709, BT 2020

  - smpte2084
    SMPTE ST 2084

  - arib-std-b67
    ARIB STD-B67

- matrix\_coefficients
  Set the matrix coefficient.
  Available values are:

  - auto
    Keep the same colorspace property (default).

  - unknown

  - bt709

  - smpte170m
    BT 601

  - bt2020nc

Set Rec709 colorspace for each frame of the file

```text
ffmpeg -i INPUT -c copy -bsf:v prores_metadata=color_primaries=bt709:color_trc=bt709:colorspace=bt709 output.mov
```

Set Hybrid Log-Gamma parameters for each frame of the file

```text
ffmpeg -i INPUT -c copy -bsf:v prores_metadata=color_primaries=bt2020:color_trc=arib-std-b67:colorspace=bt2020nc output.mov
```

## remove\_extra

Remove extradata from packets.

It accepts the following parameter:

- freq
  Set which frame types to remove extradata from.

  - k
    Remove extradata from non-keyframes only.

  - keyframe
    Remove extradata from keyframes only.

  - e, all
    Remove extradata from all frames.

## setts

Set PTS and DTS in packets.

It accepts the following parameters:

- ts
- pts
- dts
  Set expressions for PTS, DTS or both.
- duration
  Set expression for duration.
- time\_base
  Set output time base.
- prescale
  Set whether to convert time fields to user-set output time base before evaluation of expressions. Defaults to 0.

The expressions are evaluated through the eval API and can contain the following
constants:

- N
  The count of the input packet. Starting from 0.

- TS
  The demux timestamp in input in case of `ts` or `dts` option or presentation
  timestamp in case of `pts` option.

- POS
  The original position in the file of the packet, or undefined if undefined
  for the current packet

- DTS
  The demux timestamp in input.

- PTS
  The presentation timestamp in input.

- DURATION
  The duration in input.

- STARTDTS
  The DTS of the first packet.

- STARTPTS
  The PTS of the first packet.

- PREV\_INDTS
  The previous input DTS.

- PREV\_INPTS
  The previous input PTS.

- PREV\_INDURATION
  The previous input duration.

- PREV\_OUTDTS
  The previous output DTS.

- PREV\_OUTPTS
  The previous output PTS.

- PREV\_OUTDURATION
  The previous output duration.

- NEXT\_DTS
  The next input DTS.

- NEXT\_PTS
  The next input PTS.

- NEXT\_DURATION
  The next input duration.

- TB
  The timebase in which time fields are denominated. The user-set output timebase if prescale is enabled, else the input timebase.

- TB\_OUT
  The output timebase.

- SR
  The sample rate of stream packet belongs.

- NOPTS
  The AV\_NOPTS\_VALUE constant.

For example, to set PTS equal to DTS (not recommended if B-frames are involved):

```text
ffmpeg -i INPUT -c:a copy -bsf:a setts=pts=DTS out.mkv
```

## showinfo

Log basic packet information. Mainly useful for testing, debugging,
and development.

## smpte436m\_to\_eia608

Convert from a `SMPTE_436M_ANC` data stream to a `EIA_608` stream,
extracting the closed captions from CTA-708 CDP VANC packets, and ignoring all other data.

<a id="text2movsub"></a>

## text2movsub

Convert text subtitles to MOV subtitles (as used by the `mov_text`
codec) with metadata headers.

See also the mov2textsub filter.

## trace\_headers

Log trace output containing all syntax elements in the coded stream
headers (everything above the level of individual coded blocks).
This can be useful for debugging low-level stream issues.

Supports AV1, H.264, H.265, (M)JPEG, MPEG-2 and VP9, but depending
on the build only a subset of these may be available.

## truehd\_core

Extract the core from a TrueHD stream, dropping ATMOS data.

## vp9\_metadata

Modify metadata embedded in a VP9 stream.

- color\_space
  Set the color space value in the frame header.  Note that any frame
  set to RGB will be implicitly set to PC range and that RGB is
  incompatible with profiles 0 and 2.
  - unknown
  - bt601
  - bt709
  - smpte170
  - smpte240
  - bt2020
  - rgb

- color\_range
  Set the color range value in the frame header.  Note that any value
  imposed by the color space will take precedence over this value.
  - tv
  - pc

## vp9\_superframe

Merge VP9 invisible (alt-ref) frames back into VP9 superframes. This
fixes merging of split/segmented VP9 streams where the alt-ref frame
was split from its visible counterpart.

## vp9\_superframe\_split

Split VP9 superframes into single frames.

## vp9\_raw\_reorder

Given a VP9 stream with correct timestamps but possibly out of order,
insert additional show-existing-frame packets to correct the ordering.

# See Also

ffmpeg(1), ffplay(1), ffprobe(1), libavcodec(3)

# Authors

The FFmpeg developers.

For details about the authorship, see the Git history of the project
(<https://git.ffmpeg.org/ffmpeg>), e.g. by typing the command
`git log` in the FFmpeg source directory, or browsing the
online repository at <https://git.ffmpeg.org/ffmpeg>.

Maintainers for the specific components are listed in the file
`MAINTAINERS` in the source code tree.
