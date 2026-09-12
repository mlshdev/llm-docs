> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/range(of:at:)-3fevu](https://developer.apple.com/documentation/foundation/nsattributedstring/range(of:at:)-3fevu)

# range(of:at:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns the range of the specified text table that contains the specified location.

## Declaration

```swift
func range(of table: NSTextTable, at location: Int) -> NSRange
```

## Parameters

- `table`: The text table.
- `location`: The location.

<a id="return-value"></a>

## Return Value

Returns the range of `table` that contains `location`.

## See Also

### Calculating ranges for common elements

- [itemNumber(in:at:)](itemnumber%28in_at_%29.md): Returns the index of the item at the specified location within the list.
- [range(of:at:)](range%28of_at_%29-1wrcp.md): Returns the range of the individual text block that contains the specified location.
- [range(of:at:)](range%28of_at_%29-6um0x.md): Returns the range of the specified text list that contains the specified location.

# rangeOfTextTable:atIndex: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns the range of the specified text table that contains the specified location.

## Declaration

```objectivec
- (NSRange) rangeOfTextTable:(NSTextTable *) table atIndex:(NSUInteger) location;
```

## Parameters

- `table`: The text table.
- `location`: The location.

<a id="return-value"></a>

## Return Value

Returns the range of `table` that contains `location`.

## See Also

### Calculating ranges for common elements

- [itemNumberInTextList:atIndex:](itemnumber%28in_at_%29.md): Returns the index of the item at the specified location within the list.
- [rangeOfTextBlock:atIndex:](range%28of_at_%29-1wrcp.md): Returns the range of the individual text block that contains the specified location.
- [rangeOfTextList:atIndex:](range%28of_at_%29-6um0x.md): Returns the range of the specified text list that contains the specified location.
