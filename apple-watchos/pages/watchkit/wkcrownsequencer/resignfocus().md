> Snapshot-pinned source payload for Apple watchOS snapshot-2bb3946a9b15; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/watchkit/wkcrownsequencer/resignfocus()

# resignFocus() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+

Ends the delivery of crown events to the current crown sequencer.

## Declaration

```swift
func resignFocus()
```

<a id="Discussion"></a>

## Discussion

Call this method when you no longer want to receive crown events in the current crown sequencer. If the user taps a picker object or a scrollable scene in your interface, the system automatically removes the focus from any active crown sequencer.

## See Also

### Managing the Focus

- [focus()](focus%28%29.md): Begins the delivery of crown events to the current crown sequencer.

# resignFocus (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+

Ends the delivery of crown events to the current crown sequencer.

## Declaration

```objectivec
- (void) resignFocus;
```

<a id="Discussion"></a>

## Discussion

Call this method when you no longer want to receive crown events in the current crown sequencer. If the user taps a picker object or a scrollable scene in your interface, the system automatically removes the focus from any active crown sequencer.

## See Also

### Managing the Focus

- [focus](focus%28%29.md): Begins the delivery of crown events to the current crown sequencer.
