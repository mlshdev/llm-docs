> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechutterance/attributedspeechstring](https://developer.apple.com/documentation/avfaudio/avspeechutterance/attributedspeechstring)

# attributedSpeechString (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An attributed string that contains the text for speech synthesis.

## Declaration

```swift
var attributedSpeechString: NSAttributedString { get }
```

<a id="Discussion"></a>

## Discussion

You can’t change an utterance’s text after initializaiton. If you want the speech synthesizer to speak different text, create a new utterance.

## See Also

### Inspecting utterance text

- [speechString](speechstring.md): A string that contains the text for speech synthesis.

# attributedSpeechString (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An attributed string that contains the text for speech synthesis.

## Declaration

```objectivec
@property (nonatomic, readonly) NSAttributedString * attributedSpeechString;
```

<a id="Discussion"></a>

## Discussion

You can’t change an utterance’s text after initializaiton. If you want the speech synthesizer to speak different text, create a new utterance.

## See Also

### Inspecting utterance text

- [speechString](speechstring.md): A string that contains the text for speech synthesis.
