> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/caclockgetproperty(_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/caclockgetproperty(_:_:_:_:))

# CAClockGetProperty(\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```swift
func CAClockGetProperty(_ inCAClock: CAClockRef, _ inPropertyID: CAClockPropertyID, _ ioPropertyDataSize: UnsafeMutablePointer<UInt32>, _ outPropertyData: UnsafeMutableRawPointer) -> OSStatus
```

## See Also

### Accessing Clock Properties

- [CAClockGetPropertyInfo(\_:\_:\_:\_:)](caclockgetpropertyinfo%28________%29.md)
- [CAClockSetProperty(\_:\_:\_:\_:)](caclocksetproperty%28________%29.md)
- [CAClockPropertyID](caclockpropertyid.md)
- [CAClockSyncMode](caclocksyncmode.md)

# CAClockGetProperty (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```objectivec
extern OSStatus CAClockGetProperty(CAClockRef inCAClock, CAClockPropertyID inPropertyID, UInt32 *ioPropertyDataSize, void *outPropertyData);
```

## See Also

### Accessing Clock Properties

- [CAClockGetPropertyInfo](caclockgetpropertyinfo%28________%29.md)
- [CAClockSetProperty](caclocksetproperty%28________%29.md)
- [CAClockPropertyID](caclockpropertyid.md)
- [CAClockSyncMode](caclocksyncmode.md)
