> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiotoolbox/caclocknew(_:_:)

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
