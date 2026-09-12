> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/assistantschemas/browserenum/clearhistorytimeframe](https://developer.apple.com/documentation/appintents/assistantschemas/browserenum/clearhistorytimeframe)

# clearHistoryTimeFrame

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The time frame for clearing the browser history

## Declaration

```swift
var clearHistoryTimeFrame: some AssistantSchemas.Enum { get }
```

<a id="Overview"></a>

## Overview

Use Swift macros that generate additional properties and add protocol conformance for your app enum implementation. The following example shows an app enum that conforms to the `.browser.clearHistoryTimeFrame` schema:

```swift
@AppEnum(schema: .browser.clearHistoryTimeFrame)
enum ClearHistoryTimeFrame: AppEnum {

    case today
    case lastFourHours
    case todayAndYesterday
    case allTime

    static var caseDisplayRepresentations: [ClearHistoryTimeFrame: DisplayRepresentation] = [
        .today: "Today",
        .lastFourHours: "Last 4 hours",
        .todayAndYesterday: "Today and Yesterday",
        .allTime: "Beginning of time",
    ]

    static var typeDisplayName: LocalizedStringResource = "Clear History Timeframe"
}
```

For more information about the `.browser` app intent domain, see [Browser](../../app-schema-domain-browser.md). For general information about app intent domains, see [Making actions and content discoverable by Apple Intelligence](../../making-actions-and-content-discoverable-by-apple-intelligence.md).
