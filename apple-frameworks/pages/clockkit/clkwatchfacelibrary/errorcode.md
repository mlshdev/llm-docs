> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkwatchfacelibrary/errorcode](https://developer.apple.com/documentation/clockkit/clkwatchfacelibrary/errorcode)

# CLKWatchFaceLibrary.ErrorCode (Swift)

**Framework:** ClockKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.0+

Error codes that the watch face library returns.

## Declaration

```swift
enum ErrorCode
```

## Topics

### Errors

- [CLKWatchFaceLibrary.ErrorCode.notFileURL](errorcode/notfileurl.md): No file was found at the specified URL.
- [CLKWatchFaceLibrary.ErrorCode.invalidFile](errorcode/invalidfile.md): The specified file wasn’t a valid watch face file.
- [CLKWatchFaceLibrary.ErrorCode.permissionDenied](errorcode/permissiondenied.md): The app does not have permission to read the specified file.
- [CLKWatchFaceLibrary.ErrorCode.faceNotAvailable](errorcode/facenotavailable.md): The watch face is not available on this device.
- [CLKWatchFaceLibrary.ErrorCode.notFileURL](errorcode/notfileurl.md): No file was found at the specified URL.
- [CLKWatchFaceLibrary.ErrorCode.invalidFile](errorcode/invalidfile.md): The specified file wasn’t a valid watch face file.
- [CLKWatchFaceLibrary.ErrorCode.permissionDenied](errorcode/permissiondenied.md): The app does not have permission to read the specified file.
- [CLKWatchFaceLibrary.ErrorCode.faceNotAvailable](errorcode/facenotavailable.md): The watch face is not available on this device.

### Enumeration Cases

- [CLKWatchFaceLibrary.ErrorCode.noURL](errorcode/nourl.md)

### Initializers

- [init(rawValue:)](errorcode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling Errors

- [ErrorDomain](errordomain.md): The domain for errors while importing watch faces.

# CLKWatchFaceLibraryErrorCode (Objective-C)

**Framework:** ClockKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.0+

Error codes that the watch face library returns.

## Declaration

```objectivec
enum CLKWatchFaceLibraryErrorCode : NSInteger;
```

## Topics

### Errors

- [CLKWatchFaceLibraryErrorCodeNotFileURL](errorcode/notfileurl.md): No file was found at the specified URL.
- [CLKWatchFaceLibraryErrorCodeInvalidFile](errorcode/invalidfile.md): The specified file wasn’t a valid watch face file.
- [CLKWatchFaceLibraryErrorCodePermissionDenied](errorcode/permissiondenied.md): The app does not have permission to read the specified file.
- [CLKWatchFaceLibraryErrorCodeFaceNotAvailable](errorcode/facenotavailable.md): The watch face is not available on this device.
- [CLKWatchFaceLibraryErrorCodeNotFileURL](errorcode/notfileurl.md): No file was found at the specified URL.
- [CLKWatchFaceLibraryErrorCodeInvalidFile](errorcode/invalidfile.md): The specified file wasn’t a valid watch face file.
- [CLKWatchFaceLibraryErrorCodePermissionDenied](errorcode/permissiondenied.md): The app does not have permission to read the specified file.
- [CLKWatchFaceLibraryErrorCodeFaceNotAvailable](errorcode/facenotavailable.md): The watch face is not available on this device.

### Enumeration Cases

- [CLKWatchFaceLibraryErrorCodeNoURL](errorcode/nourl.md)

## See Also

### Handling Errors

- [CLKWatchFaceLibraryErrorDomain](errordomain.md): The domain for errors while importing watch faces.
