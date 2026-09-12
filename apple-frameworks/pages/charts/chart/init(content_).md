> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/chart/init(content:)](https://developer.apple.com/documentation/charts/chart/init(content:))

# init(content:)

**Framework:** Swift Charts  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a chart composed of any number of data series and individual marks.

## Declaration

```swift
nonisolated init(@ContentBuilder content: () -> Content)
```

## Parameters

- `content`: A chart content builder that returns the marks that the chart should draw.

<a id="discussion"></a>

## Discussion

This initializer draws the marks that you specify in the `content` input. You can provide individual marks, or marks produced by one or more [ForEach](https://developer.apple.com/documentation/swiftui/foreach) constructs, or any combination of these. As a convenience when you have exactly one `ForEach` in your chart’s content, you can use either the [init(\_:content:)](init%28__content_%29.md) or [init(\_:id:content:)](init%28__id_content_%29.md) initializer instead, either of which wraps the content in an implicit `ForEach`.

## See Also

### Creating a chart

- [init(\_:content:)](init%28__content_%29.md): Creates a chart composed of a series of identifiable marks.
- [init(\_:id:content:)](init%28__id_content_%29.md): Creates a chart composed of a series of marks.
