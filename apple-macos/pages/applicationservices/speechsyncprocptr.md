> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/speechsyncprocptr](https://developer.apple.com/documentation/applicationservices/speechsyncprocptr)

# SpeechSyncProcPtr (Swift)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

Defines a pointer to a synchronization callbackfunction that is called when the Speech Synthesis Manager encountersa synchronization command embedded in a text buffer.

## Declaration

```swift
typealias SpeechSyncProcPtr = (SpeechChannel, SRefCon, OSType) -> Void
```

## Parameters

- `chan`: The speech channel that has finished processing input text.
- `refCon`: The reference constant associated with the speech channel.
- `syncMessage`: The synchronization message passed in the embedded command. Usually, you use this message to distinguish between several different types of synchronization commands, but you can use it any way you wish.

<a id="discussion"></a>

## Discussion

The Speech Synthesis Manager calls a speech channel’s synchronizationcallback function whenever it encounters a synchronization commandembedded in a text buffer. You might use the synchronization callbackfunction to provide a callback not ordinarily provided. For example,you might inset synchronization commands at the end of every sentencein a text buffer, or you might enter synchronization commands afterevery numeric value in the text. However, to synchronize your applicationwith phonemes or words, it makes more sense to use the built-inphoneme and word callback functions, defined in [SpeechPhonemeProcPtr](speechphonemeprocptr.md).

You can specify a synchronization callback function by passingthe `soSyncCallBack` selector tothe `SetSpeechInfo` functionand embedding a synchronization command within a text buffer passedto the `SpeakText` or `SpeakBuffer` function.

## See Also

### Callbacks

- [SpeechDoneProcPtr](speechdoneprocptr.md): Defines a pointer to a speech-done callback functionwhich is called when the Speech Synthesis Manager finishes speakinga buffer of text.
- [SpeechErrorProcPtr](speecherrorprocptr.md): Defines a pointer to an error callback functionthat handles syntax errors within commands embedded in a text bufferbeing processed by the Speech Synthesis Manager.
- [SpeechErrorCFProcPtr](speecherrorcfprocptr.md): Defines a pointer to an error callback function that handles syntax errors within commands embedded in a `CFString` object being processed by the Speech Synthesis Manager.
- [SpeechPhonemeProcPtr](speechphonemeprocptr.md): Defines a pointer to a phoneme callback functionthat is called by the Speech Synthesis Manager before it pronouncesa phoneme.
- [SpeechTextDoneProcPtr](speechtextdoneprocptr.md): Defines a pointer to a text-done callback functionthat is called when the Speech Synthesis Manager has finished processinga buffer of text.
- [SpeechWordProcPtr](speechwordprocptr.md): Defines a pointer to a word callback functionthat is called by the Speech Synthesis Manager before it pronouncesa word.
- [SpeechWordCFProcPtr](speechwordcfprocptr.md): Defines a pointer to a Core Foundation-based word callback function that is called by the Speech Synthesis Manager before it pronounces a word.

# SpeechSyncProcPtr (Objective-C)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

Defines a pointer to a synchronization callbackfunction that is called when the Speech Synthesis Manager encountersa synchronization command embedded in a text buffer.

## Declaration

```objectivec
typedef void (*SpeechSyncProcPtr)(SpeechChannel chan, SRefCon refCon, OSType syncMessage);
```

## Parameters

- `chan`: The speech channel that has finished processing input text.
- `refCon`: The reference constant associated with the speech channel.
- `syncMessage`: The synchronization message passed in the embedded command. Usually, you use this message to distinguish between several different types of synchronization commands, but you can use it any way you wish.

<a id="discussion"></a>

## Discussion

The Speech Synthesis Manager calls a speech channel’s synchronizationcallback function whenever it encounters a synchronization commandembedded in a text buffer. You might use the synchronization callbackfunction to provide a callback not ordinarily provided. For example,you might inset synchronization commands at the end of every sentencein a text buffer, or you might enter synchronization commands afterevery numeric value in the text. However, to synchronize your applicationwith phonemes or words, it makes more sense to use the built-inphoneme and word callback functions, defined in [SpeechPhonemeProcPtr](speechphonemeprocptr.md).

You can specify a synchronization callback function by passingthe `soSyncCallBack` selector tothe `SetSpeechInfo` functionand embedding a synchronization command within a text buffer passedto the `SpeakText` or `SpeakBuffer` function.

## See Also

### Callbacks

- [SpeechDoneProcPtr](speechdoneprocptr.md): Defines a pointer to a speech-done callback functionwhich is called when the Speech Synthesis Manager finishes speakinga buffer of text.
- [SpeechErrorProcPtr](speecherrorprocptr.md): Defines a pointer to an error callback functionthat handles syntax errors within commands embedded in a text bufferbeing processed by the Speech Synthesis Manager.
- [SpeechErrorCFProcPtr](speecherrorcfprocptr.md): Defines a pointer to an error callback function that handles syntax errors within commands embedded in a `CFString` object being processed by the Speech Synthesis Manager.
- [SpeechPhonemeProcPtr](speechphonemeprocptr.md): Defines a pointer to a phoneme callback functionthat is called by the Speech Synthesis Manager before it pronouncesa phoneme.
- [SpeechTextDoneProcPtr](speechtextdoneprocptr.md): Defines a pointer to a text-done callback functionthat is called when the Speech Synthesis Manager has finished processinga buffer of text.
- [SpeechWordProcPtr](speechwordprocptr.md): Defines a pointer to a word callback functionthat is called by the Speech Synthesis Manager before it pronouncesa word.
- [SpeechWordCFProcPtr](speechwordcfprocptr.md): Defines a pointer to a Core Foundation-based word callback function that is called by the Speech Synthesis Manager before it pronounces a word.
