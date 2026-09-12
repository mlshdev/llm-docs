> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspellchecker/didchangeautomaticspellingcorrectionnotification](https://developer.apple.com/documentation/appkit/nsspellchecker/didchangeautomaticspellingcorrectionnotification)

# didChangeAutomaticSpellingCorrectionNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

This notification is posted when the spell checker did change text using automatic spell checking correction. The are posted to the application’s default notification center.

## Declaration

```swift
class let didChangeAutomaticSpellingCorrectionNotification: NSNotification.Name
```

<a id="discussion"></a>

## Discussion

To observe this notification using Swift concurrency, use [NSSpellChecker.DidChangeAutomaticSpellingCorrectionMessage](didchangeautomaticspellingcorrectionmessage.md).

## See Also

### Notifications

- [didChangeAutomaticTextReplacementNotification](didchangeautomatictextreplacementnotification.md): Posted when the spell checker changed text using automatic text replacement. This notification is posted to the app’s default notification center.

# NSSpellCheckerDidChangeAutomaticSpellingCorrectionNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.7+

This notification is posted when the spell checker did change text using automatic spell checking correction. The are posted to the application’s default notification center.

## Declaration

```objectivec
extern NSNotificationName const NSSpellCheckerDidChangeAutomaticSpellingCorrectionNotification;
```

<a id="discussion"></a>

## Discussion

To observe this notification using Swift concurrency, use [NSSpellChecker.DidChangeAutomaticSpellingCorrectionMessage](didchangeautomaticspellingcorrectionmessage.md).

## See Also

### Notifications

- [NSSpellCheckerDidChangeAutomaticTextReplacementNotification](didchangeautomatictextreplacementnotification.md): Posted when the spell checker changed text using automatic text replacement. This notification is posted to the app’s default notification center.
- [NSSpellCheckerDidChangeAutomaticInlinePredictionNotification](../nsspellcheckerdidchangeautomaticinlinepredictionnotification.md): To observe this notification using Swift concurrency, use [NSSpellChecker.DidChangeAutomaticInlinePredictionMessage](didchangeautomaticinlinepredictionmessage.md).
