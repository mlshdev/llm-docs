> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkdrawing-swift.struct/transform(using:)](https://developer.apple.com/documentation/pencilkit/pkdrawing-swift.struct/transform(using:))

# transform(using:)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+

Applies the specified transform to the contents of this drawing.

## Declaration

```swift
mutating func transform(using transform: CGAffineTransform)
```

## Parameters

- `transform`: The [CGAffineTransform](../../corefoundation/cgaffinetransform.md) to apply when transforming the contents of this drawing.

## See Also

### Modifying the drawing

- [transformed(using:)](transformed%28using_%29.md): Applies the specified transform and returns a new drawing.
- [append(\_:)](append%28__%29.md): Appends the contents of the specified drawing object to an existing drawing object that you provide.
- [appending(\_:)](appending%28__%29.md): Returns a new drawing created by appending the current drawing with another drawing you provide.
