> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdeleteerror/readonly](https://developer.apple.com/documentation/imagecapturecore/icdeleteerror/readonly)

# readOnly (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The deletion failed because the file had read-only permissions.

## Declaration

```swift
static let readOnly: ICDeleteError
```

## See Also

### Reading a Deletion Error

- [canceled](canceled.md): The deletion was canceled.
- [deviceMissing](devicemissing.md): The deletion failed because the device could not be found.
- [fileMissing](filemissing.md): The deletion failed because the file could not be found.

# ICDeleteErrorReadOnly (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The deletion failed because the file had read-only permissions.

## Declaration

```objectivec
extern ICDeleteError const ICDeleteErrorReadOnly;
```

## See Also

### Reading a Deletion Error

- [ICDeleteErrorCanceled](canceled.md): The deletion was canceled.
- [ICDeleteErrorDeviceMissing](devicemissing.md): The deletion failed because the device could not be found.
- [ICDeleteErrorFileMissing](filemissing.md): The deletion failed because the file could not be found.
