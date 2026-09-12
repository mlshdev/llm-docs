> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/categoryoptions-swift.property](https://developer.apple.com/documentation/avfaudio/avaudiosession/categoryoptions-swift.property)

# categoryOptions (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The set of options associated with the current audio session category.

## Declaration

```swift
var categoryOptions: AVAudioSession.CategoryOptions { get }
```

<a id="Discussion"></a>

## Discussion

You use category options to tailor the behavior of the active audio session category. See [AVAudioSession.CategoryOptions](categoryoptions-swift.struct.md) for the supported values.

## See Also

### Inspecting the category configuration

- [category](category-swift.property.md): The current audio session category.
- [availableCategories](availablecategories.md): The audio session categories available on the current device.
- [AVAudioSession.Category](category-swift.struct.md): Audio session category identifiers.
- [AVAudioSession.CategoryOptions](categoryoptions-swift.struct.md): Constants that specify optional audio behaviors.
- [farFieldInput](categoryoptions-swift.struct/farfieldinput.md): This option should be used if a session prefers to use FarFieldInput when available. This option is only valid with categories that support input - [playAndRecord](category-swift.struct/playandrecord.md), [record](category-swift.struct/record.md), and `AVAudioSessionMultiRoute` with [dualRoute](mode-swift.struct/dualroute.md).

# categoryOptions (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The set of options associated with the current audio session category.

## Declaration

```objectivec
@property (readonly) AVAudioSessionCategoryOptions categoryOptions;
```

<a id="Discussion"></a>

## Discussion

You use category options to tailor the behavior of the active audio session category. See [AVAudioSessionCategoryOptions](categoryoptions-swift.struct.md) for the supported values.

## See Also

### Inspecting the category configuration

- [category](category-swift.property.md): The current audio session category.
- [availableCategories](availablecategories.md): The audio session categories available on the current device.
- [AVAudioSessionCategory](category-swift.struct.md): Audio session category identifiers.
- [AVAudioSessionCategoryOptions](categoryoptions-swift.struct.md): Constants that specify optional audio behaviors.
- [AVAudioSessionCategoryOptionFarFieldInput](categoryoptions-swift.struct/farfieldinput.md): This option should be used if a session prefers to use FarFieldInput when available. This option is only valid with categories that support input - [AVAudioSessionCategoryPlayAndRecord](category-swift.struct/playandrecord.md), [AVAudioSessionCategoryRecord](category-swift.struct/record.md), and `AVAudioSessionMultiRoute` with [AVAudioSessionModeDualRoute](mode-swift.struct/dualroute.md).
