> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auvoiceiootheraudioduckingconfiguration/init(menableadvancedducking:mduckinglevel:)](https://developer.apple.com/documentation/audiotoolbox/auvoiceiootheraudioduckingconfiguration/init(menableadvancedducking:mduckinglevel:))

# init(mEnableAdvancedDucking:mDuckingLevel:)

**Framework:** Audio Toolbox  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Creates a new ducking configuration in which you specify whether to enable advanced ducking and the ducking level of other non-voice audio.

## Declaration

```swift
init(mEnableAdvancedDucking: DarwinBoolean, mDuckingLevel: AUVoiceIOOtherAudioDuckingLevel)
```

## Parameters

- `mEnableAdvancedDucking`: A Boolean value that specifies whether to enable advanced ducking.
- `mDuckingLevel`: The ducking level of other non-voice audio.
