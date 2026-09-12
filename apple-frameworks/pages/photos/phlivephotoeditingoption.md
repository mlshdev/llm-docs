> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phlivephotoeditingoption](https://developer.apple.com/documentation/photos/phlivephotoeditingoption)

# PHLivePhotoEditingOption (Swift)

**Framework:** Photos  
**Kind:** Structure  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Keys for the `options` dictionary used with the methods listed in Processing an Editing Context’s Live Photo.

## Declaration

```swift
struct PHLivePhotoEditingOption
```

## Topics

### Initializers

- [init(rawValue:)](phlivephotoeditingoption/init%28rawvalue_%29.md): Initializes a Live Photo editing option from its raw value.

### Type Properties

- [shouldRenderAtPlaybackTime](phlivephotoeditingoption/shouldrenderatplaybacktime.md): Specifies whether processing should occur during or before playback.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Processing an Editing Context’s Live Photo

- [saveLivePhoto(to:options:completionHandler:)](phlivephotoeditingcontext/savelivephoto%28to_options_completionhandler_%29.md): Processes and saves a full-quality Live Photo as the output of your editing session.
- [prepareLivePhotoForPlayback(withTargetSize:options:completionHandler:)](phlivephotoeditingcontext/preparelivephotoforplayback%28withtargetsize_options_completionhandler_%29.md): Processes a Live Photo with your edits for viewing.
- [cancel()](phlivephotoeditingcontext/cancel%28%29.md): Aborts any Live Photo processing in progress.

# PHLivePhotoEditingOption (Objective-C)

**Framework:** Photos  
**Kind:** Type Alias  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Keys for the `options` dictionary used with the methods listed in Processing an Editing Context’s Live Photo.

## Declaration

```objectivec
typedef NSString * const PHLivePhotoEditingOption;
```

## Topics

### Type Properties

- [PHLivePhotoShouldRenderAtPlaybackTime](phlivephotoeditingoption/shouldrenderatplaybacktime.md): Specifies whether processing should occur during or before playback.

## See Also

### Processing an Editing Context’s Live Photo

- [saveLivePhotoToOutput:options:completionHandler:](phlivephotoeditingcontext/savelivephoto%28to_options_completionhandler_%29.md): Processes and saves a full-quality Live Photo as the output of your editing session.
- [prepareLivePhotoForPlaybackWithTargetSize:options:completionHandler:](phlivephotoeditingcontext/preparelivephotoforplayback%28withtargetsize_options_completionhandler_%29.md): Processes a Live Photo with your edits for viewing.
- [cancel](phlivephotoeditingcontext/cancel%28%29.md): Aborts any Live Photo processing in progress.
