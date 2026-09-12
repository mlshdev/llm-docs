> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/papermarkupviewcontroller/adornmentframe(for:)](https://developer.apple.com/documentation/paperkit/papermarkupviewcontroller/adornmentframe(for:))

# adornmentFrame(for:)

**Framework:** PaperKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Returns the current frame of the specified adornment.

## Declaration

```swift
@MainActor @preconcurrency func adornmentFrame(for id: UUID) -> CGRect?
```

## Parameters

- `id`: The ID of the `MarkupAdornment` whose frame you want to retrieve.

<a id="return-value"></a>

## Return Value

The frame of the adornment in the coordinate system of this view controller’s view, or `nil` if the canvas does not display the adornment or cannot determine its frame.

<a id="discussion"></a>

## Discussion

This method calculates the visual frame of an adornment based on its anchor position, image size, attachment point, zoom scale and content offset.

## See Also

### Managing adornments

- [adornments](adornments.md): An array of visual adornments that appear on the markup canvas.
