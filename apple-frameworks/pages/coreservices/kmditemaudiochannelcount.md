> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/kmditemaudiochannelcount](https://developer.apple.com/documentation/coreservices/kmditemaudiochannelcount)

# kMDItemAudioChannelCount (Swift)

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

Number of channels in the audio data contained in the file. A CFNumber.

## Declaration

```swift
let kMDItemAudioChannelCount: CFString!
```

<a id="discussion"></a>

## Discussion

This integer value only represents the number of discreet channels of audio data found in the file. It does not indicate any configuration of the data in regards to a user's speaker setup.

# kMDItemAudioChannelCount (Objective-C)

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

Number of channels in the audio data contained in the file. A CFNumber.

## Declaration

```objectivec
const CFStringRef kMDItemAudioChannelCount;
```

<a id="discussion"></a>

## Discussion

This integer value only represents the number of discreet channels of audio data found in the file. It does not indicate any configuration of the data in regards to a user's speaker setup.
