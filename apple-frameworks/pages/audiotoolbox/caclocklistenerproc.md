> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/caclocklistenerproc](https://developer.apple.com/documentation/audiotoolbox/caclocklistenerproc)

# CAClockListenerProc (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** macOS

## Declaration

```swift
typealias CAClockListenerProc = (UnsafeMutableRawPointer, CAClockMessage, UnsafeRawPointer) -> Void
```

## See Also

### Adding and Removing Listeners

- [CAClockAddListener(\_:\_:\_:)](caclockaddlistener%28______%29.md)
- [CAClockRemoveListener(\_:\_:\_:)](caclockremovelistener%28______%29.md)
- [CAClockMessage](caclockmessage.md)

# CAClockListenerProc (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** macOS

## Declaration

```objectivec
typedef void (*)(void *, enum CAClockMessage, const void *) CAClockListenerProc;
```

## See Also

### Adding and Removing Listeners

- [CAClockAddListener](caclockaddlistener%28______%29.md)
- [CAClockRemoveListener](caclockremovelistener%28______%29.md)
- [CAClockMessage](caclockmessage.md)
