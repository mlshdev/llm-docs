> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkdrawingreference/appending(_:)](https://developer.apple.com/documentation/pencilkit/pkdrawingreference/appending(_:))

# appending(\_:) (Swift)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Returns a new drawing created by appending the current drawing with another drawing you provide.

## Declaration

```swift
func appending(_ drawing: PKDrawing) -> PKDrawing
```

## Parameters

- `drawing`: A drawing object that contains additional content.

<a id="return-value"></a>

## Return Value

A new drawing created by merging the content from the current object with the content in the `drawing` parameter.

## See Also

### Modifying the drawing

- [applying(\_:)](applying%28__%29.md): Returns a new drawing object by applying the specified transform to a copy of the current object’s contents.
- [appendingStrokes(\_:)](appendingstrokes%28__%29.md): Returns a copy of the current drawing with the strokes you provide appended.

# drawingByAppendingDrawing: (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Returns a new drawing created by appending the current drawing with another drawing you provide.

## Declaration

```objectivec
- (PKDrawing *) drawingByAppendingDrawing:(PKDrawing *) drawing;
```

## Parameters

- `drawing`: A drawing object that contains additional content.

<a id="return-value"></a>

## Return Value

A new drawing created by merging the content from the current object with the content in the `drawing` parameter.

## See Also

### Modifying the drawing

- [drawingByApplyingTransform:](applying%28__%29.md): Returns a new drawing object by applying the specified transform to a copy of the current object’s contents.
- [drawingByAppendingStrokes:](appendingstrokes%28__%29.md): Returns a copy of the current drawing with the strokes you provide appended.
