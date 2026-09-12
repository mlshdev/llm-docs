> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/caclocksetproperty(_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/caclocksetproperty(_:_:_:_:))

# CAClockSetProperty(\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```swift
func CAClockSetProperty(_ inCAClock: CAClockRef, _ inPropertyID: CAClockPropertyID, _ inPropertyDataSize: UInt32, _ inPropertyData: UnsafeRawPointer) -> OSStatus
```

## See Also

### Accessing Clock Properties

- [CAClockGetProperty(\_:\_:\_:\_:)](caclockgetproperty%28________%29.md)
- [CAClockGetPropertyInfo(\_:\_:\_:\_:)](caclockgetpropertyinfo%28________%29.md)
- [CAClockPropertyID](caclockpropertyid.md)
- [CAClockSyncMode](caclocksyncmode.md)

# CAClockSetProperty (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```objectivec
extern OSStatus CAClockSetProperty(CAClockRef inCAClock, CAClockPropertyID inPropertyID, UInt32 inPropertyDataSize, const void *inPropertyData);
```

## See Also

### Accessing Clock Properties

- [CAClockGetProperty](caclockgetproperty%28________%29.md)
- [CAClockGetPropertyInfo](caclockgetpropertyinfo%28________%29.md)
- [CAClockPropertyID](caclockpropertyid.md)
- [CAClockSyncMode](caclocksyncmode.md)
