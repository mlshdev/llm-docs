> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicktime-file-format/including_multiple_closed-caption_tracks](https://developer.apple.com/documentation/quicktime-file-format/including_multiple_closed-caption_tracks)

# Including multiple closed-caption tracks

**Framework:** QuickTime File Format  
**Kind:** Article

Include multiple closed-caption tracks in a movie.

<a id="Overview"></a>

## Overview

If a single closed caption track is included, it is recommended that the track be separate from any subtitle tracks in the movie. However, you can also include multiple closed-caption tracks in a movie. If you do, the following rules apply:

- The closed caption tracks must be part of the same alternate group. If the movie also includes subtitle tracks or non-chapter text tracks, those tracks should also be part of this group.
- The closed caption tracks should be tagged with the appropriate language.

## See Also

### Storing closed captioning

- [Closed captioning sample description](closed_captioning_sample_description.md): An atom that defines how to interpret closed captioning media data.
- [Closed captioning sample data](closed_captioning_sample_data.md): A sequence of one or more atoms that store closed captioning sample data.
