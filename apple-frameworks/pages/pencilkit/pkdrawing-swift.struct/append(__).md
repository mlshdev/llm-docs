> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkdrawing-swift.struct/append(_:)](https://developer.apple.com/documentation/pencilkit/pkdrawing-swift.struct/append(_:))

# append(\_:)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+

Appends the contents of the specified drawing object to an existing drawing object that you provide.

## Declaration

```swift
mutating func append(_ toAppend: PKDrawing)
```

## Parameters

- `toAppend`: A drawing object that contains additional content.

## See Also

### Modifying the drawing

- [transform(using:)](transform%28using_%29.md): Applies the specified transform to the contents of this drawing.
- [transformed(using:)](transformed%28using_%29.md): Applies the specified transform and returns a new drawing.
- [appending(\_:)](appending%28__%29.md): Returns a new drawing created by appending the current drawing with another drawing you provide.
