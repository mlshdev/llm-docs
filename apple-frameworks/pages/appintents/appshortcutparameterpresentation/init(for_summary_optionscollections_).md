> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/appshortcutparameterpresentation/init(for:summary:optionscollections:)

# init(for:summary:optionsCollections:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Creates an object that represents the App Shortcut with the specified parameters.

## Declaration

```swift
init(for keyPath: ParameterKeyPath, summary: AppShortcutParameterPresentationSummary<Intent, Value, Parameter, ParameterKeyPath>, @AppShortcutOptionsCollectionSpecificationBuilder<Value.UnwrappedType> optionsCollections: () -> some AppShortcutOptionsCollectionSpecification<Value.UnwrappedType>)
```

## Parameters

- `keyPath`: A `KeyPath` representing the parameter being used in the presentation.
- `summary`: Represents the summary of the parameter used in the presentation.
- `optionsCollections`: A closure returning an `AppShortcutOptionsCollectionSpecification` that defines the options available for the parameter used in the presentation.
