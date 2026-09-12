> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspellchecker/didchangeautomatictextreplacementnotification](https://developer.apple.com/documentation/appkit/nsspellchecker/didchangeautomatictextreplacementnotification)

# didChangeAutomaticTextReplacementNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

Posted when the spell checker changed text using automatic text replacement.  This notification is posted to the app’s default notification center.

## Declaration

```swift
class let didChangeAutomaticTextReplacementNotification: NSNotification.Name
```

<a id="discussion"></a>

## Discussion

To observe this notification using Swift concurrency, use [NSSpellChecker.DidChangeAutomaticTextReplacementMessage](didchangeautomatictextreplacementmessage.md).

## See Also

### Notifications

- [didChangeAutomaticSpellingCorrectionNotification](didchangeautomaticspellingcorrectionnotification.md): This notification is posted when the spell checker did change text using automatic spell checking correction. The are posted to the application’s default notification center.

# NSSpellCheckerDidChangeAutomaticTextReplacementNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.7+

Posted when the spell checker changed text using automatic text replacement.  This notification is posted to the app’s default notification center.

## Declaration

```objectivec
extern NSNotificationName const NSSpellCheckerDidChangeAutomaticTextReplacementNotification;
```

<a id="discussion"></a>

## Discussion

To observe this notification using Swift concurrency, use [NSSpellChecker.DidChangeAutomaticTextReplacementMessage](didchangeautomatictextreplacementmessage.md).

## See Also

### Notifications

- [NSSpellCheckerDidChangeAutomaticSpellingCorrectionNotification](didchangeautomaticspellingcorrectionnotification.md): This notification is posted when the spell checker did change text using automatic spell checking correction. The are posted to the application’s default notification center.
- [NSSpellCheckerDidChangeAutomaticInlinePredictionNotification](../nsspellcheckerdidchangeautomaticinlinepredictionnotification.md): To observe this notification using Swift concurrency, use [NSSpellChecker.DidChangeAutomaticInlinePredictionMessage](didchangeautomaticinlinepredictionmessage.md).
