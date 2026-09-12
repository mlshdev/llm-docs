> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicktime-file-format/track_profile_atom/value](https://developer.apple.com/documentation/quicktime-file-format/track_profile_atom/value)

# Value

**Framework:** QuickTime File Format  
**Kind:** Data field

A 32-bit field that represents a value related to a feature.

<a id="Overview"></a>

## Overview

The fourth field is the value, which is also a 32-bit field. The value may be a signed or unsigned integer, or a fixed-point value, or contain subfields, or consist of a packed array; it can be interpreted only in relation to the specific feature.

## See Also

### Data fields

- [Reserved](reserved.md): A 32-bit field.
- [Part-ID](part-id.md): A 32-bit field that defines the feature as being either brand-specific or universal.
- [Feature code](feature_code.md): A 32-bit unsigned integer that represents a code specifying a feature.
