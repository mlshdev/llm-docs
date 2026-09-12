> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgeventsourcestateid/privatestate](https://developer.apple.com/documentation/coregraphics/cgeventsourcestateid/privatestate)

# CGEventSourceStateID.privateState (Swift)

**Framework:** Core Graphics  
**Kind:** Case  
**Availability:** Mac Catalyst · macOS

Specifies that an event source should use a private event state table.

## Declaration

```swift
case privateState
```

## See Also

### Constants

- [CGEventSourceStateID.combinedSessionState](combinedsessionstate.md): Specifies that an event source should use the event state table that reflects the combined state of all event sources posting to the current user login session.
- [CGEventSourceStateID.hidSystemState](hidsystemstate.md): Specifies that an event source should use the event state table that reflects the combined state of all hardware event sources posting from the HID system.

# kCGEventSourceStatePrivate (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst · macOS

Specifies that an event source should use a private event state table.

## Declaration

```objectivec
kCGEventSourceStatePrivate
```

## See Also

### Constants

- [kCGEventSourceStateCombinedSessionState](combinedsessionstate.md): Specifies that an event source should use the event state table that reflects the combined state of all event sources posting to the current user login session.
- [kCGEventSourceStateHIDSystemState](hidsystemstate.md): Specifies that an event source should use the event state table that reflects the combined state of all hardware event sources posting from the HID system.
