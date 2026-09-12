> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/roomcapturesessiondelegate](https://developer.apple.com/documentation/roomplan/roomcapturesessiondelegate)

# RoomCaptureSessionDelegate

**Framework:** RoomPlan  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

A specification of important events in the room-scanning process.

## Declaration

```swift
protocol RoomCaptureSessionDelegate : AnyObject
```

## Mentioned In

- [Scanning the rooms of a single structure](scanning-the-rooms-of-a-single-structure.md)

<a id="overview"></a>

## Overview

The room-capture session’s [delegate](roomcapturesession/delegate.md) property is of this type.

## Topics

### Beginning a session

- [captureSession(\_:didStartWith:)](roomcapturesessiondelegate/capturesession%28__didstartwith_%29.md): Notifies the delegate when the session starts.

### Updating a session

- [captureSession(\_:didAdd:)](roomcapturesessiondelegate/capturesession%28__didadd_%29.md): Notifies the delegate of newly added surfaces and objects.
- [captureSession(\_:didRemove:)](roomcapturesessiondelegate/capturesession%28__didremove_%29.md): Notifies the delegate when the session removes surfaces and objects.
- [captureSession(\_:didChange:)](roomcapturesessiondelegate/capturesession%28__didchange_%29.md): Notifies the delegate when the session changes the dimensions and the transform properties of surfaces and objects.
- [captureSession(\_:didUpdate:)](roomcapturesessiondelegate/capturesession%28__didupdate_%29.md): Notifies the delegate when the session updates the scan results.

### Coaching the user

- [captureSession(\_:didProvide:)](roomcapturesessiondelegate/capturesession%28__didprovide_%29.md): Notifies the delegate of an instruction to display to the user.

### Completing a session

- [captureSession(\_:didEndWith:error:)](roomcapturesessiondelegate/capturesession%28__didendwith_error_%29.md): Notifies the delegate of completion with either scan results or an error.

### Default implementations

- [captureSession(\_:didStartWith:)](roomcapturesessiondelegate/capturesession%28__didstartwith_%29-3c74n.md): Provides a default, blank implementation for when the session starts.
- [captureSession(\_:didUpdate:)](roomcapturesessiondelegate/capturesession%28__didupdate_%29-77zyg.md): Provides a default, blank implementation for when the session updates surfaces and objects during a scan.
- [captureSession(\_:didRemove:)](roomcapturesessiondelegate/capturesession%28__didremove_%29-9gs76.md): Provides a default, blank implementation for when the session removes surfaces and objects.
- [captureSession(\_:didChange:)](roomcapturesessiondelegate/capturesession%28__didchange_%29-gv3t.md): Provides a default, blank implementation for when the capture session updates the dimensions and the transform properties during a scan.
- [captureSession(\_:didProvide:)](roomcapturesessiondelegate/capturesession%28__didprovide_%29-5hvhl.md): Provides a default, blank implementation for when the capture session provides a user instruction.
- [captureSession(\_:didEndWith:error:)](roomcapturesessiondelegate/capturesession%28__didendwith_error_%29-5f0mc.md): Provides a default, blank implementation for when the capture session provides raw scan results.

## See Also

### Scanning Protocol

- [RoomCaptureSession](roomcapturesession.md): An object that manages the room-scanning process.
