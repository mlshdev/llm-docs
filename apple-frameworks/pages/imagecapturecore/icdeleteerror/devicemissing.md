> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdeleteerror/devicemissing](https://developer.apple.com/documentation/imagecapturecore/icdeleteerror/devicemissing)

# deviceMissing (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The deletion failed because the device could not be found.

## Declaration

```swift
static let deviceMissing: ICDeleteError
```

## See Also

### Reading a Deletion Error

- [canceled](canceled.md): The deletion was canceled.
- [fileMissing](filemissing.md): The deletion failed because the file could not be found.
- [readOnly](readonly.md): The deletion failed because the file had read-only permissions.

# ICDeleteErrorDeviceMissing (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The deletion failed because the device could not be found.

## Declaration

```objectivec
extern ICDeleteError const ICDeleteErrorDeviceMissing;
```

## See Also

### Reading a Deletion Error

- [ICDeleteErrorCanceled](canceled.md): The deletion was canceled.
- [ICDeleteErrorFileMissing](filemissing.md): The deletion failed because the file could not be found.
- [ICDeleteErrorReadOnly](readonly.md): The deletion failed because the file had read-only permissions.
