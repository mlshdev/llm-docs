> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkdrawing-swift.struct/appending(_:)](https://developer.apple.com/documentation/pencilkit/pkdrawing-swift.struct/appending(_:))

# appending(\_:)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+

Returns a new drawing created by appending the current drawing with another drawing you provide.

## Declaration

```swift
func appending(_ toAppend: PKDrawing) -> PKDrawing
```

## Parameters

- `toAppend`: A drawing object that contains additional content.

<a id="return-value"></a>

## Return Value

A new drawing created by merging the content from the current object with the content in the drawing parameter.

## See Also

### Modifying the drawing

- [transform(using:)](transform%28using_%29.md): Applies the specified transform to the contents of this drawing.
- [transformed(using:)](transformed%28using_%29.md): Applies the specified transform and returns a new drawing.
- [append(\_:)](append%28__%29.md): Appends the contents of the specified drawing object to an existing drawing object that you provide.
