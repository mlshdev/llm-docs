> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgeventsourcestateid/hidsystemstate](https://developer.apple.com/documentation/coregraphics/cgeventsourcestateid/hidsystemstate)

# CGEventSourceStateID.hidSystemState (Swift)

**Framework:** Core Graphics  
**Kind:** Case  
**Availability:** Mac Catalyst · macOS

Specifies that an event source should use the event state table that reflects the combined state of all hardware event sources posting from the HID system.

## Declaration

```swift
case hidSystemState
```

## See Also

### Constants

- [CGEventSourceStateID.privateState](privatestate.md): Specifies that an event source should use a private event state table.
- [CGEventSourceStateID.combinedSessionState](combinedsessionstate.md): Specifies that an event source should use the event state table that reflects the combined state of all event sources posting to the current user login session.

# kCGEventSourceStateHIDSystemState (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst · macOS

Specifies that an event source should use the event state table that reflects the combined state of all hardware event sources posting from the HID system.

## Declaration

```objectivec
kCGEventSourceStateHIDSystemState
```

## See Also

### Constants

- [kCGEventSourceStatePrivate](privatestate.md): Specifies that an event source should use a private event state table.
- [kCGEventSourceStateCombinedSessionState](combinedsessionstate.md): Specifies that an event source should use the event state table that reflects the combined state of all event sources posting to the current user login session.
