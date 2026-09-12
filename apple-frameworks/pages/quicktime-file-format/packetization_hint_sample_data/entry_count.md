> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicktime-file-format/packetization_hint_sample_data/entry_count](https://developer.apple.com/documentation/quicktime-file-format/packetization_hint_sample_data/entry_count)

# Entry count

**Framework:** QuickTime File Format  
**Kind:** Data field

A 16-bit unsigned integer indicating the number of packet entries in the table.

<a id="Overview"></a>

## Overview

Each entry in the table corresponds to a packet. Multiple entries in a single sample indicate that the media sample had to be split into multiple packets. A sample with an entry count of `0` is reserved and, if encountered, must be skipped.

## See Also

### Data fields

- [Reserved](reserved.md): Two bytes.
- [Packet entry table](packet_entry_table.md): A variable length table containing packet entries.
- [Additional data](additional_data.md): A variable length field containing data pointed to by the entries in the data table.
