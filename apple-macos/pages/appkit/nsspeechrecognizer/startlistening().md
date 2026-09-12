> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechrecognizer/startlistening()](https://developer.apple.com/documentation/appkit/nsspeechrecognizer/startlistening())

# startListening() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the speech recognition engine to begin listening for commands.

## Declaration

```swift
func startListening()
```

<a id="Discussion"></a>

## Discussion

When a command is recognized the message [speechRecognizer(\_:didRecognizeCommand:)](../nsspeechrecognizerdelegate/speechrecognizer%28__didrecognizecommand_%29.md) is sent to the delegate.

## See Also

### Listening

- [stopListening()](stoplistening%28%29.md): Tells the speech recognition engine to suspend listening for commands.

# startListening (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the speech recognition engine to begin listening for commands.

## Declaration

```objectivec
- (void) startListening;
```

<a id="Discussion"></a>

## Discussion

When a command is recognized the message [speechRecognizer:didRecognizeCommand:](../nsspeechrecognizerdelegate/speechrecognizer%28__didrecognizecommand_%29.md) is sent to the delegate.

## See Also

### Listening

- [stopListening](stoplistening%28%29.md): Tells the speech recognition engine to suspend listening for commands.
