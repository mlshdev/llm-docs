> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/speechwordcfprocptr](https://developer.apple.com/documentation/applicationservices/speechwordcfprocptr)

# SpeechWordCFProcPtr (Swift)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.5+

Defines a pointer to a Core Foundation-based word callback function that is called by the Speech Synthesis Manager before it pronounces a word.

## Declaration

```swift
typealias SpeechWordCFProcPtr = (SpeechChannel, SRefCon, CFString, CFRange) -> Void
```

## Parameters

- `chan`: The speech channel that has finished processing input text.
- `refCon`: The reference constant associated with the speech channel.
- `aString`: A string containing the original text passed to the speech synthesizer in the [SpeakCFString(\_:\_:\_:)](1461621-speakcfstring.md) call.
- `wordRange`: The range of characters in `aString` that corresponds to the word.

<a id="discussion"></a>

## Discussion

A word callback function defined by the `SpeechWordCFProcPtr` is the Core Foundation-based equivalent of a word callback function defined by [SpeechWordProcPtr](speechwordprocptr.md). The Speech Synthesis Manager calls a speech channel’s word callback function just before it pronounces a word. You might use such a callback function, for example, to highlight the word about to be spoken in a window.

You can specify a word callback function by passing the `kSpeechWordCFCallBack` property to the[SetSpeechProperty(\_:\_:\_:)](1459256-setspeechproperty.md) function.

## See Also

### Callbacks

- [SpeechDoneProcPtr](speechdoneprocptr.md): Defines a pointer to a speech-done callback functionwhich is called when the Speech Synthesis Manager finishes speakinga buffer of text.
- [SpeechErrorProcPtr](speecherrorprocptr.md): Defines a pointer to an error callback functionthat handles syntax errors within commands embedded in a text bufferbeing processed by the Speech Synthesis Manager.
- [SpeechErrorCFProcPtr](speecherrorcfprocptr.md): Defines a pointer to an error callback function that handles syntax errors within commands embedded in a `CFString` object being processed by the Speech Synthesis Manager.
- [SpeechPhonemeProcPtr](speechphonemeprocptr.md): Defines a pointer to a phoneme callback functionthat is called by the Speech Synthesis Manager before it pronouncesa phoneme.
- [SpeechSyncProcPtr](speechsyncprocptr.md): Defines a pointer to a synchronization callbackfunction that is called when the Speech Synthesis Manager encountersa synchronization command embedded in a text buffer.
- [SpeechTextDoneProcPtr](speechtextdoneprocptr.md): Defines a pointer to a text-done callback functionthat is called when the Speech Synthesis Manager has finished processinga buffer of text.
- [SpeechWordProcPtr](speechwordprocptr.md): Defines a pointer to a word callback functionthat is called by the Speech Synthesis Manager before it pronouncesa word.

# SpeechWordCFProcPtr (Objective-C)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.5+

Defines a pointer to a Core Foundation-based word callback function that is called by the Speech Synthesis Manager before it pronounces a word.

## Declaration

```objectivec
typedef void (*SpeechWordCFProcPtr)(SpeechChannel chan, SRefCon refCon, CFStringRef aString, CFRange wordRange);
```

## Parameters

- `chan`: The speech channel that has finished processing input text.
- `refCon`: The reference constant associated with the speech channel.
- `aString`: A string containing the original text passed to the speech synthesizer in the [SpeakCFString](1461621-speakcfstring.md) call.
- `wordRange`: The range of characters in `aString` that corresponds to the word.

<a id="discussion"></a>

## Discussion

A word callback function defined by the `SpeechWordCFProcPtr` is the Core Foundation-based equivalent of a word callback function defined by [SpeechWordProcPtr](speechwordprocptr.md). The Speech Synthesis Manager calls a speech channel’s word callback function just before it pronounces a word. You might use such a callback function, for example, to highlight the word about to be spoken in a window.

You can specify a word callback function by passing the `kSpeechWordCFCallBack` property to the[SetSpeechProperty](1459256-setspeechproperty.md) function.

## See Also

### Callbacks

- [SpeechDoneProcPtr](speechdoneprocptr.md): Defines a pointer to a speech-done callback functionwhich is called when the Speech Synthesis Manager finishes speakinga buffer of text.
- [SpeechErrorProcPtr](speecherrorprocptr.md): Defines a pointer to an error callback functionthat handles syntax errors within commands embedded in a text bufferbeing processed by the Speech Synthesis Manager.
- [SpeechErrorCFProcPtr](speecherrorcfprocptr.md): Defines a pointer to an error callback function that handles syntax errors within commands embedded in a `CFString` object being processed by the Speech Synthesis Manager.
- [SpeechPhonemeProcPtr](speechphonemeprocptr.md): Defines a pointer to a phoneme callback functionthat is called by the Speech Synthesis Manager before it pronouncesa phoneme.
- [SpeechSyncProcPtr](speechsyncprocptr.md): Defines a pointer to a synchronization callbackfunction that is called when the Speech Synthesis Manager encountersa synchronization command embedded in a text buffer.
- [SpeechTextDoneProcPtr](speechtextdoneprocptr.md): Defines a pointer to a text-done callback functionthat is called when the Speech Synthesis Manager has finished processinga buffer of text.
- [SpeechWordProcPtr](speechwordprocptr.md): Defines a pointer to a word callback functionthat is called by the Speech Synthesis Manager before it pronouncesa word.
