> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgeventsourcestateid/combinedsessionstate](https://developer.apple.com/documentation/coregraphics/cgeventsourcestateid/combinedsessionstate)

# CGEventSourceStateID.combinedSessionState (Swift)

**Framework:** Core Graphics  
**Kind:** Case  
**Availability:** Mac Catalyst · macOS

Specifies that an event source should use the event state table that reflects the combined state of all event sources posting to the current user login session.

## Declaration

```swift
case combinedSessionState
```

## See Also

### Constants

- [CGEventSourceStateID.privateState](privatestate.md): Specifies that an event source should use a private event state table.
- [CGEventSourceStateID.hidSystemState](hidsystemstate.md): Specifies that an event source should use the event state table that reflects the combined state of all hardware event sources posting from the HID system.

# kCGEventSourceStateCombinedSessionState (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst · macOS

Specifies that an event source should use the event state table that reflects the combined state of all event sources posting to the current user login session.

## Declaration

```objectivec
kCGEventSourceStateCombinedSessionState
```

## See Also

### Constants

- [kCGEventSourceStatePrivate](privatestate.md): Specifies that an event source should use a private event state table.
- [kCGEventSourceStateHIDSystemState](hidsystemstate.md): Specifies that an event source should use the event state table that reflects the combined state of all hardware event sources posting from the HID system.
