> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appshortcutparameterpresentationsummary](https://developer.apple.com/documentation/appintents/appshortcutparameterpresentationsummary)

# AppShortcutParameterPresentationSummary

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

The summary of the presentation of an App Shortcut parameter.

## Declaration

```swift
struct AppShortcutParameterPresentationSummary<Intent, Value, Parameter, ParameterKeyPath> where Intent : AppIntent, Value : _IntentValue, Value : Sendable, Parameter : IntentParameter<Value>, ParameterKeyPath : KeyPath<Intent, Parameter>
```

<a id="overview"></a>

## Overview

Make sure to provide a summary string that includes the parameter in the interpolation; for example, `"Call \(\.$person)"`.

## Topics

### Initializers

- [init(\_:table:)](appshortcutparameterpresentationsummary/init%28__table_%29.md): Initializes a presentation summary with the specified parameters.

## See Also

### App Shortcut parameter presentation

- [AppShortcutParameterPresentation](appshortcutparameterpresentation.md): Describes the presentation of an App Shortcut for the provided parameter.
- [AppShortcutParameterPresentationSummaryString](appshortcutparameterpresentationsummarystring.md)
- [AppShortcutParameterPresentationTitle](appshortcutparameterpresentationtitle.md): Deprecated. A struct that represents the title of the presentation of an App Shortcut.
- [AppShortcutParameterPresentationTitleString](appshortcutparameterpresentationtitlestring.md): Deprecated.
