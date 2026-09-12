> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/category-swift.struct](https://developer.apple.com/documentation/avfaudio/avaudiosession/category-swift.struct)

# AVAudioSession.Category (Swift)

**Framework:** AVFAudio  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Audio session category identifiers.

## Declaration

```swift
struct Category
```

<a id="Discussion"></a>

## Discussion

An audio session category defines a set of audio behaviors. Choose a category that most accurately describes the audio behavior you require.

<a id="Supporting-AirPlay"></a>

### Supporting AirPlay

The playback-only categories ([ambient](category-swift.struct/ambient.md), [soloAmbient](category-swift.struct/soloambient.md), and [playback](category-swift.struct/playback.md)) support both the mirrored and nonmirrored variants of AirPlay.

The audio session category [playAndRecord](category-swift.struct/playandrecord.md) supports only the mirrored variant of AirPlay, while the [record](category-swift.struct/record.md) and [multiRoute](category-swift.struct/multiroute.md) categories don’t allow routing to AirPlay.

> **Important**

>  SharePlay and the Group Activities API only support audio sessions using the [playback](category-swift.struct/playback.md) category. Attempting to activate a session that uses an unsupported category results in an error.

## Topics

### Creating a Category

- [init(rawValue:)](category-swift.struct/init%28rawvalue_%29.md): Creates a new instance with the raw value you specify.

### Getting Standard Categories

- [ambient](category-swift.struct/ambient.md): The category for an app in which sound playback is nonprimary — that is, your app also works with the sound turned off.
- [multiRoute](category-swift.struct/multiroute.md): The category for routing distinct streams of audio data to different output devices at the same time.
- [playAndRecord](category-swift.struct/playandrecord.md): The category for recording (input) and playback (output) of audio, such as for a Voice over Internet Protocol (VoIP) app.
- [playback](category-swift.struct/playback.md): The category for playing recorded music or other sounds that are central to the successful use of your app.
- [record](category-swift.struct/record.md): The category for recording audio while also silencing playback audio.
- [soloAmbient](category-swift.struct/soloambient.md): The default audio session category.
- [audioProcessing](category-swift.struct/audioprocessing.md): Deprecated. The category for using an audio hardware codec or signal processor while not playing or recording audio.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting the category configuration

- [category](category-swift.property.md): The current audio session category.
- [availableCategories](availablecategories.md): The audio session categories available on the current device.
- [categoryOptions](categoryoptions-swift.property.md): The set of options associated with the current audio session category.
- [AVAudioSession.CategoryOptions](categoryoptions-swift.struct.md): Constants that specify optional audio behaviors.
- [farFieldInput](categoryoptions-swift.struct/farfieldinput.md): This option should be used if a session prefers to use FarFieldInput when available. This option is only valid with categories that support input - [playAndRecord](category-swift.struct/playandrecord.md), [record](category-swift.struct/record.md), and `AVAudioSessionMultiRoute` with [dualRoute](mode-swift.struct/dualroute.md).

# AVAudioSessionCategory (Objective-C)

**Framework:** AVFAudio  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Audio session category identifiers.

## Declaration

```objectivec
typedef NSString * AVAudioSessionCategory;
```

<a id="Discussion"></a>

## Discussion

An audio session category defines a set of audio behaviors. Choose a category that most accurately describes the audio behavior you require.

<a id="Supporting-AirPlay"></a>

### Supporting AirPlay

The playback-only categories ([AVAudioSessionCategoryAmbient](category-swift.struct/ambient.md), [AVAudioSessionCategorySoloAmbient](category-swift.struct/soloambient.md), and [AVAudioSessionCategoryPlayback](category-swift.struct/playback.md)) support both the mirrored and nonmirrored variants of AirPlay.

The audio session category [AVAudioSessionCategoryPlayAndRecord](category-swift.struct/playandrecord.md) supports only the mirrored variant of AirPlay, while the [AVAudioSessionCategoryRecord](category-swift.struct/record.md) and [AVAudioSessionCategoryMultiRoute](category-swift.struct/multiroute.md) categories don’t allow routing to AirPlay.

> **Important**

>  SharePlay and the Group Activities API only support audio sessions using the [AVAudioSessionCategoryPlayback](category-swift.struct/playback.md) category. Attempting to activate a session that uses an unsupported category results in an error.

## Topics

### Getting Standard Categories

- [AVAudioSessionCategoryAmbient](category-swift.struct/ambient.md): The category for an app in which sound playback is nonprimary — that is, your app also works with the sound turned off.
- [AVAudioSessionCategoryMultiRoute](category-swift.struct/multiroute.md): The category for routing distinct streams of audio data to different output devices at the same time.
- [AVAudioSessionCategoryPlayAndRecord](category-swift.struct/playandrecord.md): The category for recording (input) and playback (output) of audio, such as for a Voice over Internet Protocol (VoIP) app.
- [AVAudioSessionCategoryPlayback](category-swift.struct/playback.md): The category for playing recorded music or other sounds that are central to the successful use of your app.
- [AVAudioSessionCategoryRecord](category-swift.struct/record.md): The category for recording audio while also silencing playback audio.
- [AVAudioSessionCategorySoloAmbient](category-swift.struct/soloambient.md): The default audio session category.
- [AVAudioSessionCategoryAudioProcessing](category-swift.struct/audioprocessing.md): Deprecated. The category for using an audio hardware codec or signal processor while not playing or recording audio.

## See Also

### Inspecting the category configuration

- [category](category-swift.property.md): The current audio session category.
- [availableCategories](availablecategories.md): The audio session categories available on the current device.
- [categoryOptions](categoryoptions-swift.property.md): The set of options associated with the current audio session category.
- [AVAudioSessionCategoryOptions](categoryoptions-swift.struct.md): Constants that specify optional audio behaviors.
- [AVAudioSessionCategoryOptionFarFieldInput](categoryoptions-swift.struct/farfieldinput.md): This option should be used if a session prefers to use FarFieldInput when available. This option is only valid with categories that support input - [AVAudioSessionCategoryPlayAndRecord](category-swift.struct/playandrecord.md), [AVAudioSessionCategoryRecord](category-swift.struct/record.md), and `AVAudioSessionMultiRoute` with [AVAudioSessionModeDualRoute](mode-swift.struct/dualroute.md).
