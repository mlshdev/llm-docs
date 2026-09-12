> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentdescription](https://developer.apple.com/documentation/appintents/intentdescription)

# IntentDescription

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

The human-readable description and metadata for an app intent.

## Declaration

```swift
struct IntentDescription
```

## Topics

### Creating a description

- [init(\_:categoryName:searchKeywords:)](intentdescription/init%28__categoryname_searchkeywords_%29.md)

### Initializers

- [init(\_:categoryName:searchKeywords:resultValueName:)](intentdescription/init%28__categoryname_searchkeywords_resultvaluename_%29.md)

### Instance Properties

- [categoryName](intentdescription/categoryname.md): The category in which this intent will be grouped into in the Shortcuts editor.
- [descriptionText](intentdescription/descriptiontext.md): A short, localized, human-readable string that describes the intent using sentence case and followed by a period.
- [resultValueName](intentdescription/resultvaluename.md): A name for the result of this intent, which will be displayed in the Shortcuts editor, such as when the output is used as a variable.
- [searchKeywords](intentdescription/searchkeywords.md): A set of keywords which, when searched in the Shortcuts editor, will reveal this intent.

## Relationships

### Conforms To

- [ExpressibleByExtendedGraphemeClusterLiteral](https://developer.apple.com/documentation/swift/expressiblebyextendedgraphemeclusterliteral)
- [ExpressibleByStringLiteral](https://developer.apple.com/documentation/swift/expressiblebystringliteral)
- [ExpressibleByUnicodeScalarLiteral](https://developer.apple.com/documentation/swift/expressiblebyunicodescalarliteral)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Intent-related data

- [IntentModes](intentmodes.md): A set of options you use to configure the runtime behavior of an app intent.
- [IntentSystemContext](intentsystemcontext.md): Contextual information that the system provides while it performs an app intent.
- [IntentDialog](intentdialog.md): The text you want the system to display, or speak, when requesting a value, asking for disambiguation, or confirming an action.
- [IntentDeprecation](intentdeprecation.md)
- [IntentProjection](intentprojection.md): Projections for an app intent that returns non-optional values for parameters.
