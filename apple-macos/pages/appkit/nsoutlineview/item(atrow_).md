> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsoutlineview/item(atrow:)

# item(atRow:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the item associated with a given row.

## Declaration

```swift
func item(atRow row: Int) -> Any?
```

## Parameters

- `row`: The index of a row in the receiver.

<a id="return-value"></a>

## Return Value

The item associated with `row`.

## See Also

### Converting Between Items and Rows

- [row(forItem:)](row%28foritem_%29.md): Returns the row associated with a given item.

# itemAtRow: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the item associated with a given row.

## Declaration

```objectivec
- (id) itemAtRow:(NSInteger) row;
```

## Parameters

- `row`: The index of a row in the receiver.

<a id="return-value"></a>

## Return Value

The item associated with `row`.

## See Also

### Converting Between Items and Rows

- [rowForItem:](row%28foritem_%29.md): Returns the row associated with a given item.
