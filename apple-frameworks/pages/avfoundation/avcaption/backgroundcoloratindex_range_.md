> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaption/backgroundcoloratindex:range:](https://developer.apple.com/documentation/avfoundation/avcaption/backgroundcoloratindex:range:)

# backgroundColorAtIndex:range:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS

Returns the background color at the index position.

## Declaration

```objectivec
- (CGColorRef) backgroundColorAtIndex:(NSInteger) index range:(NSRange *) outRange;
```

## Parameters

- `index`: A character position in the caption text.
- `outRange`: A pointer that stores the range to which the returned background color applies.

<a id="return-value"></a>

## Return Value

The background color.

## See Also

### Accessing colors

- [textColorAtIndex:range:](textcoloratindex_range_.md): Returns the text color at the index position.
