> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corevideo/cvbuffer-attachment-keys

# CVBuffer Attachment Keys

**Interface languages:** Swift, Objective-C

**Framework:** Core Video  
**Kind:** API Collection

The attachment types for a Core Video buffer.

## Topics

### Constants

- [kCVBufferMovieTimeKey](kcvbuffermovietimekey.md): The movie time associated with the buffer. Generally only available for frames emitted by QuickTime (type `CFDictionary` containing the [kCVBufferTimeValueKey](kcvbuffertimevaluekey.md) and [kCVBufferTimeScaleKey](kcvbuffertimescalekey.md) keys).
- [kCVBufferTimeValueKey](kcvbuffertimevaluekey.md): The time value associated with the movie.
- [kCVBufferTimeScaleKey](kcvbuffertimescalekey.md): The time scale associated with the movie.

## See Also

### Constants

- [CVBuffer Attribute Keys](cvbuffer-attribute-keys.md): The attributes associated with Core Video buffers.
