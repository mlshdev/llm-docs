> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/widgetcenter/invalidateconfigurationrecommendations()](https://developer.apple.com/documentation/widgetkit/widgetcenter/invalidateconfigurationrecommendations())

# invalidateConfigurationRecommendations()

**Framework:** WidgetKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 26.0+ · watchOS 9.0+

Invalidates and refreshes the preconfigured intent configurations for user-customizable widgets.

## Declaration

```swift
func invalidateConfigurationRecommendations()
```

## Mentioned In

- [Making a configurable widget](../making-a-configurable-widget.md)

<a id="discussion"></a>

## Discussion

In watchOS, call this function when your app receives new data for preconfigured widgets you’d like to appear in the list of available watch complications.

> **Note**

> On platforms that offer a dedicated user interface for configuring widgets — for example, iOS or macOS — `invalidateConfigurationRecommendations()` is inactive.
