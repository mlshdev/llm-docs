> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/clockkit/clkcomplicationtemplate/previewcontext(facecolor:)

# previewContext(faceColor:)

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+ (deprecated in 27.2)

Returns a view that Xcode can display as a preview.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
func previewContext(faceColor: CLKComplicationTemplate.PreviewFaceColor = .multicolor) -> some View

```

## Parameters

- `faceColor`: The tint color for the face. If you omit this parameter, it defaults to a full-color face. For a list of valid face colors, see [CLKComplicationTemplate.PreviewFaceColor](previewfacecolor.md).

## See Also

### Displaying Previews

- [CLKComplicationTemplate.PreviewFaceColor](previewfacecolor.md): Deprecated. The valid face colors for complication templates.
