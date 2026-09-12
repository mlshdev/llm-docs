> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/papermarkupviewcontroller/adornments](https://developer.apple.com/documentation/paperkit/papermarkupviewcontroller/adornments)

# adornments

**Framework:** PaperKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

An array of visual adornments that appear on the markup canvas.

## Declaration

```swift
@MainActor @preconcurrency var adornments: [MarkupAdornment] { get set }
```

<a id="discussion"></a>

## Discussion

Adornments are supplementary visual elements you place on the canvas above the primary markup content. You position adornments using anchor points and configure them to respond to interaction, zoom scaling, and movement.

> **Note**

> Adornments are expected to have unique IDs. If two or more adornments have the same ID, the system displays only one.

## See Also

### Managing adornments

- [adornmentFrame(for:)](adornmentframe%28for_%29.md): Returns the current frame of the specified adornment.
