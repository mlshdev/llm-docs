> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/caclocknew(_:_:)](https://developer.apple.com/documentation/audiotoolbox/caclocknew(_:_:))

# CAClockNew(\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```swift
func CAClockNew(_ inReservedFlags: UInt32, _ outCAClock: UnsafeMutablePointer<CAClockRef?>) -> OSStatus
```

## See Also

### Creating a Clock

- [CAClockDispose(\_:)](caclockdispose%28__%29.md)
- [CAClockRef](caclockref.md)

# CAClockNew (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```objectivec
extern OSStatus CAClockNew(UInt32 inReservedFlags, CAClockRef*outCAClock);
```

## See Also

### Creating a Clock

- [CAClockDispose](caclockdispose%28__%29.md)
- [CAClockRef](caclockref.md)
