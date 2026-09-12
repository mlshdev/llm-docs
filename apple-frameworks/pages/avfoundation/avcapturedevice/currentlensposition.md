> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/currentlensposition](https://developer.apple.com/documentation/avfoundation/avcapturedevice/currentlensposition)

# currentLensPosition (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A constant that represents the current lens position.

## Declaration

```swift
class let currentLensPosition: Float
```

<a id="Discussion"></a>

## Discussion

Pass this value to the [setFocusModeLocked(lensPosition:completionHandler:)](setfocusmodelocked%28lensposition_completionhandler_%29.md) method to lock focus without changing the current lens position.

## See Also

### Setting focus manually

- [isLockingFocusWithCustomLensPositionSupported](islockingfocuswithcustomlenspositionsupported.md): A Boolean value that indicates whether the device supports locking focus to a specific lens position.
- [lensPosition](lensposition.md): The current focus position of the lens.
- [setFocusModeLocked(lensPosition:completionHandler:)](setfocusmodelocked%28lensposition_completionhandler_%29.md): Locks the lens position at the specified value, and sets the focus mode to a locked state.

# AVCaptureLensPositionCurrent (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A constant that represents the current lens position.

## Declaration

```objectivec
extern const float AVCaptureLensPositionCurrent;
```

<a id="Discussion"></a>

## Discussion

Pass this value to the [setFocusModeLockedWithLensPosition:completionHandler:](setfocusmodelocked%28lensposition_completionhandler_%29.md) method to lock focus without changing the current lens position.

## See Also

### Setting focus manually

- [lockingFocusWithCustomLensPositionSupported](islockingfocuswithcustomlenspositionsupported.md): A Boolean value that indicates whether the device supports locking focus to a specific lens position.
- [lensPosition](lensposition.md): The current focus position of the lens.
- [setFocusModeLockedWithLensPosition:completionHandler:](setfocusmodelocked%28lensposition_completionhandler_%29.md): Locks the lens position at the specified value, and sets the focus mode to a locked state.
