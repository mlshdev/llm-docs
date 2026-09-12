> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appshortcutparameterpresentationtitle](https://developer.apple.com/documentation/appintents/appshortcutparameterpresentationtitle)

# AppShortcutParameterPresentationTitle

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

A struct that represents the title of the presentation of an App Shortcut.

> Please use init(for:summary:optionsCollections:)

## Declaration

```swift
struct AppShortcutParameterPresentationTitle<Intent, Value, Parameter, ParameterKeyPath> where Intent : AppIntent, Value : _IntentValue, Value : Sendable, Parameter : IntentParameter<Value>, ParameterKeyPath : KeyPath<Intent, Parameter>
```

<a id="overview"></a>

## Overview

Provide a specific and a generic title. The specific title should include the parameter in the interpolation. For example provide `"Call \(\.$person)"` as a specific title that includes the parameter and a simple string that doesn’t have the parameter specified, e.g. `"Call Person..."`.

## Topics

### Initializers

- [init(specific:generic:table:)](appshortcutparameterpresentationtitle/init%28specific_generic_table_%29.md): Deprecated. Initializes an `AppShortcutParameterPresentationTitle` with the specified parameters.

## See Also

### App Shortcut parameter presentation

- [AppShortcutParameterPresentation](appshortcutparameterpresentation.md): Describes the presentation of an App Shortcut for the provided parameter.
- [AppShortcutParameterPresentationSummary](appshortcutparameterpresentationsummary.md): The summary of the presentation of an App Shortcut parameter.
- [AppShortcutParameterPresentationSummaryString](appshortcutparameterpresentationsummarystring.md)
- [AppShortcutParameterPresentationTitleString](appshortcutparameterpresentationtitlestring.md): Deprecated.
