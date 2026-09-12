> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubber/itemviewforitem(at:)](https://developer.apple.com/documentation/appkit/nsscrubber/itemviewforitem(at:))

# itemViewForItem(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Returns the view for the item at the specified index.

## Declaration

```swift
func itemViewForItem(at index: Int) -> NSScrubberItemView?
```

## Parameters

- `index`: The index of the item whose view you want.

<a id="return-value"></a>

## Return Value

The view for the specified index or `nil` if the item is not currently visible.

# itemViewForItemAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Returns the view for the item at the specified index.

## Declaration

```objectivec
- (NSScrubberItemView *) itemViewForItemAtIndex:(NSInteger) index;
```

## Parameters

- `index`: The index of the item whose view you want.

<a id="return-value"></a>

## Return Value

The view for the specified index or `nil` if the item is not currently visible.
