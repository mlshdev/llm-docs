> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaption/backgroundcolor(at:)](https://developer.apple.com/documentation/avfoundation/avcaption/backgroundcolor(at:))

# backgroundColor(at:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Returns the background color at the index position.

## Declaration

```swift
@nonobjc func backgroundColor(at index: String.Index) -> (CGColor?, Range<String.Index>)
```

## Parameters

- `index`: A character position in the caption text.

<a id="return-value"></a>

## Return Value

A tuple that contains the background color and range to which it applies.

## See Also

### Accessing colors

- [textColor(at:)](textcolor%28at_%29.md): Returns the text color at the index position.
