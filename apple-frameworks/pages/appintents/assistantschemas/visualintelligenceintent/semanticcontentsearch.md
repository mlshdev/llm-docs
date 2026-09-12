> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/assistantschemas/visualintelligenceintent/semanticcontentsearch](https://developer.apple.com/documentation/appintents/assistantschemas/visualintelligenceintent/semanticcontentsearch)

# semanticContentSearch

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The app intent conforms to the schema for visual search functionality.

## Declaration

```swift
var semanticContentSearch: some AssistantSchemas.Intent { get }
```

<a id="Overview"></a>

## Overview

To integrate your app’s functionality with Visual Intelligence you use Swift macros that generate additional properties and add protocol conformance for your app intent implementation.

For more information about the `.visualIntelligence` app intent domain, see [System and in-app search](../../app-schema-domain-system-and-in-app-search.md). For general information about app intent domains, see [Making actions and content discoverable by Apple Intelligence](../../making-actions-and-content-discoverable-by-apple-intelligence.md).

The following example shows an app intent that conforms to the `.visualIntelligence.semanticContentSearch` schema:

```swift
@AppIntent(schema: .visualIntelligence.semanticContentSearch)
struct SemanticContentSearchIntent: AppIntent {
    @Parameter var semanticContent: SemanticContentDescriptor

    func perform() async throws -> some IntentResult {
        return .result()
    }
}
```
