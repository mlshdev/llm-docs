> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/widgetkit/widgetrelevance/init(_:)

# init(\_:)

**Framework:** WidgetKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 26.0+ · watchOS 11.0+

Creates a type collecting the relevances for a widget kind.

## Declaration

```swift
init(_ attributes: [WidgetRelevanceAttribute<Configuration>])
```

## Parameters

- `attributes`: A collection of `WidgetRelevanceAttribute` describing when this type of widget could be relevant.
