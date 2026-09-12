> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicktime-file-format/packetization_hint_sample_data/packet_entry_table](https://developer.apple.com/documentation/quicktime-file-format/packetization_hint_sample_data/packet_entry_table)

# Packet entry table

**Framework:** QuickTime File Format  
**Kind:** Data field

A variable length table containing packet entries.

<a id="Overview"></a>

## Overview

Packet entries are defined in [Packet entry](../packet_entry.md).

## See Also

### Data fields

- [Entry count](entry_count.md): A 16-bit unsigned integer indicating the number of packet entries in the table.
- [Reserved](reserved.md): Two bytes.
- [Additional data](additional_data.md): A variable length field containing data pointed to by the entries in the data table.
