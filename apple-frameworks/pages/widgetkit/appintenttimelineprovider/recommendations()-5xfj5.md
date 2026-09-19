> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/widgetkit/appintenttimelineprovider/recommendations()-5xfj5

# recommendations()

**Framework:** WidgetKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 26.0+

Returns a set of intent recommendations you use to offer pre-configured widgets on platforms that don’t offer a dedicated user interface for customizing widget intents.

## Declaration

```swift
func recommendations() -> [AppIntentRecommendation<Self.Intent>]
```
