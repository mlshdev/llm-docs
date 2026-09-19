> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/appshortcutparameterpresentationsummary/init(_:table:)

# init(\_:table:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Initializes a presentation summary with the specified parameters.

## Declaration

```swift
init(_ summaryString: AppShortcutParameterPresentationSummaryString<Intent, Value, Parameter, ParameterKeyPath>, table: StaticString? = nil)
```

## Parameters

- `summaryString`: Represents the summary of the [AppShortcutParameterPresentation](../appshortcutparameterpresentation.md). Example: “Call (.$person)”.
- `table`: An optional `StaticString` representing the table to use when localizing the summary.
