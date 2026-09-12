> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/setcategory(_:mode:options:)](https://developer.apple.com/documentation/avfaudio/avaudiosession/setcategory(_:mode:options:))

# setCategory(\_:mode:options:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Sets the audio session’s category, mode, and options.

## Declaration

```swift
func setCategory(_ category: AVAudioSession.Category, mode: AVAudioSession.Mode, options: AVAudioSession.CategoryOptions = []) throws
```

## Parameters

- `category`: The category to apply to the audio session. See [AVAudioSession.Category](category-swift.struct.md) for supported category values.
- `mode`: The audio session mode to apply to the audio session. For a list of values, see [AVAudioSession.Mode](mode-swift.struct.md).
- `options`: A mask of additional options for handling audio. For a list of constants, see [AVAudioSession.CategoryOptions](categoryoptions-swift.struct.md).

<a id="discussion"></a>

## Discussion

The audio session’s [category](category-swift.property.md) and [mode](mode-swift.property.md) together define how your app uses audio. Typically, you set the category and mode before activating the session. You can also set the category or mode while the session is active, but doing so results in an immediate change.

## See Also

### Configuring standard audio behaviors

- [setCategory(\_:mode:policy:options:)](setcategory%28__mode_policy_options_%29.md): Sets the session category, mode, route-sharing policy, and options.
- [setCategory(\_:options:)](setcategory%28__options_%29.md): Sets the audio session’s category with the specified options.
- [setCategory(\_:)](setcategory%28__%29.md): Sets the audio session’s category.
- [setMode(\_:)](setmode%28__%29.md): Sets the audio session’s mode.

# setCategory:mode:options:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Sets the audio session’s category, mode, and options.

## Declaration

```objectivec
- (BOOL) setCategory:(AVAudioSessionCategory) category mode:(AVAudioSessionMode) mode options:(AVAudioSessionCategoryOptions) options error:(NSError **) outError;
```

## Parameters

- `category`: The category to apply to the audio session. See [AVAudioSessionCategory](category-swift.struct.md) for supported category values.
- `mode`: The audio session mode to apply to the audio session. For a list of values, see [AVAudioSessionMode](mode-swift.struct.md).
- `options`: A mask of additional options for handling audio. For a list of constants, see [AVAudioSessionCategoryOptions](categoryoptions-swift.struct.md).
- `outError`: On input, a pointer to an error object. If an error occurs, the pointer is an [NSError](../../foundation/nserror.md) object that describes the error. If you don’t want error information, pass in `nil`.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if the audio session category and options were set successfully; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="discussion"></a>

## Discussion

The audio session’s [category](category-swift.property.md) and [mode](mode-swift.property.md) together define how your app uses audio. Typically, you set the category and mode before activating the session. You can also set the category or mode while the session is active, but doing so results in an immediate change.

## See Also

### Configuring standard audio behaviors

- [setCategory:mode:routeSharingPolicy:options:error:](setcategory%28__mode_policy_options_%29.md): Sets the session category, mode, route-sharing policy, and options.
- [setCategory:withOptions:error:](setcategory%28__options_%29.md): Sets the audio session’s category with the specified options.
- [setCategory:error:](setcategory%28__%29.md): Sets the audio session’s category.
- [setMode:error:](setmode%28__%29.md): Sets the audio session’s mode.
