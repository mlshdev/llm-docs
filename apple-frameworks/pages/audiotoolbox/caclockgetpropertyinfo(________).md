> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/caclockgetpropertyinfo(_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/caclockgetpropertyinfo(_:_:_:_:))

# CAClockGetPropertyInfo(\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```swift
func CAClockGetPropertyInfo(_ inCAClock: CAClockRef, _ inPropertyID: CAClockPropertyID, _ outSize: UnsafeMutablePointer<UInt32>?, _ outWritable: UnsafeMutablePointer<DarwinBoolean>?) -> OSStatus
```

## See Also

### Accessing Clock Properties

- [CAClockGetProperty(\_:\_:\_:\_:)](caclockgetproperty%28________%29.md)
- [CAClockSetProperty(\_:\_:\_:\_:)](caclocksetproperty%28________%29.md)
- [CAClockPropertyID](caclockpropertyid.md)
- [CAClockSyncMode](caclocksyncmode.md)

# CAClockGetPropertyInfo (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```objectivec
extern OSStatus CAClockGetPropertyInfo(CAClockRef inCAClock, CAClockPropertyID inPropertyID, UInt32 *outSize, Boolean *outWritable);
```

## See Also

### Accessing Clock Properties

- [CAClockGetProperty](caclockgetproperty%28________%29.md)
- [CAClockSetProperty](caclocksetproperty%28________%29.md)
- [CAClockPropertyID](caclockpropertyid.md)
- [CAClockSyncMode](caclocksyncmode.md)
