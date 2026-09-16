> Snapshot-pinned source payload for Apple watchOS snapshot-4bff84466040; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/watchkit/wkcrownsequencer/focus()

# focus() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+

Begins the delivery of crown events to the current crown sequencer.

## Declaration

```swift
func focus()
```

<a id="Discussion"></a>

## Discussion

You must call this method to begin the delivery of crown events to your crown sequencer object. If your interface includes a picker or scrollable scene that is currently receiving crown events, calling this method causes that object to resign focus.

## See Also

### Managing the Focus

- [resignFocus()](resignfocus%28%29.md): Ends the delivery of crown events to the current crown sequencer.

# focus (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+

Begins the delivery of crown events to the current crown sequencer.

## Declaration

```objectivec
- (void) focus;
```

<a id="Discussion"></a>

## Discussion

You must call this method to begin the delivery of crown events to your crown sequencer object. If your interface includes a picker or scrollable scene that is currently receiving crown events, calling this method causes that object to resign focus.

## See Also

### Managing the Focus

- [resignFocus](resignfocus%28%29.md): Ends the delivery of crown events to the current crown sequencer.
