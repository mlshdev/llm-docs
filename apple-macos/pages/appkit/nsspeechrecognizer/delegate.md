> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechrecognizer/delegate](https://developer.apple.com/documentation/appkit/nsspeechrecognizer/delegate)

# delegate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The delegate for the speech recognizer object.

## Declaration

```swift
weak var delegate: (any NSSpeechRecognizerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The delegate must conform to the [NSSpeechRecognizerDelegate](../nsspeechrecognizerdelegate.md) protocol.

## See Also

### Handling the Recognition of a Spoken Command

- [NSSpeechRecognizerDelegate](../nsspeechrecognizerdelegate.md): A set of optional methods implemented by delegates of [NSSpeechRecognizer](../nsspeechrecognizer.md) objects.

# delegate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The delegate for the speech recognizer object.

## Declaration

```objectivec
@property (weak, nullable) id<NSSpeechRecognizerDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The delegate must conform to the [NSSpeechRecognizerDelegate](../nsspeechrecognizerdelegate.md) protocol.

## See Also

### Handling the Recognition of a Spoken Command

- [NSSpeechRecognizerDelegate](../nsspeechrecognizerdelegate.md): A set of optional methods implemented by delegates of [NSSpeechRecognizer](../nsspeechrecognizer.md) objects.
