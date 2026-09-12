> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appshortcutparameterpresentationtitlestring](https://developer.apple.com/documentation/appintents/appshortcutparameterpresentationtitlestring)

# AppShortcutParameterPresentationTitleString

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

> Please use init(for:summary:optionsCollections:)

## Declaration

```swift
struct AppShortcutParameterPresentationTitleString<Intent, Value, Parameter, ParameterKeyPath> where Intent : AppIntent, Value : _IntentValue, Value : Sendable, Parameter : IntentParameter<Value>, ParameterKeyPath : KeyPath<Intent, Parameter>
```

## Topics

### Initializers

- [init(\_:)](appshortcutparameterpresentationtitlestring/init%28__%29.md): Deprecated.

## Relationships

### Conforms To

- [ExpressibleByExtendedGraphemeClusterLiteral](https://developer.apple.com/documentation/swift/expressiblebyextendedgraphemeclusterliteral)
- [ExpressibleByStringInterpolation](https://developer.apple.com/documentation/swift/expressiblebystringinterpolation)
- [ExpressibleByStringLiteral](https://developer.apple.com/documentation/swift/expressiblebystringliteral)
- [ExpressibleByUnicodeScalarLiteral](https://developer.apple.com/documentation/swift/expressiblebyunicodescalarliteral)

## See Also

### App Shortcut parameter presentation

- [AppShortcutParameterPresentation](appshortcutparameterpresentation.md): Describes the presentation of an App Shortcut for the provided parameter.
- [AppShortcutParameterPresentationSummary](appshortcutparameterpresentationsummary.md): The summary of the presentation of an App Shortcut parameter.
- [AppShortcutParameterPresentationSummaryString](appshortcutparameterpresentationsummarystring.md)
- [AppShortcutParameterPresentationTitle](appshortcutparameterpresentationtitle.md): Deprecated. A struct that represents the title of the presentation of an App Shortcut.
