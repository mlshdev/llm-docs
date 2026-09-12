> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/uckeystaterecord/1390413-stateentrydata](https://developer.apple.com/documentation/coreservices/uckeystaterecord/1390413-stateentrydata)

# stateEntryData (Swift)

**Framework:** Core Services  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

An array of dead-key state entries, whose size depends on their format, but which will always be a multiple of 4 bytes. Each entry maps from the current dead-key state to the Unicode character(s) that result when a given character key is pressed or to the next dead-key state, if any. The format of the entry is specified by the `stateEntryFormat` field to be either that of type [UCKeyStateEntryTerminal](../uckeystateentryterminal.md) or [UCKeyStateEntryRange](../uckeystateentryrange.md).

## Declaration

```swift
var stateEntryData: UInt32
```

# stateEntryData (Objective-C)

**Framework:** Core Services  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

An array of dead-key state entries, whose size depends on their format, but which will always be a multiple of 4 bytes. Each entry maps from the current dead-key state to the Unicode character(s) that result when a given character key is pressed or to the next dead-key state, if any. The format of the entry is specified by the `stateEntryFormat` field to be either that of type [UCKeyStateEntryTerminal](../uckeystateentryterminal.md) or [UCKeyStateEntryRange](../uckeystateentryrange.md).

## Declaration

```objectivec
UInt32 stateEntryData[1];
```
