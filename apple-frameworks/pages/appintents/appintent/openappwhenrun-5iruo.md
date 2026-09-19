> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/appintent/openappwhenrun-5iruo

# openAppWhenRun

**Framework:** App Intents  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A Boolean value that defines the presentation style for the intent.

## Declaration

```swift
static var openAppWhenRun: Bool { get }
```

<a id="discussion"></a>

## Discussion

By default, the start workout intents set their `openAppWhenRun` property to `true`. To ensure these intents run as expected, don’t change the property’s value.
