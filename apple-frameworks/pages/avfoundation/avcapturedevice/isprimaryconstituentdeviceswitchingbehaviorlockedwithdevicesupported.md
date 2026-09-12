> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/isprimaryconstituentdeviceswitchingbehaviorlockedwithdevicesupported](https://developer.apple.com/documentation/avfoundation/avcapturedevice/isprimaryconstituentdeviceswitchingbehaviorlockedwithdevicesupported)

# isPrimaryConstituentDeviceSwitchingBehaviorLockedWithDeviceSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Whether locking to a particular primary constituent device is supported.

## Declaration

```swift
var isPrimaryConstituentDeviceSwitchingBehaviorLockedWithDeviceSupported: Bool { get }
```

<a id="discussion"></a>

## Discussion

This property returns `true` if [setPrimaryConstituentDeviceSwitchingBehaviorLockedWith(\_:)](setprimaryconstituentdeviceswitchingbehaviorlockedwith%28__%29.md) is supported.

# primaryConstituentDeviceSwitchingBehaviorLockedWithDeviceSupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Whether locking to a particular primary constituent device is supported.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isPrimaryConstituentDeviceSwitchingBehaviorLockedWithDeviceSupported) BOOL primaryConstituentDeviceSwitchingBehaviorLockedWithDeviceSupported;
```

<a id="discussion"></a>

## Discussion

This property returns `true` if [setPrimaryConstituentDeviceSwitchingBehaviorLockedWithDevice:](setprimaryconstituentdeviceswitchingbehaviorlockedwith%28__%29.md) is supported.
