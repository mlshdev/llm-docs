> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiotoolbox/caclockaddlistener(_:_:_:)

# CAClockAddListener(\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```swift
func CAClockAddListener(_ inCAClock: CAClockRef, _ inListenerProc: CAClockListenerProc, _ inUserData: UnsafeMutableRawPointer) -> OSStatus
```

## See Also

### Adding and Removing Listeners

- [CAClockRemoveListener(\_:\_:\_:)](caclockremovelistener%28______%29.md)
- [CAClockListenerProc](caclocklistenerproc.md)
- [CAClockMessage](caclockmessage.md)

# CAClockAddListener (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```objectivec
extern OSStatus CAClockAddListener(CAClockRef inCAClock, CAClockListenerProc inListenerProc, void *inUserData);
```

## See Also

### Adding and Removing Listeners

- [CAClockRemoveListener](caclockremovelistener%28______%29.md)
- [CAClockListenerProc](caclocklistenerproc.md)
- [CAClockMessage](caclockmessage.md)
