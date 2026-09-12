> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auvoiceiootheraudioduckingconfiguration](https://developer.apple.com/documentation/audiotoolbox/auvoiceiootheraudioduckingconfiguration)

# AUVoiceIOOtherAudioDuckingConfiguration (Swift)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A structure that you use to configure ducking of other non-voice audio in a voice chat.

## Declaration

```swift
struct AUVoiceIOOtherAudioDuckingConfiguration
```

<a id="overview"></a>

## Overview

Use this structure to specify whether to enable advanced ducking and set the ducking level of other non-voice audio in a voice chat. Advanced ducking ducks other non-voice audio based on the presence of voice activity from local and remote chat participants. Setting a higher level of ducking could increase the clarity of voice chat.

If you don’t set this value, the default ducking configuration disables advanced ducking and sets the ducking level to [AUVoiceIOOtherAudioDuckingLevel.default](auvoiceiootheraudioduckinglevel/default.md).

## Topics

### Creating an audio ducking configuration

- [AUVoiceIOOtherAudioDuckingLevel](auvoiceiootheraudioduckinglevel.md): The ducking level to apply to other non-voice audio.

### Inspecting a configuration

- [mEnableAdvancedDucking](auvoiceiootheraudioduckingconfiguration/menableadvancedducking.md): A Boolean value that specifies whether to enable advanced ducking.
- [mDuckingLevel](auvoiceiootheraudioduckingconfiguration/mduckinglevel.md): The ducking level of other non-voice audio.

### Initializers

- [init()](auvoiceiootheraudioduckingconfiguration/init%28%29.md): Creates a new ducking configuration for other non-voice audio with advanced ducking disabled and the default ducking level.
- [init(mEnableAdvancedDucking:mDuckingLevel:)](auvoiceiootheraudioduckingconfiguration/init%28menableadvancedducking_mduckinglevel_%29.md): Creates a new ducking configuration in which you specify whether to enable advanced ducking and the ducking level of other non-voice audio.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# AUVoiceIOOtherAudioDuckingConfiguration (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A structure that you use to configure ducking of other non-voice audio in a voice chat.

## Declaration

```objectivec
struct AUVoiceIOOtherAudioDuckingConfiguration;
```

<a id="overview"></a>

## Overview

Use this structure to specify whether to enable advanced ducking and set the ducking level of other non-voice audio in a voice chat. Advanced ducking ducks other non-voice audio based on the presence of voice activity from local and remote chat participants. Setting a higher level of ducking could increase the clarity of voice chat.

If you don’t set this value, the default ducking configuration disables advanced ducking and sets the ducking level to [kAUVoiceIOOtherAudioDuckingLevelDefault](auvoiceiootheraudioduckinglevel/default.md).

## Topics

### Creating an audio ducking configuration

- [AUVoiceIOOtherAudioDuckingLevel](auvoiceiootheraudioduckinglevel.md): The ducking level to apply to other non-voice audio.

### Inspecting a configuration

- [mEnableAdvancedDucking](auvoiceiootheraudioduckingconfiguration/menableadvancedducking.md): A Boolean value that specifies whether to enable advanced ducking.
- [mDuckingLevel](auvoiceiootheraudioduckingconfiguration/mduckinglevel.md): The ducking level of other non-voice audio.
