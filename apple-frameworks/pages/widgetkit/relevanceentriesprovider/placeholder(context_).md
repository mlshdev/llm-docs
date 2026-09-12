> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/relevanceentriesprovider/placeholder(context:)](https://developer.apple.com/documentation/widgetkit/relevanceentriesprovider/placeholder(context:))

# placeholder(context:)

**Framework:** WidgetKit  
**Kind:** Instance Method  
**Availability:** watchOS 26.0+

Provides the entry representing a placeholder version of the widget.

## Declaration

```swift
func placeholder(context: Self.Context) -> Self.Entry
```

## Parameters

- `context`: An object describing the context to show the widget in.

<a id="return-value"></a>

## Return Value

A relevance entry that represents a placeholder version of the widget.

## Mentioned In

- [Increasing the visibility of widgets in Smart Stacks](../widget-suggestions-in-smart-stacks.md)

## See Also

### Generating relevance entries

- [entry(configuration:context:)](entry%28configuration_context_%29.md): Provides the entry used to render a widget for a specific relevance configuration.
- [relevance()](relevance%28%29.md): Provides a collection of conditions under which a specific widget could be relevant.
- [RelevanceEntriesProviderContext](../relevanceentriesprovidercontext.md): An object that contains details about how a widget is rendered, including its size.
