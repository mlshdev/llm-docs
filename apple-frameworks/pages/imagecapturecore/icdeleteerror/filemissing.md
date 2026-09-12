> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdeleteerror/filemissing](https://developer.apple.com/documentation/imagecapturecore/icdeleteerror/filemissing)

# fileMissing (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The deletion failed because the file could not be found.

## Declaration

```swift
static let fileMissing: ICDeleteError
```

## See Also

### Reading a Deletion Error

- [canceled](canceled.md): The deletion was canceled.
- [deviceMissing](devicemissing.md): The deletion failed because the device could not be found.
- [readOnly](readonly.md): The deletion failed because the file had read-only permissions.

# ICDeleteErrorFileMissing (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The deletion failed because the file could not be found.

## Declaration

```objectivec
extern ICDeleteError const ICDeleteErrorFileMissing;
```

## See Also

### Reading a Deletion Error

- [ICDeleteErrorCanceled](canceled.md): The deletion was canceled.
- [ICDeleteErrorDeviceMissing](devicemissing.md): The deletion failed because the device could not be found.
- [ICDeleteErrorReadOnly](readonly.md): The deletion failed because the file had read-only permissions.
