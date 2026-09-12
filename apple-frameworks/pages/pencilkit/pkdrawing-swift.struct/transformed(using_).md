> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkdrawing-swift.struct/transformed(using:)](https://developer.apple.com/documentation/pencilkit/pkdrawing-swift.struct/transformed(using:))

# transformed(using:)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+

Applies the specified transform and returns a new drawing.

## Declaration

```swift
func transformed(using transform: CGAffineTransform) -> PKDrawing
```

## Parameters

- `transform`: The [CGAffineTransform](../../corefoundation/cgaffinetransform.md) to apply to the contents of this drawing.

<a id="return-value"></a>

## Return Value

A new drawing with the provided `transform` applied.

## See Also

### Modifying the drawing

- [transform(using:)](transform%28using_%29.md): Applies the specified transform to the contents of this drawing.
- [append(\_:)](append%28__%29.md): Appends the contents of the specified drawing object to an existing drawing object that you provide.
- [appending(\_:)](appending%28__%29.md): Returns a new drawing created by appending the current drawing with another drawing you provide.
