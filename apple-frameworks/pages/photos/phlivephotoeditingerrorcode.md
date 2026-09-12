> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phlivephotoeditingerrorcode](https://developer.apple.com/documentation/photos/phlivephotoeditingerrorcode)

# PHLivePhotoEditingErrorCode (Swift)

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** macOS 10.12+

Error codes for Live Photo editing errors.

## Declaration

```swift
enum PHLivePhotoEditingErrorCode
```

<a id="overview"></a>

## Overview

These error codes appear for errors in the completion handlers of the [init(livePhotoEditingInput:)](phlivephotoeditingcontext/init%28livephotoeditinginput_%29.md) and [saveLivePhoto(to:options:completionHandler:)](phlivephotoeditingcontext/savelivephoto%28to_options_completionhandler_%29.md) methods.

## Topics

### Constants

- [PHLivePhotoEditingErrorCode.unknown](phlivephotoeditingerrorcode/unknown.md): Deprecated. No further information is available about the cause of the error.
- [PHLivePhotoEditingErrorCode.aborted](phlivephotoeditingerrorcode/aborted.md): Deprecated. Live Photo processing was canceled by the Processing an Editing Context’s Live Photo method.

### Initializers

- [init(rawValue:)](phlivephotoeditingerrorcode/init%28rawvalue_%29.md)

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

- [PHLivePhotoEditingErrorDomain](phlivephotoeditingerrordomain.md): Deprecated. The domain value for error objects produced by a Live Photo editing context.

# PHLivePhotoEditingErrorCode (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** macOS 10.12+

Error codes for Live Photo editing errors.

## Declaration

```objectivec
enum PHLivePhotoEditingErrorCode : NSInteger;
```

<a id="overview"></a>

## Overview

These error codes appear for errors in the completion handlers of the [initWithLivePhotoEditingInput:](phlivephotoeditingcontext/init%28livephotoeditinginput_%29.md) and [saveLivePhotoToOutput:options:completionHandler:](phlivephotoeditingcontext/savelivephoto%28to_options_completionhandler_%29.md) methods.

## Topics

### Constants

- [PHLivePhotoEditingErrorCodeUnknown](phlivephotoeditingerrorcode/unknown.md): Deprecated. No further information is available about the cause of the error.
- [PHLivePhotoEditingErrorCodeAborted](phlivephotoeditingerrorcode/aborted.md): Deprecated. Live Photo processing was canceled by the Processing an Editing Context’s Live Photo method.

## See Also

### Errors

- [PHLivePhotoEditingErrorDomain](phlivephotoeditingerrordomain.md): Deprecated. The domain value for error objects produced by a Live Photo editing context.
