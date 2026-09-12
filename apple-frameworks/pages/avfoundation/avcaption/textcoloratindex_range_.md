> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaption/textcoloratindex:range:](https://developer.apple.com/documentation/avfoundation/avcaption/textcoloratindex:range:)

# textColorAtIndex:range:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS

Returns the text color at the index position.

## Declaration

```objectivec
- (CGColorRef) textColorAtIndex:(NSInteger) index range:(NSRange *) outRange;
```

## Parameters

- `index`: A character position in the caption text.
- `outRange`: A pointer that stores the range to which the returned text color applies.

<a id="return-value"></a>

## Return Value

The text color.

## See Also

### Accessing colors

- [backgroundColorAtIndex:range:](backgroundcoloratindex_range_.md): Returns the background color at the index position.
