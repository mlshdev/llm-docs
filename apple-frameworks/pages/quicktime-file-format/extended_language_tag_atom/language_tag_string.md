> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quicktime-file-format/extended_language_tag_atom/language_tag_string

# Language tag string

**Framework:** QuickTime File Format  
**Kind:** Data field

A string containing a language tag.

<a id="Overview"></a>

## Overview

A NULL-terminated C string containing an RFC 4646 (BCP 47) compliant language tag string in ASCII encoding, such as “en-US”, “fr-FR”, or “zh-CN”.

## See Also

### Data fields

- [Size](size.md): A 32-bit integer that specifies the number of bytes in this media header atom.
- [Type](type.md): A 32-bit integer that identifies the atom type.
- [Version](version.md): One byte that specifies the version of this header atom.
- [Flags](flags.md): Three bytes of space for media header flags.
