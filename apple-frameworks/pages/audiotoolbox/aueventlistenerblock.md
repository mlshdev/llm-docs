> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/aueventlistenerblock](https://developer.apple.com/documentation/audiotoolbox/aueventlistenerblock)

# AUEventListenerBlock (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
typealias AUEventListenerBlock = (UnsafeMutableRawPointer?, UnsafePointer<AudioUnitEvent>, UInt64, AudioUnitParameterValue) -> Void
```

## See Also

### Responding to Events

- [AUEventListenerCreateWithDispatchQueue(\_:\_:\_:\_:\_:)](aueventlistenercreatewithdispatchqueue%28__________%29.md)
- [AUEventListenerCreate(\_:\_:\_:\_:\_:\_:\_:)](aueventlistenercreate%28______________%29.md)
- [AUListenerDispose(\_:)](aulistenerdispose%28__%29.md)
- [AUEventListenerNotify(\_:\_:\_:)](aueventlistenernotify%28______%29.md)
- [AUEventListenerAddEventType(\_:\_:\_:)](aueventlisteneraddeventtype%28______%29.md)
- [AUEventListenerRemoveEventType(\_:\_:\_:)](aueventlistenerremoveeventtype%28______%29.md)
- [AUListenerAddParameter(\_:\_:\_:)](aulisteneraddparameter%28______%29.md)
- [AUListenerRemoveParameter(\_:\_:\_:)](aulistenerremoveparameter%28______%29.md)

# AUEventListenerBlock (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```objectivec
typedef void (^)(void *, const struct AudioUnitEvent *, unsigned long long, float) AUEventListenerBlock;
```

## See Also

### Responding to Events

- [AUEventListenerCreateWithDispatchQueue](aueventlistenercreatewithdispatchqueue%28__________%29.md)
- [AUEventListenerCreate](aueventlistenercreate%28______________%29.md)
- [AUListenerDispose](aulistenerdispose%28__%29.md)
- [AUEventListenerNotify](aueventlistenernotify%28______%29.md)
- [AUEventListenerAddEventType](aueventlisteneraddeventtype%28______%29.md)
- [AUEventListenerRemoveEventType](aueventlistenerremoveeventtype%28______%29.md)
- [AUListenerAddParameter](aulisteneraddparameter%28______%29.md)
- [AUListenerRemoveParameter](aulistenerremoveparameter%28______%29.md)
