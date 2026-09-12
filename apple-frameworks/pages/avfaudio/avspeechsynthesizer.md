> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesizer](https://developer.apple.com/documentation/avfaudio/avspeechsynthesizer)

# AVSpeechSynthesizer (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS · visionOS 1.0+ · watchOS 2.0+

An object that produces synthesized speech from text utterances and enables monitoring or controlling of ongoing speech.

## Declaration

```swift
class AVSpeechSynthesizer
```

<a id="overview"></a>

## Overview

To speak some text, create an [AVSpeechUtterance](avspeechutterance.md) instance that contains the text and pass it to [speak(\_:)](avspeechsynthesizer/speak%28__%29.md) on a speech synthesizer instance. You can optionally also retrieve an [AVSpeechSynthesisVoice](avspeechsynthesisvoice.md) and set it on the utterance’s [voice](avspeechutterance/voice.md) property to have the speech synthesizer use that voice when speaking the utterance’s text.

The speech synthesizer maintains a queue of utterances that it speaks. If the synthesizer isn’t speaking, calling [speak(\_:)](avspeechsynthesizer/speak%28__%29.md) begins speaking that utterance either immediately or after pausing for its [preUtteranceDelay](avspeechutterance/preutterancedelay.md), if necessary. If the synthesizer is speaking, the synthesizer adds utterances to a queue and speaks them in the order it receives them.

After speech begins, you can use the synthesizer object to pause or stop speech. After pausing, you can resume the speech from its paused point or stop the speech entirely and remove all remaining utterances in the queue.

You can monitor the speech synthesizer by examining its [isSpeaking](avspeechsynthesizer/isspeaking.md) and [isPaused](avspeechsynthesizer/ispaused.md) properties, or by setting a delegate that conforms to [AVSpeechSynthesizerDelegate](avspeechsynthesizerdelegate.md). The delegate receives significant events as they occur during speech synthesis.

An `AVSpeechSynthesizer` also controls the route where the speech plays. For more information, see Directing speech output.

> **Note**

>  The system doesn’t automatically retain the speech synthesizer, so you need to manually retain it until speech concludes.

## Topics

### Controlling speech

- [speak(\_:)](avspeechsynthesizer/speak%28__%29.md): Adds the utterance you specify to the speech synthesizer’s queue.
- [continueSpeaking()](avspeechsynthesizer/continuespeaking%28%29.md): Resumes speech from its paused point.
- [pauseSpeaking(at:)](avspeechsynthesizer/pausespeaking%28at_%29.md): Pauses speech at the boundary you specify.
- [stopSpeaking(at:)](avspeechsynthesizer/stopspeaking%28at_%29.md): Stops speech at the boundary you specify.
- [AVSpeechBoundary](avspeechboundary.md): Specifies when to pause or stop speech.

### Inspecting a speech synthesizer

- [isSpeaking](avspeechsynthesizer/isspeaking.md): A Boolean value that indicates whether the speech synthesizer is speaking or is in a paused state and has utterances to speak.
- [isPaused](avspeechsynthesizer/ispaused.md): A Boolean value that indicates whether a speech synthesizer is in a paused state.

### Managing the delegate

- [delegate](avspeechsynthesizer/delegate.md): The delegate object for the speech synthesizer.
- [AVSpeechSynthesizerDelegate](avspeechsynthesizerdelegate.md): A delegate protocol that contains optional methods you can implement to respond to events that occur during speech synthesis.

### Directing speech output

- [usesApplicationAudioSession](avspeechsynthesizer/usesapplicationaudiosession.md): A Boolean value that specifies whether the app manages the audio session.
- [mixToTelephonyUplink](avspeechsynthesizer/mixtotelephonyuplink.md): A Boolean value that specifies whether to send synthesized speech to an active call.
- [outputChannels](avspeechsynthesizer/outputchannels.md): An array of audio session channels to route generated speech.
- [write(\_:toBufferCallback:)](avspeechsynthesizer/write%28__tobuffercallback_%29.md): Generates speech for the utterance and invokes the callback with the audio buffer.
- [AVSpeechSynthesizer.BufferCallback](avspeechsynthesizer/buffercallback.md): A type that defines a callback that receives a buffer of generated speech.
- [write(\_:toBufferCallback:toMarkerCallback:)](avspeechsynthesizer/write%28__tobuffercallback_tomarkercallback_%29.md): Generates audio buffers and associated metadata for storage or further speech synthesis processing.
- [AVSpeechSynthesizer.MarkerCallback](avspeechsynthesizer/markercallback.md): A type that defines a callback that receives speech markers.

### Enabling personal voices

- [personalVoiceAuthorizationStatus](avspeechsynthesizer/personalvoiceauthorizationstatus-swift.type.property.md): Your app’s authorization to use personal voices.
- [availableVoicesDidChangeNotification](avspeechsynthesizer/availablevoicesdidchangenotification.md): A notification that indicates a change in available voices for speech synthesis.
- [requestPersonalVoiceAuthorization(completionHandler:)](avspeechsynthesizer/requestpersonalvoiceauthorization%28completionhandler_%29.md): Prompts the user to authorize your app to use personal voices.
- [AVSpeechSynthesizer.PersonalVoiceAuthorizationStatus](avspeechsynthesizer/personalvoiceauthorizationstatus-swift.enum.md): An enumeration that models the personal voices authorization status.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# AVSpeechSynthesizer (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS · visionOS 1.0+ · watchOS 2.0+

An object that produces synthesized speech from text utterances and enables monitoring or controlling of ongoing speech.

## Declaration

```objectivec
@interface AVSpeechSynthesizer : NSObject
```

<a id="overview"></a>

## Overview

To speak some text, create an [AVSpeechUtterance](avspeechutterance.md) instance that contains the text and pass it to [speakUtterance:](avspeechsynthesizer/speak%28__%29.md) on a speech synthesizer instance. You can optionally also retrieve an [AVSpeechSynthesisVoice](avspeechsynthesisvoice.md) and set it on the utterance’s [voice](avspeechutterance/voice.md) property to have the speech synthesizer use that voice when speaking the utterance’s text.

The speech synthesizer maintains a queue of utterances that it speaks. If the synthesizer isn’t speaking, calling [speakUtterance:](avspeechsynthesizer/speak%28__%29.md) begins speaking that utterance either immediately or after pausing for its [preUtteranceDelay](avspeechutterance/preutterancedelay.md), if necessary. If the synthesizer is speaking, the synthesizer adds utterances to a queue and speaks them in the order it receives them.

After speech begins, you can use the synthesizer object to pause or stop speech. After pausing, you can resume the speech from its paused point or stop the speech entirely and remove all remaining utterances in the queue.

You can monitor the speech synthesizer by examining its [speaking](avspeechsynthesizer/isspeaking.md) and [paused](avspeechsynthesizer/ispaused.md) properties, or by setting a delegate that conforms to [AVSpeechSynthesizerDelegate](avspeechsynthesizerdelegate.md). The delegate receives significant events as they occur during speech synthesis.

An `AVSpeechSynthesizer` also controls the route where the speech plays. For more information, see Directing speech output.

> **Note**

>  The system doesn’t automatically retain the speech synthesizer, so you need to manually retain it until speech concludes.

## Topics

### Controlling speech

- [speakUtterance:](avspeechsynthesizer/speak%28__%29.md): Adds the utterance you specify to the speech synthesizer’s queue.
- [continueSpeaking](avspeechsynthesizer/continuespeaking%28%29.md): Resumes speech from its paused point.
- [pauseSpeakingAtBoundary:](avspeechsynthesizer/pausespeaking%28at_%29.md): Pauses speech at the boundary you specify.
- [stopSpeakingAtBoundary:](avspeechsynthesizer/stopspeaking%28at_%29.md): Stops speech at the boundary you specify.
- [AVSpeechBoundary](avspeechboundary.md): Specifies when to pause or stop speech.

### Inspecting a speech synthesizer

- [speaking](avspeechsynthesizer/isspeaking.md): A Boolean value that indicates whether the speech synthesizer is speaking or is in a paused state and has utterances to speak.
- [paused](avspeechsynthesizer/ispaused.md): A Boolean value that indicates whether a speech synthesizer is in a paused state.

### Managing the delegate

- [delegate](avspeechsynthesizer/delegate.md): The delegate object for the speech synthesizer.
- [AVSpeechSynthesizerDelegate](avspeechsynthesizerdelegate.md): A delegate protocol that contains optional methods you can implement to respond to events that occur during speech synthesis.

### Directing speech output

- [usesApplicationAudioSession](avspeechsynthesizer/usesapplicationaudiosession.md): A Boolean value that specifies whether the app manages the audio session.
- [mixToTelephonyUplink](avspeechsynthesizer/mixtotelephonyuplink.md): A Boolean value that specifies whether to send synthesized speech to an active call.
- [outputChannels](avspeechsynthesizer/outputchannels.md): An array of audio session channels to route generated speech.
- [writeUtterance:toBufferCallback:](avspeechsynthesizer/write%28__tobuffercallback_%29.md): Generates speech for the utterance and invokes the callback with the audio buffer.
- [AVSpeechSynthesizerBufferCallback](avspeechsynthesizer/buffercallback.md): A type that defines a callback that receives a buffer of generated speech.
- [writeUtterance:toBufferCallback:toMarkerCallback:](avspeechsynthesizer/write%28__tobuffercallback_tomarkercallback_%29.md): Generates audio buffers and associated metadata for storage or further speech synthesis processing.
- [AVSpeechSynthesizerMarkerCallback](avspeechsynthesizer/markercallback.md): A type that defines a callback that receives speech markers.

### Enabling personal voices

- [personalVoiceAuthorizationStatus](avspeechsynthesizer/personalvoiceauthorizationstatus-swift.type.property.md): Your app’s authorization to use personal voices.
- [AVSpeechSynthesisAvailableVoicesDidChangeNotification](avspeechsynthesizer/availablevoicesdidchangenotification.md): A notification that indicates a change in available voices for speech synthesis.
- [requestPersonalVoiceAuthorizationWithCompletionHandler:](avspeechsynthesizer/requestpersonalvoiceauthorization%28completionhandler_%29.md): Prompts the user to authorize your app to use personal voices.
- [AVSpeechSynthesisPersonalVoiceAuthorizationStatus](avspeechsynthesizer/personalvoiceauthorizationstatus-swift.enum.md): An enumeration that models the personal voices authorization status.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
