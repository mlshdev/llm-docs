> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/itemnumber(in:at:)](https://developer.apple.com/documentation/foundation/nsattributedstring/itemnumber(in:at:))

# itemNumber(in:at:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns the index of the item at the specified location within the list.

## Declaration

```swift
func itemNumber(in list: NSTextList, at location: Int) -> Int
```

## Parameters

- `list`: The text list.
- `location`: The location of the item.

<a id="return-value"></a>

## Return Value

Returns the index within the list.

## See Also

### Calculating ranges for common elements

- [range(of:at:)](range%28of_at_%29-1wrcp.md): Returns the range of the individual text block that contains the specified location.
- [range(of:at:)](range%28of_at_%29-6um0x.md): Returns the range of the specified text list that contains the specified location.
- [range(of:at:)](range%28of_at_%29-3fevu.md): Returns the range of the specified text table that contains the specified location.

# itemNumberInTextList:atIndex: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns the index of the item at the specified location within the list.

## Declaration

```objectivec
- (NSInteger) itemNumberInTextList:(NSTextList *) list atIndex:(NSUInteger) location;
```

## Parameters

- `list`: The text list.
- `location`: The location of the item.

<a id="return-value"></a>

## Return Value

Returns the index within the list.

## See Also

### Calculating ranges for common elements

- [rangeOfTextBlock:atIndex:](range%28of_at_%29-1wrcp.md): Returns the range of the individual text block that contains the specified location.
- [rangeOfTextList:atIndex:](range%28of_at_%29-6um0x.md): Returns the range of the specified text list that contains the specified location.
- [rangeOfTextTable:atIndex:](range%28of_at_%29-3fevu.md): Returns the range of the specified text table that contains the specified location.
