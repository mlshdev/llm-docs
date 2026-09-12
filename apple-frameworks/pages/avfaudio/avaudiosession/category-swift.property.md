> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/category-swift.property](https://developer.apple.com/documentation/avfaudio/avaudiosession/category-swift.property)

# category (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The current audio session category.

## Declaration

```swift
var category: AVAudioSession.Category { get }
```

<a id="Discussion"></a>

## Discussion

An audio session category defines a set of audio behaviors for your app. The default category assigned to an audio session is [soloAmbient](category-swift.struct/soloambient.md).

## See Also

### Inspecting the category configuration

- [availableCategories](availablecategories.md): The audio session categories available on the current device.
- [AVAudioSession.Category](category-swift.struct.md): Audio session category identifiers.
- [categoryOptions](categoryoptions-swift.property.md): The set of options associated with the current audio session category.
- [AVAudioSession.CategoryOptions](categoryoptions-swift.struct.md): Constants that specify optional audio behaviors.
- [farFieldInput](categoryoptions-swift.struct/farfieldinput.md): This option should be used if a session prefers to use FarFieldInput when available. This option is only valid with categories that support input - [playAndRecord](category-swift.struct/playandrecord.md), [record](category-swift.struct/record.md), and `AVAudioSessionMultiRoute` with [dualRoute](mode-swift.struct/dualroute.md).

# category (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The current audio session category.

## Declaration

```objectivec
@property (readonly) AVAudioSessionCategory category;
```

<a id="Discussion"></a>

## Discussion

An audio session category defines a set of audio behaviors for your app. The default category assigned to an audio session is [AVAudioSessionCategorySoloAmbient](category-swift.struct/soloambient.md).

## See Also

### Inspecting the category configuration

- [availableCategories](availablecategories.md): The audio session categories available on the current device.
- [AVAudioSessionCategory](category-swift.struct.md): Audio session category identifiers.
- [categoryOptions](categoryoptions-swift.property.md): The set of options associated with the current audio session category.
- [AVAudioSessionCategoryOptions](categoryoptions-swift.struct.md): Constants that specify optional audio behaviors.
- [AVAudioSessionCategoryOptionFarFieldInput](categoryoptions-swift.struct/farfieldinput.md): This option should be used if a session prefers to use FarFieldInput when available. This option is only valid with categories that support input - [AVAudioSessionCategoryPlayAndRecord](category-swift.struct/playandrecord.md), [AVAudioSessionCategoryRecord](category-swift.struct/record.md), and `AVAudioSessionMultiRoute` with [AVAudioSessionModeDualRoute](mode-swift.struct/dualroute.md).
