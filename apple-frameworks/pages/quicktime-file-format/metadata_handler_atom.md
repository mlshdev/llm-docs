> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicktime-file-format/metadata_handler_atom](https://developer.apple.com/documentation/quicktime-file-format/metadata_handler_atom)

# Metadata handler atom ('hdlr')

**Framework:** QuickTime File Format  
**Kind:** Atom

An atom that defines the structure used for all types of metadata stored within the metadata atom.

## Mentioned In

- [QuickTime File Format change log](revision_history.md)

<a id="Overview"></a>

## Overview

The metadata handler atom is a full atom with an atom type of `‘hdlr’`. It defines the structure used for all types of metadata stored within the metadata atom.

> **Note**

> A reader parsing a metadata atom should confirm the handler type in the metadata handler atom is ‘mdta’ before interpreting any other structures in the metadata atom according to the specification presented here. If the handler type is not ‘mdta’, the interpretation is defined by another specification.

## Topics

### Data fields

- [Size](metadata_handler_atom/size.md): A 32-bit unsigned integer that indicates the size in bytes of the atom structure.
- [Type](metadata_handler_atom/type.md): A 32-bit unsigned integer value.
- [Version](metadata_handler_atom/version.md): One byte.
- [Flags](metadata_handler_atom/flags.md): Three bytes.
- [Predefined](metadata_handler_atom/predefined.md): A 32-bit integer.
- [Handler type](metadata_handler_atom/handler_type.md): A 32-bit integer that indicates the structure used in the metadata atom.
- [Reserved](metadata_handler_atom/reserved.md): An array of 3 const unsigned 32-bit integers.
- [Name](metadata_handler_atom/name.md): A string with a human-readable name for a metadata type.

## See Also

### Metadata structure

- [Metadata atom](metadata_atom.md): An atom that is the container for carrying metadata.
- [Metadata header atom](metadata_header_atom.md): An atom that holds the integer value for the next unique item identifier to assign.
