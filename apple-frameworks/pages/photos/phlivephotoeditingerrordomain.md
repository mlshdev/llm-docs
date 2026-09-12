> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phlivephotoeditingerrordomain](https://developer.apple.com/documentation/photos/phlivephotoeditingerrordomain)

# PHLivePhotoEditingErrorDomain (Swift)

**Framework:** Photos  
**Kind:** Global Variable  
**Availability:** macOS 10.12+ (deprecated in 10.15)

The domain value for error objects produced by a Live Photo editing context.

## Declaration

```swift
let PHLivePhotoEditingErrorDomain: String
```

<a id="Discussion"></a>

## Discussion

This domain appears for errors in the completion handlers of the [init(livePhotoEditingInput:)](phlivephotoeditingcontext/init%28livephotoeditinginput_%29.md) and [saveLivePhoto(to:options:completionHandler:)](phlivephotoeditingcontext/savelivephoto%28to_options_completionhandler_%29.md) methods.

## See Also

### Errors

- [PHLivePhotoEditingErrorCode](phlivephotoeditingerrorcode.md): Error codes for Live Photo editing errors.

# PHLivePhotoEditingErrorDomain (Objective-C)

**Framework:** Photos  
**Kind:** Global Variable  
**Availability:** macOS 10.12+ (deprecated in 10.15)

The domain value for error objects produced by a Live Photo editing context.

## Declaration

```objectivec
extern NSString * const PHLivePhotoEditingErrorDomain;
```

<a id="Discussion"></a>

## Discussion

This domain appears for errors in the completion handlers of the [initWithLivePhotoEditingInput:](phlivephotoeditingcontext/init%28livephotoeditinginput_%29.md) and [saveLivePhotoToOutput:options:completionHandler:](phlivephotoeditingcontext/savelivephoto%28to_options_completionhandler_%29.md) methods.

## See Also

### Errors

- [PHLivePhotoEditingErrorCode](phlivephotoeditingerrorcode.md): Error codes for Live Photo editing errors.
