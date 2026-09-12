> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1552247-newspeechtextdoneupp](https://developer.apple.com/documentation/applicationservices/1552247-newspeechtextdoneupp)

# NewSpeechTextDoneUPP

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Creates a new universal procedure pointer (UPP) to a text-donecallback function.

## Declaration

```objectivec
SpeechTextDoneUPP NewSpeechTextDoneUPP(SpeechTextDoneProcPtr userRoutine);
```

## Parameters

- `userRoutine`: A pointer to your text-done callback function.

<a id="return_value"></a>

## Return Value

A UPP to the text-donecallback function. See the description of the `SpeechTextDoneUPP` data type.

## See Also

### Creating, Invoking, and Disposing Universal Procedure Pointers

- [DisposeSpeechDoneUPP](1552237-disposespeechdoneupp.md): Deprecated. Disposes of a universal procedure pointer (UPP) to a speech-donecallback function.
- [DisposeSpeechErrorUPP](1552245-disposespeecherrorupp.md): Deprecated. Disposes of a universal procedure pointer (UPP) to anerror callback function.
- [DisposeSpeechPhonemeUPP](1552226-disposespeechphonemeupp.md): Deprecated. Disposes of a universal procedure pointer (UPP) to a phonemecallback function.
- [DisposeSpeechSyncUPP](1552219-disposespeechsyncupp.md): Deprecated. Disposes of a universal procedure pointer (UPP) to a synchronizationcallback function.
- [DisposeSpeechTextDoneUPP](1552229-disposespeechtextdoneupp.md): Deprecated. Disposes of a universal procedure pointer (UPP) to a text-donecallback function.
- [DisposeSpeechWordUPP](1552222-disposespeechwordupp.md): Deprecated. Disposes of a universal procedure pointer (UPP) to a wordcallback function.
- [InvokeSpeechDoneUPP](1552215-invokespeechdoneupp.md): Deprecated. Invokes your speech-done callback function.
- [InvokeSpeechErrorUPP](1552214-invokespeecherrorupp.md): Deprecated. Invokes your error callback function.
- [InvokeSpeechPhonemeUPP](1552234-invokespeechphonemeupp.md): Deprecated. Invokes your phoneme callback function.
- [InvokeSpeechSyncUPP](1552243-invokespeechsyncupp.md): Deprecated. Invokes your synchronization callback function.
- [InvokeSpeechTextDoneUPP](1552249-invokespeechtextdoneupp.md): Deprecated. Invokes your text-done callback function.
- [InvokeSpeechWordUPP](1552227-invokespeechwordupp.md): Deprecated. Invokes your word callback function.
- [NewSpeechDoneUPP](1552218-newspeechdoneupp.md): Deprecated. Creates a new universal procedure pointer (UPP) to a speech-donecallback function.
- [NewSpeechErrorUPP](1552224-newspeecherrorupp.md): Deprecated. Creates a new universal procedure pointer to an errorcallback function.
- [NewSpeechPhonemeUPP](1552225-newspeechphonemeupp.md): Deprecated. Disposes of a universal procedure pointer (UPP) to a phonemecallback function.
- [NewSpeechSyncUPP](1552244-newspeechsyncupp.md): Deprecated. Creates a new universal procedure pointer (UPP) to a synchronizationcallback function.
- [NewSpeechWordUPP](1552230-newspeechwordupp.md): Deprecated. Creates a new universal procedure pointer (UPP) to a wordcallback function.
