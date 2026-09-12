> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineview/row(foritem:)](https://developer.apple.com/documentation/appkit/nsoutlineview/row(foritem:))

# row(forItem:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the row associated with a given item.

## Declaration

```swift
func row(forItem item: Any?) -> Int
```

## Parameters

- `item`: An item in the receiver.

<a id="return-value"></a>

## Return Value

The row associated with `item`, or `–1` if `item` is `nil` or cannot be found.

## See Also

### Converting Between Items and Rows

- [item(atRow:)](item%28atrow_%29.md): Returns the item associated with a given row.

# rowForItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the row associated with a given item.

## Declaration

```objectivec
- (NSInteger) rowForItem:(id) item;
```

## Parameters

- `item`: An item in the receiver.

<a id="return-value"></a>

## Return Value

The row associated with `item`, or `–1` if `item` is `nil` or cannot be found.

## See Also

### Converting Between Items and Rows

- [itemAtRow:](item%28atrow_%29.md): Returns the item associated with a given row.
