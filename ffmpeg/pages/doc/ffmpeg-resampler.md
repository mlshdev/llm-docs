> Commit-pinned source for FFmpeg master: [doc/ffmpeg-resampler.texi](https://github.com/FFmpeg/FFmpeg/blob/f93cd72dde3056c2efb39e11589745d78cd24409/doc/ffmpeg-resampler.texi)

# Description

The FFmpeg resampler provides a high-level interface to the
libswresample library audio resampling utilities. In particular it
allows one to perform audio resampling, audio channel layout rematrixing,
and convert audio format and packing layout.

# Resampler Options

The audio resampler supports the following named options.

Options may be set by specifying -*option* *value* in the
FFmpeg tools, *option*=*value* for the aresample filter,
by setting the value explicitly in the
`SwrContext` options or using the `libavutil/opt.h` API for
programmatic use.

- uchl, used\_chlayout
  Set used input channel layout. Default is unset. This option is
  only used for special remapping.

- isr, in\_sample\_rate
  Set the input sample rate. Default value is 0.

- osr, out\_sample\_rate
  Set the output sample rate. Default value is 0.

- isf, in\_sample\_fmt
  Specify the input sample format. It is set by default to `none`.

- osf, out\_sample\_fmt
  Specify the output sample format. It is set by default to `none`.

- tsf, internal\_sample\_fmt
  Set the internal sample format. Default value is `none`.
  This will automatically be chosen when it is not explicitly set.

- ichl, in\_chlayout

- ochl, out\_chlayout
  Set the input/output channel layout.

See channel layout syntax
for the required syntax.

- clev, center\_mix\_level
  Set the center mix level. It is a value expressed in deciBel, and must be
  in the interval \[-32,32].

- slev, surround\_mix\_level
  Set the surround mix level. It is a value expressed in deciBel, and must
  be in the interval \[-32,32].

- lfe\_mix\_level
  Set LFE mix into non LFE level. It is used when there is a LFE input but no
  LFE output. It is a value expressed in deciBel, and must
  be in the interval \[-32,32].

- rmvol, rematrix\_volume
  Set rematrix volume. Default value is 1.0.

- rematrix\_maxval
  Set maximum output value for rematrixing.
  This can be used to prevent clipping vs. preventing volume reduction.
  A value of 1.0 prevents clipping.

- flags, swr\_flags
  Set flags used by the converter. Default value is 0.

It supports the following individual flags:

- res
  force resampling, this flag forces resampling to be used even when the
  input and output sample rates match.

- dither\_scale
  Set the dither scale. Default value is 1.

- dither\_method
  Set dither method. Default value is 0.

Supported values:

- rectangular
  select rectangular dither

- triangular
  select triangular dither

- triangular\_hp
  select triangular dither with high pass

- lipshitz
  select Lipshitz noise shaping dither.

- shibata
  select Shibata noise shaping dither.

- low\_shibata
  select low Shibata noise shaping dither.

- high\_shibata
  select high Shibata noise shaping dither.

- f\_weighted
  select f-weighted noise shaping dither

- modified\_e\_weighted
  select modified-e-weighted noise shaping dither

- improved\_e\_weighted
  select improved-e-weighted noise shaping dither

- resampler
  Set resampling engine. Default value is swr.

Supported values:

- swr
  select the native SW Resampler; filter options precision and cheby are not
  applicable in this case.

- soxr
  select the SoX Resampler (where available); compensation, and filter options
  filter\_size, phase\_shift, exact\_rational, filter\_type & kaiser\_beta, are not
  applicable in this case.

- filter\_size
  For swr only, set resampling filter size, default value is 32.

- phase\_shift
  For swr only, set resampling phase shift, default value is 10, and must be in
  the interval \[0,30].

- linear\_interp
  Use linear interpolation when enabled (the default). Disable it if you want
  to preserve speed instead of quality when exact\_rational fails.

- exact\_rational
  For swr only, when enabled, try to use exact phase\_count based on input and
  output sample rate. However, if it is larger than `1 << phase_shift`,
  the phase\_count will be `1 << phase_shift` as fallback. Default is enabled.

- cutoff
  Set cutoff frequency (swr: 6dB point; soxr: 0dB point) ratio; must be a float
  value between 0 and 1.  Default value is 0.97 with swr, and 0.91 with soxr
  (which, with a sample-rate of 44100, preserves the entire audio band to 20kHz).

- precision
  For soxr only, the precision in bits to which the resampled signal will be
  calculated.  The default value of 20 (which, with suitable dithering, is
  appropriate for a destination bit-depth of 16) gives SoX's 'High Quality'; a
  value of 28 gives SoX's 'Very High Quality'.

- cheby
  For soxr only, selects passband rolloff none (Chebyshev) & higher-precision
  approximation for 'irrational' ratios. Default value is 0.

- async
  For swr only, simple 1 parameter audio sync to timestamps using stretching,
  squeezing, filling and trimming. Setting this to 1 will enable filling and
  trimming, larger values represent the maximum amount in samples that the data
  may be stretched or squeezed for each second.
  Default value is 0, thus no compensation is applied to make the samples match
  the audio timestamps.

- first\_pts
  For swr only, assume the first pts should be this value. The time unit is 1 / sample rate.
  This allows for padding/trimming at the start of stream. By default, no
  assumption is made about the first frame's expected pts, so no padding or
  trimming is done. For example, this could be set to 0 to pad the beginning with
  silence if an audio stream starts after the video stream or to trim any samples
  with a negative pts due to encoder delay.

- min\_comp
  For swr only, set the minimum difference between timestamps and audio data (in
  seconds) to trigger stretching/squeezing/filling or trimming of the
  data to make it match the timestamps. The default is that
  stretching/squeezing/filling and trimming is disabled
  (`min_comp` = `FLT_MAX`).

- min\_hard\_comp
  For swr only, set the minimum difference between timestamps and audio data (in
  seconds) to trigger adding/dropping samples to make it match the
  timestamps.  This option effectively is a threshold to select between
  hard (trim/fill) and soft (squeeze/stretch) compensation. Note that
  all compensation is by default disabled through `min_comp`.
  The default is 0.1.

- comp\_duration
  For swr only, set duration (in seconds) over which data is stretched/squeezed
  to make it match the timestamps. Must be a non-negative double float value,
  default value is 1.0.

- max\_soft\_comp
  For swr only, set maximum factor by which data is stretched/squeezed to make it
  match the timestamps. Must be a non-negative double float value, default value
  is 0.

- matrix\_encoding
  Select matrixed stereo encoding.

It accepts the following values:

- none
  select none
- dolby
  select Dolby
- dplii
  select Dolby Pro Logic II

Default value is `none`.

- filter\_type
  For swr only, select resampling filter type. This only affects resampling
  operations.

It accepts the following values:

- cubic
  select cubic

- blackman\_nuttall
  select Blackman Nuttall windowed sinc

- kaiser
  select Kaiser windowed sinc

- kaiser\_beta
  For swr only, set Kaiser window beta value. Must be a double float value in the
  interval \[2,16], default value is 9.

- output\_sample\_bits
  For swr only, set number of used output sample bits for dithering. Must be an integer in the
  interval \[0,64], default value is 0, which means it's not used.

# See Also

ffmpeg(1), ffplay(1), ffprobe(1), libswresample(3)

# Authors

The FFmpeg developers.

For details about the authorship, see the Git history of the project
(<https://git.ffmpeg.org/ffmpeg>), e.g. by typing the command
`git log` in the FFmpeg source directory, or browsing the
online repository at <https://git.ffmpeg.org/ffmpeg>.

Maintainers for the specific components are listed in the file
`MAINTAINERS` in the source code tree.
