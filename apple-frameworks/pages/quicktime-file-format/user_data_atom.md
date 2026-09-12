> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicktime-file-format/user_data_atom](https://developer.apple.com/documentation/quicktime-file-format/user_data_atom)

# User data atom ('udta')

**Framework:** QuickTime File Format  
**Kind:** Atom

An atom where you define and store data associated with a QuickTime object.

<a id="Overview"></a>

## Overview

The layout of a user data atom is as follows.

| Data field | Bytes |
| --- | --- |
| [Size](user_data_atom/size.md) | 4 |
| [Type](user_data_atom/type.md) | 4 |
| [User data list](user_data_atom/user_data_list.md) | Variable |

## Topics

### Data fields

- [Size](user_data_atom/size.md): A 32-bit integer that specifies the number of bytes in this user data atom.
- [Type](user_data_atom/type.md): A 32-bit integer that identifies the atom type.
- [User data list](user_data_atom/user_data_list.md): A series of user data atoms.

## See Also

### Atoms for user data

- [Track name atom](track_name_atom.md): An atom that provides a name for a track.
- [Print to video atom](print_to_video_atom.md): An atom you use to play the movie in full-screen mode, with no window and no visible controller.
