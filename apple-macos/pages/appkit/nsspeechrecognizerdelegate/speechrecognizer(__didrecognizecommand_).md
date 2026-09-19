> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsspeechrecognizerdelegate/speechrecognizer(_:didrecognizecommand:)

# speechRecognizer(\_:didRecognizeCommand:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked when the recognition engine has recognized the application command `command`.

## Declaration

```swift
@MainActor optional func speechRecognizer(_ sender: NSSpeechRecognizer, didRecognizeCommand command: String)
```

<a id="Discussion"></a>

## Discussion

`command` is one of the strings from the array passed to [commands](../nsspeechrecognizer/commands.md). The delegate typically evaluates which command was recognized and performs the related action.

# speechRecognizer:didRecognizeCommand: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked when the recognition engine has recognized the application command `command`.

## Declaration

```objectivec
- (void) speechRecognizer:(NSSpeechRecognizer *) sender didRecognizeCommand:(NSString *) command;
```

<a id="Discussion"></a>

## Discussion

`command` is one of the strings from the array passed to [commands](../nsspeechrecognizer/commands.md). The delegate typically evaluates which command was recognized and performs the related action.
