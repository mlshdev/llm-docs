> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicktime-file-format/tween_sample_description](https://developer.apple.com/documentation/quicktime-file-format/tween_sample_description)

# Tween sample description

**Framework:** QuickTime File Format  
**Kind:** Article

An atom that contains information for converting from media time to sample number to sample location for tweens.

<a id="Overview"></a>

## Overview

The tween sample description uses the standard sample description header, as described in [Sample table atom](sample_table_atom.md).

The data format field in the sample description is always set to `'twen'`. The tween media handler adds no additional fields to the sample description.

## See Also

### Storing tween media

- [Tween sample data](tween_sample_data.md)
- [Tween type categories](tween_type_categories.md)
- [Tween QT atom container](tween_qt_atom_container.md): Specify the characteristics of a tween with atoms in a tween QT atom container.
