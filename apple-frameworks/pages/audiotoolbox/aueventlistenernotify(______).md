> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/aueventlistenernotify(_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/aueventlistenernotify(_:_:_:))

# AUEventListenerNotify(\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```swift
func AUEventListenerNotify(_ inSendingListener: AUEventListenerRef?, _ inSendingObject: UnsafeMutableRawPointer?, _ inEvent: UnsafePointer<AudioUnitEvent>) -> OSStatus
```

## See Also

### Responding to Events

- [AUEventListenerCreateWithDispatchQueue(\_:\_:\_:\_:\_:)](aueventlistenercreatewithdispatchqueue%28__________%29.md)
- [AUEventListenerCreate(\_:\_:\_:\_:\_:\_:\_:)](aueventlistenercreate%28______________%29.md)
- [AUListenerDispose(\_:)](aulistenerdispose%28__%29.md)
- [AUEventListenerAddEventType(\_:\_:\_:)](aueventlisteneraddeventtype%28______%29.md)
- [AUEventListenerRemoveEventType(\_:\_:\_:)](aueventlistenerremoveeventtype%28______%29.md)
- [AUListenerAddParameter(\_:\_:\_:)](aulisteneraddparameter%28______%29.md)
- [AUListenerRemoveParameter(\_:\_:\_:)](aulistenerremoveparameter%28______%29.md)
- [AUEventListenerBlock](aueventlistenerblock.md)

# AUEventListenerNotify (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```objectivec
extern OSStatus AUEventListenerNotify(AUEventListenerRef inSendingListener, void *inSendingObject, const AudioUnitEvent *inEvent);
```

## See Also

### Responding to Events

- [AUEventListenerCreateWithDispatchQueue](aueventlistenercreatewithdispatchqueue%28__________%29.md)
- [AUEventListenerCreate](aueventlistenercreate%28______________%29.md)
- [AUListenerDispose](aulistenerdispose%28__%29.md)
- [AUEventListenerAddEventType](aueventlisteneraddeventtype%28______%29.md)
- [AUEventListenerRemoveEventType](aueventlistenerremoveeventtype%28______%29.md)
- [AUListenerAddParameter](aulisteneraddparameter%28______%29.md)
- [AUListenerRemoveParameter](aulistenerremoveparameter%28______%29.md)
- [AUEventListenerBlock](aueventlistenerblock.md)
