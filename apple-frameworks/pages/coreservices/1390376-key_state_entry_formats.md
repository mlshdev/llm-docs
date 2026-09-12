> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1390376-key_state_entry_formats](https://developer.apple.com/documentation/coreservices/1390376-key_state_entry_formats)

# Key State Entry Formats

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Indicate the format for dead-key state records.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [kUCKeyStateEntryTerminalFormat](1390376-key_state_entry_formats/kuckeystateentryterminalformat.md): Specifies that the entry format is that of a structure of type [UCKeyStateEntryTerminal](uckeystateentryterminal.md). Use this format for simple (single) dead-key states, as in the U.S. keyboard layout.
- [kUCKeyStateEntryRangeFormat](1390376-key_state_entry_formats/kuckeystateentryrangeformat.md): Specifies that the entry format is that of a structure of type [UCKeyStateEntryRange](uckeystateentryrange.md). Use this format for complex (multiple) dead-key states, as in the hex input and Hangul input keyboard layouts.
