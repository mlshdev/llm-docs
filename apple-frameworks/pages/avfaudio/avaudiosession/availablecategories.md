> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/availablecategories](https://developer.apple.com/documentation/avfaudio/avaudiosession/availablecategories)

# availableCategories (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The audio session categories available on the current device.

## Declaration

```swift
var availableCategories: [AVAudioSession.Category] { get }
```

<a id="Discussion"></a>

## Discussion

Not every device supports every audio session category. For instance, the [record](category-swift.struct/record.md) category isn’t available on a device that doesn’t support audio input.

Query this property to determine if the category you’d like to use is available on the current device.

## See Also

### Inspecting the category configuration

- [category](category-swift.property.md): The current audio session category.
- [AVAudioSession.Category](category-swift.struct.md): Audio session category identifiers.
- [categoryOptions](categoryoptions-swift.property.md): The set of options associated with the current audio session category.
- [AVAudioSession.CategoryOptions](categoryoptions-swift.struct.md): Constants that specify optional audio behaviors.
- [farFieldInput](categoryoptions-swift.struct/farfieldinput.md): This option should be used if a session prefers to use FarFieldInput when available. This option is only valid with categories that support input - [playAndRecord](category-swift.struct/playandrecord.md), [record](category-swift.struct/record.md), and `AVAudioSessionMultiRoute` with [dualRoute](mode-swift.struct/dualroute.md).

# availableCategories (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The audio session categories available on the current device.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSString *> * availableCategories;
```

<a id="Discussion"></a>

## Discussion

Not every device supports every audio session category. For instance, the [AVAudioSessionCategoryRecord](category-swift.struct/record.md) category isn’t available on a device that doesn’t support audio input.

Query this property to determine if the category you’d like to use is available on the current device.

## See Also

### Inspecting the category configuration

- [category](category-swift.property.md): The current audio session category.
- [AVAudioSessionCategory](category-swift.struct.md): Audio session category identifiers.
- [categoryOptions](categoryoptions-swift.property.md): The set of options associated with the current audio session category.
- [AVAudioSessionCategoryOptions](categoryoptions-swift.struct.md): Constants that specify optional audio behaviors.
- [AVAudioSessionCategoryOptionFarFieldInput](categoryoptions-swift.struct/farfieldinput.md): This option should be used if a session prefers to use FarFieldInput when available. This option is only valid with categories that support input - [AVAudioSessionCategoryPlayAndRecord](category-swift.struct/playandrecord.md), [AVAudioSessionCategoryRecord](category-swift.struct/record.md), and `AVAudioSessionMultiRoute` with [AVAudioSessionModeDualRoute](mode-swift.struct/dualroute.md).
