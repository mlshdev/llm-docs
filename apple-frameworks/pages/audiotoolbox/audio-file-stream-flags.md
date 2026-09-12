> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audio-file-stream-flags](https://developer.apple.com/documentation/audiotoolbox/audio-file-stream-flags)

# Audio File Stream Flags (Swift)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Flags set by the property listener callback and the [AudioFileStreamParseBytes(\_:\_:\_:\_:)](audiofilestreamparsebytes%28________%29.md) function.

## Topics

### Constants

- [propertyIsCached](audiofilestreampropertyflags/propertyiscached.md): This flag is set when the callback [AudioFileStream_PropertyListenerProc](audiofilestream_propertylistenerproc.md) is invoked in the case that the value of the property has been cached and can be obtained later.
- [cacheProperty](audiofilestreampropertyflags/cacheproperty.md): A property listener sets this flag to instruct the parser to cache the property value so that it remains available after the callback returns.
- [discontinuity](audiofilestreamparseflags/discontinuity.md): Pass this flag to the [AudioFileStreamParseBytes(\_:\_:\_:\_:)](audiofilestreamparsebytes%28________%29.md) function to signal a discontinuity in the audio data.
- [offsetIsEstimated](audiofilestreamseekflags/offsetisestimated.md): This flag is returned by the [AudioFileStreamSeek(\_:\_:\_:\_:)](audiofilestreamseek%28________%29.md) function if the byte offset is only an estimate.

## See Also

### Constants

- [Audio File Stream Properties](1391506-audio-file-stream-properties.md): Audio file stream properties contain information that you can use to help interpret the audio data in a stream.

# Audio File Stream Flags (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Flags set by the property listener callback and the [AudioFileStreamParseBytes](audiofilestreamparsebytes%28________%29.md) function.

## Topics

### Constants

- [kAudioFileStreamPropertyFlag_PropertyIsCached](audiofilestreampropertyflags/propertyiscached.md): This flag is set when the callback [AudioFileStream_PropertyListenerProc](audiofilestream_propertylistenerproc.md) is invoked in the case that the value of the property has been cached and can be obtained later.
- [kAudioFileStreamPropertyFlag_CacheProperty](audiofilestreampropertyflags/cacheproperty.md): A property listener sets this flag to instruct the parser to cache the property value so that it remains available after the callback returns.
- [kAudioFileStreamParseFlag_Discontinuity](audiofilestreamparseflags/discontinuity.md): Pass this flag to the [AudioFileStreamParseBytes](audiofilestreamparsebytes%28________%29.md) function to signal a discontinuity in the audio data.
- [kAudioFileStreamSeekFlag_OffsetIsEstimated](audiofilestreamseekflags/offsetisestimated.md): This flag is returned by the [AudioFileStreamSeek](audiofilestreamseek%28________%29.md) function if the byte offset is only an estimate.

## See Also

### Constants

- [Audio File Stream Properties](1391506-audio-file-stream-properties.md): Audio file stream properties contain information that you can use to help interpret the audio data in a stream.
