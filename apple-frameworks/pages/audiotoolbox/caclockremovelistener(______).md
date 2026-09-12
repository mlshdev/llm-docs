> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/caclockremovelistener(_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/caclockremovelistener(_:_:_:))

# CAClockRemoveListener(\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```swift
func CAClockRemoveListener(_ inCAClock: CAClockRef, _ inListenerProc: CAClockListenerProc, _ inUserData: UnsafeMutableRawPointer) -> OSStatus
```

## See Also

### Adding and Removing Listeners

- [CAClockAddListener(\_:\_:\_:)](caclockaddlistener%28______%29.md)
- [CAClockListenerProc](caclocklistenerproc.md)
- [CAClockMessage](caclockmessage.md)

# CAClockRemoveListener (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```objectivec
extern OSStatus CAClockRemoveListener(CAClockRef inCAClock, CAClockListenerProc inListenerProc, void *inUserData);
```

## See Also

### Adding and Removing Listeners

- [CAClockAddListener](caclockaddlistener%28______%29.md)
- [CAClockListenerProc](caclocklistenerproc.md)
- [CAClockMessage](caclockmessage.md)
