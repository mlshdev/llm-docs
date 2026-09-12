> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/range(of:at:)-1wrcp](https://developer.apple.com/documentation/foundation/nsattributedstring/range(of:at:)-1wrcp)

# range(of:at:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns the range of the individual text block that contains the specified location.

## Declaration

```swift
func range(of block: NSTextBlock, at location: Int) -> NSRange
```

## Parameters

- `block`: The text block.
- `location`: The location in the text block.

<a id="return-value"></a>

## Return Value

The range of the text block containing the location.

## See Also

### Calculating ranges for common elements

- [itemNumber(in:at:)](itemnumber%28in_at_%29.md): Returns the index of the item at the specified location within the list.
- [range(of:at:)](range%28of_at_%29-6um0x.md): Returns the range of the specified text list that contains the specified location.
- [range(of:at:)](range%28of_at_%29-3fevu.md): Returns the range of the specified text table that contains the specified location.

# rangeOfTextBlock:atIndex: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns the range of the individual text block that contains the specified location.

## Declaration

```objectivec
- (NSRange) rangeOfTextBlock:(NSTextBlock *) block atIndex:(NSUInteger) location;
```

## Parameters

- `block`: The text block.
- `location`: The location in the text block.

<a id="return-value"></a>

## Return Value

The range of the text block containing the location.

## See Also

### Calculating ranges for common elements

- [itemNumberInTextList:atIndex:](itemnumber%28in_at_%29.md): Returns the index of the item at the specified location within the list.
- [rangeOfTextList:atIndex:](range%28of_at_%29-6um0x.md): Returns the range of the specified text list that contains the specified location.
- [rangeOfTextTable:atIndex:](range%28of_at_%29-3fevu.md): Returns the range of the specified text table that contains the specified location.
