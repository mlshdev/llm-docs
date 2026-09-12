> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentfile/availablecontenttypes](https://developer.apple.com/documentation/appintents/intentfile/availablecontenttypes)

# availableContentTypes

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Valid content types the `IntentFile` can possibly be converted to.

## Declaration

```swift
var availableContentTypes: [UTType] { get }
```

<a id="discussion"></a>

## Discussion

Use these content types to request an `IntentFile` representation as either a file url or data.
