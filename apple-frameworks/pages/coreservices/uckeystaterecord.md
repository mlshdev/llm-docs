> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/uckeystaterecord](https://developer.apple.com/documentation/coreservices/uckeystaterecord)

# UCKeyStateRecord (Swift)

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Determines dead-key state transitions in a `'uchr'` resource.

## Declaration

```swift
struct UCKeyStateRecord
```

<a id="overview"></a>

## Overview

The Unicode keyboard-layout (`'uchr'`) resource contains the data necessary to map virtual key codes to Unicode character codes for a given keyboard layout. The `'uchr'` format consists of a header information section and five key mapping data sections. The `UCKeyStateRecord` type is used in the third key mapping section of the `'uchr'` resource to determine dead-key state transitions. The `UCKeyStateRecord` structure permits complex dead-key state processing, such as a series of transitions from one dead-key state directly into another, in which each transition can emit a sequence of one or more Unicode characters.

Any modifier key combination which initiates a dead-key state or which is a valid terminator of a dead-key state refers to one of these records via the  [UCKeyOutput](uckeyoutput.md)  values in key-code-to-character tables. A `UCKeyOutput` value may index the offsets contained in a  [UCKeyStateRecordsIndex](uckeystaterecordsindex.md)  structure, which in turn refers to the actual dead-key state records. 

Each `UCKeyStateRecord` structure maps from the current dead-key state to the character data to be output or the following dead-key state (if any), as follows:

- If the current dead-key state is zero (that is, there are no dead keys in effect) the value in `stateZeroCharData` is output and the state is set to the value in `stateZeroNextState `  (this can be used to initiate a dead-key state). 
-  If the current dead-key state is non-zero and there is an entry for the state in `stateEntryData`, then the corresponding value in `stateEntryData.charData` is output. The next state is then set to either a `kUCKeyStateEntryTerminalFormat` or a `kUCKeyStateEntryRangeFormat` value; in either case, if the next dead-key state is 0, this implements a valid dead-key state terminator. 
-  If the current dead-key state is non-zero, and there is no entry for the state in `stateEntryData`, the default state terminator is output from the `'uchr'` resource’s  [UCKeyStateTerminators](uckeystateterminators.md)  table for the current state (or nothing may be output, if there is no `UCKeyStateTerminators` table or it has no entry for the current state). Then the value in `stateZeroCharData` is output, and the state is set to the value in `stateZeroNextState`.

## Topics

### Initializers

- [init()](uckeystaterecord/1448351-init.md)
- [init(stateZeroCharData:stateZeroNextState:stateEntryCount:stateEntryFormat:stateEntryData:)](uckeystaterecord/1442959-init.md)

### Instance Properties

- [stateEntryCount](uckeystaterecord/1390646-stateentrycount.md): An unsigned 16-bit integer specifying the number of elements in the `stateEntryData` field’s array for a given dead-key state record.
- [stateEntryData](uckeystaterecord/1390413-stateentrydata.md): An array of dead-key state entries, whose size depends on their format, but which will always be a multiple of 4 bytes. Each entry maps from the current dead-key state to the Unicode character(s) that result when a given character key is pressed or to the next dead-key state, if any. The format of the entry is specified by the `stateEntryFormat` field to be either that of type [UCKeyStateEntryTerminal](uckeystateentryterminal.md) or [UCKeyStateEntryRange](uckeystateentryrange.md).
- [stateEntryFormat](uckeystaterecord/1390450-stateentryformat.md): An unsigned 16-bit integer specifying the format of the data in the `stateEntryData` field’s array. This should be 0 if the `stateEntryCount` field is set to 0. Currently available values are `kUCKeyStateEntryTerminalFormat` and `kUCKeyStateEntryRangeFormat`; see [Key State Entry Formats](carbon_core/unicode_utilities/1390376-key_state_entry_formats.md) for descriptions of these values.
- [stateZeroCharData](uckeystaterecord/1390580-statezerochardata.md): A value of type `UCKeyCharSeq` specifying the Unicode character(s) produced from a given key code while no dead-key state is in effect.
- [stateZeroNextState](uckeystaterecord/1390554-statezeronextstate.md): An unsigned 16-bit integer specifying the dead-key state produced from a given key code when no previous dead-key state is in effect. If the `UCKeyStateRecord` structure does not initiate a dead-key state (but only provides terminators for other dead-key states), this will be 0. A non-zero value specifies the resulting new dead-key state and refers to the current state entry within the `stateEntryData[]` field for the following dead-key state record that is applied.

# UCKeyStateRecord (Objective-C)

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Determines dead-key state transitions in a `'uchr'` resource.

## Declaration

```objectivec
typedef struct UCKeyStateRecord {
    ...
} UCKeyStateRecord;
```

<a id="overview"></a>

## Overview

The Unicode keyboard-layout (`'uchr'`) resource contains the data necessary to map virtual key codes to Unicode character codes for a given keyboard layout. The `'uchr'` format consists of a header information section and five key mapping data sections. The `UCKeyStateRecord` type is used in the third key mapping section of the `'uchr'` resource to determine dead-key state transitions. The `UCKeyStateRecord` structure permits complex dead-key state processing, such as a series of transitions from one dead-key state directly into another, in which each transition can emit a sequence of one or more Unicode characters.

Any modifier key combination which initiates a dead-key state or which is a valid terminator of a dead-key state refers to one of these records via the  [UCKeyOutput](uckeyoutput.md)  values in key-code-to-character tables. A `UCKeyOutput` value may index the offsets contained in a  [UCKeyStateRecordsIndex](uckeystaterecordsindex.md)  structure, which in turn refers to the actual dead-key state records. 

Each `UCKeyStateRecord` structure maps from the current dead-key state to the character data to be output or the following dead-key state (if any), as follows:

- If the current dead-key state is zero (that is, there are no dead keys in effect) the value in `stateZeroCharData` is output and the state is set to the value in `stateZeroNextState `  (this can be used to initiate a dead-key state). 
-  If the current dead-key state is non-zero and there is an entry for the state in `stateEntryData`, then the corresponding value in `stateEntryData.charData` is output. The next state is then set to either a `kUCKeyStateEntryTerminalFormat` or a `kUCKeyStateEntryRangeFormat` value; in either case, if the next dead-key state is 0, this implements a valid dead-key state terminator. 
-  If the current dead-key state is non-zero, and there is no entry for the state in `stateEntryData`, the default state terminator is output from the `'uchr'` resource’s  [UCKeyStateTerminators](uckeystateterminators.md)  table for the current state (or nothing may be output, if there is no `UCKeyStateTerminators` table or it has no entry for the current state). Then the value in `stateZeroCharData` is output, and the state is set to the value in `stateZeroNextState`.

## Topics

### Instance Properties

- [stateEntryCount](uckeystaterecord/1390646-stateentrycount.md): An unsigned 16-bit integer specifying the number of elements in the `stateEntryData` field’s array for a given dead-key state record.
- [stateEntryData](uckeystaterecord/1390413-stateentrydata.md): An array of dead-key state entries, whose size depends on their format, but which will always be a multiple of 4 bytes. Each entry maps from the current dead-key state to the Unicode character(s) that result when a given character key is pressed or to the next dead-key state, if any. The format of the entry is specified by the `stateEntryFormat` field to be either that of type [UCKeyStateEntryTerminal](uckeystateentryterminal.md) or [UCKeyStateEntryRange](uckeystateentryrange.md).
- [stateEntryFormat](uckeystaterecord/1390450-stateentryformat.md): An unsigned 16-bit integer specifying the format of the data in the `stateEntryData` field’s array. This should be 0 if the `stateEntryCount` field is set to 0. Currently available values are `kUCKeyStateEntryTerminalFormat` and `kUCKeyStateEntryRangeFormat`; see [Key State Entry Formats](1390376-key_state_entry_formats.md) for descriptions of these values.
- [stateZeroCharData](uckeystaterecord/1390580-statezerochardata.md): A value of type `UCKeyCharSeq` specifying the Unicode character(s) produced from a given key code while no dead-key state is in effect.
- [stateZeroNextState](uckeystaterecord/1390554-statezeronextstate.md): An unsigned 16-bit integer specifying the dead-key state produced from a given key code when no previous dead-key state is in effect. If the `UCKeyStateRecord` structure does not initiate a dead-key state (but only provides terminators for other dead-key states), this will be 0. A non-zero value specifies the resulting new dead-key state and refers to the current state entry within the `stateEntryData[]` field for the following dead-key state record that is applied.
