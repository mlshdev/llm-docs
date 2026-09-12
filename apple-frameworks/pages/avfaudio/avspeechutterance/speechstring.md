> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechutterance/speechstring](https://developer.apple.com/documentation/avfaudio/avspeechutterance/speechstring)

# speechString (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A string that contains the text for speech synthesis.

## Declaration

```swift
var speechString: String { get }
```

<a id="Discussion"></a>

## Discussion

You can’t change an utterance’s text after initializaiton. If you want the speech synthesizer to speak different text, create a new utterance.

## See Also

### Inspecting utterance text

- [attributedSpeechString](attributedspeechstring.md): An attributed string that contains the text for speech synthesis.

# speechString (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A string that contains the text for speech synthesis.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * speechString;
```

<a id="Discussion"></a>

## Discussion

You can’t change an utterance’s text after initializaiton. If you want the speech synthesizer to speak different text, create a new utterance.

## See Also

### Inspecting utterance text

- [attributedSpeechString](attributedspeechstring.md): An attributed string that contains the text for speech synthesis.
