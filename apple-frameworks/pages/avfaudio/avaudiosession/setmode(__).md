> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/setmode(_:)](https://developer.apple.com/documentation/avfaudio/avaudiosession/setmode(_:))

# setMode(\_:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the audio session’s mode.

## Declaration

```swift
func setMode(_ mode: AVAudioSession.Mode) throws
```

## Parameters

- `mode`: The audio session mode to apply to the audio session. See [AVAudioSession.Mode](mode-swift.struct.md) for supported mode values.

<a id="Discussion"></a>

## Discussion

The audio session’s category and mode together define how your app uses audio. Typically, you set the category and mode before activating the session. You can also set the category or mode while the session is active, but doing so results in an immediate change.

> **Note**

>  Instead of setting your [category](category-swift.property.md) and [mode](mode-swift.property.md) properties independently, set them at the same time using the [setCategory(\_:mode:options:)](setcategory%28__mode_options_%29.md) or [setCategory(\_:mode:policy:options:)](setcategory%28__mode_policy_options_%29.md) method.

## See Also

### Configuring standard audio behaviors

- [setCategory(\_:mode:policy:options:)](setcategory%28__mode_policy_options_%29.md): Sets the session category, mode, route-sharing policy, and options.
- [setCategory(\_:mode:options:)](setcategory%28__mode_options_%29.md): Sets the audio session’s category, mode, and options.
- [setCategory(\_:options:)](setcategory%28__options_%29.md): Sets the audio session’s category with the specified options.
- [setCategory(\_:)](setcategory%28__%29.md): Sets the audio session’s category.

# setMode:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the audio session’s mode.

## Declaration

```objectivec
- (BOOL) setMode:(AVAudioSessionMode) mode error:(NSError **) outError;
```

## Parameters

- `mode`: The audio session mode to apply to the audio session. See [AVAudioSessionMode](mode-swift.struct.md) for supported mode values.
- `outError`: On input, a pointer to an error object. If an error occurs, the framework sets the pointer to an [NSError](../../foundation/nserror.md) object that describes the error. If you don’t want error information, pass in `nil`.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) on success; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The audio session’s category and mode together define how your app uses audio. Typically, you set the category and mode before activating the session. You can also set the category or mode while the session is active, but doing so results in an immediate change.

> **Note**

>  Instead of setting your [category](category-swift.property.md) and [mode](mode-swift.property.md) properties independently, set them at the same time using the [setCategory:mode:options:error:](setcategory%28__mode_options_%29.md) or [setCategory:mode:routeSharingPolicy:options:error:](setcategory%28__mode_policy_options_%29.md) method.

## See Also

### Configuring standard audio behaviors

- [setCategory:mode:routeSharingPolicy:options:error:](setcategory%28__mode_policy_options_%29.md): Sets the session category, mode, route-sharing policy, and options.
- [setCategory:mode:options:error:](setcategory%28__mode_options_%29.md): Sets the audio session’s category, mode, and options.
- [setCategory:withOptions:error:](setcategory%28__options_%29.md): Sets the audio session’s category with the specified options.
- [setCategory:error:](setcategory%28__%29.md): Sets the audio session’s category.
