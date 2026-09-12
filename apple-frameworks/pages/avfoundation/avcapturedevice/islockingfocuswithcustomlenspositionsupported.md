> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/islockingfocuswithcustomlenspositionsupported](https://developer.apple.com/documentation/avfoundation/avcapturedevice/islockingfocuswithcustomlenspositionsupported)

# isLockingFocusWithCustomLensPositionSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the device supports locking focus to a specific lens position.

## Declaration

```swift
var isLockingFocusWithCustomLensPositionSupported: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If this property’s value is [false](https://developer.apple.com/documentation/swift/false), calling the [setFocusModeLocked(lensPosition:completionHandler:)](setfocusmodelocked%28lensposition_completionhandler_%29.md) method with a lens position value other than [currentLensPosition](currentlensposition.md) raises an exception.

## See Also

### Setting focus manually

- [lensPosition](lensposition.md): The current focus position of the lens.
- [currentLensPosition](currentlensposition.md): A constant that represents the current lens position.
- [setFocusModeLocked(lensPosition:completionHandler:)](setfocusmodelocked%28lensposition_completionhandler_%29.md): Locks the lens position at the specified value, and sets the focus mode to a locked state.

# lockingFocusWithCustomLensPositionSupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the device supports locking focus to a specific lens position.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isLockingFocusWithCustomLensPositionSupported) BOOL lockingFocusWithCustomLensPositionSupported;
```

<a id="Discussion"></a>

## Discussion

If this property’s value is [false](https://developer.apple.com/documentation/swift/false), calling the [setFocusModeLockedWithLensPosition:completionHandler:](setfocusmodelocked%28lensposition_completionhandler_%29.md) method with a lens position value other than [AVCaptureLensPositionCurrent](currentlensposition.md) raises an exception.

## See Also

### Setting focus manually

- [lensPosition](lensposition.md): The current focus position of the lens.
- [AVCaptureLensPositionCurrent](currentlensposition.md): A constant that represents the current lens position.
- [setFocusModeLockedWithLensPosition:completionHandler:](setfocusmodelocked%28lensposition_completionhandler_%29.md): Locks the lens position at the specified value, and sets the focus mode to a locked state.
