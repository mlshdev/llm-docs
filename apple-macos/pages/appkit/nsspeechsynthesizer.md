> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechsynthesizer](https://developer.apple.com/documentation/appkit/nsspeechsynthesizer)

# NSSpeechSynthesizer (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.3+ (deprecated in 14.0)

The Cocoa interface to speech synthesis in macOS.

> Use AVSpeechSynthesizer in AVFoundation instead

## Declaration

```swift
class NSSpeechSynthesizer
```

<a id="overview"></a>

## Overview

Speech synthesis, also called text-to-speech (TTS), parses text and converts it into audible speech. It offers a concurrent feedback mode that can be used in concert with or in place of traditional visual and aural notifications. For example, your application can use a speech synthesizer object to “pronounce” the text of important alert dialogs. Synthesized speech has several advantages. It can provide urgent information to users without forcing them to shift attention from their current task. And because speech doesn’t rely on visual elements for meaning, it is a crucial technology for users with vision or attention disabilities.

In addition, synthesized speech can help save system resources. Because sound samples can take up large amounts of room on disk, using text in place of sampled sound is extremely efficient, and so a multimedia application might use an [NSSpeechSynthesizer](nsspeechsynthesizer.md) object to provide a narration of a QuickTime movie instead of including sampled-sound data on a movie track.

When you create an [NSSpeechSynthesizer](nsspeechsynthesizer.md) instance using the default initializer (`init`), the class uses the **default voice** selected in System Preferences \> Speech. Alternatively, you can select a specific voice for an [NSSpeechSynthesizer](nsspeechsynthesizer.md) instance by initializing it with [init(voice:)](nsspeechsynthesizer/init%28voice_%29.md). To begin synthesis, send either [startSpeaking(\_:)](nsspeechsynthesizer/startspeaking%28__%29.md) or [startSpeaking(\_:to:)](nsspeechsynthesizer/startspeaking%28__to_%29.md) to the instance. The former generates speech through the system’s default sound output device; the latter saves the generated speech to a file. If you wish to be notified when the current speech concludes, set the [delegate](nsspeechsynthesizer/delegate.md) property and implement the delegate method [speechSynthesizer(\_:didFinishSpeaking:)](nsspeechsynthesizerdelegate/speechsynthesizer%28__didfinishspeaking_%29.md).

Speech synthesis is just one of the macOS speech technologies. The speech recognizer technology allows applications to “listen to” text spoken in U.S. English; the [NSSpeechRecognizer](nsspeechrecognizer.md) class is the Cocoa interface to this technology. Both technologies provide benefits for all users, and are particularly useful to those users who have difficulties seeing the screen or using the mouse and keyboard.

<a id="Speech-Feedback-Window"></a>

### Speech Feedback Window

The speech feedback window ([Figure 1](nsspeechsynthesizer.md#1965715)) displays the text recognized from the user’s speech and the text from which an `NSSpeechSynthesizer` object synthesizes speech. Using the feedback window makes spoken exchange more natural and helps the user understand the synthesized speech.

![](https://developer.apple.com/images/com.apple.appkit/media-1965715.jpg)

For example, your application may use an [NSSpeechRecognizer](nsspeechrecognizer.md) object to listen for the command “Play some music.” When it recognizes this command, your application might then respond by speaking “Which artist?” using a speech synthesizer.

When `UsesFeedbackWindow` is [true](https://developer.apple.com/documentation/swift/true), the speech synthesizer uses the feedback window if its visible, which the user specifies in System Preferences \> Speech.

## Topics

### Creating a Speech Synthesizer

- [init(voice:)](nsspeechsynthesizer/init%28voice_%29.md): Deprecated. Initializes the receiver with a voice.

### Customizing the Speech Synthesizer Behavior

- [delegate](nsspeechsynthesizer/delegate.md): Deprecated. The synthesizer’s delegate.
- [NSSpeechSynthesizerDelegate](nsspeechsynthesizerdelegate.md): Deprecated. A set of optional methods implemented by delegates of [NSSpeechSynthesizer](nsspeechsynthesizer.md) objects.

### Configuring Speech Synthesizers

- [usesFeedbackWindow](nsspeechsynthesizer/usesfeedbackwindow.md): Deprecated. Indicates whether the receiver uses the speech feedback window.
- [voice()](nsspeechsynthesizer/voice%28%29.md): Deprecated. Returns the identifier of the receiver’s current voice.
- [setVoice(\_:)](nsspeechsynthesizer/setvoice%28__%29.md): Deprecated. Sets the receiver’s current voice.
- [rate](nsspeechsynthesizer/rate.md): Deprecated. The synthesizer’s speaking rate (words per minute).
- [volume](nsspeechsynthesizer/volume.md): Deprecated. The synthesizer’s speaking volume.

### Configuring Speech Attributes

- [addSpeechDictionary(\_:)](nsspeechsynthesizer/addspeechdictionary%28__%29.md): Deprecated. Registers the given speech dictionary with the receiver.
- [NSSpeechSynthesizer.DictionaryKey](nsspeechsynthesizer/dictionarykey.md): Deprecated. These constants identify key-value pairs used to add vocabulary to the dictionary using [addSpeechDictionary(\_:)](nsspeechsynthesizer/addspeechdictionary%28__%29.md).
- [object(forProperty:)](nsspeechsynthesizer/object%28forproperty_%29.md): Deprecated. Provides the value of a receiver’s property.
- [setObject(\_:forProperty:)](nsspeechsynthesizer/setobject%28__forproperty_%29.md): Deprecated. Specifies the value of a receiver’s property.
- [NSSpeechSynthesizer.SpeechPropertyKey](nsspeechsynthesizer/speechpropertykey.md): Deprecated. These constants are used with [setObject(\_:forProperty:)](nsspeechsynthesizer/setobject%28__forproperty_%29.md) and [object(forProperty:)](nsspeechsynthesizer/object%28forproperty_%29.md) to get or set the characteristics of a synthesizer.
- [NSSpeechSynthesizer.SpeechPropertyKey.CommandDelimiterKey](nsspeechsynthesizer/speechpropertykey/commanddelimiterkey.md): Deprecated. Keys for the command delimiters.
- [NSSpeechSynthesizer.SpeechPropertyKey.ErrorKey](nsspeechsynthesizer/speechpropertykey/errorkey.md): Deprecated. Keys that identify errors that may occur during speech synthesis.
- [NSSpeechSynthesizer.SpeechPropertyKey.Mode](nsspeechsynthesizer/speechpropertykey/mode.md): Deprecated. Keys for the speaking mode.
- [NSSpeechSynthesizer.SpeechPropertyKey.PhonemeInfoKey](nsspeechsynthesizer/speechpropertykey/phonemeinfokey.md): Deprecated. Keys for the speech phoneme information.
- [NSSpeechSynthesizer.SpeechPropertyKey.StatusKey](nsspeechsynthesizer/speechpropertykey/statuskey.md): Deprecated. Keys for the speech synthesizier status.
- [NSSpeechSynthesizer.SpeechPropertyKey.SynthesizerInfoKey](nsspeechsynthesizer/speechpropertykey/synthesizerinfokey.md): Deprecated. Keys for the speech synthesizier information.
- [NSSpeechSynthesizer.VoiceGender](nsspeechsynthesizer/voicegender.md): Deprecated. The following constants define voice gender attributes, which are the allowable values of the [gender](nsspeechsynthesizer/voiceattributekey/gender.md) key returned by [attributes(forVoice:)](nsspeechsynthesizer/attributes%28forvoice_%29.md).

### Getting Speech Synthesizer Information

- [availableVoices](nsspeechsynthesizer/availablevoices.md): Deprecated. Provides the identifiers of the voices available on the system.
- [attributes(forVoice:)](nsspeechsynthesizer/attributes%28forvoice_%29.md): Deprecated. Provides the attribute dictionary of a voice.
- [defaultVoice](nsspeechsynthesizer/defaultvoice.md): Deprecated. Provides the identifier of the default voice.
- [NSSpeechSynthesizer.VoiceName](nsspeechsynthesizer/voicename.md): Deprecated.
- [NSSpeechSynthesizer.VoiceAttributeKey](nsspeechsynthesizer/voiceattributekey.md): Deprecated. The following constants are keys for the dictionary returned by [attributes(forVoice:)](nsspeechsynthesizer/attributes%28forvoice_%29.md).

### Getting Speech State

- [isAnyApplicationSpeaking](nsspeechsynthesizer/isanyapplicationspeaking.md): Deprecated. A Boolean value indicating whether any application is currently speaking through the sound output device.

### Synthesizing Speech

- [isSpeaking](nsspeechsynthesizer/isspeaking.md): Deprecated. Indicates whether the receiver is currently generating synthesized speech.
- [startSpeaking(\_:)](nsspeechsynthesizer/startspeaking%28__%29.md): Deprecated. Begins speaking synthesized text through the system’s default sound output device.
- [startSpeaking(\_:to:)](nsspeechsynthesizer/startspeaking%28__to_%29.md): Deprecated. Begins synthesizing text into a sound (AIFF) file.
- [pauseSpeaking(at:)](nsspeechsynthesizer/pausespeaking%28at_%29.md): Deprecated. Pauses synthesis in progress at a given boundary.
- [continueSpeaking()](nsspeechsynthesizer/continuespeaking%28%29.md): Deprecated. Resumes synthesis.
- [stopSpeaking()](nsspeechsynthesizer/stopspeaking%28%29.md): Deprecated. Stops synthesis in progress.
- [stopSpeaking(at:)](nsspeechsynthesizer/stopspeaking%28at_%29.md): Deprecated. Stops synthesis in progress at a given boundary.
- [NSSpeechSynthesizer.Boundary](nsspeechsynthesizer/boundary.md): Deprecated. These constants are used to indicate where speech should be stopped and paused. See [pauseSpeaking(at:)](nsspeechsynthesizer/pausespeaking%28at_%29.md) and [stopSpeaking(at:)](nsspeechsynthesizer/stopspeaking%28at_%29.md).

### Getting Phonemes

- [phonemes(from:)](nsspeechsynthesizer/phonemes%28from_%29.md): Deprecated. Provides the phoneme symbols generated by the given text.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Speech

- [NSSpeechRecognizer](nsspeechrecognizer.md): The Cocoa interface to speech recognition in macOS.

# NSSpeechSynthesizer (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.3+ (deprecated in 14.0)

The Cocoa interface to speech synthesis in macOS.

> Use AVSpeechSynthesizer in AVFoundation instead

## Declaration

```objectivec
@interface NSSpeechSynthesizer : NSObject
```

<a id="overview"></a>

## Overview

Speech synthesis, also called text-to-speech (TTS), parses text and converts it into audible speech. It offers a concurrent feedback mode that can be used in concert with or in place of traditional visual and aural notifications. For example, your application can use a speech synthesizer object to “pronounce” the text of important alert dialogs. Synthesized speech has several advantages. It can provide urgent information to users without forcing them to shift attention from their current task. And because speech doesn’t rely on visual elements for meaning, it is a crucial technology for users with vision or attention disabilities.

In addition, synthesized speech can help save system resources. Because sound samples can take up large amounts of room on disk, using text in place of sampled sound is extremely efficient, and so a multimedia application might use an [NSSpeechSynthesizer](nsspeechsynthesizer.md) object to provide a narration of a QuickTime movie instead of including sampled-sound data on a movie track.

When you create an [NSSpeechSynthesizer](nsspeechsynthesizer.md) instance using the default initializer (`init`), the class uses the **default voice** selected in System Preferences \> Speech. Alternatively, you can select a specific voice for an [NSSpeechSynthesizer](nsspeechsynthesizer.md) instance by initializing it with [initWithVoice:](nsspeechsynthesizer/init%28voice_%29.md). To begin synthesis, send either [startSpeakingString:](nsspeechsynthesizer/startspeaking%28__%29.md) or [startSpeakingString:toURL:](nsspeechsynthesizer/startspeaking%28__to_%29.md) to the instance. The former generates speech through the system’s default sound output device; the latter saves the generated speech to a file. If you wish to be notified when the current speech concludes, set the [delegate](nsspeechsynthesizer/delegate.md) property and implement the delegate method [speechSynthesizer:didFinishSpeaking:](nsspeechsynthesizerdelegate/speechsynthesizer%28__didfinishspeaking_%29.md).

Speech synthesis is just one of the macOS speech technologies. The speech recognizer technology allows applications to “listen to” text spoken in U.S. English; the [NSSpeechRecognizer](nsspeechrecognizer.md) class is the Cocoa interface to this technology. Both technologies provide benefits for all users, and are particularly useful to those users who have difficulties seeing the screen or using the mouse and keyboard.

<a id="Speech-Feedback-Window"></a>

### Speech Feedback Window

The speech feedback window ([Figure 1](nsspeechsynthesizer.md#1965715)) displays the text recognized from the user’s speech and the text from which an `NSSpeechSynthesizer` object synthesizes speech. Using the feedback window makes spoken exchange more natural and helps the user understand the synthesized speech.

![](https://developer.apple.com/images/com.apple.appkit/media-1965715.jpg)

For example, your application may use an [NSSpeechRecognizer](nsspeechrecognizer.md) object to listen for the command “Play some music.” When it recognizes this command, your application might then respond by speaking “Which artist?” using a speech synthesizer.

When `UsesFeedbackWindow` is [true](https://developer.apple.com/documentation/swift/true), the speech synthesizer uses the feedback window if its visible, which the user specifies in System Preferences \> Speech.

## Topics

### Creating a Speech Synthesizer

- [initWithVoice:](nsspeechsynthesizer/init%28voice_%29.md): Deprecated. Initializes the receiver with a voice.

### Customizing the Speech Synthesizer Behavior

- [delegate](nsspeechsynthesizer/delegate.md): Deprecated. The synthesizer’s delegate.
- [NSSpeechSynthesizerDelegate](nsspeechsynthesizerdelegate.md): Deprecated. A set of optional methods implemented by delegates of [NSSpeechSynthesizer](nsspeechsynthesizer.md) objects.

### Configuring Speech Synthesizers

- [usesFeedbackWindow](nsspeechsynthesizer/usesfeedbackwindow.md): Deprecated. Indicates whether the receiver uses the speech feedback window.
- [voice](nsspeechsynthesizer/voice%28%29.md): Deprecated. Returns the identifier of the receiver’s current voice.
- [setVoice:](nsspeechsynthesizer/setvoice%28__%29.md): Deprecated. Sets the receiver’s current voice.
- [rate](nsspeechsynthesizer/rate.md): Deprecated. The synthesizer’s speaking rate (words per minute).
- [volume](nsspeechsynthesizer/volume.md): Deprecated. The synthesizer’s speaking volume.

### Configuring Speech Attributes

- [addSpeechDictionary:](nsspeechsynthesizer/addspeechdictionary%28__%29.md): Deprecated. Registers the given speech dictionary with the receiver.
- [NSSpeechDictionaryKey](nsspeechsynthesizer/dictionarykey.md): Deprecated. These constants identify key-value pairs used to add vocabulary to the dictionary using [addSpeechDictionary:](nsspeechsynthesizer/addspeechdictionary%28__%29.md).
- [objectForProperty:error:](nsspeechsynthesizer/object%28forproperty_%29.md): Deprecated. Provides the value of a receiver’s property.
- [setObject:forProperty:error:](nsspeechsynthesizer/setobject%28__forproperty_%29.md): Deprecated. Specifies the value of a receiver’s property.
- [NSSpeechPropertyKey](nsspeechsynthesizer/speechpropertykey.md): Deprecated. These constants are used with [setObject:forProperty:error:](nsspeechsynthesizer/setobject%28__forproperty_%29.md) and [objectForProperty:error:](nsspeechsynthesizer/object%28forproperty_%29.md) to get or set the characteristics of a synthesizer.
- [NSSpeechCommandDelimiterKey](nsspeechsynthesizer/speechpropertykey/commanddelimiterkey.md): Deprecated. Keys for the command delimiters.
- [NSSpeechErrorKey](nsspeechsynthesizer/speechpropertykey/errorkey.md): Deprecated. Keys that identify errors that may occur during speech synthesis.
- [NSSpeechMode](nsspeechsynthesizer/speechpropertykey/mode.md): Deprecated. Keys for the speaking mode.
- [NSSpeechPhonemeInfoKey](nsspeechsynthesizer/speechpropertykey/phonemeinfokey.md): Deprecated. Keys for the speech phoneme information.
- [NSSpeechStatusKey](nsspeechsynthesizer/speechpropertykey/statuskey.md): Deprecated. Keys for the speech synthesizier status.
- [NSSpeechSynthesizerInfoKey](nsspeechsynthesizer/speechpropertykey/synthesizerinfokey.md): Deprecated. Keys for the speech synthesizier information.
- [NSVoiceGenderName](nsspeechsynthesizer/voicegender.md): Deprecated. The following constants define voice gender attributes, which are the allowable values of the [NSVoiceGender](nsspeechsynthesizer/voiceattributekey/gender.md) key returned by [attributesForVoice:](nsspeechsynthesizer/attributes%28forvoice_%29.md).

### Getting Speech Synthesizer Information

- [availableVoices](nsspeechsynthesizer/availablevoices.md): Deprecated. Provides the identifiers of the voices available on the system.
- [attributesForVoice:](nsspeechsynthesizer/attributes%28forvoice_%29.md): Deprecated. Provides the attribute dictionary of a voice.
- [defaultVoice](nsspeechsynthesizer/defaultvoice.md): Deprecated. Provides the identifier of the default voice.
- [NSSpeechSynthesizerVoiceName](nsspeechsynthesizer/voicename.md): Deprecated.
- [NSVoiceAttributeKey](nsspeechsynthesizer/voiceattributekey.md): Deprecated. The following constants are keys for the dictionary returned by [attributesForVoice:](nsspeechsynthesizer/attributes%28forvoice_%29.md).

### Getting Speech State

- [anyApplicationSpeaking](nsspeechsynthesizer/isanyapplicationspeaking.md): Deprecated. A Boolean value indicating whether any application is currently speaking through the sound output device.

### Synthesizing Speech

- [speaking](nsspeechsynthesizer/isspeaking.md): Deprecated. Indicates whether the receiver is currently generating synthesized speech.
- [startSpeakingString:](nsspeechsynthesizer/startspeaking%28__%29.md): Deprecated. Begins speaking synthesized text through the system’s default sound output device.
- [startSpeakingString:toURL:](nsspeechsynthesizer/startspeaking%28__to_%29.md): Deprecated. Begins synthesizing text into a sound (AIFF) file.
- [pauseSpeakingAtBoundary:](nsspeechsynthesizer/pausespeaking%28at_%29.md): Deprecated. Pauses synthesis in progress at a given boundary.
- [continueSpeaking](nsspeechsynthesizer/continuespeaking%28%29.md): Deprecated. Resumes synthesis.
- [stopSpeaking](nsspeechsynthesizer/stopspeaking%28%29.md): Deprecated. Stops synthesis in progress.
- [stopSpeakingAtBoundary:](nsspeechsynthesizer/stopspeaking%28at_%29.md): Deprecated. Stops synthesis in progress at a given boundary.
- [NSSpeechBoundary](nsspeechsynthesizer/boundary.md): Deprecated. These constants are used to indicate where speech should be stopped and paused. See [pauseSpeakingAtBoundary:](nsspeechsynthesizer/pausespeaking%28at_%29.md) and [stopSpeakingAtBoundary:](nsspeechsynthesizer/stopspeaking%28at_%29.md).

### Getting Phonemes

- [phonemesFromText:](nsspeechsynthesizer/phonemes%28from_%29.md): Deprecated. Provides the phoneme symbols generated by the given text.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Speech

- [NSSpeechRecognizer](nsspeechrecognizer.md): The Cocoa interface to speech recognition in macOS.
