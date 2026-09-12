> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicktime-file-format/closed_captioning_sample_description](https://developer.apple.com/documentation/quicktime-file-format/closed_captioning_sample_description)

# Closed captioning sample description

**Framework:** QuickTime File Format  
**Kind:** Atom

An atom that defines how to interpret closed captioning media data.

<a id="Overview"></a>

## Overview

The closed captioning sample description contains information that defines how to interpret closed captioning media data. This sample description is based on the standard sample description header, as described in [Sample description atom](sample_description_atom.md), and adds no additional fields.

The data format field in the sample description must be set to `'c608'` or `'c708'`. A closed caption track must use only one data format.

> **Note**

> Closed caption tracks with data formats other than `'c608'` or `'c708'` are not defined by this specification. Unrecognized data formats should be ignored.

## See Also

### Storing closed captioning

- [Closed captioning sample data](closed_captioning_sample_data.md): A sequence of one or more atoms that store closed captioning sample data.
- [Including multiple closed-caption tracks](including_multiple_closed-caption_tracks.md): Include multiple closed-caption tracks in a movie.
