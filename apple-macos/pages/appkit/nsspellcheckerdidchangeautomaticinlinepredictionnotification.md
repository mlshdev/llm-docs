> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspellcheckerdidchangeautomaticinlinepredictionnotification](https://developer.apple.com/documentation/appkit/nsspellcheckerdidchangeautomaticinlinepredictionnotification)

# NSSpellCheckerDidChangeAutomaticInlinePredictionNotification

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 14.0+

To observe this notification using Swift concurrency, use [NSSpellChecker.DidChangeAutomaticInlinePredictionMessage](nsspellchecker/didchangeautomaticinlinepredictionmessage.md).

## Declaration

```objectivec
extern NSNotificationName const NSSpellCheckerDidChangeAutomaticInlinePredictionNotification;
```

## See Also

### Notifications

- [NSSpellCheckerDidChangeAutomaticSpellingCorrectionNotification](nsspellchecker/didchangeautomaticspellingcorrectionnotification.md): This notification is posted when the spell checker did change text using automatic spell checking correction. The are posted to the application’s default notification center.
- [NSSpellCheckerDidChangeAutomaticTextReplacementNotification](nsspellchecker/didchangeautomatictextreplacementnotification.md): Posted when the spell checker changed text using automatic text replacement. This notification is posted to the app’s default notification center.
