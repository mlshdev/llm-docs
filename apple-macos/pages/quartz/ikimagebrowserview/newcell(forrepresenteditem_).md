> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimagebrowserview/newcell(forrepresenteditem:)](https://developer.apple.com/documentation/quartz/ikimagebrowserview/newcell(forrepresenteditem:))

# newCell(forRepresentedItem:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the cell to use for the specified item.

## Declaration

```swift
func newCell(forRepresentedItem anItem: Any!) -> IKImageBrowserCell!
```

## Parameters

- `anItem`: The item that the returned cell will represent.

<a id="return-value"></a>

## Return Value

A new cell.

<a id="Discussion"></a>

## Discussion

Subclasses can override this method to customize the appearance of the cell that will represent `anItem`.

# newCellForRepresentedItem: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the cell to use for the specified item.

## Declaration

```objectivec
- (IKImageBrowserCell *) newCellForRepresentedItem:(id) anItem;
```

## Parameters

- `anItem`: The item that the returned cell will represent.

<a id="return-value"></a>

## Return Value

A new cell.

<a id="Discussion"></a>

## Discussion

Subclasses can override this method to customize the appearance of the cell that will represent `anItem`.
