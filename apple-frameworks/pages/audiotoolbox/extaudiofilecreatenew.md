> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/extaudiofilecreatenew](https://developer.apple.com/documentation/audiotoolbox/extaudiofilecreatenew)

# ExtAudioFileCreateNew

**Interface language:** Objective-C

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.6)

Deprecated. Use the [ExtAudioFileCreateWithURL](extaudiofilecreatewithurl%28____________%29.md) function instead.

## Declaration

```objectivec
extern OSStatus ExtAudioFileCreateNew(const struct FSRef *inParentDir, CFStringRef inFileName, AudioFileTypeID inFileType, const AudioStreamBasicDescription *inStreamDesc, const AudioChannelLayout *inChannelLayout, ExtAudioFileRef*outExtAudioFile);
```

## Parameters

- `inParentDir`: The directory in which to create the new file.
- `inFileName`: The name of the new file.
- `inFileType`: The type of file to create. This is a constant from AudioToolbox/AudioFile.h, e.g. kAudioFileAIFFType. Note that this is not an HFSTypeCode.
- `inStreamDesc`: The format of the audio data to be written to the file.
- `inChannelLayout`: The channel layout of the audio data. If non-null, this must be consistent with the number of channels specified by inStreamDesc.
- `outExtAudioFile`: On output, a newly allocated extended audio file object.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

Creates a new audio file.

If the file to be created is in a compressed format, it is permissible for the sample rate in inStreamDesc to be 0, since in all cases, the file’s encoding AudioConverter may produce audio at a different sample rate than the source. The file will be created with the audio format actually produced by the encoder.

<a id="Special-Considerations"></a>

### Special Considerations

This function is deprecated. Use the [ExtAudioFileCreateWithURL](extaudiofilecreatewithurl%28____________%29.md) function instead.

## See Also

### Deprecated Functions

- [ExtAudioFileOpen](extaudiofileopen.md): Deprecated. Deprecated. Use the [ExtAudioFileOpenURL](extaudiofileopenurl%28____%29.md) function instead.
