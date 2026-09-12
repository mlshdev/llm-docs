> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/categoryoptions-swift.struct](https://developer.apple.com/documentation/avfaudio/avaudiosession/categoryoptions-swift.struct)

# AVAudioSession.CategoryOptions (Swift)

**Framework:** AVFAudio  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Constants that specify optional audio behaviors.

## Declaration

```swift
struct CategoryOptions
```

<a id="overview"></a>

## Overview

Each option is valid only for specific audio session categories.

## Topics

### Category options

- [allowAirPlay](categoryoptions-swift.struct/allowairplay.md): An option that determines whether you can stream audio from this session to AirPlay devices.
- [allowBluetooth](categoryoptions-swift.struct/allowbluetooth.md): Deprecated. An option that determines whether Bluetooth hands-free devices appear as available input routes.
- [allowBluetoothA2DP](categoryoptions-swift.struct/allowbluetootha2dp.md): An option that determines whether you can stream audio from this session to Bluetooth devices that support the Advanced Audio Distribution Profile (A2DP).
- [allowBluetoothHFP](categoryoptions-swift.struct/allowbluetoothhfp.md): An option that makes Bluetooth Hands-Free Profile (HFP) devices available for audio input.
- [bluetoothHighQualityRecording](categoryoptions-swift.struct/bluetoothhighqualityrecording.md): An option that indicates to enable high-quality audio for input and output routes.
- [defaultToSpeaker](categoryoptions-swift.struct/defaulttospeaker.md): An option that determines whether audio from the session defaults to the built-in speaker instead of the receiver.
- [duckOthers](categoryoptions-swift.struct/duckothers.md): An option that reduces the volume of other audio sessions while audio from this session plays.
- [farFieldInput](categoryoptions-swift.struct/farfieldinput.md): This option should be used if a session prefers to use FarFieldInput when available. This option is only valid with categories that support input - [playAndRecord](category-swift.struct/playandrecord.md), [record](category-swift.struct/record.md), and `AVAudioSessionMultiRoute` with [dualRoute](mode-swift.struct/dualroute.md).
- [interruptSpokenAudioAndMixWithOthers](categoryoptions-swift.struct/interruptspokenaudioandmixwithothers.md): An option that determines whether to pause spoken audio content from other sessions when your app plays its audio.
- [mixWithOthers](categoryoptions-swift.struct/mixwithothers.md): An option that indicates whether audio from this session mixes with audio from active sessions in other audio apps.
- [overrideMutedMicrophoneInterruption](categoryoptions-swift.struct/overridemutedmicrophoneinterruption.md): An option that indicates whether the system interrupts the audio session when it mutes the built-in microphone.

### Initializers

- [init(rawValue:)](categoryoptions-swift.struct/init%28rawvalue_%29.md): Creates a new instance with the raw value you specify.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Inspecting the category configuration

- [category](category-swift.property.md): The current audio session category.
- [availableCategories](availablecategories.md): The audio session categories available on the current device.
- [AVAudioSession.Category](category-swift.struct.md): Audio session category identifiers.
- [categoryOptions](categoryoptions-swift.property.md): The set of options associated with the current audio session category.
- [farFieldInput](categoryoptions-swift.struct/farfieldinput.md): This option should be used if a session prefers to use FarFieldInput when available. This option is only valid with categories that support input - [playAndRecord](category-swift.struct/playandrecord.md), [record](category-swift.struct/record.md), and `AVAudioSessionMultiRoute` with [dualRoute](mode-swift.struct/dualroute.md).

# AVAudioSessionCategoryOptions (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that specify optional audio behaviors.

## Declaration

```objectivec
enum AVAudioSessionCategoryOptions : NSUInteger;
```

<a id="overview"></a>

## Overview

Each option is valid only for specific audio session categories.

## Topics

### Category options

- [AVAudioSessionCategoryOptionAllowAirPlay](categoryoptions-swift.struct/allowairplay.md): An option that determines whether you can stream audio from this session to AirPlay devices.
- [AVAudioSessionCategoryOptionAllowBluetooth](categoryoptions-swift.struct/allowbluetooth.md): Deprecated. An option that determines whether Bluetooth hands-free devices appear as available input routes.
- [AVAudioSessionCategoryOptionAllowBluetoothA2DP](categoryoptions-swift.struct/allowbluetootha2dp.md): An option that determines whether you can stream audio from this session to Bluetooth devices that support the Advanced Audio Distribution Profile (A2DP).
- [AVAudioSessionCategoryOptionAllowBluetoothHFP](categoryoptions-swift.struct/allowbluetoothhfp.md): An option that makes Bluetooth Hands-Free Profile (HFP) devices available for audio input.
- [AVAudioSessionCategoryOptionBluetoothHighQualityRecording](categoryoptions-swift.struct/bluetoothhighqualityrecording.md): An option that indicates to enable high-quality audio for input and output routes.
- [AVAudioSessionCategoryOptionDefaultToSpeaker](categoryoptions-swift.struct/defaulttospeaker.md): An option that determines whether audio from the session defaults to the built-in speaker instead of the receiver.
- [AVAudioSessionCategoryOptionDuckOthers](categoryoptions-swift.struct/duckothers.md): An option that reduces the volume of other audio sessions while audio from this session plays.
- [AVAudioSessionCategoryOptionFarFieldInput](categoryoptions-swift.struct/farfieldinput.md): This option should be used if a session prefers to use FarFieldInput when available. This option is only valid with categories that support input - [AVAudioSessionCategoryPlayAndRecord](category-swift.struct/playandrecord.md), [AVAudioSessionCategoryRecord](category-swift.struct/record.md), and `AVAudioSessionMultiRoute` with [AVAudioSessionModeDualRoute](mode-swift.struct/dualroute.md).
- [AVAudioSessionCategoryOptionInterruptSpokenAudioAndMixWithOthers](categoryoptions-swift.struct/interruptspokenaudioandmixwithothers.md): An option that determines whether to pause spoken audio content from other sessions when your app plays its audio.
- [AVAudioSessionCategoryOptionMixWithOthers](categoryoptions-swift.struct/mixwithothers.md): An option that indicates whether audio from this session mixes with audio from active sessions in other audio apps.
- [AVAudioSessionCategoryOptionOverrideMutedMicrophoneInterruption](categoryoptions-swift.struct/overridemutedmicrophoneinterruption.md): An option that indicates whether the system interrupts the audio session when it mutes the built-in microphone.

## See Also

### Inspecting the category configuration

- [category](category-swift.property.md): The current audio session category.
- [availableCategories](availablecategories.md): The audio session categories available on the current device.
- [AVAudioSessionCategory](category-swift.struct.md): Audio session category identifiers.
- [categoryOptions](categoryoptions-swift.property.md): The set of options associated with the current audio session category.
- [AVAudioSessionCategoryOptionFarFieldInput](categoryoptions-swift.struct/farfieldinput.md): This option should be used if a session prefers to use FarFieldInput when available. This option is only valid with categories that support input - [AVAudioSessionCategoryPlayAndRecord](category-swift.struct/playandrecord.md), [AVAudioSessionCategoryRecord](category-swift.struct/record.md), and `AVAudioSessionMultiRoute` with [AVAudioSessionModeDualRoute](mode-swift.struct/dualroute.md).
