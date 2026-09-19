> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quicktime-file-format/metadata_locale_atom/locale_string

# Locale string

**Framework:** QuickTime File Format  
**Kind:** Data field

A string holding a language tag.

<a id="Overview"></a>

## Overview

A `NULL`-terminated string of UTF-8 characters holding a language tag complying with RFC 4646 (BCP 47).

Examples include `'en-US'`, `'fr-FR'`, or `'zh-CN'`.

## See Also

### Data fields

- [Size](size.md): A 32-bit unsigned integer that indicates the size in bytes of the atom structure.
- [Type](type.md): A 32-bit unsigned integer value.
