> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/setcategory(_:)](https://developer.apple.com/documentation/avfaudio/avaudiosession/setcategory(_:))

# setCategory(\_:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the audio session’s category.

## Declaration

```swift
func setCategory(_ category: AVAudioSession.Category) throws
```

## Parameters

- `category`: The category to apply to the audio session. See [AVAudioSession.Category](category-swift.struct.md) for supported category values.

<a id="Discussion"></a>

## Discussion

The audio session’s category defines how the app uses audio. Typically, you set the category before activating the session. You can also set the category while the session is active, but this results in an immediate route change.

> **Note**

>  Instead of setting your [category](category-swift.property.md) and [mode](mode-swift.property.md) properties independently, set them at the same time using the [setCategory(\_:mode:options:)](setcategory%28__mode_options_%29.md) or [setCategory(\_:mode:policy:options:)](setcategory%28__mode_policy_options_%29.md) method.

## See Also

### Configuring standard audio behaviors

- [setCategory(\_:mode:policy:options:)](setcategory%28__mode_policy_options_%29.md): Sets the session category, mode, route-sharing policy, and options.
- [setCategory(\_:mode:options:)](setcategory%28__mode_options_%29.md): Sets the audio session’s category, mode, and options.
- [setCategory(\_:options:)](setcategory%28__options_%29.md): Sets the audio session’s category with the specified options.
- [setMode(\_:)](setmode%28__%29.md): Sets the audio session’s mode.

# setCategory:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the audio session’s category.

## Declaration

```objectivec
- (BOOL) setCategory:(AVAudioSessionCategory) category error:(NSError **) outError;
```

## Parameters

- `category`: The category to apply to the audio session. See [AVAudioSessionCategory](category-swift.struct.md) for supported category values.
- `outError`: On input, a pointer to an error object. If an error occurs, the framework sets the pointer to an [NSError](../../foundation/nserror.md) object that describes the error. If you don’t want error information, pass in `nil`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the audio session category was set successfully; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The audio session’s category defines how the app uses audio. Typically, you set the category before activating the session. You can also set the category while the session is active, but this results in an immediate route change.

> **Note**

>  Instead of setting your [category](category-swift.property.md) and [mode](mode-swift.property.md) properties independently, set them at the same time using the [setCategory:mode:options:error:](setcategory%28__mode_options_%29.md) or [setCategory:mode:routeSharingPolicy:options:error:](setcategory%28__mode_policy_options_%29.md) method.

## See Also

### Configuring standard audio behaviors

- [setCategory:mode:routeSharingPolicy:options:error:](setcategory%28__mode_policy_options_%29.md): Sets the session category, mode, route-sharing policy, and options.
- [setCategory:mode:options:error:](setcategory%28__mode_options_%29.md): Sets the audio session’s category, mode, and options.
- [setCategory:withOptions:error:](setcategory%28__options_%29.md): Sets the audio session’s category with the specified options.
- [setMode:error:](setmode%28__%29.md): Sets the audio session’s mode.
