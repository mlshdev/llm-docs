> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avkiterror-swift.struct/code](https://developer.apple.com/documentation/avkit/avkiterror-swift.struct/code)

# AVKitError.Code (Swift)

**Framework:** AVKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Constants that identify framework error codes.

## Declaration

```swift
enum Code
```

## Topics

### Creating an error code

- [init(rawValue:)](code/init%28rawvalue_%29.md)

### Error Codes

- [AVKitError.Code.unknown](code/unknown.md): An unknown error.
- [AVKitError.Code.contentRatingUnknown](code/contentratingunknown.md): The media content rating is missing or unrecognized.
- [AVKitError.Code.contentDisallowedByPasscode](code/contentdisallowedbypasscode.md): A restriction disallows access to this content, but the user can override the restriction by entering the device passcode.
- [AVKitError.Code.pictureInPictureStartFailed](code/pictureinpicturestartfailed.md): The system failed to start Picture in Picture.
- [AVKitError.Code.contentDisallowedByProfile](code/contentdisallowedbyprofile.md): An installed profile restricts access to this content.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [AVKitErrorDomain](../avkiterrordomain.md): The domain of errors the framework generates.
- [AVKitError](../avkiterror-swift.struct.md): A structure that represents a framework error.

# AVKitError (Objective-C)

**Framework:** AVKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Constants that identify framework error codes.

## Declaration

```objectivec
enum AVKitError : NSInteger;
```

## Topics

### Error Codes

- [AVKitErrorUnknown](code/unknown.md): An unknown error.
- [AVKitErrorContentRatingUnknown](code/contentratingunknown.md): The media content rating is missing or unrecognized.
- [AVKitErrorContentDisallowedByPasscode](code/contentdisallowedbypasscode.md): A restriction disallows access to this content, but the user can override the restriction by entering the device passcode.
- [AVKitErrorPictureInPictureStartFailed](code/pictureinpicturestartfailed.md): The system failed to start Picture in Picture.
- [AVKitErrorContentDisallowedByProfile](code/contentdisallowedbyprofile.md): An installed profile restricts access to this content.

### Enumeration Cases

- [AVKitErrorRecordingFailed](../avkiterror-c.enum/avkiterrorrecordingfailed.md)

## See Also

### Errors

- [AVKitErrorDomain](../avkiterrordomain.md): The domain of errors the framework generates.
