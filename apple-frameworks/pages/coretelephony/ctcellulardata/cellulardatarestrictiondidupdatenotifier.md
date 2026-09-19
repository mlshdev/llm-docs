> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coretelephony/ctcellulardata/cellulardatarestrictiondidupdatenotifier

# cellularDataRestrictionDidUpdateNotifier (Swift)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+

A block that handles cellular data restriction state changes.

## Declaration

```swift
var cellularDataRestrictionDidUpdateNotifier: CellularDataRestrictionDidUpdateNotifier? { get set }
```

<a id="Discussion"></a>

## Discussion

The system executes this block when the app first sets the callback handler, and then every time the cellular data allowed policy changes. Execution of the block occurs on the default priority global dispatch queue.

## See Also

### Handling Policy Changes

- [CellularDataRestrictionDidUpdateNotifier](../cellulardatarestrictiondidupdatenotifier.md): A block to provide updates on the app’s cellular data restriction state.

# cellularDataRestrictionDidUpdateNotifier (Objective-C)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+

A block that handles cellular data restriction state changes.

## Declaration

```objectivec
@property (copy, nullable) CellularDataRestrictionDidUpdateNotifier cellularDataRestrictionDidUpdateNotifier;
```

<a id="Discussion"></a>

## Discussion

The system executes this block when the app first sets the callback handler, and then every time the cellular data allowed policy changes. Execution of the block occurs on the default priority global dispatch queue.

## See Also

### Handling Policy Changes

- [CellularDataRestrictionDidUpdateNotifier](../cellulardatarestrictiondidupdatenotifier.md): A block to provide updates on the app’s cellular data restriction state.
