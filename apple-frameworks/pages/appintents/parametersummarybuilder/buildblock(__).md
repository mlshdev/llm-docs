> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/parametersummarybuilder/buildblock(_:)](https://developer.apple.com/documentation/appintents/parametersummarybuilder/buildblock(_:))

# buildBlock(\_:)

**Framework:** App Intents  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

## Declaration

```swift
static func buildBlock<Summary>(_ block: Summary) -> Summary where Intent == Summary.Intent, Summary : ParameterSummary
```
