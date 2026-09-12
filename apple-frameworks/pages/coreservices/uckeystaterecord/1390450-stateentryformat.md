> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/uckeystaterecord/1390450-stateentryformat](https://developer.apple.com/documentation/coreservices/uckeystaterecord/1390450-stateentryformat)

# stateEntryFormat (Swift)

**Framework:** Core Services  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

An unsigned 16-bit integer specifying the format of the data in the `stateEntryData` field’s array. This should be 0 if the `stateEntryCount` field is set to 0. Currently available values are `kUCKeyStateEntryTerminalFormat` and `kUCKeyStateEntryRangeFormat`; see [Key State Entry Formats](../carbon_core/unicode_utilities/1390376-key_state_entry_formats.md) for descriptions of these values.

## Declaration

```swift
var stateEntryFormat: UInt16
```

# stateEntryFormat (Objective-C)

**Framework:** Core Services  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

An unsigned 16-bit integer specifying the format of the data in the `stateEntryData` field’s array. This should be 0 if the `stateEntryCount` field is set to 0. Currently available values are `kUCKeyStateEntryTerminalFormat` and `kUCKeyStateEntryRangeFormat`; see [Key State Entry Formats](../1390376-key_state_entry_formats.md) for descriptions of these values.

## Declaration

```objectivec
UInt16 stateEntryFormat;
```
