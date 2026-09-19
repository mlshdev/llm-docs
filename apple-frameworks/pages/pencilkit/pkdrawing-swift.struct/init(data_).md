> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/pencilkit/pkdrawing-swift.struct/init(data:)

# init(data:)

**Framework:** PencilKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+

Creates a drawing object and populates it with previously drawn content.

## Declaration

```swift
init(data: Data) throws
```

## Parameters

- `data`: The initial data to add to the canvas. Only specify data you previously obtained from a canvas view.

<a id="discussion"></a>

## Discussion

This initializer creates a new canvas object initialized with the specified data.

## See Also

### Creating a drawing object

- [init(strokes:)](init%28strokes_%29.md): Creates a drawing object and populates it with a sequence of strokes the user provides.
- [init()](init%28%29.md): Creates an empty drawing object.
