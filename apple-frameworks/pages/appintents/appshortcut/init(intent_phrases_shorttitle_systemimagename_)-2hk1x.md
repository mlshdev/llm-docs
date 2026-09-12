> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appshortcut/init(intent:phrases:shorttitle:systemimagename:)-2hk1x](https://developer.apple.com/documentation/appintents/appshortcut/init(intent:phrases:shorttitle:systemimagename:)-2hk1x)

# init(intent:phrases:shortTitle:systemImageName:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 16.0+ (deprecated in 17.0) · iPadOS 16.0+ (deprecated in 17.0) · Mac Catalyst 16.0+ (deprecated in 17.0) · macOS 13.0+ (deprecated in 14.0) · tvOS 16.0+ (deprecated in 17.0) · visionOS · watchOS 9.0+ (deprecated in 10.0)

Initializes an App Shortcut with phrases that run the app intent, a title, and an image.

> Please provide a shortTitle and systemImageName

## Declaration

```swift
init<Intent>(intent: Intent, phrases: [AppShortcutPhrase<Intent>], shortTitle: LocalizedStringResource? = nil, systemImageName: String? = nil) where Intent : AppIntent
```

<a id="discussion"></a>

## Discussion

Use this initializer to create an App Shortcut for your app intent that people discover in the Shortcuts app and that they can run using the Action button on supported iPhone models.

## See Also

### Creating an app shortcut

- [init(intent:phrases:shortTitle:systemImageName:)](init%28intent_phrases_shorttitle_systemimagename_%29-8yntq.md): Initializes an App Shortcut with phrases that run the app intent, a title, and an image.
- [init(intent:phrases:shortTitle:systemImageName:parameterPresentation:)](init%28intent_phrases_shorttitle_systemimagename_parameterpresentation_%29.md): Initializes an App Shortcut with phrases that run the app intent, a title, an image, and specified parameters.
