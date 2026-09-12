> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kspeechoutputtofileurlproperty](https://developer.apple.com/documentation/applicationservices/kspeechoutputtofileurlproperty)

# kSpeechOutputToFileURLProperty (Swift)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Set the speech output destination to a file or to the computer’s speakers.

## Declaration

```swift
let kSpeechOutputToFileURLProperty: CFString
```

<a id="discussion"></a>

## Discussion

The value associated with this property is a `CFURL` object. To write the speech output to a file, use the file’s `CFURLRef`; to generate the sound through the computer’s speakers, use `NULL`.

This property works with the [SetSpeechProperty(\_:\_:\_:)](1459256-setspeechproperty.md) function.

# kSpeechOutputToFileURLProperty (Objective-C)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Set the speech output destination to a file or to the computer’s speakers.

## Declaration

```objectivec
const CFStringRef kSpeechOutputToFileURLProperty;
```

<a id="discussion"></a>

## Discussion

The value associated with this property is a `CFURL` object. To write the speech output to a file, use the file’s `CFURLRef`; to generate the sound through the computer’s speakers, use `NULL`.

This property works with the [SetSpeechProperty](1459256-setspeechproperty.md) function.
