> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkdrawingreference/applying(_:)](https://developer.apple.com/documentation/pencilkit/pkdrawingreference/applying(_:))

# applying(\_:) (Swift)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Returns a new drawing object by applying the specified transform to a copy of the current object’s contents.

## Declaration

```swift
func applying(_ transform: CGAffineTransform) -> PKDrawing
```

## Parameters

- `transform`: The transform to apply to the drawing.

<a id="return-value"></a>

## Return Value

A new drawing created by applying the specified `transform` to the current object.

## See Also

### Modifying the drawing

- [appendingStrokes(\_:)](appendingstrokes%28__%29.md): Returns a copy of the current drawing with the strokes you provide appended.
- [appending(\_:)](appending%28__%29.md): Returns a new drawing created by appending the current drawing with another drawing you provide.

# drawingByApplyingTransform: (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Returns a new drawing object by applying the specified transform to a copy of the current object’s contents.

## Declaration

```objectivec
- (PKDrawing *) drawingByApplyingTransform:(CGAffineTransform) transform;
```

## Parameters

- `transform`: The transform to apply to the drawing.

<a id="return-value"></a>

## Return Value

A new drawing created by applying the specified `transform` to the current object.

## See Also

### Modifying the drawing

- [drawingByAppendingStrokes:](appendingstrokes%28__%29.md): Returns a copy of the current drawing with the strokes you provide appended.
- [drawingByAppendingDrawing:](appending%28__%29.md): Returns a new drawing created by appending the current drawing with another drawing you provide.
