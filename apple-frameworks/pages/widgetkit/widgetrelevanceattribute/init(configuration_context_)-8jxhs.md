> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/widgetrelevanceattribute/init(configuration:context:)-8jxhs](https://developer.apple.com/documentation/widgetkit/widgetrelevanceattribute/init(configuration:context:)-8jxhs)

# init(configuration:context:)

**Framework:** WidgetKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 26.0+ · watchOS 11.0+

Creates a new widget relevance for a specific configuration that is relevant in a specific context.

## Declaration

```swift
init(configuration: Configuration, context: RelevantContext)
```

## Parameters

- `configuration`: The specific configuration
- `context`: The relevant context where this widget is relevant.

<a id="discussion"></a>

## Discussion

For example, a weather widget could specify that a configuration for a specific location is relevant for a the relevant context at that specific location.
