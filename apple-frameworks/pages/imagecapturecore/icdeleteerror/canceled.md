> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdeleteerror/canceled](https://developer.apple.com/documentation/imagecapturecore/icdeleteerror/canceled)

# canceled (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The deletion was canceled.

## Declaration

```swift
static let canceled: ICDeleteError
```

## See Also

### Reading a Deletion Error

- [deviceMissing](devicemissing.md): The deletion failed because the device could not be found.
- [fileMissing](filemissing.md): The deletion failed because the file could not be found.
- [readOnly](readonly.md): The deletion failed because the file had read-only permissions.

# ICDeleteErrorCanceled (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The deletion was canceled.

## Declaration

```objectivec
extern ICDeleteError const ICDeleteErrorCanceled;
```

## See Also

### Reading a Deletion Error

- [ICDeleteErrorDeviceMissing](devicemissing.md): The deletion failed because the device could not be found.
- [ICDeleteErrorFileMissing](filemissing.md): The deletion failed because the file could not be found.
- [ICDeleteErrorReadOnly](readonly.md): The deletion failed because the file had read-only permissions.
