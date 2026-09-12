> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kspeechoutputtoextaudiofileproperty](https://developer.apple.com/documentation/applicationservices/kspeechoutputtoextaudiofileproperty)

# kSpeechOutputToExtAudioFileProperty (Swift)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.6+

Set the speech output destination to an extended audio file or to the computer’s speakers.

## Declaration

```swift
let kSpeechOutputToExtAudioFileProperty: CFString
```

<a id="discussion"></a>

## Discussion

The value associated with this property is a `CFNumber` object whose value is an `ExtAudioFileRef`. To write the speech output to an extended audio file, use the file’s [ExtAudioFileRef](https://developer.apple.com/documentation/audiotoolbox/extaudiofileref); to generate sound through the computer’s speakers, use `NULL`.

This property works with the [SetSpeechProperty(\_:\_:\_:)](1459256-setspeechproperty.md) function.

# kSpeechOutputToExtAudioFileProperty (Objective-C)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.6+

Set the speech output destination to an extended audio file or to the computer’s speakers.

## Declaration

```objectivec
const CFStringRef kSpeechOutputToExtAudioFileProperty;
```

<a id="discussion"></a>

## Discussion

The value associated with this property is a `CFNumber` object whose value is an `ExtAudioFileRef`. To write the speech output to an extended audio file, use the file’s [ExtAudioFileRef](https://developer.apple.com/documentation/audiotoolbox/extaudiofileref); to generate sound through the computer’s speakers, use `NULL`.

This property works with the [SetSpeechProperty](1459256-setspeechproperty.md) function.
