> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/cellulardatarestrictiondidupdatenotifier](https://developer.apple.com/documentation/coretelephony/cellulardatarestrictiondidupdatenotifier)

# CellularDataRestrictionDidUpdateNotifier (Swift)

**Framework:** Core Telephony  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.10+

A block to provide updates on the app’s cellular data restriction state.

## Declaration

```swift
typealias CellularDataRestrictionDidUpdateNotifier = (CTCellularDataRestrictedState) -> Void
```

## See Also

### Handling Policy Changes

- [cellularDataRestrictionDidUpdateNotifier](ctcellulardata/cellulardatarestrictiondidupdatenotifier.md): A block that handles cellular data restriction state changes.

# CellularDataRestrictionDidUpdateNotifier (Objective-C)

**Framework:** Core Telephony  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.10+

A block to provide updates on the app’s cellular data restriction state.

## Declaration

```objectivec
typedef void (^)(enum CTCellularDataRestrictedState) CellularDataRestrictionDidUpdateNotifier;
```

## See Also

### Handling Policy Changes

- [cellularDataRestrictionDidUpdateNotifier](ctcellulardata/cellulardatarestrictiondidupdatenotifier.md): A block that handles cellular data restriction state changes.
