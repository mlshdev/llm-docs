> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/relevanceentriesprovider/relevance()](https://developer.apple.com/documentation/widgetkit/relevanceentriesprovider/relevance())

# relevance()

**Framework:** WidgetKit  
**Kind:** Instance Method  
**Availability:** watchOS 26.0+

Provides a collection of conditions under which a specific widget could be relevant.

## Declaration

```swift
func relevance() async -> WidgetRelevance<Self.Configuration>
```

## Mentioned In

- [Increasing the visibility of widgets in Smart Stacks](../widget-suggestions-in-smart-stacks.md)

<a id="discussion"></a>

## Discussion

The system can use the relevance to show this widget when the conditions for the relevance match the current state.

## See Also

### Generating relevance entries

- [entry(configuration:context:)](entry%28configuration_context_%29.md): Provides the entry used to render a widget for a specific relevance configuration.
- [placeholder(context:)](placeholder%28context_%29.md): Provides the entry representing a placeholder version of the widget.
- [RelevanceEntriesProviderContext](../relevanceentriesprovidercontext.md): An object that contains details about how a widget is rendered, including its size.
