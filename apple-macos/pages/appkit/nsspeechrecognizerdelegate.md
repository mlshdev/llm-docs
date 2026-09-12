> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechrecognizerdelegate](https://developer.apple.com/documentation/appkit/nsspeechrecognizerdelegate)

# NSSpeechRecognizerDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of optional methods implemented by delegates of [NSSpeechRecognizer](nsspeechrecognizer.md) objects.

## Declaration

```swift
protocol NSSpeechRecognizerDelegate : NSObjectProtocol
```

## Topics

### Recognizing Commands

- [speechRecognizer(\_:didRecognizeCommand:)](nsspeechrecognizerdelegate/speechrecognizer%28__didrecognizecommand_%29.md): Invoked when the recognition engine has recognized the application command `command`.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Handling the Recognition of a Spoken Command

- [delegate](nsspeechrecognizer/delegate.md): The delegate for the speech recognizer object.

# NSSpeechRecognizerDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of optional methods implemented by delegates of [NSSpeechRecognizer](nsspeechrecognizer.md) objects.

## Declaration

```objectivec
@protocol NSSpeechRecognizerDelegate <NSObject>
```

## Topics

### Recognizing Commands

- [speechRecognizer:didRecognizeCommand:](nsspeechrecognizerdelegate/speechrecognizer%28__didrecognizecommand_%29.md): Invoked when the recognition engine has recognized the application command `command`.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Handling the Recognition of a Spoken Command

- [delegate](nsspeechrecognizer/delegate.md): The delegate for the speech recognizer object.
