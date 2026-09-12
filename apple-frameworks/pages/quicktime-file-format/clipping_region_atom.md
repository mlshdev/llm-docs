> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicktime-file-format/clipping_region_atom](https://developer.apple.com/documentation/quicktime-file-format/clipping_region_atom)

# Clipping region atom ('crgn')

**Framework:** QuickTime File Format  
**Kind:** Atom

An atom that specifies the clipping region.

<a id="Overview"></a>

## Overview

The clipping region atom contains the data that specifies the clipping region, including its size, bounding box, and region. Clipping region atoms have an atom type value of `'crgn'`.

The layout of the clipping region atom is as follows.

| Data field | Bytes |
| --- | --- |
| [Size](clipping_region_atom/size.md) | 4 |
| [Type](clipping_region_atom/type.md) | 4 |
| [Region size](clipping_region_atom/region_size.md) | 2 |
| [Region boundary box](clipping_region_atom/region_boundary_box.md) | 8 |
| [Clipping region data](clipping_region_atom/clipping_region_data.md) | Variable |

## Topics

### Data fields

- [Size](clipping_region_atom/size.md): A 32-bit integer that specifies the number of bytes in this clipping region atom.
- [Type](clipping_region_atom/type.md): A 32-bit integer that identifies the atom type.
- [Region size](clipping_region_atom/region_size.md): The region size part of a QuickDraw region.
- [Region boundary box](clipping_region_atom/region_boundary_box.md): The region boundary box part of a QuickDraw region.
- [Clipping region data](clipping_region_atom/clipping_region_data.md): The clipping region data part of a QuickDraw region.

## See Also

### Describing tracks

- [Track atom](track_atom.md): An atom that defines a single track of a movie.
- [Track header atom](track_header_atom.md): An atom that specifies the characteristics of a single track within a movie.
- [Track exclude from autoselection atom](track_exclude_from_autoselection_atom.md): An atom that indicates not to automatically select this track.
- [Track aperture mode dimension atoms](track_aperture_mode_dimension_atoms.md): Atoms that store information for each of the track aperture presentation modes.
- [Clipping atom](clipping_atom.md): An atom that specifies the clipping regions for movies and for tracks.
- [Track matte atom](track_matte_atom.md): An atom you use to visually blend the track’s image when it is displayed.
- [Compressed matte atom](compressed_matte_atom.md): An atom that specifies the image description structure and the matte data associated with a particular matte atom.
- [Edit atom](edit_atom.md): An atom that defines the portions of the media that are to be used to build up a track for a movie.
- [Edit list atom](edit_list_atom.md): An atom that maps from a time in a movie to a time in a media, and ultimately to media data.
- [Playing with edit lists](playing_with_edit_lists.md): Repeat a segment of a movie without copying media with edit lists.
- [Track load settings atom](track_load_settings_atom.md): An atom that indicates how the track is to be used in its movie.
- [Track reference atoms](track_reference_atoms.md): Atoms that defines relationships between tracks.
- [Track input map atoms](track_input_map_atoms.md): Atoms that define how data being sent to this track from its nonprimary sources is to be interpreted.
