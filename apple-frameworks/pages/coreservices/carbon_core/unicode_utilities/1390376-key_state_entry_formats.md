> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/carbon_core/unicode_utilities/1390376-key_state_entry_formats](https://developer.apple.com/documentation/coreservices/carbon_core/unicode_utilities/1390376-key_state_entry_formats)

# Key State Entry Formats

**Framework:** Core Services

Indicate the format for dead-key state records.

<a id="overview"></a>

## Overview

These constants are used in `UCKeyStateRecord` structures to indicate the format for dead-key state records.

## Topics

### Constants

- [kUCKeyStateEntryTerminalFormat](../../kuckeystateentryterminalformat.md): Specifies that the entry format is that of a structure of type [UCKeyStateEntryTerminal](../../uckeystateentryterminal.md). Use this format for simple (single) dead-key states, as in the U.S. keyboard layout.
- [kUCKeyStateEntryRangeFormat](../../kuckeystateentryrangeformat.md): Specifies that the entry format is that of a structure of type [UCKeyStateEntryRange](../../uckeystateentryrange.md). Use this format for complex (multiple) dead-key states, as in the hex input and Hangul input keyboard layouts.
