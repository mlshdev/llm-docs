> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcaptureerror](https://developer.apple.com/documentation/metal/mtlcaptureerror)

# MTLCaptureError (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Errors returned by capture sessions.

## Declaration

```swift
enum MTLCaptureError
```

## Topics

### Errors

- [MTLCaptureError.alreadyCapturing](mtlcaptureerror/alreadycapturing.md): A capture error that indicates the session is already in progress.
- [MTLCaptureError.invalidDescriptor](mtlcaptureerror/invaliddescriptor.md): A capture error that indicates your descriptor has invalid properties.
- [MTLCaptureError.notSupported](mtlcaptureerror/notsupported.md): A capture error that indicates the capture options you’re requesting aren’t available.

### Initializers

- [init(rawValue:)](mtlcaptureerror/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Capture errors

- [MTLCaptureErrorDomain](mtlcaptureerrordomain.md): The error domain for capture errors.

# MTLCaptureError (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Errors returned by capture sessions.

## Declaration

```objectivec
enum MTLCaptureError : NSInteger;
```

## Topics

### Errors

- [MTLCaptureErrorAlreadyCapturing](mtlcaptureerror/alreadycapturing.md): A capture error that indicates the session is already in progress.
- [MTLCaptureErrorInvalidDescriptor](mtlcaptureerror/invaliddescriptor.md): A capture error that indicates your descriptor has invalid properties.
- [MTLCaptureErrorNotSupported](mtlcaptureerror/notsupported.md): A capture error that indicates the capture options you’re requesting aren’t available.

## See Also

### Capture errors

- [MTLCaptureErrorDomain](mtlcaptureerrordomain.md): The error domain for capture errors.
