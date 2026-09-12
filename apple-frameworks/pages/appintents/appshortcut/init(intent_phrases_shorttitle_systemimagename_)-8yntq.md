> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appshortcut/init(intent:phrases:shorttitle:systemimagename:)-8yntq](https://developer.apple.com/documentation/appintents/appshortcut/init(intent:phrases:shorttitle:systemimagename:)-8yntq)

# init(intent:phrases:shortTitle:systemImageName:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Initializes an App Shortcut with phrases that run the app intent, a title, and an image.

## Declaration

```swift
init<Intent>(intent: Intent, phrases: [AppShortcutPhrase<Intent>], shortTitle: LocalizedStringResource, systemImageName: String) where Intent : AppIntent
```

<a id="discussion"></a>

## Discussion

Use this initializer to create an App Shortcut for your app intent that people discover in the Shortcuts app and that they can run using the Action button on supported iPhone models.

## See Also

### Creating an app shortcut

- [init(intent:phrases:shortTitle:systemImageName:parameterPresentation:)](init%28intent_phrases_shorttitle_systemimagename_parameterpresentation_%29.md): Initializes an App Shortcut with phrases that run the app intent, a title, an image, and specified parameters.
- [init(intent:phrases:shortTitle:systemImageName:)](init%28intent_phrases_shorttitle_systemimagename_%29-2hk1x.md): Deprecated. Initializes an App Shortcut with phrases that run the app intent, a title, and an image.
