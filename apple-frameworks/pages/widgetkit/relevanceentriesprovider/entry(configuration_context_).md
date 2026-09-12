> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/relevanceentriesprovider/entry(configuration:context:)](https://developer.apple.com/documentation/widgetkit/relevanceentriesprovider/entry(configuration:context:))

# entry(configuration:context:)

**Framework:** WidgetKit  
**Kind:** Instance Method  
**Availability:** watchOS 26.0+

Provides the entry used to render a widget for a specific relevance configuration.

## Declaration

```swift
func entry(configuration: Self.Configuration, context: Self.Context) async throws -> Self.Entry
```

## Parameters

- `configuration`: The configuration for when this widget is relevant.
- `context`: An object describing the context to show the widget in.

<a id="return-value"></a>

## Return Value

A relevance entry representing the widget in this configuration.

## Mentioned In

- [Increasing the visibility of widgets in Smart Stacks](../widget-suggestions-in-smart-stacks.md)

## See Also

### Generating relevance entries

- [relevance()](relevance%28%29.md): Provides a collection of conditions under which a specific widget could be relevant.
- [placeholder(context:)](placeholder%28context_%29.md): Provides the entry representing a placeholder version of the widget.
- [RelevanceEntriesProviderContext](../relevanceentriesprovidercontext.md): An object that contains details about how a widget is rendered, including its size.
