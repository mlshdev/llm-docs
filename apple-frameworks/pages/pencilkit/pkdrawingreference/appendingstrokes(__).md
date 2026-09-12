> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkdrawingreference/appendingstrokes(_:)](https://developer.apple.com/documentation/pencilkit/pkdrawingreference/appendingstrokes(_:))

# appendingStrokes(\_:) (Swift)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Returns a copy of the current drawing with the strokes you provide appended.

## Declaration

```swift
func appendingStrokes(_ strokes: [PKStroke]) -> PKDrawing
```

## Parameters

- `strokes`: An array of strokes to append to this drawing.

<a id="return-value"></a>

## Return Value

A new drawing created by appending the provided strokes to the current drawing.

## See Also

### Modifying the drawing

- [applying(\_:)](applying%28__%29.md): Returns a new drawing object by applying the specified transform to a copy of the current object’s contents.
- [appending(\_:)](appending%28__%29.md): Returns a new drawing created by appending the current drawing with another drawing you provide.

# drawingByAppendingStrokes: (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Returns a copy of the current drawing with the strokes you provide appended.

## Declaration

```objectivec
- (PKDrawing *) drawingByAppendingStrokes:(NSArray<PKStroke *> *) strokes;
```

## Parameters

- `strokes`: An array of strokes to append to this drawing.

<a id="return-value"></a>

## Return Value

A new drawing created by appending the provided strokes to the current drawing.

## See Also

### Modifying the drawing

- [drawingByApplyingTransform:](applying%28__%29.md): Returns a new drawing object by applying the specified transform to a copy of the current object’s contents.
- [drawingByAppendingDrawing:](appending%28__%29.md): Returns a new drawing created by appending the current drawing with another drawing you provide.
