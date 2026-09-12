> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesessioninterruptionreasonkey](https://developer.apple.com/documentation/avfoundation/avcapturesessioninterruptionreasonkey)

# AVCaptureSessionInterruptionReasonKey (Swift)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 1.0+

Key to retrieve information about a capture interruption from a [wasInterruptedNotification](avcapturesession/wasinterruptednotification.md) user info dictionary.

## Declaration

```swift
let AVCaptureSessionInterruptionReasonKey: String
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../foundation/nsnumber.md) object containing a [AVCaptureSession.InterruptionReason](avcapturesession/interruptionreason.md) value.

## See Also

### User-infomation keys

- [AVCaptureSessionInterruptionSystemPressureStateKey](avcapturesessioninterruptionsystempressurestatekey.md): A key to retrieve a state value that indicates the system pressure level and contributing factors that caused the interruption.
- [AVCaptureSession.InterruptionReason](avcapturesession/interruptionreason.md): Constants identifying the reason a capture session was interrupted, found in an [wasInterruptedNotification](avcapturesession/wasinterruptednotification.md) user info dictionary.

# AVCaptureSessionInterruptionReasonKey (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 1.0+

Key to retrieve information about a capture interruption from a [AVCaptureSessionWasInterruptedNotification](avcapturesession/wasinterruptednotification.md) user info dictionary.

## Declaration

```objectivec
extern NSString * const AVCaptureSessionInterruptionReasonKey;
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../foundation/nsnumber.md) object containing a [AVCaptureSessionInterruptionReason](avcapturesession/interruptionreason.md) value.

## See Also

### User-infomation keys

- [AVCaptureSessionInterruptionSystemPressureStateKey](avcapturesessioninterruptionsystempressurestatekey.md): A key to retrieve a state value that indicates the system pressure level and contributing factors that caused the interruption.
- [AVCaptureSessionInterruptionReason](avcapturesession/interruptionreason.md): Constants identifying the reason a capture session was interrupted, found in an [AVCaptureSessionWasInterruptedNotification](avcapturesession/wasinterruptednotification.md) user info dictionary.
