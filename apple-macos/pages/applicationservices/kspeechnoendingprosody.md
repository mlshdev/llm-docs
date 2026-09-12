> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kspeechnoendingprosody](https://developer.apple.com/documentation/applicationservices/kspeechnoendingprosody)

# kSpeechNoEndingProsody (Swift)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Disable prosody at the end of sentences.

## Declaration

```swift
let kSpeechNoEndingProsody: CFString
```

<a id="discussion"></a>

## Discussion

The `kSpeechNoEndingProsody` key is used to indicate whether the speech synthesizer should automatically apply ending prosody, which is the speech tone and cadence that normally occur at the end of a sentence. When the key is not specified (or if it is specified with the value `kCFBooleanFalse`), ending prosody is applied to the speech at the end of `aString`. This behavior can be disabled by specifying the `kSpeechNoEndingProsody` key, with the value `kCFBooleanTrue`, in the `options` dictionary.

# kSpeechNoEndingProsody (Objective-C)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Disable prosody at the end of sentences.

## Declaration

```objectivec
const CFStringRef kSpeechNoEndingProsody;
```

<a id="discussion"></a>

## Discussion

The `kSpeechNoEndingProsody` key is used to indicate whether the speech synthesizer should automatically apply ending prosody, which is the speech tone and cadence that normally occur at the end of a sentence. When the key is not specified (or if it is specified with the value `kCFBooleanFalse`), ending prosody is applied to the speech at the end of `aString`. This behavior can be disabled by specifying the `kSpeechNoEndingProsody` key, with the value `kCFBooleanTrue`, in the `options` dictionary.
