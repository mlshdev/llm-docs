> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicktime-file-format/movie_media](https://developer.apple.com/documentation/quicktime-file-format/movie_media)

# Movie media

**Framework:** QuickTime File Format  
**Kind:** API Collection

Movie media is used to encapsulate embedded movies within QuickTime movies.

<a id="Overview"></a>

## Overview

This feature is available in QuickTime 4.1.

<a id="Movie-sample-description"></a>

### Movie sample description

Movie media doesn’t have a unique sample description. It uses the minimum sample description, which is `SampleDescriptionRecord`.

## Topics

### Storing embedded movies

- [Movie media sample](movie_media_sample.md): Each sample in the movie media is a QuickTime atom container.

## See Also

### Video and sound

- [Video media](video_media.md): Store compressed and uncompressed image data in QuickTime movies.
- [Sound media](sound_media.md): Store compressed and uncompressed audio data in QuickTime movies.
- [Music media](music_media.md): Store note-based audio data, such as MIDI data, in QuickTime movies.
- [MPEG-1 media](mpeg-1_media.md): Store MPEG-1 video streams, MPEG-1, layer 2 audio streams, and multiplexed MPEG-1 audio and video streams in QuickTime movies.
- [Defining media data layouts](appendix_b_defining_media_data_layouts.md): Use efficient media layouts.
