> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/intentrecommendation/init(intent:description:)-4epo2](https://developer.apple.com/documentation/widgetkit/intentrecommendation/init(intent:description:)-4epo2)

# init(intent:description:)

**Framework:** WidgetKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 26.0+ · watchOS 9.0+

Creates a recommended configuration for a widget on platforms that don’t offer a dedicated user interface to customize widgets.

## Declaration

```swift
init(intent: T, description: Text)
```

## Parameters

- `intent`: The intent that represents the recommended configuration.
- `description`: A description that helps the user understand the value of the preconfigured configuration option. For example, if the configuration represents a location in a weather app, the description may be the name of one of the user’s favorite cities, such as `Cupertino`.

<a id="discussion"></a>

## Discussion

> **Note**

> On platforms that offer a dedicated user interface for configuring widgets — for example, iOS or macOS — `IntentRecommendation` is inactive.

## See Also

### Creating a Recommended Widget Configuration

- [init(intent:description:)](init%28intent_description_%29-1zh33.md): Creates a recommended configuration for a widget on platforms that don’t offer a dedicated user interface to customize widgets with a localized description.
- [init(intent:description:)](init%28intent_description_%29-6v7dj.md): Creates a recommended configuration for a widget on platforms that don’t offer a dedicated user interface to customize widgets.
