> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/setcategory(_:options:)](https://developer.apple.com/documentation/avfaudio/avaudiosession/setcategory(_:options:))

# setCategory(\_:options:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the audio session’s category with the specified options.

## Declaration

```swift
func setCategory(_ category: AVAudioSession.Category, options: AVAudioSession.CategoryOptions = []) throws
```

## Parameters

- `category`: The category to apply to the audio session. See [AVAudioSession.Category](category-swift.struct.md) for supported category values.
- `options`: A mask of additional options for handling audio. For a list of constants, see [AVAudioSession.CategoryOptions](categoryoptions-swift.struct.md).

<a id="Discussion"></a>

## Discussion

The audio session’s category defines how you intend to use audio in your app. Typically, you set the category before activating the session. You can also set the category while the session is active, but doing so results in an immediate route change.

You can tailor the behavior of certain categories by specifying a mask of category options. Specifying an unsupported option for the indicated category results in an error. See [AVAudioSession.CategoryOptions](categoryoptions-swift.struct.md) for category compatibility.

> **Note**

>  Instead of setting your [category](category-swift.property.md) and [mode](mode-swift.property.md) properties independently, set them at the same time using the [setCategory(\_:mode:options:)](setcategory%28__mode_options_%29.md) or [setCategory(\_:mode:policy:options:)](setcategory%28__mode_policy_options_%29.md) method.

## See Also

### Configuring standard audio behaviors

- [setCategory(\_:mode:policy:options:)](setcategory%28__mode_policy_options_%29.md): Sets the session category, mode, route-sharing policy, and options.
- [setCategory(\_:mode:options:)](setcategory%28__mode_options_%29.md): Sets the audio session’s category, mode, and options.
- [setCategory(\_:)](setcategory%28__%29.md): Sets the audio session’s category.
- [setMode(\_:)](setmode%28__%29.md): Sets the audio session’s mode.

# setCategory:withOptions:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the audio session’s category with the specified options.

## Declaration

```objectivec
- (BOOL) setCategory:(AVAudioSessionCategory) category withOptions:(AVAudioSessionCategoryOptions) options error:(NSError **) outError;
```

## Parameters

- `category`: The category to apply to the audio session. See [AVAudioSessionCategory](category-swift.struct.md) for supported category values.
- `options`: A mask of additional options for handling audio. For a list of constants, see [AVAudioSessionCategoryOptions](categoryoptions-swift.struct.md).
- `outError`: On input, a pointer to an error object. If an error occurs, the framework sets the pointer to an [NSError](../../foundation/nserror.md) object that describes the error. If you don’t want error information, pass in `nil`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the audio session category and options were set successfully; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The audio session’s category defines how you intend to use audio in your app. Typically, you set the category before activating the session. You can also set the category while the session is active, but doing so results in an immediate route change.

You can tailor the behavior of certain categories by specifying a mask of category options. Specifying an unsupported option for the indicated category results in an error. See [AVAudioSessionCategoryOptions](categoryoptions-swift.struct.md) for category compatibility.

> **Note**

>  Instead of setting your [category](category-swift.property.md) and [mode](mode-swift.property.md) properties independently, set them at the same time using the [setCategory:mode:options:error:](setcategory%28__mode_options_%29.md) or [setCategory:mode:routeSharingPolicy:options:error:](setcategory%28__mode_policy_options_%29.md) method.

## See Also

### Configuring standard audio behaviors

- [setCategory:mode:routeSharingPolicy:options:error:](setcategory%28__mode_policy_options_%29.md): Sets the session category, mode, route-sharing policy, and options.
- [setCategory:mode:options:error:](setcategory%28__mode_options_%29.md): Sets the audio session’s category, mode, and options.
- [setCategory:error:](setcategory%28__%29.md): Sets the audio session’s category.
- [setMode:error:](setmode%28__%29.md): Sets the audio session’s mode.
