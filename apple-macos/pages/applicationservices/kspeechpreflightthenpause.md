> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kspeechpreflightthenpause](https://developer.apple.com/documentation/applicationservices/kspeechpreflightthenpause)

# kSpeechPreflightThenPause (Swift)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Compute speech without generating it.

## Declaration

```swift
let kSpeechPreflightThenPause: CFString
```

<a id="discussion"></a>

## Discussion

The `kSpeechPreflightThenPause` key is used to minimize the latency experienced when the speech synthesizer is attempting to speak. To achieve this, specify the `kSpeechPreflightThenPause` key, with the value `kCFBooleanTrue`, in the `options` dictionary. This causes the speech synthesizer to process the input text as necessary to the point where it is ready to begin producing speech output. At this point, the synthesizer enters a paused state and returns to the caller. When the application is ready to produce speech, it should call [ContinueSpeech(\_:)](1462728-continuespeech.md) to begin speaking.

If you do not specify the `kSpeechPreflightThenPause` key (or you specify it with the value `kCFBooleanFalse`), [SpeakCFString(\_:\_:\_:)](1461621-speakcfstring.md) starts speaking the input text after processing it.

# kSpeechPreflightThenPause (Objective-C)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Compute speech without generating it.

## Declaration

```objectivec
const CFStringRef kSpeechPreflightThenPause;
```

<a id="discussion"></a>

## Discussion

The `kSpeechPreflightThenPause` key is used to minimize the latency experienced when the speech synthesizer is attempting to speak. To achieve this, specify the `kSpeechPreflightThenPause` key, with the value `kCFBooleanTrue`, in the `options` dictionary. This causes the speech synthesizer to process the input text as necessary to the point where it is ready to begin producing speech output. At this point, the synthesizer enters a paused state and returns to the caller. When the application is ready to produce speech, it should call [ContinueSpeech](1462728-continuespeech.md) to begin speaking.

If you do not specify the `kSpeechPreflightThenPause` key (or you specify it with the value `kCFBooleanFalse`), [SpeakCFString](1461621-speakcfstring.md) starts speaking the input text after processing it.
