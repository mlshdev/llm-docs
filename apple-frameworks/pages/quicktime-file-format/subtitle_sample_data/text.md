> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicktime-file-format/subtitle_sample_data/text](https://developer.apple.com/documentation/quicktime-file-format/subtitle_sample_data/text)

# Text

**Framework:** QuickTime File Format  
**Kind:** Data field

The subtitle text.

<a id="Overview"></a>

## Overview

The subtitle text is Unicode text, encoded either as UTF-8 text or UTF-16 text beginning with a UTF-16 BYTE ORDER MARK (`'\uFEFF'`) in big or little endian order. There is no null termination for the text.

## See Also

### Data fields

- [Text size](text_size.md): A 16-bit word that specifies the length (number of bytes) of the subtitle text.
- [Sample extensions](sample_extensions.md): One or more atoms containing additional information for selecting and drawing the subtitle.
