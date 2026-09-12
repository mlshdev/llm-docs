> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appshortcutparameterpresentation](https://developer.apple.com/documentation/appintents/appshortcutparameterpresentation)

# AppShortcutParameterPresentation

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Describes the presentation of an App Shortcut  for the provided parameter.

## Declaration

```swift
struct AppShortcutParameterPresentation<Intent, Value, Parameter, ParameterKeyPath> where Intent : AppIntent, Value : _IntentValue, Value : Sendable, Parameter : IntentParameter<Value>, ParameterKeyPath : KeyPath<Intent, Parameter>
```

## Topics

### Initializers

- [init(for:summary:optionsCollections:)](appshortcutparameterpresentation/init%28for_summary_optionscollections_%29.md): Creates an object that represents the App Shortcut with the specified parameters.

## See Also

### App Shortcut parameter presentation

- [AppShortcutParameterPresentationSummary](appshortcutparameterpresentationsummary.md): The summary of the presentation of an App Shortcut parameter.
- [AppShortcutParameterPresentationSummaryString](appshortcutparameterpresentationsummarystring.md)
- [AppShortcutParameterPresentationTitle](appshortcutparameterpresentationtitle.md): Deprecated. A struct that represents the title of the presentation of an App Shortcut.
- [AppShortcutParameterPresentationTitleString](appshortcutparameterpresentationtitlestring.md): Deprecated.
