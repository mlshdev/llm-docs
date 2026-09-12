> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/setcategory(_:mode:policy:options:)](https://developer.apple.com/documentation/avfaudio/avaudiosession/setcategory(_:mode:policy:options:))

# setCategory(\_:mode:policy:options:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 5.0+

Sets the session category, mode, route-sharing policy, and options.

## Declaration

```swift
func setCategory(_ category: AVAudioSession.Category, mode: AVAudioSession.Mode, policy: AVAudioSession.RouteSharingPolicy, options: AVAudioSession.CategoryOptions = []) throws
```

## Parameters

- `category`: The category to apply to the audio session. See [AVAudioSession.Category](category-swift.struct.md) for supported category values.
- `mode`: The audio session mode to apply to the audio session. For a list of values, see [AVAudioSession.Mode](mode-swift.struct.md).
- `policy`: The route-sharing policy to apply to the audio session. For a list of values, see [AVAudioSession.RouteSharingPolicy](routesharingpolicy-swift.enum.md).
- `options`: A mask of additional options for handling audio. For a list of constants, see [AVAudioSession.CategoryOptions](categoryoptions-swift.struct.md).

<a id="discussion"></a>

## Discussion

You specify options only with a default routing policy. With a long-form route-sharing policy, you can use the [playback](category-swift.struct/playback.md) category and the [default](mode-swift.struct/default.md), [moviePlayback](mode-swift.struct/movieplayback.md), and [spokenAudio](mode-swift.struct/spokenaudio.md) modes.

## See Also

### Configuring standard audio behaviors

- [setCategory(\_:mode:options:)](setcategory%28__mode_options_%29.md): Sets the audio session’s category, mode, and options.
- [setCategory(\_:options:)](setcategory%28__options_%29.md): Sets the audio session’s category with the specified options.
- [setCategory(\_:)](setcategory%28__%29.md): Sets the audio session’s category.
- [setMode(\_:)](setmode%28__%29.md): Sets the audio session’s mode.

# setCategory:mode:routeSharingPolicy:options:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 5.0+

Sets the session category, mode, route-sharing policy, and options.

## Declaration

```objectivec
- (BOOL) setCategory:(AVAudioSessionCategory) category mode:(AVAudioSessionMode) mode routeSharingPolicy:(AVAudioSessionRouteSharingPolicy) policy options:(AVAudioSessionCategoryOptions) options error:(NSError **) outError;
```

## Parameters

- `category`: The category to apply to the audio session. See [AVAudioSessionCategory](category-swift.struct.md) for supported category values.
- `mode`: The audio session mode to apply to the audio session. For a list of values, see [AVAudioSessionMode](mode-swift.struct.md).
- `policy`: The route-sharing policy to apply to the audio session. For a list of values, see [AVAudioSessionRouteSharingPolicy](routesharingpolicy-swift.enum.md).
- `options`: A mask of additional options for handling audio. For a list of constants, see [AVAudioSessionCategoryOptions](categoryoptions-swift.struct.md).
- `outError`: On input, a pointer to an error object. If an error occurs, the pointer is an [NSError](../../foundation/nserror.md) object that describes the error. If you don’t want error information, pass in `nil`.

<a id="discussion"></a>

## Discussion

You specify options only with a default routing policy. With a long-form route-sharing policy, you can use the [AVAudioSessionCategoryPlayback](category-swift.struct/playback.md) category and the [AVAudioSessionModeDefault](mode-swift.struct/default.md), [AVAudioSessionModeMoviePlayback](mode-swift.struct/movieplayback.md), and [AVAudioSessionModeSpokenAudio](mode-swift.struct/spokenaudio.md) modes.

## See Also

### Configuring standard audio behaviors

- [setCategory:mode:options:error:](setcategory%28__mode_options_%29.md): Sets the audio session’s category, mode, and options.
- [setCategory:withOptions:error:](setcategory%28__options_%29.md): Sets the audio session’s category with the specified options.
- [setCategory:error:](setcategory%28__%29.md): Sets the audio session’s category.
- [setMode:error:](setmode%28__%29.md): Sets the audio session’s mode.
