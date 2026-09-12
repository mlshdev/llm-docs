> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/aueventlistenercreate(_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/aueventlistenercreate(_:_:_:_:_:_:_:))

# AUEventListenerCreate(\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```swift
func AUEventListenerCreate(_ inProc: AUEventListenerProc, _ inUserData: UnsafeMutableRawPointer?, _ inRunLoop: CFRunLoop?, _ inRunLoopMode: CFString?, _ inNotificationInterval: Float32, _ inValueChangeGranularity: Float32, _ outListener: UnsafeMutablePointer<AUEventListenerRef?>) -> OSStatus
```

## See Also

### Responding to Events

- [AUEventListenerCreateWithDispatchQueue(\_:\_:\_:\_:\_:)](aueventlistenercreatewithdispatchqueue%28__________%29.md)
- [AUListenerDispose(\_:)](aulistenerdispose%28__%29.md)
- [AUEventListenerNotify(\_:\_:\_:)](aueventlistenernotify%28______%29.md)
- [AUEventListenerAddEventType(\_:\_:\_:)](aueventlisteneraddeventtype%28______%29.md)
- [AUEventListenerRemoveEventType(\_:\_:\_:)](aueventlistenerremoveeventtype%28______%29.md)
- [AUListenerAddParameter(\_:\_:\_:)](aulisteneraddparameter%28______%29.md)
- [AUListenerRemoveParameter(\_:\_:\_:)](aulistenerremoveparameter%28______%29.md)
- [AUEventListenerBlock](aueventlistenerblock.md)

# AUEventListenerCreate (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```objectivec
extern OSStatus AUEventListenerCreate(AUEventListenerProc inProc, void *inUserData, CFRunLoopRef inRunLoop, CFStringRef inRunLoopMode, Float32 inNotificationInterval, Float32 inValueChangeGranularity, AUEventListenerRef*outListener);
```

## See Also

### Responding to Events

- [AUEventListenerCreateWithDispatchQueue](aueventlistenercreatewithdispatchqueue%28__________%29.md)
- [AUListenerDispose](aulistenerdispose%28__%29.md)
- [AUEventListenerNotify](aueventlistenernotify%28______%29.md)
- [AUEventListenerAddEventType](aueventlisteneraddeventtype%28______%29.md)
- [AUEventListenerRemoveEventType](aueventlistenerremoveeventtype%28______%29.md)
- [AUListenerAddParameter](aulisteneraddparameter%28______%29.md)
- [AUListenerRemoveParameter](aulistenerremoveparameter%28______%29.md)
- [AUEventListenerBlock](aueventlistenerblock.md)
